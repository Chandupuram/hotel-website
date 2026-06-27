"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { gallery, GalleryCategory } from "@/data/gallery";

const categories: GalleryCategory[] = ["All", "Hotel", "Rooms", "Restaurant", "Lobby", "Exterior"];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredGallery = activeCategory === "All" 
    ? gallery 
    : gallery.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? "bg-primary text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGallery.map((item) => (
          <div 
            key={item.id} 
            className="relative h-64 group overflow-hidden cursor-pointer rounded-lg shadow-sm"
            onClick={() => setLightboxImage(item.url)}
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay p-4 md:p-8">
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-secondary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
            <Image
              src={lightboxImage}
              alt="Lightbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
