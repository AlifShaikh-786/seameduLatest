"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function LeadershipSection() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#2563eb 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 blur-[150px] rounded-full opacity-60" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-50 blur-[150px] rounded-full opacity-60" />

            <div className="max-w-6xl mx-auto px-8 relative z-10 space-y-32">
                {/* ================= SECTION 1: DR. SUSHANT PATIL ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    id="sushant-patil"
                    className="scroll-mt-32"
                >
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 56 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-[2px] bg-blue-600 rounded-full"
                            ></motion.span>
                            <span className="text-[12px] font-black text-blue-600 uppercase tracking-[5px] drop-shadow-sm">Visionary Leadership</span>
                        </div>
                        <h2 className="text-[32px] md:text-[45px] text-slate-900 font-black tracking-tighter leading-none">
                            MESSAGE FROM <span className="text-blue-600 relative inline-block group/title">
                                THE CHAIRMAN
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100/50 rounded-full origin-left"
                                />
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
                        <div className="relative flex flex-col items-start group/card">
                            <div className="relative w-full aspect-[4/5] max-w-[340px]">
                                {/* Floating Experience Badge */}
                                {/* <motion.div 
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-[24px] shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-30 flex flex-col items-center border border-white/50"
                                >
                                    <span className="text-blue-600 font-black text-2xl leading-none">20+</span>
                                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-tighter mt-1">Exp. Years</span>
                                </motion.div> */}

                                <div className="w-full h-full rounded-[48px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(37,99,235,0.2)] bg-slate-50 border-[10px] border-white relative z-10 transition-all duration-700 group-hover/card:shadow-[0_60px_110px_-20px_rgba(37,99,235,0.3)] group-hover/card:scale-[1.03] group-hover/card:-rotate-1">
                                    <Image
                                        src="/images/about-us/sushant-patil.png"
                                        alt="Dr. Sushant Patil"
                                        fill
                                        className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 brightness-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>

                            <div className="mt-8 text-left w-full max-w-[340px]">
                                <motion.h4
                                    className="font-black text-3xl text-slate-900 tracking-tight leading-none mb-2"
                                >
                                    Dr. Sushant Patil
                                </motion.h4>
                                <p className="text-[15px] font-bold text-blue-600 uppercase tracking-[3px]">
                                    Chairman, Seamedu
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 pt-6">
                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                At <strong className="text-slate-900 font-black">Seamedu School of Pro-Expressionism</strong>, we believe that education must evolve as rapidly as the industry it serves. Since 2008, our mission has been to bridge the gap between academic theory and practical, industry-standard skillsets.
                            </p>

                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                We are committed to nurturing the next generation of creative and technical leaders. By providing state-of-the-art facilities and mentorship, we ensure our students don't just graduate, but emerge as pioneers in their chosen fields.
                            </p>

                            <div className="relative py-4 mt-6">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-0 top-0 w-2 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                />
                                <blockquote className="text-[19px] text-slate-800 leading-relaxed text-justify italic pl-10 pr-8 relative bg-blue-50/30 backdrop-blur-sm rounded-r-[32px] py-8 border border-blue-100/50">
                                    <span className="absolute left-4 top-2 text-7xl text-blue-200/50 font-serif leading-none select-none">"</span>
                                    <em>
                                        Our vision is to empower young minds with the <strong className="text-blue-600 font-extrabold">right tools and mindset</strong> to navigate the complexities of the modern workforce, preparing them for <strong className="text-blue-600 font-extrabold">future-ready careers</strong>.
                                    </em>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ================= SECTION 2: ANUJA PATIL ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    id="anuja-patil"
                    className="scroll-mt-32"
                >
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                            <span className="text-[12px] font-black text-blue-600 uppercase tracking-[5px] drop-shadow-sm">Strategic Growth</span>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 56 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-[2px] bg-blue-600 rounded-full"
                            ></motion.span>
                        </div>
                        <h2 className="text-[32px] md:text-[45px] text-slate-900 font-black tracking-tighter leading-none md:text-right">
                            MESSAGE FROM <span className="text-blue-600 relative inline-block group/title">
                                THE MD
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="absolute -bottom-2 right-0 w-full h-1.5 bg-blue-100/50 rounded-full origin-right"
                                />
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                        {/* Text Side */}
                        <div className="order-2 md:order-1 flex flex-col gap-8 pt-6">
                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                The strength of an educational institution lies in its ability to adapt and provide <strong className="text-slate-900 font-black">sustainable career paths</strong>. At Seamedu, we focus on a curriculum that is deeply rooted in contemporary industry needs.
                            </p>

                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                We prioritize <strong className="text-blue-600 font-extrabold">holistic development</strong>, ensuring our students possess both technical prowess and the management acumen to excel globally. Our commitment is to bridge the gap between passion and profession effectively.
                            </p>

                            <div className="relative py-4 mt-6 ml-auto">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 1 }}
                                    className="absolute right-0 top-0 w-2 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                />
                                <blockquote className="text-[19px] text-slate-800 leading-relaxed text-justify italic pr-10 pl-8 relative bg-blue-50/30 backdrop-blur-sm rounded-l-[32px] py-8 md:text-right border border-blue-100/50">
                                    <span className="absolute right-4 top-2 text-7xl text-blue-200/50 font-serif leading-none select-none opacity-50 transform rotate-180">"</span>
                                    <em>
                                        Our mission is to foster a culture of <strong className="text-blue-600 font-extrabold">continuous learning</strong>, empowering our students to lead with confidence and creativity in the global market.
                                    </em>
                                </blockquote>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 md:order-2 relative flex flex-col items-center md:items-end group/card">
                            <div className="relative w-full aspect-[4/5] max-w-[340px]">
                                {/* Floating Badge */}
                                {/* <motion.div 
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 bg-blue-600 text-white px-6 py-5 rounded-[24px] shadow-[0_20px_50px_rgba(37,99,235,0.25)] z-30 flex flex-col items-center border border-blue-400"
                                >
                                    <span className="font-black text-2xl leading-none">Global</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest mt-1">Standards</span>
                                </motion.div> */}

                                <div className="w-full h-full rounded-[48px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(37,99,235,0.2)] bg-slate-50 border-[10px] border-white relative z-10 transition-all duration-700 group-hover/card:shadow-[0_60px_110px_-20px_rgba(37,99,235,0.3)] group-hover/card:scale-[1.03] group-hover/card:rotate-1">
                                    <Image
                                        src="/images/about-us/anuja-patil.png"
                                        alt="Mrs. Anuja Patil"
                                        fill
                                        className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 brightness-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>

                            <div className="mt-8 text-left md:text-right w-full max-w-[340px]">
                                <motion.h4
                                    className="font-black text-3xl text-slate-900 tracking-tight leading-none mb-2"
                                >
                                    Mrs. Anuja Patil
                                </motion.h4>
                                <p className="text-[15px] font-bold text-blue-600 uppercase tracking-[3px]">
                                    Managing Director, Seamedu
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ================= SECTION 3: AJAY THOMAS ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    id="ajay-thomas"
                    className="scroll-mt-32"
                >
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 56 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-[2px] bg-blue-600 rounded-full"
                            ></motion.span>
                            <span className="text-[12px] font-black text-blue-600 uppercase tracking-[5px] drop-shadow-sm">Operational Excellence</span>
                        </div>
                        <h2 className="text-[32px] md:text-[45px] text-slate-900 font-black tracking-tighter leading-none">
                            MESSAGE FROM <span className="text-blue-600 relative inline-block group/title">
                                THE COO
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100/50 rounded-full origin-left"
                                />
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
                        <div className="relative flex flex-col items-start group/card">
                            <div className="relative w-full aspect-[4/5] max-w-[340px]">
                                {/* Floating Badge */}
                                {/* <motion.div 
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-[24px] shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-30 flex flex-col items-center border border-white/50"
                                >
                                    <span className="text-blue-600 font-black text-2xl leading-none">100%</span>
                                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-tighter mt-1">Student Focus</span>
                                </motion.div> */}

                                <div className="w-full h-full rounded-[48px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(37,99,235,0.2)] bg-slate-50 border-[10px] border-white relative z-10 transition-all duration-700 group-hover/card:shadow-[0_60px_110px_-20px_rgba(37,99,235,0.3)] group-hover/card:scale-[1.03] group-hover/card:-rotate-1">
                                    <Image
                                        src="/images/about-us/ajay-thomas.png"
                                        alt="Mr. Ajay Thomas"
                                        fill
                                        className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 brightness-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>

                            <div className="mt-8 text-left w-full max-w-[340px]">
                                <motion.h4
                                    className="font-black text-3xl text-slate-900 tracking-tight leading-none mb-2 uppercase"
                                >
                                    Mr. Ajay Thomas
                                </motion.h4>
                                <p className="text-[15px] font-bold text-blue-600 uppercase tracking-[3px]">
                                    COO, Seamedu
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 pt-6">
                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                <strong className="text-slate-900 font-black">Mr. Ajay Thomas</strong> leads the operational strategy at Seamedu, driving innovation across all campuses. His focus is on creating a <strong className="text-blue-600 font-extrabold">seamless learning experience</strong> with modern infrastructure and robust placement support.
                            </p>

                            <p className="text-[18px] text-slate-600 leading-relaxed text-justify font-medium">
                                By streamlining strategic planning and industry partnerships, we ensure Seamedu remains at the forefront of vocational education. Our goal is to make professional training impactful and results-driven for every student.
                            </p>

                            <div className="relative py-4 mt-6">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-0 top-0 w-2 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                />
                                <blockquote className="text-[19px] text-slate-800 leading-relaxed text-justify italic pl-10 pr-8 relative bg-blue-50/30 backdrop-blur-sm rounded-r-[32px] py-8 border border-blue-100/50">
                                    <span className="absolute left-4 top-2 text-7xl text-blue-200/50 font-serif leading-none select-none opacity-50">"</span>
                                    <em>
                                        We strive for <strong className="text-blue-600 font-extrabold">operational excellence</strong> that translates into real-world success, providing a platform where passion meets profession effectively.
                                    </em>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
