"use client";
import React from "react";

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
  // {
  //   name: "Harsh Gaur",
  //   company: "Jaro Education",
  //   image:
  //     "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
  //   companyLogo: "/images/HighringPatners/cohesity.webp",
  // },
  // {
  //   name: "Pavan Kulkarni",
  //   company: "IntervueVet Technologies Pvt Ltd",
  //   image:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  //   companyLogo: "/images/HighringPatners/cognizant.webp",
  // },
];

export default function PlacementGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header section */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
          Our Placements <span className="text-blue-600">Highlights</span>
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Meet our talented alumni making an impact globally.
        </p>
      </div>

      {/* Grid Container: Responsive layout that hits exactly 4 items on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placementData.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Premium overlay badge for Company Name */}
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/80 px-3 py-2 backdrop-blur-md border border-white/20">
                {/* <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Placed at
                </p> */}
                <p className="text-sm font-bold text-gray-800 truncate">
                  {item.name}
                </p>
              </div>
            </div>

            {/* Bottom Info details */}
            <div className="mt-4 flex  flex-col items-center justify-between  px-1">
              <div>
                {/* <p className="text-sm font-bold text-gray-800 truncate">
                  {item.name}
                </p> */}
              </div>
              <div className="flex items-center justify-between h-10  gap-12">
                <div className="truncate">
                  <h3 className="font-normal text-gray-900 text-md tracking-tight group-hover:text-indigo-600 transition-colors">
                    {/* {item.name} */} Placed At
                  </h3>
                </div>

                {/* Company Logo container */}
                <div className="flex h-10 w-24 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 p-1 shadow-inner">
                  <img
                    src={item.companyLogo}
                    alt={`${item.company} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      // Fallback if logo path doesn't load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
