import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { facilities } from "@/data/facilities";

export default function FacilitiesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Hotel Facilities</h1>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
            Enjoy our world-class amenities designed to make your stay as comfortable and enjoyable as possible.
          </p>
        </Container>
      </div>

      <Container>
        <SectionTitle title="Everything You Need" subtitle="Amenities" centered />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Container>
    </div>
  );
}
