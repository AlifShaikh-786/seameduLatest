"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";

export default function CourseSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="my-10 md:my-20  font-poppins relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
                        Our <span className="text-blue-600">Schools</span>
                    </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto text-md md:text-lg font-medium mt-4 leading-relaxed">
       Explore our diverse schools, each designed to build industry-ready skills and shape future careers.
          </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 w-full mb-10">
                    {courses.map((course, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial="initial"
                                animate={isMobile ? "hover" : "initial"}
                                whileHover={isMobile ? undefined : "hover"}
                                className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[440px] cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-slate-200/50"
                            >
                                {/* Background Image */}
                                <motion.img
                                    src={course.image}
                                    alt={course.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.05 }
                                    }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                />

                                {/* Bottom Overlay for Readability */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent"
                                    variants={{
                                        initial: { opacity: 0.8 },
                                        hover: { opacity: 1 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Content Container */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pb-6 sm:pb-8 flex flex-col justify-end"
                                    variants={{
                                        initial: { y: 0 },
                                        hover: { y: 0 }
                                    }}
                                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    <h3 className="text-xl sm:text-xl font-semibold text-white mb-1 drop-shadow-[0_2px_15px_rgba(0,0,0,1)] leading-tight">
                                        {course.name}
                                    </h3>

                                    <motion.div
                                        variants={{
                                            initial: { opacity: 0, height: 0, overflow: "hidden" },
                                            hover: { opacity: 1, height: "auto" }
                                        }}
                                        transition={{ duration: 0.4, delay: 0.15 }}
                                    >
                                        <div className="pt-2">
                                            <p className="text-white/95 text-[12px] sm:text-[14px] leading-snug mb-3 sm:mb-4 font-light drop-shadow-lg">
                                                {course.role || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."}
                                            </p>

                                            <Link href={(course as any).link || "#"}>
                                                <button className="flex items-center gap-3 bg-transparent border-[1.5px] border-blue-600 text-white font-medium py-1 pl-3 pr-1.5 sm:py-1.5 sm:pl-4 sm:pr-2 rounded-full transition-all duration-300 hover:bg-blue-600 group/btn shadow-xl">
                                                    <span className="text-md sm:text-sm">View Courses</span>
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center ml-auto">
                                                        <FaArrowRight size={12} />
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Ambient background elements */}
            <div className="absolute top-[15%] -left-32 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-0 opacity-40"></div>
            <div className="absolute bottom-[10%] -right-32 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-0 opacity-30"></div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
}