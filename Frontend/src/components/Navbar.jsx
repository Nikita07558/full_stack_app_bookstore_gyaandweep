import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Books</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? 'shadow-md bg-base-200 duration-300' : ''}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">Gyaan Dweep</a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>

          {/* Theme toggle */}
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="cursor-pointer">
            {theme === 'light' ? (
              <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 4V2M12 22v-2M4.22 4.22L2.81 2.81M21.19 21.19l-1.41-1.41M4 12H2m20 0h-2M4.22 19.78l-1.41 1.41M21.19 2.81l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            ) : (
              <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.79 3.515-8.772 8.165-9.682a1 1 0 01.923 1.58A7.496 7.496 0 0014.5 16.5a7.5 7.5 0 007.252-1.498z" />
              </svg>
            )}
          </button>

          {/* Login/Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
