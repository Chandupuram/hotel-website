"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { hotel } from "@/data/hotel";

interface WhatsAppButtonProps {
  message?: string;
  floating?: boolean;
  className?: string;
}

export function WhatsAppButton({ 
  message = "Hello, I would like to know more about the hotel.", 
  floating = false,
  className = ""
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${hotel.contact.whatsapp}?text=${encodedMessage}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium bg-[#25D366] text-white hover:bg-[#20b858] shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <MessageCircle size={20} className="mr-2" />
      WhatsApp
    </a>
  );
}
