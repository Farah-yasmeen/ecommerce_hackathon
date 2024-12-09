"use client";
import Image from "next/image";
import Link from "next/link";
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-black">
          Bandage
        </h3>

        {/* Navigation Links */}
        <ul className="flex gap-6 font-Montserrat font-semibold text-[14px] text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Login & Icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src={user} alt="user" width={16} height={16} />
            <Link href="/login" className="text-[#23A6F0] font-Montserrat text-[14px] font-semibold">
              Login / Register
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Image src={search} alt="search" width={16} height={16} />
            </li>
            <li>
              <Image src={cart} alt="cart" width={16} height={16} />
            </li>
            <li>
              <Image src={mail} alt="mail" width={16} height={16} />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-4 bg-white">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-black">
          Bandage
        </h3>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="flex flex-col gap-1">
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-gray-100 w-full p-4`}
      >
        <ul className="flex flex-col gap-4 items-center text-gray-700 font-Montserrat font-semibold text-[14px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="mt-4 text-gray-500 font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </nav>
  );
}
