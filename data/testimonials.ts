export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    text: "An absolutely incredible stay. The staff went above and beyond to make our anniversary special. The Presidential Suite was breathtaking!"
  },
  {
    id: "t2",
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The best hotel experience I've ever had. The restaurant food was exquisite, and the facilities were top-notch. Highly recommended for business travelers."
  },
  {
    id: "t3",
    name: "Emma Watson",
    location: "Sydney, AU",
    rating: 4,
    text: "Beautiful property with exceptional service. The location is perfect for exploring the city. I particularly loved the spa treatments."
  }
];
