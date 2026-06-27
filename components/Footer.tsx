import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { hotel } from "@/data/hotel";
import { Container } from "./ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif font-bold text-2xl tracking-widest text-white">
                {hotel.name.toUpperCase()}
              </span>
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              {hotel.description.substring(0, 120)}...
            </p>
            <div className="flex space-x-4">
              <a href={hotel.socials.facebook} className="text-gray-400 hover:text-secondary transition-colors font-medium">
                Facebook
              </a>
              <a href={hotel.socials.instagram} className="text-gray-400 hover:text-secondary transition-colors font-medium">
                Instagram
              </a>
              <a href={hotel.socials.twitter} className="text-gray-400 hover:text-secondary transition-colors font-medium">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-secondary transition-colors">Our Rooms</Link></li>
              <li><Link href="/facilities" className="hover:text-secondary transition-colors">Facilities</Link></li>
              <li><Link href="/restaurant" className="hover:text-secondary transition-colors">Restaurant</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-secondary flex-shrink-0 mt-1" />
                <span>{hotel.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-secondary flex-shrink-0" />
                <span>{hotel.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-secondary flex-shrink-0" />
                <span>{hotel.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Dummy) */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 px-4 py-2 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
              />
              <button type="button" className="bg-secondary text-primary font-medium px-4 py-2 text-sm hover:bg-secondary-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {hotel.name}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
