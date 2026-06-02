"use client";

import React from "react";
import Image from "next/image";

export default function WhyChoose() {
  const features = [
    {
      title: "Expert Faculty",
      description:
        "Learn from industry veterans and PhD scholars dedicated to your academic growth.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: "Modern Infrastructure",
      description:
        "High-tech labs, creative studios, and digital libraries built for the next generation.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Industry Aligned",
      description:
        "Curriculum designed with global leaders to ensure you are job-ready from day one.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V6a2 2 0 012-2h14a2 2 0 012 2v7.255z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          />
        </svg>
      ),
    },
    {
      title: "Value Based Education",
      description:
        "Get industry-standard training and global certifications that offer the best return on your investment.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-10 bg-white select-none border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Typography Content & Feature Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            {/* Header Content */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-sans  font-normal text-black tracking-tight">
                About{" "}
                <span className="font-sans font-black uppercase text-blue-600">
                  Us
                </span>
              </h2>
              <p className="text-black/50 max-w-xl font-normal text-sm md:text-base leading-relaxed tracking-wide pt-2">
                Empowering students with industry-grade skills, world-class
                facilities, and a legacy of excellence in creative media.
              </p>
            </div>

            {/* Features 2x2 Clean Minimal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-3 items-start text-left group"
                >
                  {/* Icon with Clean Monochromatic Borders */}
                  <div className="inline-flex items-center justify-center w-10 h-10 border border-black/10 text-black group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-base font-bold font-sans uppercase tracking-wider text-black">
                    {item.title}
                  </h3>

                  <p className="text-black/60 text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full-Height Image Presentation Window */}
          <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-full w-full bg-neutral-50 border border-black/5 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" // Replace with your exact asset path
              alt="Campus Life Infrastructure"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              sizes="(max-w-1024px) 100vw, 45vw"
            />
            {/* Design overlay tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
