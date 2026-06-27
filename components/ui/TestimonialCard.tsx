import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 shadow-lg relative mt-6">
      <div className="absolute top-0 left-8 -mt-6 text-6xl text-secondary-light opacity-50 font-serif font-bold">
        &quot;
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-secondary fill-current" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic mb-6 relative z-10">
        &quot;{testimonial.text}&quot;
      </p>
      
      <div className="border-t border-gray-100 pt-4">
        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
        <span className="text-sm text-gray-500">{testimonial.location}</span>
      </div>
    </div>
  );
}
