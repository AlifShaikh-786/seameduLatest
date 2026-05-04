"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineAcademicCap, HiArrowLongRight } from "react-icons/hi2";

const slides = [
  {
    id: 1,
    label: "1/5",
    bottomText: "School Of Media",
    tag: "School Of Media",
    heading: "Build Powerful Digital Media Skills for the Modern Creative Industry.",
    subheading:
      "Master visual thinking, modern design tools, and creative skills to build intuitive and engaging user experiences.",
    careers: ["Digital Marketing", "Content Creation", "Media Production"],
    image: "/images/hero-section/sound.jpeg",
  },
  {
    id: 2,
    label: "2/5",
    bottomText: "School Of Design",
    tag: "School Of Design",
    heading: "Learn Creative Design and Innovation for High-Demand Careers.",
    subheading:
      "Master visual thinking, modern design tools, and creative skills to build intuitive and engaging user experiences.",
    careers: ["UI/UX Design", "Graphic Design", "Creative Direction"],
    image: "/images/hero-section/image.png",
  },
  {
    id: 3,
    label: "3/5",
    bottomText: "School Of Technology",
    tag: "School Of Technology",
    heading: "Build Powerful Digital Solutions for a Smarter, Future-Ready World.",
    subheading:
      "Gain hands-on technical skills and industry-ready expertise for high-growth careers in the digital economy.",
    careers: ["Software Development", "Web Development", "Tech Careers"],
    image: "/images/hero-section/tech2.jpeg",
  },
  {
    id: 4,
    label: "4/5",
    bottomText: "School Of Management",
    tag: "School Of Management",
    heading: "Industry-Driven Management Programs for Future Business Leaders.",
    subheading:
      "Gain hands-on experience in leadership, strategy, and operations to build a successful business career.",
    careers: ["Business Management", "Marketing", "HR & Operations"],
    image: "/images/hero-section/image copy.png",
  },
  {
    id: 5,
    label: "5/5",
    bottomText: "School Of Hospitality",
    tag: "School Of Hospitality",
    heading: "Build Global Hospitality Skills for International Career Success.",
    subheading:
      "Develop confidence, service excellence, and global readiness for successful careers in hospitality and tourism.",
    careers: ["Hotel Management", "Travel & Tourism", "Guest Experience"],
    image: "/images/life-at-seamedu/international.webp",
  },
];

export default function HeroSection2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // PRELOAD ALL IMAGES FOR MAXIMUM PERFORMANCE
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, isAutoPlaying]);

  const toggleInquiry = () => {
    window.dispatchEvent(new CustomEvent("toggleInquiry"));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return ( 
    <>
      <style>{`
        @media (min-width: 2300px) {
          .hero-section-custom { height: 110vh !important; min-height: 1100px !important; }
          .hero-container-custom { padding-top: 4.5rem !important; padding-bottom: 15rem !important; max-width: 2200px !important; }
          .hero-tag-custom { font-size: 30px !important; margin-top: 6rem !important; }
          .hero-heading-custom { font-size: 150px !important; line-height: 1.1 !important; }
          .hero-subheading-custom { font-size: 40px !important; max-width: 1800px !important; }
          .hero-btn-custom { padding: 2rem 3rem !important; font-size: 2rem !important; }
          .hero-desktop-nav-custom { height: 150px !important; bottom: 12rem !important; }
          .hero-bottom-label-custom { font-size: 20px !important; margin-bottom: 1rem !important; }
          .hero-bottom-text-custom { font-size: 24px !important; }
        }
      `}</style>
      <section className="relative w-full h-[94vh] sm:h-screen min-h-[500px] bg-black overflow-hidden font-sans hero-section-custom">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.12, x: 20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 7, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image
                src={slides[activeSlide].image}
                alt={slides[activeSlide].bottomText}
                fill
                priority
                className="object-cover"
                quality={95}
              />
            </motion.div>

            {/* PREMIUM LUXURY OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/15 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-black/5 sm:bg-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-24 h-full relative z-30 flex flex-col items-start pt-28 sm:pt-20 lg:pt-24 pb-32 hero-container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl ultra:max-w-7xl hero-container-custom"
          >

            {/* SCHOOL TAG */}
<p className="text-white uppercase tracking-[0.2em] font-semibold mb-10 text-[10px] sm:text-xs xxl:text-2xl ultra:text-5xl sm:mt-8 md:mt-10 hero-tag-custom">
{/* <p className="text-white uppercase tracking-[0.2em] font-semibold mb-10 
text-[10px] sm:text-xs "> */}
 
              {/* <span className="w-12 h-[1.5px] bg-blue-600/60 inline-block"></span> */}
              {slides[activeSlide].tag}
            </p>

            {/* HEADING */}
       <h1 className="text-3xl sm:text-4xl md:text-5xl xxl:text-[120px] ultra:text-[200px] font-semibold text-white leading-[1.1] tracking-tighter hero-heading-custom">
              {slides[activeSlide].heading}
            </h1>

            {/* SUBHEADING */}
       <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl xxl:text-[84px] ultra:text-[160px] text-slate-300 leading-relaxed max-w-2xl ultra:max-w-5xl font-medium hero-subheading-custom">
              {slides[activeSlide].subheading}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-14 sm:mt-10 md:mb-16">
              <button
                onClick={toggleInquiry}
                className="group relative rounded-full bg-blue-600 overflow-hidden text-white transition-all duration-500 px-6 py-3 sm:px-8 sm:py-3 md:px-8 md:py-4 ultra:px-12 ultra:py-8 font-semibold text-sm sm:text-base xxl:text-lg ultra:text-3xl tracking-widest uppercase shadow-[0_20px_40px_rgba(0,0,0,0.1)]  flex items-center justify-center gap-4 hero-btn-custom"
              >
                <div className="absolute inset-0 bg-blue-600 transition-transform origin-left duration-500" />
                <span className="relative z-10">Explore Programs</span>
                <FaChevronRight className="relative z-10 text-[24px] transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE FOOTER NAV */}
      <div className="absolute bottom-6 left-0 right-0 z-50 px-0 sm:hidden">
        <div className="rounded-3xl bg-black/30 backdrop-blur-2xl p-5 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white text-[12px] font-black tracking-widest">
              {slides[activeSlide].label}
            </span>
            <div className="flex-1 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
              <motion.div
                key={activeSlide}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute h-full bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold uppercase text-[14px] tracking-widest">
                {slides[activeSlide].bottomText}
              </h3>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center text-white transition-all active:scale-90 hover:translate-x-1"
              aria-label="Next slide"
            >
              <HiArrowLongRight className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP BOTTOM NAV */}
      <div className="absolute bottom-0 left-0 right-0 z-40 hidden sm:block h-28 hero-desktop-nav-custom">
        <div className="max-w-8xl mx-auto px-6 h-full flex items-center justify-between">
          {slides.map((slide, idx) => ( 
            <div 
              key={slide.id}
              onMouseEnter={() => {
                setActiveSlide(idx);
                setIsAutoPlaying(false);
              }}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-700 group h-full px-8 flex-1 text-center`}
            >
              <span
                className={`text-[10px] font-black tracking-[0.3em] transition-all duration-500 mb-2 hero-bottom-label-custom ${activeSlide === idx ? "text-white" : "text-slate-500"
                  }`}
              >
                {slide.label}
              </span>

              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.1em] transition-all duration-500 leading-tight hero-bottom-text-custom ${activeSlide === idx
                  ? "text-blue-500 scale-105"
                  : "text-white group-hover:text-white"
                  }`}
              >
                {slide.bottomText}
              </span>

              {/* Progress Line on Active Tab */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                {activeSlide === idx && (
                  <motion.div
                    key={activeSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute inset-0 bg-blue-600"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}