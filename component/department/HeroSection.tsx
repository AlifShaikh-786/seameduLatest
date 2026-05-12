"use client";

import React from "react";
import { FaGraduationCap, FaStar, FaUsers } from "react-icons/fa";

export default function HeroSections() {
    return (
        <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Subtle Professional Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content Area (7 Columns) */}
                <div className="lg:col-span-7 flex flex-col z-10 flex-1">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">Leading Management Education</span>
                        <div className="h-[1px] w-12 bg-blue-600/30"></div>
                    </div>

                    <h1 className="flex flex-col mb-10 leading-[0.95] select-none text-slate-900">
                        <span className="text-[44px] sm:text-[54px] md:text-[64px] font-black tracking-tighter mb-4">
                            School Of
                        </span>
                        <span className="text-[62px] sm:text-[84px] md:text-[96px] font-[900] text-blue-600 tracking-tighter -mt-2 sm:-mt-5">
                            Management
                        </span>
                    </h1>

                    <div className="mb-12 max-w-[620px]">
                        <p className="text-base sm:text-lg font-medium font-poppins text-slate-500 leading-relaxed pl-6 border-l-4 border-blue-600">
                            Empowering future business leaders with innovation, strategy, and global perspective.
                            Industry-ready programs designed to build tomorrow&apos;s strategic visionaries.
                        </p>
                    </div>

                    {/* Buttons Row - Fixed 200px Width */}
                    <div className="flex flex-wrap gap-4 mb-20">
                        <button className="w-[200px] h-[51px] bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[12px] tracking-widest rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                            Explore Now
                        </button>
                        <button className="w-[200px] h-[51px] border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600 font-black uppercase text-[12px] tracking-widest rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center">
                            Apply Now
                        </button>
                    </div>

                    {/* Badge Row (Desktop/Tablet) - Forced One Line */}
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                        <div className="flex items-center gap-3">
                            <FaGraduationCap className="text-2xl text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-[13px] font-black text-slate-900 leading-none uppercase">Placement</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-widest">100% ASSISTANCE</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaStar className="text-2xl text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-[13px] font-black text-slate-900 leading-none uppercase">NAAC GRADE</span>
                                <span className="text-[10px) font-bold text-slate-400 tracking-widest">ACCREDITED</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaUsers className="text-2xl text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-[13px] font-black text-slate-900 leading-none uppercase">Partners</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-widest">500+ RECRUITERS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual Area */}
                <div className="lg:col-span-5 relative lg:translate-x-8 xl:translate-x-20">
                    <div className="relative w-full aspect-square max-w-[480px] mx-auto lg:ml-auto">

                        {/* Structured Background Shapes */}
                        <div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform -rotate-3 scale-105" />
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] transform rotate-3 scale-100" />

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/images/management_hero_v3.png"
                                alt="Future Leaders"
                                className="w-full h-full object-cover"
                            />
                            {/* Bottom Inner Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}
