import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Users, Wifi, Coffee, Wind, Tv, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { rooms } from "@/data/rooms";

const getAmenityIcon = (amenity: string) => {
  const name = amenity.toLowerCase();
  if (name.includes("wifi")) return <Wifi size={20} />;
  if (name.includes("ac") || name.includes("air")) return <Wind size={20} />;
  if (name.includes("tv")) return <Tv size={20} />;
  if (name.includes("coffee") || name.includes("tea")) return <Coffee size={20} />;
  return <Check size={20} />;
};

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <Container>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link> &gt;
          <Link href="/rooms" className="hover:text-primary mx-1">Rooms</Link> &gt;
          <span className="text-primary font-medium ml-1">{room.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{room.name}</h1>

            <div className="flex items-center space-x-6 mb-8 text-gray-600 border-b pb-6">
              <div className="flex items-center">
                <Users size={20} className="mr-2 text-secondary" />
                <span>Up to {room.capacity} Guests</span>
              </div>
              <div className="text-2xl font-serif text-primary font-bold ml-auto">
                Rs. {room.price} <span className="text-sm font-sans font-normal text-gray-500">/ night</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden mb-6">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {room.gallery.map((img, idx) => (
                <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${room.name} image ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Room Description</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{room.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Room Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded border border-gray-100">
                    <span className="text-secondary mr-3">{getAmenityIcon(amenity)}</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 border-b pb-4">Book This Room</h3>
              <div className="text-3xl font-serif text-primary font-bold mb-6">
                Rs. {room.price} <span className="text-base font-sans font-normal text-gray-500">/ night</span>
              </div>

              <div className="space-y-4">
                <Button href={`/contact?room=${room.slug}`} className="w-full text-lg py-4">
                  Book Now
                </Button>

                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <WhatsAppButton
                  message={`Hello, I'm interested in booking the ${room.name}. Please share the availability and pricing.`}
                  className="w-full text-lg py-4"
                />
              </div>

              <div className="mt-6 text-sm text-gray-500 text-center">
                Need help? Call us at <br/>
                <a href={`tel:${rooms[0] ? '+919898987899' : ''}`} className="text-primary font-medium hover:underline">+91 9898987899</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
