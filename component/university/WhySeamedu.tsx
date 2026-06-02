"use client";

import React from "react";
import {
  FaBuildingShield,
  FaGraduationCap,
  FaBriefcase,
  FaSpellCheck,
  FaCalendarCheck,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const stats = [
  {
    title: "#1",
    subtitle: "State-of-the-art Infrastructure",
    icon: FaBuildingShield,
  },
  {
    title: "2000+",
    subtitle: "Students Successfully Placed",
    icon: FaBriefcase,
  },
  {
    title: "80+",
    subtitle: "Industry Partners",
    icon: HiSparkles,
  },
  {
    title: "95%",
    subtitle: "Secured Employment",
    icon: FaSpellCheck,
  },
  {
    title: "25 Yrs",
    subtitle: "Academic Excellence",
    icon: FaGraduationCap,
  },
  {
    title: "20+",
    subtitle: "Transformational Events",
    icon: FaCalendarCheck,
  },
];

export default function WhySeamedu() {
  return (
    <section className="relative py-20 bg-white font-sans overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        {/* Heading Block */}
        <div className="flex flex-col items-center mb-16 text-center">
          {/* <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
            Our Legacy
          </span> */}
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight max-w-3xl">
            AJEENKYA DY PATIL UNIVERSITY
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 tracking-tight leading-tight max-w-3xl">
            Why is #1 ?
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-6 max-w-2xl font-medium leading-relaxed">
            Empowering future innovators with world-class education, industry
            exposure, and exceptional career outcomes.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center h-full"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="text-xl" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-[11px] md:text-xs font-semibold text-slate-500 leading-tight">
                  {item.subtitle}
                </p>

                {/* Subtle Hover Accent */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
