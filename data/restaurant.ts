export const restaurant = {
  name: "The Golden Spoon",
  description: "Experience culinary excellence at The Golden Spoon, our award-winning fine dining restaurant. Our master chefs prepare exquisite dishes using the freshest locally sourced ingredients, offering a menu that perfectly blends local traditions with international flavors.",
  timings: "Open Daily: 7:00 AM - 11:00 PM",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
  gallery: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000"
  ],
  menu: [
    {
      category: "Starters",
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with black truffle and mozzarella.", price: 499 },
        { name: "Seared Scallops", description: "Pan-seared scallops with cauliflower purée and pancetta.", price: 399 }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Wagyu Beef Tenderloin", description: "Prime wagyu beef with roasted root vegetables and red wine reduction.", price: 1299 },
        { name: "Herb-Crusted Salmon", description: "Fresh Atlantic salmon with asparagus and lemon butter sauce.", price: 1199 }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Fondant", description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.", price: 399 },
        { name: "Classic Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream.", price: 699 }
      ]
    }
  ]
};
