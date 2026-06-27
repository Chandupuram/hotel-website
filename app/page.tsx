import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { RoomCard } from "@/components/ui/RoomCard";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { MapSection } from "@/components/MapSection";
import { hotel } from "@/data/hotel";
import { rooms } from "@/data/rooms";
import { facilities } from "@/data/facilities";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={gallery[0].url} // Using the exterior image
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-wide fade-in-up">
            {hotel.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide fade-in-up delay-100">
            {hotel.tagline}
          </p>
          <div className="fade-in-up delay-200">
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-transparent">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <SectionTitle title="Welcome to Paradise" subtitle="About Us" />
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {hotel.description}
              </p>
              <Button href="/about" variant="outline">
                Read More About Us
              </Button>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={gallery.find(g => g.category === "Hotel")?.url || gallery[1].url}
                alt="Hotel Pool"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-accent">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Our Luxurious Rooms" subtitle="Accommodation" />
            <Link href="/rooms" className="hidden md:inline-flex items-center text-primary font-medium hover:text-secondary transition-colors mb-12">
              View All Rooms &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button href="/rooms" variant="outline">View All Rooms</Button>
          </div>
        </Container>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 bg-transparent">
        <Container>
          <SectionTitle title="World-Class Amenities" subtitle="Facilities" centered />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facilities.slice(0, 8).map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/facilities" variant="outline">Explore All Facilities</Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Guest Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              What Our Guests Say
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section>
        <MapSection />
      </section>
    </>
  );
}
