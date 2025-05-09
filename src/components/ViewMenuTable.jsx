import React, { useEffect, useState } from "react";

const ViewMenuTable = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // menu.json file located in public folder
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      })
      .catch((err) => console.error("Menu load error:", err));
  }, []);

  return (
    <div
      className={`mb-6 mt-6 px-3 transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
    >
      {/* Desktop & tablet table */}
      <div className="hidden md:flex justify-center overflow-x-auto">
        <table className="w-full max-w-screen-lg border shadow-lg bg-white rounded-lg text-sm">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Dish</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
              <th className="px-4 py-3 text-left font-semibold">Category</th>
              <th className="px-4 py-3 text-right font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-orange-50 transition duration-150"
              >
                <td className="px-4 py-3 font-semibold">{item.name}</td>
                <td className="px-4 py-3">{item.description}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3 text-right text-orange-600 font-bold">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border shadow-md rounded-lg p-4 bg-white hover:shadow-lg transition duration-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-orange-700">{item.name}</h3>
              <span className="text-orange-500 font-bold">{item.price}</span>
            </div>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <span className="text-sm text-gray-500 italic">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMenuTable;
