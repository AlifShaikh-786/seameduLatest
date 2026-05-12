"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ArrowRight } from 'lucide-react';

const faqs = [
    {
        question: "What courses does Seamedu offer?",
        answer: "Seamedu offers a wide range of Undergraduate (UG) and Postgraduate (PG) programs across Media, Technology, Management, Design and Hospitality. With multiple specialized courses to choose from, there's a program suited for almost every creative and technical career path."
    },
    
    {
        question: "Where are Seamedu's campuses located?",
        answer: "Seamedu has campuses in Pune, Gurugram, and Kolkata. Affiliated with Ajeenkya D Y Patil University, D Y Patil University (Ambi), The NorthCap University, and Techno India University. All four cities have strong and active industries across media, design, technology, management and Hospitality, which directly benefits students through internships, placements, and industry exposure."
    },
    {
        question: "What is the minimum qualification to apply?",
        answer: "For UG programs, the minimum requirement is completion of Class 12. Eligibility varies by course, some programs are open to all streams while others require a Science background. For PG programs, a relevant bachelor's degree is required. Check the specific course page or speak with our counsellor to confirm eligibility for your chosen program."
    },
    {
        question: "How do I apply to Seamedu?",
        answer: "You can apply by filling out the application form on our website or click here to apply. Once submitted, our counsellor will reach out to guide you through the next steps including document submission and interview scheduling."
    },
    {
        question: "What is the fee structure? Are scholarships available?",
        answer: "Fee structures vary by program and campus. Please get in touch with our admissions team for a detailed fee breakup specific to your chosen program."
    },
    {
        question: "Who will teach me at Seamedu?",
        answer: "Our faculty consists of experienced industry professionals, ensuring students get real-world perspective and strong academic grounding. Many faculty members continue to work on live industry projects alongside teaching."
    },
    {
        question: "What facilities does Seamedu offer?",

        answer: "Seamedu campuses are equipped with professional-grade labs, studios, and workspaces that mirror real industry environments — giving students hands-on experience from day one of their program."
    },
     {
        question: "What are the career outcomes for Seamedu graduates?",

        answer: "Seamedu has a dedicated placement cell that actively connects students with leading companies across their respective industries. Our graduates have gone on to work with some of the biggest names in media, technology, management, design and hospitality."
    },
     {
        question: "What makes Seamedu different from other colleges?",

        answer: "Seamedu's strength lies in its industry-integrated curriculum, professional infrastructure, hands-on learning from Year 1, and strong placement support. Students graduate with real skills and a portfolio that helps them in the real world."
    }
];

export default function FAQsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden font-sans border-b border-slate-50">
            {/* Decorative background gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-6 relative z-10 flex flex-col items-center">

                {/* Title - Modern Institutional Style */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
                        Got <span className="text-blue-600">Questions?</span>
                    </h2>
                </div>

                {/* FAQ Grid - Split into two independent columns for masonry effect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start w-full">
                    {/* Left Column */}
                    <div className="flex flex-col gap-5">
                        {faqs.filter((_, i) => i % 2 === 0).map((faq, index) => {
                            const actualIndex = index * 2;
                            return (
                                <motion.div
                                    key={actualIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group relative overflow-hidden bg-white border transition-all duration-300 rounded-3xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] ${openIndex === actualIndex
                                        ? "border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.08)]"
                                        : "border-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                                        className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 select-none relative z-10"
                                    >
                                        <div className="flex items-center gap-5">
                                            <h4 className={`text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors duration-300 ${openIndex === actualIndex ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                                                }`}>
                                                {faq.question}
                                            </h4>
                                        </div>
                                        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === actualIndex ? "bg-blue-600 border-blue-600 text-white rotate-[135deg]" : "border-slate-100 text-slate-400"
                                            }`}>
                                            <Plus size={16} />
                                        </div>
                                    </button>

                                    <AnimatePresence mode="wait">
                                        {openIndex === actualIndex && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                                            >
                                                <div className="px-8 pb-8 text-slate-500 text-[14px] font-medium leading-relaxed">
                                                    <div className="pt-4 border-t border-slate-50">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5">
                        {faqs.filter((_, i) => i % 2 !== 0).map((faq, index) => {
                            const actualIndex = index * 2 + 1;
                            return (
                                <motion.div
                                    key={actualIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                    className={`group relative overflow-hidden bg-white border transition-all duration-300 rounded-3xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] ${openIndex === actualIndex
                                        ? "border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.08)]"
                                        : "border-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                                        className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 select-none relative z-10"
                                    >
                                        <div className="flex items-center gap-5">
                                            <h4 className={`text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors duration-300 ${openIndex === actualIndex ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                                                }`}>
                                                {faq.question}
                                            </h4>
                                        </div>
                                        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === actualIndex ? "bg-blue-600 border-blue-600 text-white rotate-[135deg]" : "border-slate-100 text-slate-400"
                                            }`}>
                                            <Plus size={16} />
                                        </div>
                                    </button>

                                    <AnimatePresence mode="wait">
                                        {openIndex === actualIndex && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                                            >
                                                <div className="px-8 pb-8 text-slate-500 text-[14px] font-medium leading-relaxed">
                                                    <div className="pt-4 border-t border-slate-50">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}

                        {/* CTA Card - Perfectly Aligned */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-5 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group  transition-all cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-48 h-40 bg-blue-100/30 rounded-full -mr-24  blur-3xl group-hover:scale-150 transition-transform duration-700" />

                            <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                                <h5 className="text-slate-900 text-lg font-semibold tracking-tight">Still have questions?</h5>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">We're here to help you 24/7</p>
                            </div>

                            <button className="shrink-0 w-48 md:w-52 sm:w-auto  py-3.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 relative z-10">
                                Contact Support
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Clean bottom safety section to prevent background bleeding */}
            <div className="h-12 w-full bg-white relative z-10" />
        </section>
    );
}