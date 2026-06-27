import React from "react";
import { Navigation } from "lucide-react";

export function MapSection() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-gray-200 relative group">
      <iframe 
        src="https://maps.google.com/maps?q=Srinivasa%20Satram%20Beach&t=&z=14&ie=UTF8&iwloc=&output=embed" 
        className="absolute inset-0 w-full h-full border-0" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Hotel Location Map"
      ></iframe>
      
      {/* Get Directions Button Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0">
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=14.1509333,80.1275115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border text-base font-medium transition-all duration-300 rounded shadow-xl bg-white text-primary border-transparent hover:bg-gray-50 gap-2"
        >
          <Navigation size={20} className="text-secondary" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
