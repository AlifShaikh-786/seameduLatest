"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Department = 'Hospitality' | 'Design' | 'Media' | 'Technology' | 'Management';

const CampusLife = () => {
  const [activeDept, setActiveDept] = useState<Department>('Hospitality');

  const departments: Department[] = ['Hospitality', 'Design', 'Media', 'Technology', 'Management'];

  // Map your images here for each department
  const departmentData: Record<Department, { main: string; mobile: { src: string; alt: string }[] }> = {
    Hospitality: {
      main: '/images/life-at-seamedu/hospitality.webp',
      mobile: [
        { src: '/images/life-at-seamedu/atithya-comp - Copy.webp', alt: 'Kitchen' },
        { src: '/images/life-at-seamedu/hospitality-studies-image.webp', alt: 'Serving' },
        { src: '/images/life-at-seamedu/international.webp', alt: 'Chef Training' },
        { src: '/images/life-at-seamedu/campus-life-image-1.webp', alt: 'Dining' },
      ]
    },
    Design: {
      main: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200',
      mobile: [
        { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600', alt: 'Graphic Design' },
        { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600', alt: 'VFX Work' },
        { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600', alt: 'UI/UX Design' },
        { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600', alt: 'Creative Studio' },
      ]
    },
    Media: {
      main: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200',
      mobile: [
        { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600', alt: 'Film Production' },
        { src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600', alt: 'Sound Lab' },
        { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600', alt: 'Cinematography' },
        { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600', alt: 'Photography' },
      ]
    },
    Technology: {
      main: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200',
      mobile: [
        { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600', alt: 'Coding' },
        { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600', alt: 'AI Research' },
        { src: 'https://images.unsplash.com/photo-1558494949-ef0109121c94?q=80&w=600', alt: 'Server Infrastructure' },
        { src: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600', alt: 'Tech Workspace' },
      ]
    },
    Management: {
      main: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200',
      mobile: [
        { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600', alt: 'Management Meeting' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600', alt: 'Strategy Session' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600', alt: 'Team Discussion' },
        { src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=600', alt: 'Corporate Seminar' },
      ]
    },
  };

  const nextDept = () => {
    const currentIndex = departments.indexOf(activeDept);
    const nextIndex = (currentIndex + 1) % departments.length;
    setActiveDept(departments[nextIndex]);
  };

  const prevDept = () => {
    const currentIndex = departments.indexOf(activeDept);
    const prevIndex = (currentIndex - 1 + departments.length) % departments.length;
    setActiveDept(departments[prevIndex]);
  };

  // Flatten all images for the infinite mobile slider
  const allImages = Object.values(departmentData).flatMap(dept => dept.mobile);
  const scrollingImages = [...allImages, ...allImages]; // Double for seamless loop

  return (
    <section className="w-full flex flex-col px-6 py-10 md:py-20 bg-blue-50/50 font-poppins overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Life At <span className="text-blue-600">Seamedu</span>
          </h2>
          <p className="text-slate-500 mt-4 text-md md:text-lg font-medium max-w-2xl text-center">
           Experience dynamic campus life at Seamedu, where practical learning, industry interaction, and personal growth come together.
          </p>
        </div>

        {/* Mobile Infinite Marquee Slider */}
        <div className="sm:hidden relative -mx-6  overflow-hidden">
          <div className="flex w-max items-center gap-4 animate-marquee-scroll py-4">
            {scrollingImages.map((image, idx) => (
              <div key={idx} className="shrink-0 w-[280px] aspect-[16/10] relative rounded-3xl overflow-hidden border-4 border-slate-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); } 
            }
            .animate-marquee-scroll {
              animation: marquee-scroll 40s linear infinite;
            }
          `}</style>
        </div>

        {/* Image Grid Section */}
        <div className="hidden sm:block relative max-w-[1320px] mx-auto px-10 rounded-3xl">
          
          {/* Slider Icons (Navigation) */}
          <button 
            onClick={prevDept}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-4 bg-white rounded-full text-slate-800 hover:scale-110 transition-transform hover:text-blue-600 border border-slate-50"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextDept}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-4 bg-white rounded-full text-slate-800 hover:scale-110 transition-transform hover:text-blue-600 border border-slate-50"
          >
            <ChevronRight size={28} />
          </button>

          <div className="grid grid-cols-12 gap-2 min-h-[500px]">
            {/* Top Row */}
            <div className="col-span-7 relative h-[320px] overflow-hidden border-4 border-slate-50 group rounded-3xl">
              <Image
                src={departmentData[activeDept].mobile[0].src}
                alt={departmentData[activeDept].mobile[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="col-span-5 relative h-[320px] overflow-hidden border-4 border-slate-50 group rounded-3xl">
              <Image
                src={departmentData[activeDept].mobile[1].src}
                alt={departmentData[activeDept].mobile[1].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Row - Inverted Proportions */}
            <div className="col-span-5 relative h-[320px] overflow-hidden border-4 border-slate-50 group rounded-3xl">
              <Image
                src={departmentData[activeDept].mobile[2].src}
                alt={departmentData[activeDept].mobile[2].alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="col-span-7 relative h-[320px] overflow-hidden border-4 border-slate-50 group rounded-3xl">
              <Image
                src={departmentData[activeDept].mobile[3].src}
                alt={departmentData[activeDept].mobile[3].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CampusLife;