"use client";
import React, { useState, useRef, useEffect } from "react";

const placementData = [
  {
    name: "Harsh Gaur",
    company: "Jaro Education",
    package: "₹14.50 LPA",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
  },
  {
    name: "Pavan Kulkarni",
    company: "IntervueVet Technologies Pvt Ltd",
    package: "₹7.5 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    name: "Prathush P",
    company: "Learning Routes",
    package: "₹6.5 LPA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    name: "Sanket Dhawale",
    company: "Edgewise innovations pvt ltd",
    package: "₹7.02 LPA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
  },
];

const displayData = [...placementData, ...placementData, ...placementData];

export default function PlacementHighlights() {
  const [currentIndex, setCurrentIndex] = useState(placementData.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [activeDot, setActiveDot] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    setActiveDot(currentIndex % placementData.length);

    if (currentIndex >= placementData.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - placementData.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < placementData.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + placementData.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    setIsTransitioning(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const currentX = e.pageX;
    const diff = currentX - startX.current;
    
    if (diff > 50) {
      handlePrev();
      isDragging.current = false;
    } else if (diff < -50) {
      handleNext();
      isDragging.current = false;
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row md:min-h-[480px] border-t border-b border-black/10 mx-auto w-full huge:max-w-[1280px]">
        {/* Left panel */}
        <div className="bg-slate-900 flex flex-col justify-center">
          <div className="pl-6 pt-10 pb-6 md:w-72 md:flex-shrink-0 md:flex md:flex-col md:justify-center md:pl-12 md:py-16 md:gap-5 mr-10">
            <p className="hidden sm:block text-xs uppercase tracking-widest text-white/40 mb-3">
              Placement Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white mb-3">
              See Where Our <span className="text-blue-600">Students</span> Are Getting Placed
            </h2>
            <p className="text-base text-white/50 leading-relaxed mt-3 md:mt-0">
              Personalized mentorship and a robust curriculum that gets our students placed.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className="flex-1 overflow-hidden relative flex items-center"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="flex w-full select-none cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: isTransitioning ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
          >
            {displayData.map((student, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 flex flex-col pt-8 px-5 pb-9 border-l border-t border-black/10 bg-white select-none"
              >
                <img
                  className="w-full aspect-[3/4] object-cover object-top bg-black/[0.08] block select-none pointer-events-none"
                  src={student.image}
                  alt={student.name}
                  draggable="false"
                />
                <div className="mt-4 select-none">
                  <p className="text-base font-semibold text-black">{student.name}</p>
                  <p className="text-sm text-black/60 mt-0.5">{student.company}</p>
                </div>
                <div className="border-t border-black/15 mt-4 pt-4 flex justify-between items-baseline select-none">
                  <span className="text-xs text-black/70 uppercase tracking-wider">Package</span>
                  <span className="text-xl font-bold text-black">{student.package}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10 border-b border-black/10 mx-auto w-full huge:max-w-[1280px]">
        <div className="flex items-center gap-1.5 md:hidden">
          {placementData.map((_, idx) => (
            <span
              key={idx}
              className={`w-1.5 h-1.5 rounded-full block transition-colors ${
                idx === activeDot ? "bg-black/70" : "bg-black/20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handlePrev}
            className="w-8 h-8 border border-black/30 flex items-center justify-center hover:bg-black/10 transition"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 border border-black/30 flex items-center justify-center hover:bg-black/10 transition"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="black" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
