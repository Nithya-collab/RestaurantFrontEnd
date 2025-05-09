import React from "react";
import Button from "./Button";

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  altText,
  ViewButton,
  handleShowMenu,
  handleToggleReservation,
}) => {
  return (
    <div className="relative h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden text-center">
      {/* Background Image */}
      <img
        title={altText}
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover object-center md:object-top lg:object-center"
      />
      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 p-6 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-orange-300 font-bold text-sm md:text-base lg:text-lg mb-4">
          {subtitle}
        </p>
        <div className="flex gap-2">
          <Button
            className="bg-white hover:bg-orange-400 text-black px-4 py-2 rounded-md w-max transition duration-300 transform hover:scale-105"
            onClick={handleShowMenu}
          >
            {ViewButton}
          </Button>
          <Button
            className="bg-gradient-to-b via-orange-500 to-yellow-500 from-red-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md w-max transition duration-300 transform hover:scale-105"
            onClick={handleToggleReservation}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
