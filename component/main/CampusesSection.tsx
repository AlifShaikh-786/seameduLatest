"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const campusData = [
  {
    university: "The NorthCap University",
    location: "Gurugram",
    image: "/images/campuses-main/NorthCap.png",
    description: "A leading private university known for strong programs in engineering, management, and law. Focuses on innovation, research, and industry-aligned education.",
  },
  {
    university: "Ajeenkya DY Patil University Pune",
    location: "Pune",
    image: "/images/campuses-main/ajinkya.png",
    description: "An innovation-driven university focused on future-ready education and entrepreneurship. Offers modern infrastructure with strong industry integration.",
  },
  {
    university: "Techno India University",
    location: "Kolkata",
    image: "/images/campuses-main/Techno.png",
    description: "A well-known university offering programs in engineering, management, and sciences. Emphasizes practical learning and strong industry exposure.",
  },
  {
    university: "DY Patil University, Ambi",
    location: "Ambi, Pune",
    image: "/images/campuses-main/Ambi.png",
    description: "A modern campus with advanced facilities and a vibrant learning environment. Known for industry-focused programs and holistic development.",
  },
];

export default function CampusesSection() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* <h2 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">Where We Teach</h2> */}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
            Our <span className="text-blue-600">Campuses</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-md md:text-lg font-medium leading-relaxed">
            Join our world-class learning centers in collaboration with leading universities across India.
          </p>
        </div>

        {/* Campus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:px-20 md:mr-8 md:ml-8">
          {campusData.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group bg-white rounded-2xl overflow-hidden border  border-slate-100/80 shadow-sm flex flex-col ${index === campusData.length - 1 ? "md:col-start-2" : ""
                }`}
            >
              {/* Campus Image - Priority Layout */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image
                  src={campus.image}
                  alt={campus.university}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

              </div>

              {/* Compact Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {campus.university}
                </h4>
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-4">
                  <FaMapMarkerAlt size={10} className="text-blue-600" />
                  <span>{campus.location}</span>
                </div>

                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6 opacity-85">
                  {campus.description}
                </p>

                <div className="mt-auto">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-[10px] font-semibold uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 cursor-pointer shadow-md shadow-blue-200/50">
                    Explore <FaArrowRight size={10} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
