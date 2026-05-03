"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from "framer-motion";

type Story = {
  name: string;
  role: string;
  image: string;
  videoUrl?: string;
  title: string;
  views: string;
};

const SuccessStories = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const x = useMotionValue(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const stories: Story[] = [
    {
      name: "Prince Dewani",
      role: "MBA Student",
      image: "https://img.youtube.com/vi/LlFImFcWONA/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/LlFImFcWONA?autoplay=1",
      title: "Media, Design & Technology courses at Seamedu",
      views: "12K"
    },
    {
      name: "Arya Mishra",
      role: "BBA Student",
      image: "https://img.youtube.com/vi/nRpRo5DSNUM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/nRpRo5DSNUM?autoplay=1",
      title: "Don’t Just Study… Build Your Future 🚀 | Real Skills. Real Careers.",
      views: "34K"
    },
    {
      name: "Mayank Pandey",
      role: "B.Tech(CSE) Student",
      image: "https://img.youtube.com/vi/AA4n4zc7Ayk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/AA4n4zc7Ayk?autoplay=1",
      title: "An evening of reconnection, shared memories, and renewed bonds",
      views: "8.5K"
    },
    {
      name: "Himanshi Tiruwa",
      role: "BCA Student",
      image: "https://img.youtube.com/vi/n5J72h1j1B8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/n5J72h1j1B8?autoplay=1",
      title: "Hands-on learning in action at DYPU Ambi!",
      views: "15K"
    },
    {
      name: "Kabir Khan",
      role: "Game Development",
      image: "https://img.youtube.com/vi/FshqGG3a4JM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/FshqGG3a4JM?autoplay=1",
      title: "SEAS- Toolbox Inauguration Ceremony!",
      views: "21K"
    },
    {
      name: "Ananya Iyer",
      role: "Photography",
      image: "https://img.youtube.com/vi/OBgeKM8UjcY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/OBgeKM8UjcY?autoplay=1",
      title: "Seamedu was honoured to welcome Commonwealth medalist.",
      views: "42K"
    },
  ];

  const duplicatedStories = [...stories, ...stories, ...stories];

  useEffect(() => {
    setIsMounted(true);
    const calculateInitialX = () => {
      const gap = 32; // md: gap-8
      const isMobile = window.innerWidth < 640;
      const width = isMobile ? (window.innerWidth < 400 ? 260 : 280) : 320;
      const totalWidthOfOneSet = stories.length * (width + gap);
      x.set(-totalWidthOfOneSet);
    };
    calculateInitialX();
    window.addEventListener("resize", calculateInitialX);
    return () => window.removeEventListener("resize", calculateInitialX);
  }, [stories.length, x]);

  // Auto Scroll Logic
  useEffect(() => {
    if (!isMounted || isPaused || activeVideo) return;

    const interval = setInterval(() => {
      handleScroll("right");
    }, 4000);

    return () => clearInterval(interval);
  }, [isMounted, isPaused, activeVideo]);

  const handleScroll = (direction: "left" | "right") => {
    const gap = 32;
    const isMobile = window.innerWidth < 640;
    const width = isMobile ? (window.innerWidth < 400 ? 260 : 280) : 320;
    const scrollStep = width + gap;

    const currentPos = x.get();
    const target = direction === "right" ? currentPos - scrollStep : currentPos + scrollStep;
    
    // Snap to nearest card
    const snappedTarget = Math.round(target / scrollStep) * scrollStep;

    animate(x, snappedTarget, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8
    });
  };

  if (!isMounted) return null;

  return (
    <section className="bg-white py-12 font-inter relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-32 text-center relative z-10">
        
        {/* Title */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
            Events And <span className="text-blue-600">Updates</span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-center mt-4 text-md md:text-lg">
            Meet the talented individuals who have shaped their careers with Seamedu.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={constraintsRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div
            drag="x"
            style={{ x, width: "max-content" }}
            onUpdate={(latest) => {
              const curX = latest.x as number;
              const gap = 32;
              const isMobile = window.innerWidth < 640;
              const width = isMobile ? (window.innerWidth < 400 ? 260 : 280) : 320;
              const totalWidthOfOneSet = stories.length * (width + gap);

              if (curX <= -totalWidthOfOneSet * 2) {
                x.set(curX + totalWidthOfOneSet);
              } else if (curX >= -totalWidthOfOneSet * 0.5 && curX > 0) {
                x.set(curX - totalWidthOfOneSet);
              } else if (curX > 0) {
                x.set(curX - totalWidthOfOneSet);
              }
            }}
            onDragEnd={(_, info) => {
              const gap = 32;
              const isMobile = window.innerWidth < 640;
              const width = isMobile ? (window.innerWidth < 400 ? 260 : 280) : 320;
              const scrollStep = width + gap;
              
              const threshold = 50; 
              const velocityThreshold = 500;
              
              const currentX = x.get();
              const startIndex = Math.round((currentX - info.offset.x) / scrollStep);
              
              let targetIndex = startIndex;
              if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
                targetIndex = startIndex - 1;
              } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
                targetIndex = startIndex + 1;
              }
              
              animate(x, targetIndex * scrollStep, {
                type: "spring",
                bounce: 0,
                duration: 0.6
              });
            }}
            className="flex gap-6 sm:gap-8 pb-10 pt-4 px-4"
          >
            {duplicatedStories.map((story, index) => (
              <div 
                key={index} 
                onClick={() => {
                  if(story.videoUrl && activeVideo !== story.videoUrl) {
                    setActiveVideo(story.videoUrl);
                    setIsPaused(true);
                  }
                }}
                className="relative group overflow-hidden rounded-2xl bg-black aspect-[9/16] cursor-pointer flex-none w-[260px] sm:w-[280px] md:w-[320px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl select-none"
              >
                {activeVideo === story.videoUrl ? (
                  <>
                    <iframe 
                      src={story.videoUrl} 
                      className="absolute inset-0 w-full h-full z-[40] border-none bg-black"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen 
                    />
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setActiveVideo(null); 
                        setIsPaused(false); 
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white z-[50] hover:bg-white hover:text-black transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={story.image}
                      alt={story.name}
                      draggable={false}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 left-4 right-4 flex items-start space-x-2 z-20 pointer-events-none">
                      <div className="w-8 h-8 flex-shrink-0 bg-white rounded-full shadow-lg overflow-hidden border border-white/30">
                         <img src="https://yt3.ggpht.com/4AiDGdFXrWFfvnoKnuxcjS5Lovn3JxiUbUvhCaTKkbDRk1JphjZ8FiKm9_JFuItnf_zXV3_z=s176-c-k-c0x00ffffff-no-rj-mo" alt="Seamedu" draggable={false} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-white text-left leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] overflow-hidden">
                        <p className="text-[11px] sm:text-xs font-bold line-clamp-2">{story.title}</p>
                        <p className="text-[9px] sm:text-[10px] opacity-90 mt-0.5">Seamedu • {story.views} views</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 scale-95 group-hover:scale-110 transition-transform duration-300">
                      <div className="drop-shadow-2xl">
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-16 h-16 sm:w-20 sm:h-20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="#FF0000" d="M19.463 8.358c-.991-.453-1.636-.757-1.636-.757.545-.303 1.056-.632 1.54-.925 1.572-.924 2.115-2.894 1.252-4.5-.83-1.544-2.809-2.146-4.425-1.32-2.114 1.06-8.91 4.542-10.993 5.619C3.12 7.55 2.5 9.53 3.332 11.077c.56.924 1.556 1.487 2.458 1.623.14 0 .546.106.546.106-.56.32-1.071.65-1.54.94-1.572.923-2.115 2.893-1.252 4.499.83 1.544 2.81 2.146 4.426 1.32 2.113-1.06 8.909-4.543 10.992-5.62 2.083-1.076 2.704-3.056 1.872-4.603-.56-.924-1.556-1.488-2.458-1.624v.64h.087z"/>
                          <path fill="#FFFFFF" d="M9.544 14.502v-5.2l5.105 2.6z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20">
                      <div className="mx-4 relative pointer-events-none">
                        <div 
                          className="bg-white py-3 px-2 shadow-xl"
                          style={{
                            clipPath: "polygon(0% 15%, 5% 0%, 15% 12%, 25% 2%, 40% 15%, 60% 5%, 75% 18%, 90% 8%, 100% 15%, 100% 85%, 92% 95%, 78% 88%, 65% 98%, 45% 90%, 30% 97%, 15% 85%, 5% 95%, 0% 85%)"
                          }}
                        >
                          <h3 className="text-[#d4a056] font-bold text-base sm:text-lg leading-none truncate px-2">
                            {story.name}
                          </h3>
                          <p className="text-[#1a2b56] text-xs sm:text-sm font-semibold mt-1 truncate px-2">
                            {story.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;