import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Failed to load gallery:', error));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

