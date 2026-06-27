export interface Room {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  capacity: number;
  price: number;
  image: string;
  gallery: string[];
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: "r1",
    name: "Standard Room",
    slug: "standard-room",
    shortDescription: "A comfortable and stylish room for solo travelers or couples.",
    description: "Our Standard Room offers a perfect blend of comfort and style. Featuring a queen-size bed, a modern en-suite bathroom, and a cozy seating area, it's the ideal choice for business travelers or couples looking for a relaxing stay.",
    capacity: 2,
    price: 2499,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582719478250-c89fae46583b?auto=format&fit=crop&q=80&w=1000"
    ],
    amenities: ["Free WiFi", "AC", "TV", "Room Service", "Coffee Maker"]
  },
  {
    id: "r2",
    name: "Deluxe Room",
    slug: "deluxe-room",
    shortDescription: "Spacious room with premium amenities and city views.",
    description: "Experience enhanced luxury in our Deluxe Room. With more space, a king-size bed, premium linens, and a stunning city view, this room is designed for those who appreciate the finer things in life.",
    capacity: 3,
    price: 3499,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000"
    ],
    amenities: ["Free WiFi", "AC", "Smart TV", "Mini Bar", "City View", "Bathrobe"]
  },
  {
    id: "r3",
    name: "Presidential Suite",
    slug: "presidential-suite",
    shortDescription: "The ultimate luxury experience with a private living room and balcony.",
    description: "Our Presidential Suite represents the pinnacle of luxury. It features a separate living and dining area, a master bedroom with a king-size bed, a spa-like bathroom with a jacuzzi, and a private balcony offering breathtaking panoramic views.",
    capacity: 4,
    price: 8999,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
    ],
    amenities: ["Free WiFi", "AC", "Jacuzzi", "Private Balcony", "Living Room", "24/7 Butler", "Airport Transfer"]
  }
];
