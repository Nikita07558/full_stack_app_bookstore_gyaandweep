import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
    <div 
        className="min-h-screen  bg-cover bg-center" 
        style={{ backgroundImage: "url('https://th.bing.com/th/id/R.4b985f3033a328f7b4a0a4b4b45b68f7?rik=YIv3bJ%2fdCcPTGQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fQJ0trsu.jpg&ehk=cWf%2f4f6A8jJ1IabgBUIjSY55fIhZxce3VjKknTua5Lk%3d&risl=&pid=ImgRaw&r=0')" }} // Update the path to your image
      >
      <div>
        <Navbar />
      </div>
      <div className='text-5xl flex justify-center py-14'>
        <h1 className='text-green-700 font-bold'>CONTACT US</h1>
      </div>
      <div className='flex flex-col items-center px-3'>
        <div className='mb-10 text-lg text-gray-700 text-center'>
          <p>If you have any questions or inquiries, feel free to reach out to us!</p>
          <br />
          <p>
            <strong>Name:</strong> Nikita Gautam
          </p>
          
          <p>
            <strong>Phone:</strong> 7717381611
          </p>
         
          <p>
            <strong>Address:</strong> Chandigarh, India
          </p>
          <p>
            <strong>BookStore:</strong> Gyaan Dweep
          </p>
          <p>
            <strong>Company:</strong> NG Industries Ltd
          </p>
        </div>

        <div className='bg-gray-100 rounded-lg p-6 shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-green-700 mb-4'>Get in Touch</h2>
          <form>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor='name'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor='email'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor='message'>
                Your Message
              </label>
              <textarea
                id='message'
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                rows='4'
                placeholder='Type your message here...'
                required
              ></textarea>
            </div>
            <button 
              type='submit'
              className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'
            >
           <Link to='/' >
              Send Message
              </Link>
            </button>
          </form>
        </div>
      </div>
      <br />
      <div>
        <Footer />
      </div>
      </div>
    </>
  );
}

export default Contact;
