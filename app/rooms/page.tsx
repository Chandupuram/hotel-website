import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RoomCard } from "@/components/ui/RoomCard";
import { rooms } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Our Rooms & Suites</h1>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
            Experience ultimate comfort in our meticulously designed rooms and suites, tailored to meet the needs of every traveler.
          </p>
        </Container>
      </div>

      <Container>
        <SectionTitle title="Choose Your Perfect Stay" subtitle="Accommodation" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Container>
    </div>
  );
}
