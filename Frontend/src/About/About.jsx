import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <div className="min-h-screen  bg-cover bg-center" 
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/seascape-abstraction-with-beach-blur-background_599391-659.jpg')" }} >
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20'>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="flex justify-center mb-10">
            <h1 className="text-5xl font-bold text-pink-600">ABOUT US</h1>
          </div>
          <p className="text-lg text-gray-700 mb-6 text-center px-4">
            Welcome to Gyaan Dweep, a literary oasis owned by NG Industries Ltd, where we celebrate the joy of reading and the transformative power of books. 
            Our mission is to create a vibrant community for book lovers, offering a diverse collection that caters to every taste and age.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center px-4">
            At Gyaan Dweep, we believe that every book is a gateway to knowledge, adventure, and imagination. From bestsellers to hidden gems, our carefully curated selection ensures there's something for everyone. 
            Our friendly staff is passionate about literature and is always ready to help you find your next favorite read. 
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center px-4">
            Join us in our journey to inspire minds and foster a love for books in every corner of our community!
          </p>
          
          {/* Call to Action Section */}
          <div className="mt-8 p-6 bg-pink-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-600">Get Involved!</h2>
            <p className="text-gray-700 mb-4">
              Want to join our community of book lovers? Sign up for our newsletter to stay updated on new arrivals, events, and exclusive offers!
            </p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
