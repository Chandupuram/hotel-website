// Note: In components, we will map these to Lucide React icons
export interface Facility {
  id: string;
  name: string;
  iconName: string; 
  description?: string;
}

export const facilities: Facility[] = [
  { id: "f1", name: "Free High-Speed WiFi", iconName: "wifi" },
  { id: "f2", name: "Secure Parking", iconName: "parking-circle" },
  { id: "f3", name: "Air Conditioned Rooms", iconName: "wind" },
  { id: "f4", name: "24/7 Room Service", iconName: "utensils" },
  { id: "f5", name: "Daily Housekeeping", iconName: "sparkles" },
  { id: "f6", name: "24/7 Hot Water", iconName: "droplets" },
  { id: "f7", name: "Smart TV", iconName: "tv" },
  { id: "f8", name: "24/7 Reception", iconName: "concierge-bell" },
  { id: "f9", name: "24/7 Security", iconName: "shield-check" }
];
