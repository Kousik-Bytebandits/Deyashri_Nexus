import React from "react";

const products = [
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "High-quality wireless headphones with crystal clear sound.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Comfortable design with long-lasting battery life.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Perfect for music lovers and professionals.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Noise-cancelling headphones with deep bass.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Lightweight and portable with premium sound.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Durable design for everyday use.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Immersive audio experience with Bluetooth 5.0.",
  },
  {
    name: "Head Phones",
    image: "/images/headphone.png",
    description: "Stylish and modern design with top-tier quality.",
  },
];

export default function TrendingProducts() {
  return (
    <section className="px-6 pb-10 bg-[#F2F5FF] pt-6">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto mt-16">
        {/* Heading */}
        <h2 className="text-h2 font-semibold font-inter mb-8 text-gray-900">
          Trending Products
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group bg-[D9D9D9] p-2 rounded-xl shadow-md flex flex-col items-center transition-transform duration-500 hover:rotate-[-5deg] hover:scale-105"
            >
              {/* Default Image */}
              <img
                src={product.image}
                alt={product.name}
                className="object-contain transition-transform duration-500 group-hover:scale-0 group-hover:-rotate-45"
              />

              {/* Hidden Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl opacity-0 rotate-[-45deg] transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0">
                <h3 className="text-h2 font-bold text-gray-800">{product.name}</h3>
                <p className="text-h3 text-gray-600 mt-2 px-4 text-center">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
