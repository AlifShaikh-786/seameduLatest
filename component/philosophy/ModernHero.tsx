"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe2, Target, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function ModernHero() {
    return (
        <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
            {/* Minimal Background Styling */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
            <div className="absolute -right-[10%] top-[10%] w-[40%] h-[60%] bg-blue-100/30 blur-3xl rounded-full pointer-events-none" />
            
            <div className="container mx-auto max-w-[1320px] px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Text and Mission Points */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">
                                Educational Partner
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Shaping the <span className="text-blue-600">Future</span> of Creative Education
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-600 mb-12 max-w-xl leading-relaxed"
                        >
                            Our mission is to establish a globally recognized academic ecosystem that cultivates pioneers in creative tech, integrating ethics and industry standards into curriculum delivery.
                        </motion.p>

                        <div className="flex flex-col gap-8 max-w-lg">
                            {[
                                {
                                    icon: <BookOpen className="w-6 h-6" />,
                                    title: "Industry-Anchored Curriculum",
                                    desc: "Providing cutting-edge educational systems tailored for global relevance."
                                },
                                {
                                    icon: <Globe2 className="w-6 h-6" />,
                                    title: "Global Excellence",
                                    desc: "Fostering a design mindset integrated with international standards."
                                },
                                {
                                    icon: <Target className="w-6 h-6" />,
                                    title: "Career-Driven Outcomes",
                                    desc: "Focusing on placement readiness and high-end portfolio development."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-snug">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Presentation */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[500px] lg:max-w-[550px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/philosophy/Hero-Image.webp"
                                alt="Educational Partnership Mission"
                                fill
                                className="object-cover"
                                priority
                            />
                            
                            {/* Simple elegant overlay grading */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                            {/* Floating Information Block */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-white/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                                            2000+ Placements
                                        </h4>
                                        <p className="text-sm text-slate-500 font-medium mt-1">
                                            Preferred Educational Network
                                        </p>
                                    </div>
                                    <div className="ml-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Decorative background pattern for image */}
                        <div className="absolute -z-10 top-8 -right-8 w-full max-w-[500px] lg:max-w-[550px] aspect-[4/5] rounded-[2rem] border-2 border-blue-100/60 hidden sm:block" />
                    </div>

                </div>
            </div>
        </section>
    );
}
