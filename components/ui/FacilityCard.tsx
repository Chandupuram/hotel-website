import React from "react";
import * as LucideIcons from "lucide-react";
import { Facility } from "@/data/facilities";

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  // Dynamically load the icon from lucide-react based on the iconName string
  // Note: For a real app, this might need more robust error handling if the icon doesn't exist
  // @ts-expect-error - Dynamic import from icon names
  const IconComponent = LucideIcons[facility.iconName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')] || LucideIcons.Check;

  return (
    <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary mb-4 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{facility.name}</h3>
      {facility.description && (
        <p className="text-sm text-gray-500">{facility.description}</p>
      )}
    </div>
  );
}
