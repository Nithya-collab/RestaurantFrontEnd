import React from "react";
import Button from "./Button";

const DishCard = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden hover:shadow-md transition duration-300">
    <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-base md:text-lg lg:text-xl">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const PopularDishesSection = () => (
  <div className="p-6 bg-gray-50 text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Popular Dishes</h2>
    <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
      Explore our most loved creations, each dish crafted to perfection and bursting with flavor.
    </p>
    <Button className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300 transform hover:scale-105">
      Order Online
    </Button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DishCard
        imageSrc="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
        title="Pasta Carbonara"
        description="Al dente pasta with creamy sauce, crispy pancetta, and a sprinkle of freshly ground pepper."
      />
      <DishCard
        imageSrc="https://images.unsplash.com/photo-1551059429-99854e8cd219?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
        title="Tiramisu"
        description="Delightful layered dessert of espresso-soaked ladyfingers, mascarpone, and cocoa."
      />
      <DishCard
        imageSrc="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
        title="Bruschetta"
        description="Toasted baguette slices topped with fresh tomatoes, basil, garlic, and a drizzle of balsamic glaze."
      />
    </div>
  </div>
);

export default PopularDishesSection;
