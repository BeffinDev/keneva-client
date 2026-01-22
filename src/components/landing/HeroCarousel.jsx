import React, { useState, useEffect } from "react";
import { BsChevronRight ,BsChevronLeft} from 'react-icons/bs';

const HeroCarousel = ({ slides = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayActive, setAutoPlayActive] = useState(true);
  const autoPlayInterval = 5000;

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPlayActive) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayActive, slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlayActive(false);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setAutoPlayActive(false);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setAutoPlayActive(false);
  };

  return (
    // <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000
            ${index === activeIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content (UNCHANGED DESIGN) */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold">
                {slide.heading} <br />
                <span className="text-[#feb900]">{slide.subHeading}</span>
              </h1>

              <div className="w-20 h-1 bg-[#feb900] mx-auto my-6" />

              <p className="text-lg md:text-xl text-white/90">
                {slide.description}
              </p>

              <a
                href={slide.buttonLink}
                className="inline-block mt-8 px-8 py-3 border-2 border-[#feb900]
                text-white font-semibold rounded-full hover:bg-[#feb900]
                hover:text-black transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2
        bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <BsChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2
        bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <BsChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition
              ${i === activeIndex ? "bg-[#feb900]" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
