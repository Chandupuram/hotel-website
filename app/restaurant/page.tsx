import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { restaurant } from "@/data/restaurant";

export default function RestaurantPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">{restaurant.name}</h1>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto font-serif italic text-xl">
            Fine Dining Experience
          </p>
        </Container>
      </div>

      <Container>
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <SectionTitle title="A Culinary Journey" subtitle="Our Restaurant" />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {restaurant.description}
            </p>
            <div className="bg-accent p-6 rounded border border-gray-200 inline-block">
              <span className="font-semibold text-primary block mb-2">Operating Hours</span>
              <span className="text-gray-700">{restaurant.timings}</span>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {restaurant.gallery.map((img, idx) => (
            <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`Restaurant view ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Sample Menu" subtitle="Discover Our Flavors" centered />
          
          <div className="space-y-16 mt-12">
            {restaurant.menu.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-serif text-primary border-b border-gray-200 pb-2 mb-6 text-center">
                  {section.category}
                </h3>
                <div className="space-y-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col sm:flex-row justify-between sm:items-baseline border-b border-gray-50 pb-4 border-dotted">
                      <div className="sm:w-3/4">
                        <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
                        <p className="text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <div className="text-xl font-serif font-bold text-secondary mt-2 sm:mt-0">
                        Rs. {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
