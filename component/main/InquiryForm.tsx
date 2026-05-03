"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdClose, MdEmail, MdPhone, MdPerson, MdLocationOn, MdSchool, MdPublic, MdOutlineMapsHomeWork, MdMessage, MdChevronRight } from "react-icons/md";
import { courses } from "@/data/courses";

// Custom Premium Select Component
const CustomSelect = ({ label, options, value, onChange, placeholder, disabled, icon: Icon }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="space-y-1.5 relative" ref={containerRef}>
            <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                {Icon && <Icon className="text-blue-600 text-xs" />} {label}
            </label>
            <div
                onClick={() => !disabled && setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-300 ${isOpen ? "ring-4 ring-blue-600/10 border-blue-600 bg-white" : "hover:border-slate-300 hover:bg-white"} ${disabled ? "opacity-50 cursor-not-allowed bg-slate-100" : ""}`}
            >
                <span className={`text-[13px] font-bold truncate pr-2 ${value ? "text-slate-900" : "text-slate-400"}`}>
                    {value || placeholder}
                </span>
                <span className={`text-slate-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-90 text-blue-600" : ""}`}>
                    <MdChevronRight className="text-lg" />
                </span>
            </div>

            {/* Dropdown Options List */}
            <div className={`
                absolute z-[150] top-[calc(100%+6px)] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] py-2 max-h-[220px] overflow-y-auto custom-scrollbar transition-all duration-300 origin-top
                ${isOpen && !disabled ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"}
            `}>
                {options.length > 0 ? options.map((opt: string) => (
                    <div
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className={`px-5 py-3 text-[13px] font-bold cursor-pointer transition-all duration-200 flex items-center justify-between group ${value === opt ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"}`}
                    >
                        {opt}
                        {value === opt && <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
                    </div>
                )) : (
                    <div className="px-5 py-4 text-xs font-bold text-slate-400 text-center italic">No options available</div>
                )}
            </div>
        </div>
    );
};

export default function InquiryForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        inquiry: "",
        department: "",
        course: "",
        city: "",
        country: "India",
        campus: ""
    });

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Handle external toggle event
    useEffect(() => {
        const handleToggle = () => setIsOpen(true);
        window.addEventListener("toggleInquiry", handleToggle);
        return () => window.removeEventListener("toggleInquiry", handleToggle);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value,
            // Reset course if department changes
            ...(name === "department" ? { course: "" } : {})
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your inquiry! Our team will contact you shortly.");
        setIsOpen(false);
    };

    // Options mapping
    const deptOptions = courses.map(c => c.name);
    const campusOptions = ["Pune", "Bangalore"];
    const courseOptions = courses.find(c => c.name === formData.department)?.specializations || [];

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] group">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs py-3 px-3 rounded-r-2xl shadow-[-5px_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-blue-700 hover:pl-5 border border-blue-500 inquiry-btn-custom"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        Enquiry Now
                    </button>
                </div>
            )}

            {/* Modal Overlay */}
            <div className={`fixed inset-0 z-[110] transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={() => setIsOpen(false)} />

                {/* Modal Container */}
                <div className={`absolute right-4 sm:right-8 top-4 sm:top-8 w-[calc(100%-2rem)] max-w-[450px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"}`}>
                    <div className="flex flex-col max-h-[90vh] relative overflow-hidden rounded-[2rem]">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl -z-10" />

                        <div className="px-6 py-6 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Enquire <span className="text-blue-600">Now</span></h2>
                                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Join Seamedu Today</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 rounded-full transition-all duration-300">
                                <MdClose className="text-xl" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
                            <form onSubmit={handleSubmit} className="space-y-4 pb-2">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                        <MdPerson className="text-blue-600 text-xs" /> Full Name *
                                    </label>
                                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter name" suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold text-sm" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                        <MdEmail className="text-blue-600 text-xs" /> Email Address *
                                    </label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold text-sm" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                        <MdPhone className="text-blue-600 text-xs" /> Mobile No. *
                                    </label>
                                    <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} placeholder="Mobile No ." suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold text-sm" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <CustomSelect
                                        label="Department *"
                                        options={deptOptions}
                                        value={formData.department}
                                        onChange={(v: string) => handleSelectChange("department", v)}
                                        placeholder="Select Dept"
                                        icon={MdSchool}
                                    />
                                    <CustomSelect
                                        label="Campus *"
                                        options={campusOptions}
                                        value={formData.campus}
                                        onChange={(v: string) => handleSelectChange("campus", v)}
                                        placeholder="Select Campus"
                                        icon={MdOutlineMapsHomeWork}
                                    />
                                </div>

                                <CustomSelect
                                    label="Course *"
                                    options={courseOptions}
                                    value={formData.course}
                                    onChange={(v: string) => handleSelectChange("course", v)}
                                    placeholder={formData.department ? "Select Course" : "Choose Dept First"}
                                    disabled={!formData.department}
                                    icon={MdSchool}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                            <MdLocationOn className="text-blue-600 text-xs" /> City
                                        </label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none text-slate-900 font-bold text-sm shadow-sm" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                            <MdPublic className="text-blue-600 text-xs" /> Country *
                                        </label>
                                        <input type="text" name="country" required value={formData.country} onChange={handleChange} suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none text-slate-900 font-bold text-sm shadow-sm" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                        <MdMessage className="text-blue-600 text-xs" /> Further Details
                                    </label>
                                    <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} placeholder="Inquiry Regarding Further Details" rows={2} suppressHydrationWarning={true} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none text-slate-900 font-bold text-sm resize-none shadow-sm"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform active:scale-[0.98] mt-2 relative overflow-hidden group">
                                    <span className="relative z-10">SUBMIT</span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>

                        <div className="px-6 py-4 bg-slate-50/50 text-center border-t border-slate-100 flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Connect with Seamedu Counselors</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

                @media (min-width: 1900px) {
                    .inquiry-btn-custom {
                        font-size: 20px !important;
                        padding: 1.5rem !important;
                        border-top-right-radius: 2rem !important;
                        border-bottom-right-radius: 2rem !important;
                    }
                    .inquiry-btn-custom:hover {
                        padding-left: 2.5rem !important;
                    }
                }
            `}</style>
        </>
    );
}
