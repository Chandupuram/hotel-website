import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Gallery</h1>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
            Take a visual tour of our hotel, rooms, restaurant, and facilities.
          </p>
        </Container>
      </div>

      <Container>
        <SectionTitle title="A Glimpse of Luxury" subtitle="Photos" centered />
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </Container>
    </div>
  );
}
