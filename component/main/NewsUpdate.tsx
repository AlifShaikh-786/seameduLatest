"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface NewsEvent {
  id: number;
  title: string;
  university: string;
  thumbnail: string;
  date: string;
  videoUrl: string;
}

const newsData: NewsEvent[] = [
  { id: 1, title: "ATMOS Studio Inauguration", university: "Ajeenkya DY Patil University", thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200", date: "21/11/2024", videoUrl: "#" },
  { id: 2, title: "Happy Foundation Day", university: "Techno India University", thumbnail: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1200", date: "15/08/2024", videoUrl: "#" },
  { id: 3, title: "Guest Lecture Series", university: "The NorthCap University", thumbnail: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1200", date: "05/10/2024", videoUrl: "#" },
  { id: 4, title: "Gaming Tournament 24", university: "D Y Patil Ambi", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200", date: "10/12/2024", videoUrl: "#" },
  { id: 5, title: "VFX Masterclass", university: "The NorthCap University", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200", date: "12/12/2024", videoUrl: "#" },
  { id: 6, title: "Sound Engineering Workshop", university: "Ajeenkya DY Patil University", thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200", date: "18/12/2024", videoUrl: "#" },
  { id: 7, title: "Annual Convocation 2024", university: "Techno India University", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200", date: "20/12/2024", videoUrl: "#" },
];

const displayData = [...newsData, ...newsData, ...newsData];

export default function NewsAndUpdatesSlider() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const calculateInitialX = () => {
      const gap = 12;
      const isMobile = window.innerWidth < 640;
      let totalWidthOfOneSet = 0;
      newsData.forEach((_, idx) => {
        const isDoubleWidth = [2, 4, 6].includes(idx);
        const width = isMobile ? (isDoubleWidth ? window.innerWidth * 0.88 : window.innerWidth * 0.72) : (isDoubleWidth ? 600 : 300);
        totalWidthOfOneSet += (width + gap);
      });
      x.set(-totalWidthOfOneSet);
    };
    calculateInitialX();
    window.addEventListener("resize", calculateInitialX);
    return () => window.removeEventListener("resize", calculateInitialX);
  }, [x]);

  // Auto Scroll Logic
  useEffect(() => {
    if (!isMounted || isPaused) return;

    const interval = setInterval(() => {
      handleScroll("right");
    }, 4000); // Same 4s interval as SuccessStories

    return () => clearInterval(interval);
  }, [isMounted, isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    const gap = 12;
    const isMobile = window.innerWidth < 640;
    let snapPoints: number[] = [0];
    let currentX = 0;
    displayData.forEach((_, idx) => {
      const originalIdx = idx % newsData.length;
      const isDoubleWidth = [2, 4, 6].includes(originalIdx);
      const width = isMobile ? (isDoubleWidth ? window.innerWidth * 0.88 : window.innerWidth * 0.72) : (isDoubleWidth ? 600 : 300);
      currentX -= (width + gap);
      snapPoints.push(currentX);
    });

    const currentPos = x.get();
    if (direction === "right") {
      const target = snapPoints.find(p => p < currentPos - 10);
      if (target !== undefined) animate(x, target, { type: "tween", ease: "circOut", duration: 0.8 });
    } else {
      const reversedPoints = [...snapPoints].reverse();
      const target = reversedPoints.find(p => p > currentPos + 10);
      if (target !== undefined) animate(x, target, { type: "tween", ease: "circOut", duration: 0.8 });
    }
  };

  if (!isMounted) return null;

  return (
    <section className="w-full bg-blue-50/50 py-10 md:py-20 overflow-hidden border-t border-blue-100/70 relative">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-32 transition-all duration-300">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              Our<span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-slate-500 text-md md:text-lg max-w-4xl font-medium">Stay updated with the latest news and events at Seamedu School of Pro Expression.</p>
          </div>
          {/* Desktop View More - Shifted Right */}
          <div className="hidden sm:block">
             <button className="hidden sm:flex items-center  text-blue-700 text-[14px] font-semibold  tracking-widest hover:text-slate-900 transition-all active:scale-95">
                         View More<ChevronRight size={16} className="" />
                       </button>
          </div>
        </div>

        {/* Draggable Slider Container */}
        <div className="relative">
          <div 
            ref={constraintsRef} 
            className="sm:overflow-hidden overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              drag="x"
              style={{ x, width: "max-content" }}
              onUpdate={(latest) => {
                const curX = latest.x as number;
                const gap = 12;
                const isMobile = window.innerWidth < 640;
                let totalWidthOfOneSet = 0;
                newsData.forEach((_, idx) => {
                  const isDoubleWidth = [2, 4, 6].includes(idx);
                  const width = isMobile ? (isDoubleWidth ? window.innerWidth * 0.88 : window.innerWidth * 0.72) : (isDoubleWidth ? 600 : 300);
                  totalWidthOfOneSet += (width + gap);
                });

                if (curX <= -totalWidthOfOneSet * 2) {
                  x.set(curX + totalWidthOfOneSet);
                } else if (curX >= -totalWidthOfOneSet * 0.5 && curX > 0) {
                  x.set(curX - totalWidthOfOneSet);
                } else if (curX > 0) {
                  x.set(curX - totalWidthOfOneSet);
                }
              }}
              dragTransition={{
                power: 0.2,
                timeConstant: 200,
                modifyTarget: (target) => {
                  const gap = 12;
                  const isMobile = window.innerWidth < 640;
                  let snapPoints: number[] = [0];
                  let currentX = 0;
                  displayData.forEach((_, idx) => {
                    const originalIdx = idx % newsData.length;
                    const isDoubleWidth = [2, 4, 6].includes(originalIdx);
                    const width = isMobile ? (isDoubleWidth ? window.innerWidth * 0.88 : window.innerWidth * 0.72) : (isDoubleWidth ? 600 : 300);
                    currentX -= (width + gap);
                    snapPoints.push(currentX);
                  });
                  return snapPoints.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
                }
              }}
              className="flex gap-3 pb-8"
            >
              {displayData.map((event, idx) => {
                const isDoubleWidth = [2, 4, 6].includes(idx % newsData.length);
                return (
                  <div key={`${event.id}-${idx}`} className={`group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100/50 hover:border-blue-100 hover:shadow-md transition-all duration-500 shrink-0 ${isDoubleWidth ? "w-[88vw] sm:w-[600px]" : "w-[72vw] sm:w-[300px]"} h-[420px] sm:h-[500px]`}>
                    <div className="h-[72%] relative overflow-hidden bg-slate-100">
                      <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                          <Play className="fill-white ml-1" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="h-[28%] px-5 py-4 flex flex-col justify-center bg-white border-t border-slate-50 gap-1.5">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-slate-400" />
                        <span className="text-slate-400 text-[10px] md:text-[11px] font-medium uppercase tracking-wider">{event.date}</span>
                      </div>
                      <h3 className="text-slate-900 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                        {event.title}
                      </h3>
                      <div className="inline-flex mt-0.5">
                        <span className="bg-blue-50 text-blue-700 text-[10px] md:text-xs font-medium px-3 py-1 rounded-md tracking-wide">
                          {event.university}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Navigation & CTA - Global for Mobile & Desktop */}
        <div className="flex justify-between sm:justify-end items-center px-0 mt-2 sm:-mt-4 relative z-10 translate-y-[-10px] sm:translate-y-0">
          <div className="flex items-center gap-2">
            <button onClick={() => handleScroll("left")} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200 active:scale-95 transition-all hover:bg-slate-50">
              <ChevronLeft size={20} className="text-slate-900" />
            </button>
            <button onClick={() => handleScroll("right")} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200 active:scale-95 transition-all hover:bg-slate-50">
              <ChevronRight size={20} className="text-slate-900" />
            </button>
          </div>

          {/* Mobile View More (Hidden on sm) */}
          <button className="flex sm:hidden items-center gap-1 -mr-1.5 text-blue-700 text-xs font-semibold tracking-widest active:scale-95 transition-all">
            View More <ChevronRight size={14} className="" />
          </button>
        </div>
      </div>
    </section>
  );
} 