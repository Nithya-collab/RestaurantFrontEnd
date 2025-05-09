import React from "react";
import Button from "./Button";

const Reserve = ({ title , subtitle , placeholder, handleToggleReservation}) => {
  return (
    <section className="w-full px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      <p className="text-center text-sm mb-5">{subtitle}</p>
      <div className="max-w-md mx-auto bg-orange-100 p-3 rounded-xl shadow-md">
        <div className="flex justify-end">
         <p className="p-3 text-sm mr-2">{placeholder}</p>
          <Button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
           onClick={handleToggleReservation}
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
