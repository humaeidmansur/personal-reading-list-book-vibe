import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/book.ico";

const Nav = () => {
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="./">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listed-book">Listed Books</Link>
              </li>
             <li><Link href="/pages-to-read">Pages to Read</Link></li> 
            </ul>
          </div>

          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Book Vibe Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="btn btn-ghost text-xl">Book Vibe</span>
          </Link>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            <li>
              <Link href="/listed-book">Listed Books</Link>
            </li>
            <li>
              <Link href="/pages-to-read">Pages to Read</Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex-nowrap gap-1 sm:gap-2">
          <button className="btn btn-xs sm:btn-sm lg:btn-md btn-success px-2 sm:px-3 lg:px-4 text-white">
            Sign In
          </button>

          <button className="btn btn-xs sm:btn-sm lg:btn-md btn-error px-2 sm:px-3 lg:px-4 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
