// "use client";

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
//   FaArrowRight,
// } from "react-icons/fa";

// export default function HowToReachUs() {
//   const mapEmbedUrl = "http://googleusercontent.com/maps.google.com/6";
//   const googleMapsDirectionsUrl =
//     "http://googleusercontent.com/maps.google.com/7";

//   return (
//     <section
//       id="reach-us"
//       className="py-20 lg:py-28 bg-white border-b border-black/5 select-none"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
//           {/* Left Content: Premium Minimal Typography & Details */}
//           <div className="lg:col-span-5 space-y-12">
//             <div>
//               <span className="text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase block mb-3">
//                 Connect With Us
//               </span>
//               <h2 className="text-3xl md:text-4xl font-serif font-normal text-black tracking-tight leading-tight">
//                 How to{" "}
//                 <span className="font-sans font-black uppercase text-blue-600">
//                   Reach Us
//                 </span>
//               </h2>
//               <p className="mt-4 text-black/60 text-sm md:text-base font-normal max-w-md leading-relaxed">
//                 Connect with our Pune hub for admissions, corporate
//                 partnerships, or a personalized campus walkthrough.
//               </p>
//             </div>

//             {/* Structured Contact Rows */}
//             <div className="space-y-8 border-t border-black/5 pt-8">
//               {/* Address */}
//               <div className="flex gap-5 items-start group">
//                 <div className="w-5 h-5 mt-1 text-blue-600 shrink-0 transition-transform group-hover:scale-110">
//                   <FaMapMarkerAlt size={16} />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold uppercase tracking-wider text-black/40 mb-1">
//                     Campus Address
//                   </h4>
//                   <p className="text-black text-[14px] font-medium leading-relaxed max-w-sm">
//                     Charoli Bk. via Lohegaon, Pune – 412 105, Maharashtra,
//                     India.
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex gap-5 items-start group">
//                 <div className="w-5 h-5 mt-1 text-blue-600 shrink-0 transition-transform group-hover:scale-110">
//                   <FaPhoneAlt size={15} />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold uppercase tracking-wider text-black/40 mb-1">
//                     Admissions Helpline
//                   </h4>
//                   <a
//                     href="tel:+919168067022"
//                     className="text-black text-[14px] font-semibold hover:text-blue-600 transition-colors"
//                   >
//                     +91 9168067022
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex gap-5 items-start group">
//                 <div className="w-5 h-5 mt-1 text-blue-600 shrink-0 transition-transform group-hover:scale-110">
//                   <FaEnvelope size={15} />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold uppercase tracking-wider text-black/40 mb-1">
//                     Email Queries
//                   </h4>
//                   <a
//                     href="mailto:info@seamedu.com"
//                     className="text-black text-[14px] font-semibold hover:text-blue-600 transition-colors break-all"
//                   >
//                     info@seamedu.com
//                   </a>
//                 </div>
//               </div>

//               {/* Timings */}
//               <div className="flex gap-5 items-start">
//                 <div className="w-5 h-5 mt-1 text-blue-600 shrink-0">
//                   <FaClock size={15} />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold uppercase tracking-wider text-black/40 mb-1">
//                     Working Hours
//                   </h4>
//                   <p className="text-black text-[14px] font-medium">
//                     9:00 AM – 6:00 PM{" "}
//                     <span className="text-black/40 text-xs ml-1">
//                       (Monday – Friday)
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Premium Text Action Button */}
//             <a
//               href={googleMapsDirectionsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-blue-600 transition-colors group pt-4"
//             >
//               <span>Plan your visit</span>
//               <FaArrowRight
//                 size={11}
//                 className="transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600"
//               />
//             </a>
//           </div>

//           {/* Right Content: Premium Frame Map Container */}
//           <div className="lg:col-span-7 w-full h-[450px] lg:h-[520px]">
//             <div className="w-full h-full bg-white rounded-lg overflow-hidden border border-black/10 p-2 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
//               <div className="w-full h-full rounded-[4px] overflow-hidden relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
//                 <iframe
//                   src={mapEmbedUrl}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";

type TabType = "CLIMATE" | "GET DIRECTIONS" | "HOW TO REACH PUNE";

export default function HowToReachUs() {
  const [activeTab, setActiveTab] = useState<TabType>("GET DIRECTIONS");

  return (
    <section className="py-16 md:py-10 bg-white select-none border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Premium Tab Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center border-b border-black/10 pb-4 mb-10 gap-4 sm:gap-0">
          {/* Tab 1: Climate */}
          <button
            onClick={() => setActiveTab("CLIMATE")}
            className="w-full sm:w-auto relative px-8 py-2 text-sm font-sans font-black tracking-widest transition-colors duration-300"
          >
            <span
              className={
                activeTab === "CLIMATE"
                  ? "text-blue-600"
                  : "text-black hover:text-black/40"
              }
            >
              CLIMATE
            </span>
            {activeTab === "CLIMATE" && (
              <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-blue-600 animate-fade-in" />
            )}
          </button>

          {/* Divider line visible on desktop */}
          <div className="hidden sm:block h-4 w-[1px] bg-black/20" />

          {/* Tab 2: Get Directions */}
          <button
            onClick={() => setActiveTab("GET DIRECTIONS")}
            className="w-full sm:w-auto relative px-8 py-2 text-sm font-sans font-black tracking-widest transition-colors duration-300"
          >
            <span
              className={
                activeTab === "GET DIRECTIONS"
                  ? "text-blue-600"
                  : "text-black hover:text-black/40"
              }
            >
              GET DIRECTIONS
            </span>
            {activeTab === "GET DIRECTIONS" && (
              <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-blue-600 animate-fade-in" />
            )}
          </button>

          {/* Divider line visible on desktop */}
          <div className="hidden sm:block h-4 w-[1px] bg-black/20" />

          {/* Tab 3: How to Reach Pune */}
          <button
            onClick={() => setActiveTab("HOW TO REACH PUNE")}
            className="w-full sm:w-auto relative px-8 py-2 text-sm font-sans font-black tracking-widest transition-colors duration-300"
          >
            <span
              className={
                activeTab === "HOW TO REACH PUNE"
                  ? "text-blue-600"
                  : "text-black hover:text-black/40"
              }
            >
              HOW TO REACH PUNE
            </span>
            {activeTab === "HOW TO REACH PUNE" && (
              <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-blue-600 animate-fade-in" />
            )}
          </button>
        </div>

        {/* Tab Content Display Window */}
        <div className="min-h-[220px] transition-all duration-300 ease-in-out">
          {activeTab === "CLIMATE" && (
            <div className="space-y-6 text-black/80 text-sm md:text-base font-normal leading-relaxed tracking-wide">
              <p>
                The climate of Pune is quite pleasant. Pune has three distinct
                seasons: summer, monsoon and winter. Summers are typically hot
                with maximum temperatures ranging from 35 to 42°C. The warmest
                month in Pune is generally April as compared to the rest of the
                Deccan Plateau where it is May.
              </p>
              <p>
                Pune does not get very hot, even during peak summer the air is
                cool and even standing under a tree can give respite from the
                heat. However, as sunlight can be intense leading to skin tan
                and sun-burn, be sure to carry and use sunscreens (above
                SPF-30). The nights in Pune are significantly cooler than most
                other parts in this region owing to its high altitude.
              </p>
            </div>
          )}

          {activeTab === "GET DIRECTIONS" && (
            <div className="space-y-6 text-black/80 text-sm md:text-base font-normal leading-relaxed tracking-wide animate-fade-in">
              <p>
                Designed as an ecosystem for creation and discovery, the campus
                combines brutalist structural integrity with open, light-filled
                spaces that encourage collaboration. The architecture features
                high-ceilinged design studios, sound-isolated mixing suites, and
                transparent communal zones that blur the line between focused
                learning and social connection. Every corner of the space is
                meticulously planned to optimize creative workflow,
                technological research, and spontaneous peer-to-peer discussion.
              </p>
              <div className="pt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-blue-600 transition-colors duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          )}

          {activeTab === "HOW TO REACH PUNE" && (
            <div className="space-y-6 text-black/80 text-sm md:text-base font-normal leading-relaxed tracking-wide animate-fade-in">
              <p>
                <strong>By Air:</strong> Pune International Airport (PNQ)
                connects directly with major national and corporate transport
                networks. Alternatively, Mumbai's Chhatrapati Shivaji Maharaj
                International Airport is located approximately 3 hours away via
                the Expressway.
              </p>
              <p>
                <strong>By Rail & Road:</strong> Pune Junction functions as the
                central nervous hub for interstate express train lines.
                Comprehensive luxury bus connections operate 24/7 along the
                Mumbai-Pune Expressway corridors.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
