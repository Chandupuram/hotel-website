"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { hotel } from "@/data/hotel";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
  }`;

  const linkClass = (href: string) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    const base = "text-sm font-medium uppercase tracking-wider transition-colors duration-200";
    if (isScrolled) {
      return `${base} ${isActive ? "text-secondary" : "text-primary hover:text-secondary"}`;
    }
    // Transparent mode usually looks better with white text if over image, but we'll adapt.
    return `${base} ${isActive ? "text-secondary" : "text-primary md:text-white hover:text-secondary"}`;
  };

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`font-serif font-bold text-2xl tracking-widest ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
                {hotel.name.toUpperCase()}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`px-5 py-2 border text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                isScrolled 
                  ? "border-primary text-primary hover:bg-primary hover:text-white" 
                  : "border-white text-primary md:text-white hover:bg-white hover:text-primary"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-primary" : "text-primary"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full border-t">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium ${
                    isActive ? "text-secondary bg-gray-50" : "text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
