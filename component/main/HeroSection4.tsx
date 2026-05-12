"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

interface Panel {
    id: number;
    schoolName: string;
    title: string;
    description: string;
    image: string;
}

const panels: Panel[] = [
    {
        id: 1,
        schoolName: "School Of Media",
        title: "Build Skills for the Modern Digital Media Industry",
        description: "Experience world-class training in digital filmmaking, sound engineering, and photography. Our programs are designed to turn your creative passion into a professional career.",
        image: "/images/hero-section/Media.jpeg",
    },
    {
        id: 2,
        schoolName: "School Of Design",
        title: "Design the Future with Creativity & Innovation",
        description: "Master the art of visual communication, UI/UX, and graphic design. Build a portfolio that stands out in the global creative marketplace.",
        image: "/images/hero-section/Design.jpeg",
    },
    {
        id: 3,
        schoolName: "School Of Technology",
        title: "Build Powerful Digital Solutions for Tomorrow's World",
        description: "Dive into software development, game design, and emerging tech. Learn from industry experts and work on real-world projects that matter.",
        image: "/images/hero-section/Technology.jpeg",
    },
    {
        id: 4,
        schoolName: "School Of Management",
        title: "Industry-Focused Management Programs for Future Leaders",
        description: "Develop the leadership and strategic skills needed to excel in media and entertainment management. Lead the next generation of industry innovators.",
        image: "/images/hero-section/Management.jpeg",
    },
    {
        id: 5,
        schoolName: "School Of Hospitality",
        title: "Develop Skills for International Hospitality Careers",
        description: "Prepare for a global career in hospitality and event management. Gain hands-on experience and industry connections that open doors worldwide.",
        image: "/images/hero-section/Hospitality.jpeg",
    }
];

export default function HeroSection4() {
    const [activePanel, setActivePanel] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // AUTO SLIDE FOR MOBILE VERSION
    React.useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setActivePanel((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile, activePanel]);

    const desktopFlex = 20;
    const activeFlex = desktopFlex;
    const baseFlex = 1;

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white font-poppins text-slate-900">

            {/* DESKTOP/TABLET ACCORDION VIEW (lg and up) */}
            <div className="hidden lg:flex w-full h-full">
                {panels.map((panel, idx) => {
                    const isActive = activePanel === idx;

                    return (
                        <motion.div
                            key={panel.id}
                            onClick={() => setActivePanel(idx)}
                            animate={{
                                flex: isActive ? activeFlex : baseFlex,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className={`relative h-full cursor-pointer overflow-hidden border-r border-slate-100 group/panel ${isActive ? 'bg-white' : 'bg-slate-50/30 hover:bg-slate-50/50'}`}
                        >
                            {/* BACKGROUND IMAGE */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{ scale: isActive ? 1 : 1.1 }}
                                transition={{ duration: 6, ease: "linear" }}
                            >
                                <img
                                    src={panel.image}
                                    alt={panel.schoolName}
                                    className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-40 grayscale-[0.5]'}`}
                                />
                                <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent z-10" />
                                </div>
                                {!isActive && <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10" />}
                            </motion.div>

                            {/* CONTENT OVERLAY */}
                            <div className={`relative z-20 h-full flex flex-col justify-start ${isActive ? 'p-12 md:p-32 lg:p-24 pt-44' : 'p-0'} overflow-hidden`}>
                                <AnimatePresence mode="wait">
                                    {isActive && (
                                        <motion.div
                                            key="active-content"
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="w-full max-w-4xl"
                                        >
                                            <p className="text-blue-600 uppercase tracking-[0.4em] font-black mb-8 flex items-center gap-2 text-[10px] sm:text-xs">
                                                <span className="w-12 h-[1.5px] bg-blue-600/60 inline-block"></span>
                                                {panel.schoolName}
                                            </p>
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.2] sm:leading-[1.1] tracking-tight text-pretty mb-8">
                                                {panel.title}
                                            </h1>
                                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mb-12">
                                                {panel.description}
                                            </p>
                                            <button className="group/btn relative rounded-full bg-slate-900 overflow-hidden text-white transition-all duration-500 px-10 py-5 font-black text-sm tracking-widest uppercase shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 w-fit">
                                                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                                                <span className="relative z-10">Explore Programs</span>
                                                <FaChevronRight className="relative z-10 text-[11px] transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* MINIMIZED LABEL */}
                            {!isActive && (
                                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none p-2">
                                    <div className="flex flex-col items-center gap-6">
                                        <span className="text-[10px] font-black tracking-widest text-slate-400">0{panel.id}</span>
                                        <h3 className="text-slate-500 font-black uppercase text-[11px] tracking-widest group-hover/panel:text-slate-800 transition-colors duration-300 whitespace-nowrap" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                                            {panel.schoolName.replace(/School Of /i, "")}
                                        </h3>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    );
                })}
            </div>

            {/* MOBILE/TABLET SLIDER VIEW (Below lg, matching Hero2 Style) */}
            <div className="lg:hidden relative w-full h-[92%] bg-white flex flex-col">
                {/* ACTIVE SLIDE BACKGROUND */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={activePanel}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 h-full w-full"
                        >
                            <img src={panels[activePanel].image} className="w-full h-full object-cover" alt={panels[activePanel].schoolName} />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CONTENT */}
                <div className="relative z-20 flex-1 flex flex-col items-start justify-center px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePanel}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full"
                        >
                            <p className="text-blue-600 uppercase tracking-[0.4em] font-black mb-10 flex items-center gap-2 text-[10px]">
                                <span className="w-12 h-[1.5px] bg-blue-600/60 inline-block"></span>
                                {panels[activePanel].schoolName}
                            </p>
                            <h1 className="text-3xl font-bold text-slate-900 leading-[1.2] tracking-tight mb-10">
                                {panels[activePanel].title}
                            </h1>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-10">
                                {panels[activePanel].description}
                            </p>
                            <button className="group/btn relative rounded-full bg-slate-900 overflow-hidden text-white px-8 py-4 font-black text-xs tracking-widest uppercase shadow-xl flex items-center justify-center gap-3">
                                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                                <span className="relative z-10">Explore Programs</span>
                                <FaChevronRight className="relative z-10 text-[11px] transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* BOTTOM TAB NAVIGATION (MATCHING HERO2 DESKTOP/TABLET STYLE) */}
                <div className="relative z-30 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-slate-100 flex items-center overflow-x-auto no-scrollbar">
                    <div className="flex w-full min-w-max h-24">
                        {panels.map((panel, idx) => (
                            <div
                                key={panel.id}
                                onClick={() => setActivePanel(idx)}
                                className={`flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 h-full px-6 min-w-[140px] relative ${activePanel === idx ? "bg-slate-50/80" : "bg-white"}`}
                            >
                                <span className={`text-[9px] font-black tracking-[0.3em] mb-1 ${activePanel === idx ? "text-slate-900" : "text-slate-400"}`}>
                                    0{panel.id}
                                </span>
                                <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.1em] text-center ${activePanel === idx ? "text-blue-600" : "text-slate-500"}`}>
                                    {panel.schoolName.replace(/School Of /i, "")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}