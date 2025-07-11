// import mongoose from "mongoose";

// const bookSchema = mongoose.Schema({
//   name:String ,
//   price: Number,
//   category: String,
//   image : String ,
//   title:String ,

// });
// const Book = mongoose.model("Book",bookSchema);
// export default Book;

import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  authors: [String],
  thumbnail: String,
  publishedDate: String,
  description: String,
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
