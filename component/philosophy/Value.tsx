"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, Zap, Target, Users, BarChart3, GraduationCap, Handshake, Globe } from "lucide-react";

export default function PhilosophyValues() {
    const values = [
        {
            num: "01",
            title: "Global Collaboration",
            icon: <Globe className="w-6 h-6" />,
            desc: "Fostering worldwide partnerships to deliver world-class educational experiences and support mutual growth.",
        },
        {
            num: "02",
            title: "Academic Excellence",
            icon: <Star className="w-6 h-6" />,
            desc: "Committing to the highest standards of teaching, curriculum quality, and student outcomes.",
        },
        {
            num: "03",
            title: "Trusted Partnerships",
            icon: <Handshake className="w-6 h-6" />,
            desc: "Building transparent, reliable, and long-lasting relationships with academic and industry partners.",
        },
        {
            num: "04",
            title: "Student Success",
            icon: <GraduationCap className="w-6 h-6" />,
            desc: "Prioritizing the intellectual, personal, and professional development of every learner.",
        },
        {
            num: "05",
            title: "Unwavering Integrity",
            icon: <Shield className="w-6 h-6" />,
            desc: "Upholding strong moral and ethical principles in all our educational and business practices.",
        },
        {
            num: "06",
            title: "Continuous Innovation",
            icon: <Zap className="w-6 h-6" />,
            desc: "Embracing new technologies and progressive methodologies to stay ahead in modern education.",
        }
    ];

    return (
        <section className="py-20 bg-[#F8FAFC] relative">
            <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 mb-6 border border-blue-200/50">
                            <Handshake className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                                Our Core Values
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Empowering Education <br className="hidden md:block" /> Through <span className="text-blue-600">Shared Values</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600">
                            As an educational partner, our philosophy is rooted in collaboration, integrity, and a relentless pursuit of academic excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <ValueCard key={idx} val={val} idx={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ValueCard({ val, idx }: { val: any, idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {val.icon}
                </div>
                <span className="text-4xl font-extrabold text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                    {val.num}
                </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {val.title}
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
                {val.desc}
            </p>
        </motion.div>
    );
}
