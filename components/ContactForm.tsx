"use client";

import React from "react";
import { Button } from "./ui/Button";
import { hotel } from "@/data/hotel";

export function ContactForm() {

  // We will use FormSubmit to handle the form without a backend.
  // It uses the email specified in data/hotel.ts as the receiving email.
  const formActionUrl = `https://formsubmit.co/${hotel.contact.email}`;

  return (
    <div className="bg-white p-8 shadow-lg">
      <h3 className="text-2xl font-serif text-primary font-bold mb-6">Send an Enquiry</h3>
      
      <form action={formActionUrl} method="POST" className="space-y-6">
        {/* Next.js doesn't love external actions on normal forms sometimes, but for FormSubmit it works. 
            We use standard form submission here. */}
        <input type="hidden" name="_subject" value="New Hotel Booking Enquiry" />
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="room" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
            <select 
              id="room" 
              name="room"
              className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
            >
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Presidential Suite</option>
              <option value="any">Any Room / Not Sure</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
            <input 
              type="date" 
              id="checkin" 
              name="checkin"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
            <input 
              type="date" 
              id="checkout" 
              name="checkout"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
            <input 
              type="number" 
              id="guests" 
              name="guests"
              min="1"
              max="10"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
              defaultValue="2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Special Requests / Message</label>
          <textarea 
            id="message" 
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors resize-none"
            placeholder="Tell us about any special requirements..."
          ></textarea>
        </div>

        <Button 
          type="submit" 
          className="w-full"
        >
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
}
