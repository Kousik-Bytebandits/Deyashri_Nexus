import { useEffect, useState } from "react";

export default function Home() {
  // Banner auto slider
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = ["images/bg-1.png", "images/bg-2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Product auto slider
  const [productIndex, setProductIndex] = useState(0);
  const products = [
    "images/summer.png",
    "images/summer.png",
    "images/summer.png",
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="w-full pt-[32px] bg-[#F2F5FF] font-inter">
      {/* ===== Banner Carousel ===== */}
      <div className="relative w-full h-64  overflow-hidden">
        {banners.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Banner ${i}`}
            className={`absolute w-full h-64 object-contain transition-opacity duration-700 ${
              bannerIndex === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <div
              key={i}
              onClick={() => setBannerIndex(i)}
              className={`w-2 h-2 sm:hidden rounded-full cursor-pointer ${
                bannerIndex === i ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* ===== Features Section ===== */}
      <div className="font-inter grid grid-cols-2 gap-2 px-2 my-6">
        <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4">
          <img src="images/lorry.png" alt="Free Shipping" className="w-12 h-10 mb-2" />
          <h3 className="font-semibold text-h3">Free Shipping</h3>
          <p className="text-p text-gray-500">From orders totalling ₹500</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4">
          <img src="images/products.png" alt="Variety Products" className="w-10 h-10 mb-2" />
          <h3 className="font-semibold text-h3">Variety Products</h3>
          <p className="text-p text-gray-500">From orders totalling ₹500</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4">
          <img src="images/return.png" alt="Return & Refund" className="w-10 h-10 mb-2" />
          <h3 className="font-semibold text-h3">Return & Refund</h3>
          <p className="text-p text-gray-500">From orders totalling ₹500</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4">
          <img src="images/247.png" alt="Support 24/7" className="w-10 h-10 mb-2" />
          <h3 className="font-semibold text-h3">Support 24/7</h3>
          <p className="text-p text-gray-500">From orders totalling ₹500</p>
        </div>
      </div>

      {/* ===== Product Carousel ===== */}
      <div className="px-4 mb-6">
     <div className="relative w-full h-64 overflow-hidden rounded-lg">
          {products.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Product ${i}`}
              className={`absolute w-full h-64  object-contain bg-white  transition-opacity duration-700 ${
                productIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
         
        </div>
         {/* dots */}
          <div className="absolute mt-2 sm:hidden left-1/2 -translate-x-1/2 flex gap-2">
            {products.map((_, i) => (
              <div
                key={i}
                onClick={() => setProductIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  productIndex === i ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
      </div>
    </div>
  );
}
