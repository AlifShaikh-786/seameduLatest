"use client";
import React, { useState, useRef, useEffect } from "react";

const placementData = [
  {
    name: "Harsh Gaur",
    company: "Jaro Education",
    package: "₹14.50 LPA",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    companyLogo: "/images/HighringPatners/cohesity.webp",
  },
  {
    name: "Pavan Kulkarni",
    company: "IntervueVet Technologies Pvt Ltd",
    package: "₹7.5 LPA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    companyLogo: "/images/HighringPatners/cognizant.webp",
  },
  {
    name: "Prathush P",
    company: "Learning Routes",
    package: "₹6.5 LPA",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
    companyLogo: "/images/HighringPatners/oceania.png",
  },
  {
    name: "Sanket Dhawale",
    company: "Edgewise Innovations Pvt Ltd",
    package: "₹7.02 LPA",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    companyLogo: "/images/HighringPatners/capgemini.webp",
  },
];

// Tripled data array to support seamless infinite loop scrolling
const displayData = [...placementData, ...placementData, ...placementData];

export default function PlacementHighlights() {
  const [currentIndex, setCurrentIndex] = useState(placementData.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4); // Defaulted to 4 items
  const [activeDot, setActiveDot] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);

  // Responsive breakpoints matching the 4-card desktop layout
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile
      } else if (window.innerWidth < 1150) {
        setItemsToShow(2); // Tablet / Small Laptop
      } else {
        setItemsToShow(4); // Desktop (4 Items)
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Sync active dot indicator and handle infinite loop jumps
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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Generic Drag / Swipe Handlers (Supports Mouse and Touch)
  const dragStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  const dragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const diff = clientX - startX.current;

    if (diff > 50) {
      handlePrev();
      isDragging.current = false;
    } else if (diff < -50) {
      handleNext();
      isDragging.current = false;
    }
  };

  const dragEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="flex flex-col xl:flex-row xl:min-h-[500px] border-t border-b border-black/10 mx-auto w-full max-w-[1600px]">
        {/* Left Informational Panel */}
        <div className="bg-slate-900 flex flex-col justify-center p-8 sm:p-12 xl:w-80 xl:flex-shrink-0">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3 font-medium">
            Placement Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-4">
            See Where Our <span className="text-blue-500">Students</span> Are
            Placed
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Personalized mentorship and a robust curriculum that drives true
            career transformation.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="flex-1 overflow-hidden relative flex items-center bg-gray-50/50"
          onMouseDown={(e) => dragStart(e.pageX)}
          onMouseMove={(e) => {
            e.preventDefault();
            dragMove(e.pageX);
          }}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={(e) => dragStart(e.touches[0].clientX)}
          onTouchMove={(e) => dragMove(e.touches[0].clientX)}
          onTouchEnd={dragEnd}
        >
          <div
            className="flex w-full select-none cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: isTransitioning
                ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {displayData.map((student, index) => (
              <div
                key={index}
                style={{ width: `${100 / itemsToShow}%` }}
                className="flex-shrink-0 flex flex-col pt-8 px-5 pb-8 border-r border-b xl:border-b-0 border-black/5 bg-white transition-colors duration-200 hover:bg-slate-50/50"
              >
                {/* Student Avatar */}
                <div className="relative w-full aspect-[4/5] bg-black/[0.08] overflow-hidden rounded-sm">
                  <img
                    className="w-full h-full object-cover object-top pointer-events-none"
                    src={student.image}
                    alt={student.name}
                    draggable="false"
                  />
                  {/* Package Badge */}
                  {/* <div className="absolute top-3 right-3 bg-slate-900/90 text-white font-semibold text-xs px-2.5 py-1 rounded shadow-sm backdrop-blur-xs">
                    {student.package}
                  </div> */}
                </div>

                {/* Card Info */}
                <div className="mt-4 flex-grow">
                  <p className="text-base font-bold text-slate-900 line-clamp-1">
                    {student.name}
                  </p>
                  <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-2 min-h-[2rem]">
                    {student.company}
                  </p>
                </div>

                {/* Footer Brand Logo */}
                <div className="border-t border-black/10 mt-4 pt-4 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Placed At
                  </span>
                  <div className="h-7 w-24 flex items-center justify-end">
                    <img
                      src={student.companyLogo}
                      alt={`${student.company} logo`}
                      className="h-full w-full object-contain object-right opacity-80 filter  transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation and Indicators Control Bar */}
      <div className="flex items-center justify-between px-6 py-4 md:px-12 bg-white mx-auto w-full max-w-[1600px]">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {placementData.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full block transition-all duration-300 ${
                idx === activeDot ? "w-6 bg-slate-800" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* Directional Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 border border-slate-200 rounded-md flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
              <path
                d="M8 2L4 6l4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-700"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 border border-slate-200 rounded-md flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
              <path
                d="M4 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-700"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
