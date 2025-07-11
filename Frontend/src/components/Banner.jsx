import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Banner() {
  const navigate = useNavigate();
  const [authUser] = useAuth();
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }

    toast.success(`Hi ${name}! ${authUser ? "Explore our Book section!" : "Please Sign up to get started."}`, {
      duration: 4000,
    });

    setTimeout(() => {
      navigate(authUser ? '/course' : '/signup');
    }, 2000);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-10">
            <h1 className="text-5xl font-bold">
              Hi, Welcome to <span className="text-pink-500">Gyaan ki pathshala!!</span>
            </h1>
            <p className="text-xl font-bold">
              Discover your next great read, where every book opens a world of endless possibilities.
              <span className="text-pink-500"> Explore, imagine, and dive </span> into stories that inspire!
            </p>

            {/* Name Input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M3 5a5 5 0 1 1 10 0v1a5 5 0 1 1-10 0V5z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <button onClick={handleStart} className="btn mt-6 btn-secondary">
              Let's Start
            </button>
          </div>
        </div>

        <div className="w-full order-1 md:w-1/2">
          <img src="/Banner2.jpg" className="px-10 w-170 h-55" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
