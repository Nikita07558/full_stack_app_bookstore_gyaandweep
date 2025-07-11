// 📂 src/components/Course.jsx
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

function Course() {
  const [searchTerm, setSearchTerm] = useState('');
  const [book, setBook] = useState([]);
  const [authUser] = useAuth();

  const handleSearch = async () => {
    if (!authUser) {
      alert('Please sign up or log in to search books.');
      return;
    }
    try {
      const res = await axios.get(`http://localhost:4001/book?q=${searchTerm}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authUser) {
      const getBook = async () => {
        try {
          const res = await axios.get('http://localhost:4001/book');
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }
  }, [authUser]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you <span className="text-pink-500">Here!</span>
          </h1>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Search books..."
              className="border px-4 py-2 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="ml-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
            >
              Search
            </button>
          </div>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {book.map((item, idx) => (
            <Cards key={idx} item={item} showFullDescriptionButton={true} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;