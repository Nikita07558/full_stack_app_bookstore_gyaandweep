import axios from "axios";
import Book from "../model/book.model.js"; // Only used for saveBook (optional)

// 🔹 GET books from Google Books API
export const getBook = async (req, res) => {
  try {
    const query = req.query.q || "harry potter"; // Default query
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);

    const books = response.data.items.map(item => {
      const info = item.volumeInfo;
      const sale = item.saleInfo;

      return {
        title: info.title,
        authors: info.authors || [],
        thumbnail: info.imageLinks?.thumbnail || "",
        publishedDate: info.publishedDate || "",
        description: info.description || "",
        buyLink: sale?.buyLink || null, // ✅ Include buy link if available
      };
    });

    res.status(200).json(books);
  } catch (error) {
    console.error("❌ Error fetching books:", error.message);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

// 🔸 POST book to save in DB (optional, not used in your current app)
export const saveBook = async (req, res) => {
  try {
    const { title, authors, thumbnail, publishedDate, description } = req.body;

    const newBook = new Book({
      title,
      authors,
      thumbnail,
      publishedDate,
      description,
    });

    await newBook.save();
    res.status(201).json({ message: "Book saved" });
  } catch (error) {
    console.error("❌ Error saving book:", error.message);
    res.status(500).json({ message: "Failed to save book" });
  }
};
