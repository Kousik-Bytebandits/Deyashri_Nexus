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
    <div className="w-full pt-[32px] md:pt-24 bg-[#F2F5FF] font-inter">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">
        {/* ===== Banner Carousel ===== */}
        <div className="relative w-full h-64 sm:h-[25vh] md:h-[36vh] lg:h-[46vh] xl:h-[56vh] 2xl:h-[70vh] overflow-hidden">
          {banners.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Banner ${i}`}
              className={`absolute w-full h-64 sm:h-[25vh] md:h-[36vh] lg:h-[46vh] xl:h-[56vh] 2xl:h-[70vh] object-contain md:object-contain transition-opacity duration-700 ${bannerIndex === i ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>


        {/* ===== Features Section ===== */}
        <div className="font-inter grid grid-cols-2 max-w-[1300px] xl:mx-auto  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-4 px-2 md:px-0 mt-4 md:mt-6 mb-6 items-stretch min-w-0">
          <div className="flex flex-col  items-center bg-white shadow-card border rounded-lg p-4 xl:flex-row xl:items-center gap-2 overflow-hidden">
            <img
              src="images/lorry.png"
              alt="Free Shipping"
              className="w-12 h-10 mb-2 xl:mb-0 xl:px-2 shrink-0 object-contain"
            />
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="font-semibold text-h3 lg:text-xl">Free Shipping</h3>
              <p className="text-p xl:text-base text-gray-500">
                From orders totalling ₹500
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4 xl:flex-row xl:items-center gap-2 overflow-hidden">
            <img
              src="images/products.png"
              alt="Variety Products"
              className="w-12 h-10 mb-2 xl:mb-0 xl:px-2 shrink-0 object-contain"
            />
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="font-semibold text-h3 lg:text-xl">
                Variety Products
              </h3>
              <p className="text-p xl:text-base text-gray-500">
                From orders totalling ₹500
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4 xl:flex-row xl:items-center gap-2 overflow-hidden">
            <img
              src="images/return.png"
              alt="Return & Refund"
              className="w-12 h-10 mb-2 xl:mb-0 xl:px-2 shrink-0 object-contain"
            />
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="font-semibold text-h3 lg:text-xl">
                Return & Refund
              </h3>
              <p className="text-p xl:text-base text-gray-500">
                From orders totalling ₹500
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-card border rounded-lg p-4 xl:flex-row xl:items-center gap-2 overflow-hidden">
            <img
              src="images/247.png"
              alt="Support 24/7"
              className="w-12 h-10 mb-2 xl:mb-0 xl:px-2 shrink-0 object-contain"
            />
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="font-semibold text-h3 lg:text-xl">Support 24/7</h3>
              <p className="text-p xl:text-base text-gray-500">
                From orders totalling ₹500
              </p>
            </div>
          </div>
        </div>

        {/* Static product banner on tablet/desktop */}
        <div className="hidden md:block px-4 mt-10">
          <div className="flex gap-4">
            {products.map((img, i) => (
              <div
                key={i}
                className="relative flex-1 h-72 overflow-hidden rounded-lg bg-[#F2F5FF]"
              >
                <img
                  src={img}
                  alt={`Product ${i}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Product Carousel (mobile only) ===== */}
        <div className="md:hidden px-4 mb-0">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            {products.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i}`}
                className={`absolute w-full h-64 object-contain bg-[#F2F5FF] transition-opacity duration-700 ${productIndex === i ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>
          {/* dots */}
          <div className="flex justify-center mt-2 gap-2">
            {products.map((_, i) => (
              <div
                key={i}
                onClick={() => setProductIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${productIndex === i ? "bg-black" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
