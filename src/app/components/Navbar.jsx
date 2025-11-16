"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg"; // Your logo
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="absolute top-2 left-2 w-full z-50">
      <div className=" w-[50%] md:w-[420px] h-[50px] flex items-center gap-5 p-6 bg-background rounded-tl-[80px] rounded-br-[100px] rounded-bl-[-80px]">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Signature Logo" width={81} height={24} />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-secondary font-body font-[400] text-[14px]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 w-full absolute top-full left-0">
          <div className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-secondary font-body font-[400] text-[14px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
