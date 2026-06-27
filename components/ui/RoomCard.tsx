import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Wifi, Coffee, Wind, Tv } from "lucide-react";
import { Room } from "@/data/rooms";
import { Button } from "./Button";
import { WhatsAppButton } from "../WhatsAppButton";

// Helper to map string amenities to some basic icons for the card
const getAmenityIcon = (amenity: string) => {
  const name = amenity.toLowerCase();
  if (name.includes("wifi")) return <Wifi size={16} />;
  if (name.includes("ac") || name.includes("air")) return <Wind size={16} />;
  if (name.includes("tv")) return <Tv size={16} />;
  if (name.includes("coffee") || name.includes("tea")) return <Coffee size={16} />;
  return null;
};

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded font-serif font-semibold">
          Rs. {room.price} <span className="text-sm font-sans font-normal opacity-80">/ night</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-serif text-primary font-bold mb-2">
          <Link href={`/rooms/${room.slug}`} className="hover:text-secondary transition-colors">
            {room.name}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {room.shortDescription}
        </p>
        
        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Users size={18} className="mr-2 text-secondary" />
            <span>{room.capacity} Guests</span>
          </div>
          {/* We show max 3 icons to keep it clean */}
          <div className="flex items-center space-x-3">
             {room.amenities.slice(0, 3).map((amenity, index) => {
               const icon = getAmenityIcon(amenity);
               return icon ? (
                 <div key={index} title={amenity} className="text-gray-400">
                   {icon}
                 </div>
               ) : null;
             })}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <Button href={`/rooms/${room.slug}`} className="flex-1">
            View Details
          </Button>
          <WhatsAppButton 
            message={`Hello, I'm interested in booking the ${room.name}. Please share the availability and pricing.`}
            className="flex-1 !px-2"
          />
        </div>
      </div>
    </div>
  );
}
