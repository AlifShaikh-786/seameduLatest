"use client";
import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Nikhil YN",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
      quote: "This course assisted me in securing the associate cloud engineer certificate, which enabled me to acquire two job opportunities with a 400% salary hike. This course assisted me in securing the associate cloud engineer certificate, which enabled me to acquire two job opportunities with a 400% salary hike. Thanks to Seamedu for its 24/7 support.",
      badge: "Job with a 400% hike",
      prevRole: "Junior GCP Engineer",
      prevCompany: "qwinix",
      nextRole: "Senior Cloud Engineer",
      nextCompany: "ciber",
      nextCompanySub: "An HTC Global Company",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" // Placeholder logo
    },
    {
      id: 2,
      name: "Sneha Bhagat",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      quote: "The practical exposure I got during my VFX course was phenomenal. It helped me build a portfolio that landed me a job at a top studio in Mumbai within months of graduating. The practical exposure I got during my VFX course was phenomenal. It helped me build a portfolio that landed me a job at a top studio in Mumbai within months of graduating.",
      badge: "Hired by Top Studio",
      prevRole: "VFX Artist",
      prevCompany: "Seamedu Alumni",
      nextRole: "Lead VFX Artist",
      nextCompany: "Technicolor",
      nextCompanySub: "Creative Services",
      companyLogo: "http://vfxstudio.in/wp-content/uploads/2021/02/EFFEX-LOGO-PNG.png"
    },
    {
      id: 3,
      name: "Ishan Jadhav",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      quote: "Sound Engineering changed my perspective on music production. The hands-on training with industry-standard consoles gave me the confidence to work in professional setups. Sound Engineering changed my perspective on music production. The hands-on training with industry-standard consoles gave me the confidence to work in professional setups.",
      badge: "Industry Excellence",
      prevRole: "Aspiring Musician",
      prevCompany: "Freelance",
      nextRole: "Sound Engineer",
      nextCompany: "YRF Studios",
      nextCompanySub: "Music Post-Production",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" // Placeholder logo
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-4 bg-slate-50 font-poppins overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">
            Our Student <span className="text-blue-600">Shaping the Industry</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="w-full"
            >
              {/* Main Card */}
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row p-6 md:p-8 gap-8 md:gap-10 relative">
                
                {/* Left: Image with Play Button */}
                <div className="relative w-full md:w-[300px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt={testimonials[activeSlide].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform group/play">
                      <FaPlay className="text-blue-600 ml-1.5 transition-colors group-hover/play:text-blue-700" size={32} />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex flex-col py-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">{testimonials[activeSlide].name}</h3>
                    </div>

                  </div>

                  <div className="relative mb-4">
                    <p className="relative z-10 text-slate-600 text-[14px] md:text-lg leading-relaxed font-medium">
                      {testimonials[activeSlide].quote}
                    </p>
                  </div>

                  {/* Comparison Box */}
                  <div className="mt-auto border-t border-slate-100 pt-8 flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Role</p>
                      <p className="text-md md:text-lg font-medium text-slate-900 leading-tight uppercase">{testimonials[activeSlide].nextRole}</p>
                    </div>

                    <div className="flex-1 flex flex-col items-end">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">Company</p>
                      <img 
                        src={(testimonials[activeSlide] as any).companyLogo} 
                        alt="Company Logo"
                        className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <button 
              onClick={prevSlide}
              className="sm:w-14 w-10 h-10 sm:h-14 bg-white border border-slate-100 shadow-md rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:scale-110 transition-all duration-300"
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeSlide ? 1 : -1);
                    setActiveSlide(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${activeSlide === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="sm:w-14 w-10 h-10 sm:h-14 bg-white border border-slate-100 shadow-md rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:scale-110 transition-all duration-300"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
