"use client";

import React from "react";

const certifications = [
  {
    name: "PMP",
    logo: "/images/certifications-images/project-management-institute.svg",
  },
  {
    name: "Six Sigma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Six_Sigma_Logo.svg",
  },
  {
    name: "Agile ACP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Agile_Software_Development_logo.svg",
  },
  {
    name: "Scrum Master",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_org_logo.svg",
  },
  {
    name: "Google Management",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  },
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  { name: "Microsoft", logo: "/images/certifications-images/microsoft.svg" },
  { name: "Cisco", logo: "/images/certifications-images/cisco.svg" },
  { name: "IBM", logo: "/images/certifications-images/ibm.svg" },
];

export default function Certificates() {
  // Large pool for seamless infinite scroll
  const marqueeItems = [
    ...certifications,
    ...certifications,
    ...certifications,
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Simplified Centered Title Section */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h3 className="flex items-center justify-center gap-2 text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
            <span>Certifications</span>
            <span className="text-blue-600 not-italic"> Offered</span>
          </h3>
        </div>
      </div>

      {/* Horizontal Scroll / Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-center gap-16 md:gap-24 animate-marquee w-max select-none">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${item.name.charAt(0)}&background=f8f9fa&color=334155&bold=true&size=100`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
