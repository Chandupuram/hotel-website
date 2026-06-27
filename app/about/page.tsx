import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { hotel } from "@/data/hotel";
import { gallery } from "@/data/gallery";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">About Us</h1>
        </Container>
      </div>

      <Container>
        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
          <div className="md:w-1/2">
            <SectionTitle title="Our Story" subtitle="Welcome" />
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              {hotel.description}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Since our founding, we have been dedicated to providing a sanctuary of luxury and comfort. 
              Our commitment to excellence is reflected in every detail, from our meticulously designed rooms 
              to our world-class dining experiences.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src={gallery.find(g => g.category === "Lobby")?.url || gallery[0].url}
              alt="Hotel Lobby"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-accent p-12 rounded-lg mb-24 text-center">
          <SectionTitle title="Our Mission" centered />
          <p className="text-xl font-serif text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            &quot;{hotel.mission}&quot;
          </p>
        </div>

        {/* Highlights Section */}
        <div className="mb-24">
          <SectionTitle title="Why Choose Us" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotel.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow border border-gray-100 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src={gallery.find(g => g.category === "Exterior")?.url || gallery[0].url}
              alt="Hotel Exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <SectionTitle title="What Makes Us Special" subtitle="Experience" />
            <ul className="space-y-4">
              {hotel.whyChooseUs.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 font-bold text-xl">•</span>
                  <span className="text-gray-700 text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
