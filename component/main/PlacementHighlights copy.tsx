"use client";
import React, { useState, useRef, useEffect } from "react";

const placementData = [
  {
    name: "Harsh Gaur",
    company: "Jaro Education",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    companyLogo: "/images/HighringPatners/cohesity.webp",
  },
  {
    name: "Pavan Kulkarni",
    company: "IntervueVet Technologies Pvt Ltd",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    companyLogo: "/images/HighringPatners/cognizant.webp",
  },
  {
    name: "Prathush P",
    company: "Learning Routes",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
    companyLogo: "/images/HighringPatners/oceania.png",
  },
  {
    name: "Sanket Dhawale",
    company: "Edgewise Innovations Pvt Ltd",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    companyLogo: "/images/HighringPatners/capgemini.webp",
  },
];

const displayData = [...placementData, ...placementData, ...placementData];

export default function PlacementHighlightsTopHeader() {
  const [currentIndex, setCurrentIndex] = useState(placementData.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [activeDot, setActiveDot] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile
      } else if (window.innerWidth < 768) {
        setItemsToShow(2); // Small Tablet
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3); // Large Tablet
      } else {
        setItemsToShow(4); // Desktop / Ultra-wide (Strictly 4 cards)
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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

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
    <section className="bg-slate-50 w-full py-12 md:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-[1300px] px-6 md:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Placement <span className="text-blue-600">Highlights</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-2">
              Personalized mentorship and a robust curriculum that drives true
              career transformation.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-xs"
            >
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                <path
                  d="M8 2L4 6l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-700"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-xs"
            >
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-700"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Wrapper */}
        <div
          className="overflow-hidden relative -mx-2"
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
                className="flex-shrink-0 px-2"
              >
                {/* Clean Premium Premium Card Interior */}
                <div className="group bg-white rounded-t-xl xl border border-slate-100  shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full">
                  {/* Photo Profile Wrapper */}
                  <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      src={student.image}
                      alt={student.name}
                      draggable="false"
                      loading="lazy"
                    />
                  </div>

                  {/* Student Details */}
                  <div className="mt-4 flex-grow px-1">
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight transition-colors group-hover:text-blue-600 line-clamp-1">
                      {student.name}
                    </h3>

                    {/* <p className="text-sm font-semibold text-slate-600 mt-1 line-clamp-1">
                      {student.company}
                    </p> */}
                  </div>

                  {/* Bottom Border and Brand Logo */}
                  <div className="border-t border-slate-300 mt-4 pt-3 flex justify-between items-center px-1">
                    <div className="h-10 w-24 flex items-center  gap-32 px-2">
                      <p className="text-xs font-medium text-slate-400 mt-0.5 uppercase ">
                        Placed At
                      </p>
                      <img
                        src={student.companyLogo}
                        alt={`${student.company} logo`}
                        className="max-h-full max-w-full object-contain object-left filter  opacity-60  group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Dot Navigation indicators */}
        <div className="flex items-center justify-center mt-8 gap-1.5">
          {placementData.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full block transition-all duration-300 ${
                idx === activeDot ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
