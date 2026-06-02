"use client";

import React from "react";
import { FaGraduationCap, FaAward, FaNetworkWired } from "react-icons/fa";

export default function PremiumHeroSection() {
  return (
    <section className="relative bg-[#f8f9f8] w-full h-screen min-h-[650px] overflow-hidden flex items-center font-sans">
      {/* Soft background lighting gradient instead of harsh shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-slate-100/50 pointer-events-none" />

      {/* Main Wrapper Content Grid centered vertically within the screen height */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 pt-16 pb-24">
        {/* Left Content Area */}
        <div className="lg:col-span-7 flex flex-col pr-4">
          {/* Unified Clean Header */}
          <h1 className="text-[36px] sm:text-[46px] md:text-[56px] font-normal tracking-tight text-[#0f2942] leading-[1.15] mb-6">
            School Of Management{" "}
            <span className="text-[#0f2942]/30 font-light">|</span> <br />
            <span className="font-semibold uppercase tracking-tight text-[#003366]">
              Empowering Future Leaders
            </span>
          </h1>

          {/* Subtitle Description */}
          <div className="mb-10 max-w-[540px]">
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Innovation, Strategy, and Global Perspective for the Leaders of
              Tomorrow.
            </p>
          </div>

          {/* Clean Minimalist Pill Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 h-[48px] border border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white font-medium uppercase text-[11px] tracking-widest rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center bg-transparent">
              Explore Programs
            </button>
            <button className="px-8 h-[48px] border border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white font-medium uppercase text-[11px] tracking-widest rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center bg-transparent">
              Begin Journey
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area filled and aligned cleanly to the base row */}
        <div className="lg:col-span-5 pl-20 relative h-full flex items-end justify-end self-stretch">
          <div className="relative mt-36  w-full max-w-[720px] h-[155vh] max-h-[620px] overflow-hidden">
            <img
              src="/images/management_hero_v3.png"
              alt="Future Leaders collaborating"
              className="w-full h-full object-fill object-right-bottom mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Bottom Premium Trust Badges Bar fixed cleanly to screen base */}
      <div className="absolute bottom-0 inset-x-0 bg-white/60 backdrop-blur-md border-t border-slate-200/60 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-wrap items-center justify-start gap-x-28 gap-y-4">
          {/* Career Placements */}
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-3xl text-[#c5a880]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase leading-tight">
                Career Placements
              </span>
              <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
                100% Success
              </span>
            </div>
          </div>

          {/* NAAC Grade */}
          <div className="flex items-center gap-4">
            <FaAward className="text-3xl text-[#c5a880]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase leading-tight">
                NAAC Grade A
              </span>
              <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
                Accredited
              </span>
            </div>
          </div>

          {/* Partner Ecosystem */}
          <div className="flex items-center gap-4">
            <FaNetworkWired className="text-3xl text-[#c5a880]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase leading-tight">
                Partner Ecosystem
              </span>
              <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
                500+ Recruiters
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
