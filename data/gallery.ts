export type GalleryCategory = "All" | "Hotel" | "Rooms" | "Restaurant" | "Lobby" | "Exterior";

export interface GalleryImage {
  id: string;
  url: string;
  category: GalleryCategory;
  alt: string;
}

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    category: "Exterior",
    alt: "Hotel Exterior Night View"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000",
    category: "Hotel",
    alt: "Luxurious Hotel Pool"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
    category: "Rooms",
    alt: "Presidential Suite Bedroom"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
    category: "Restaurant",
    alt: "Fine Dining Restaurant Setup"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
    category: "Rooms",
    alt: "Deluxe Room Interior"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000",
    category: "Lobby",
    alt: "Grand Hotel Lobby"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000",
    category: "Restaurant",
    alt: "Signature Dish at Restaurant"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    category: "Rooms",
    alt: "Suite Bathroom with Jacuzzi"
  }
];
