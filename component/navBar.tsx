"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  aboutUs: [
    { label: "philosophy", href: "#" },
    { label: "our team", href: "#" },
    { label: "our partners", href: "#" },
    { label: "industry expert", href: "#" },
  ],
  programs: [
    {
      category: "Media",
      subCategories: [
        {
          title: "B.Sc",
          courses: [
            { label: "Game Development", href: "#" },
            { label: "Filmmaking", href: "#" },
            { label: "Sound Engineering", href: "#" },
            { label: "Game Art & Design", href: "#" },
            { label: "Animation & VFX", href: "#" }
          ]
        },
        {
          title: "BCA",
          courses: [
            { label: "Media & IT", href: "#" },
            { label: "Game Development", href: "#" }
          ]
        },
        {
          title: "BBA",
          courses: [
            { label: "Media and Communication", href: "#" }
          ]
        }
      ]
    },
    {
      category: "Technology",
      subCategories: [
        {
          title: "B.Tech",
          courses: [
            { label: "CSE – AI & Data Engineering", href: "#" },
            { label: "Information Technology (Data Science)", href: "#" },
            { label: "CSE – Cyber Security & Digital Forensics", href: "#" }
          ]
        },
        {
          title: "BCA",
          courses: [
            { label: "Cyber Security", href: "#" },
            { label: "AI & Data Science", href: "#" },
            { label: "Cloud Computing", href: "#" }
          ]
        },
        {
          title: "MCA",
          courses: [
            { label: "AI & Data Science", href: "#" },
            { label: "Cyber Security & Digital Forensics", href: "#" },
            { label: "Cloud Computing", href: "#" }
          ]
        }
      ]
    },
    {
      category: "Management",
      subCategories: [
        {
          title: "BBA",
          courses: [
            { label: "Marketing Management", href: "#" },
            { label: "Financial Management", href: "#" },
            { label: "Human Resource Management", href: "#" },
            { label: "Digital Marketing & AI", href: "#" },
            { label: "Banking & Financial Services", href: "#" },
            { label: "International Business", href: "#" }
          ]
        },
        {
          title: "MBA",
          courses: [
            { label: "Human Resource Management", href: "#" },
            { label: "Marketing Management", href: "#" },
            { label: "Financial Management", href: "#" },
            { label: "Business Analytics & Intelligence", href: "#" },
            { label: "Banking & Financial Services", href: "#" },
            { label: "International Business", href: "#" }
          ]
        }
      ]
    },
    {
      category: "Design",
      subCategories: [
        {
          title: "B.Des",
          courses: [
            { label: "Industrial Design", href: "#" },
            { label: "Interior Space & Furniture Design", href: "#" },
            { label: "Communication Design – Visual Communication", href: "#" },
            { label: "Communication Design – Animation & VFX", href: "#" },
            { label: "Communication Design – UI/UX", href: "#" }
          ]
        },
        {
          title: "M.Des",
          courses: [
            { label: "Interactive Design – UI/UX", href: "#" }
          ]
        }
      ]
    },
    {
      category: "Hospitality",
      subCategories: [
        {
          title: "BBA",
          courses: [
            { label: "Hospitality Studies", href: "#" },
            { label: "Culinary Management", href: "#" }
          ]
        }
      ]
    }
  ],
  campuses: [
    { label: "The NorthCap University", href: "#" },
    { label: "Ajeenkya DY Patil University", href: "#" },
    { label: "Techno India University", href: "#" },
    { label: "D Y Patil University, Ambi", href: "#" },
  ],
  resources: [
    { label: "career guides", href: "#" },
    { label: "articles", href: "#" },
    { label: "workshops & events", href: "#" },
    { label: "Careers", key: "careers", href: "#" },
    { label: "student work", href: "#" },
    { label: "testimonial", href: "#" },
  ]
};
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Hero is h-screen (100vh) on desktop — go black once scrolled past it
      setIsScrolled(window.scrollY >= window.innerHeight);
    };

    // Set initial state correctly (e.g. if page loads mid-scroll)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      setMounted(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);
  const navItems = [
    { label: "About Us", key: "aboutUs", href: "" },
    { label: "Programs", key: "programs", href: "#" },
    { label: "Our Campuses", key: "campuses", href: "" },
    { label: "Placements", key: "placements", href: "#" },
    { label: "Resources", key: "resources", href: "#" },

  ];
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
      <header className={`fixed top-0 left-1/2 z-[70] w-full max-w-[1400px] -translate-x-1/2 px-6 sm:px-8 nav:px-10 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${menuOpen ? "bg-white shadow-none" : "bg-white nav:bg-transparent shadow-md nav:shadow-none"}`}>

        {/* Logo */}
        <Link href="/" className="logo" onClick={() => { setActiveMenu(null); setMenuOpen(false); }}>
          <img
            src="/images/logo.svg"
            alt="Seamedu Logo"
            className={`h-10 sm:h-12 transition-all duration-500 ${!isScrolled ? "nav:invert nav:hue-rotate-180" : ""}`}
          />
        </Link>

        {/* Center Navigation Pill (Desktop only) */}
        <nav className="hidden nav:block rounded-full border border-[#8eabe480] bg-white/60 backdrop-blur-md px-[20px] lg:px-[30px] xl:px-[45px] py-3 lg:py-4 xl:py-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] relative">
          <ul className="flex items-center gap-[10px] lg:gap-[15px] xl:gap-[25px] list-none p-0 m-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.key || null)}
                onMouseLeave={() => setActiveMenu(null)}
                className="group relative flex flex-col items-center gap-1 text-[13px] lg:text-[14px] xl:text-[14.5px] font-semibold text-[#1a1a1a] whitespace-nowrap"
              >
                <div className="py-1">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 hover:text-[#2563eb] transition-colors ${activeMenu === item.key ? "text-blue-600" : ""}`}
                  >
                    {item.label}
                    {item.key !== "placements" && item.key !== "careers" && (
                      <svg
                        className={`h-5 w-5 fill-current opacity-80 transition-transform ${activeMenu === item.key ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    )}
                  </Link>
                </div>
                {/* Dropdowns */}
                <AnimatePresence>
                  {activeMenu === item.key && !["placements", "careers"].includes(item.key) && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full pt-6 pointer-events-auto z-[100] ${item.key === "programs" ? "left-[-160px]" : "left-0"}`}
                    >
                      <div className={`bg-white/90 backdrop-blur-3xl rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-white/80 overflow-hidden cursor-default transition-all duration-300
                        ${item.key === "programs"
                          ? (menuData.programs[activeCategory]?.subCategories.length >= 3 ? "w-[900px]" : "w-[680px]")
                          : "min-w-[190px]"}`}
                      >
                        {/* Programs Mega Menu */}
                        {item.key === "programs" ? (
                          <div className="flex min-h-[320px]">
                            {/* Categories Column */}
                            <div className="w-[180px] bg-white/5 border-r border-white/10 py-6 px-3 flex flex-col gap-1">
                              {menuData.programs.map((prog, idx) => (
                                <div
                                  key={prog.category}
                                  onMouseEnter={() => setActiveCategory(idx)}
                                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-default transition-all ${activeCategory === idx ? "text-blue-600 bg-white shadow-sm font-bold" : "text-slate-700 hover:bg-slate-100/50"}`}
                                >
                                  <span className="text-[14px]">{prog.category}</span>
                                  <ChevronRight size={13} className={activeCategory === idx ? "opacity-100" : "opacity-0"} />
                                </div>
                              ))}
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 p-7 overflow-y-auto">
                              <div className={`grid gap-x-8 gap-y-10 ${menuData.programs[activeCategory]?.subCategories.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                                {menuData.programs[activeCategory].subCategories.map((sub) => (
                                  <div key={sub.title}>
                                    <h4 className="text-[13px] font-black text-slate-900 border-b-2 border-blue-600 w-fit pb-1 mb-4 px-1 uppercase tracking-tight">{sub.title}</h4>
                                    <ul className="flex flex-col gap-4">
                                      {sub.courses.map(course => (
                                        <li key={course.label} className="flex items-start gap-2 group/item px-1">
                                          <div className="w-1 h-1 rounded-full bg-slate-200 mt-2 group-hover/item:bg-blue-600 transition-colors" />
                                          <Link
                                            href={course.href}
                                            className="text-[13.5px] text-slate-500 hover:text-blue-600 font-semibold leading-tight transition-colors"
                                            onClick={() => setActiveMenu(null)}
                                          >
                                            {course.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Standard Dropdowns */
                          <div className="p-2 flex flex-col gap-1">
                            {(menuData as any)[item.key]?.map((sub: any) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="px-5 py-3 rounded-xl hover:bg-blue-50/50 text-slate-600 hover:text-blue-600 font-bold text-[14px] transition-all flex items-center gap-3 group/sub capitalize"
                                onClick={() => setActiveMenu(null)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="cta-button hidden nav:block">
          <a
            href="#"
            className="inline-block whitespace-nowrap rounded-full bg-blue-600 px-[20px] lg:px-[24px] xl:px-[30px] py-[8px] lg:py-[10px] xl:py-[12px] text-[13px] lg:text-[14px] xl:text-[15px] font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>

        {/* Hamburger Menu (Mobile Toggle) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav:hidden relative z-[100] p-2 -mr-2 text-slate-900 group"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-7 items-end">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-slate-900 rounded-full block transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: "70%" }}
              className="h-0.5 bg-slate-900 rounded-full block transition-all"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
              className="h-0.5 bg-slate-900 rounded-full block transition-all"
            />
          </div>
        </button>
      </header>

      {/* Mobile Side Menu - Portal to Body to escape all container constraints */}
      {mounted && createPortal(
        <AnimatePresence mode="wait">
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
                className="fixed inset-0 bg-slate-900/60 transition-opacity nav:hidden z-[9999]"
              />

              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
                className="fixed top-0 right-0 bottom-0 h-screen w-[85%] max-w-[400px] bg-white nav:hidden z-[10000] flex flex-col shadow-[-25px_0_60px_-15px_rgba(0,0,0,0.3)] border-l border-slate-50"
              >
                {/* Header Logo In Side Bar */}
                <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between sticky top-0 bg-white z-[100]">
                  <img
                    src="/images/logo.svg"
                    alt="Seamedu Logo"
                    className="h-8"
                  />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                  >
                    <X size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-2 outline-none">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, idx) => (
                      <div
                        key={item.label}
                        className="flex flex-col border-b border-slate-50 last:border-0"
                      >
                        <div
                          className="flex items-center justify-between py-3 cursor-pointer"
                          onClick={() => {
                            if (item.key === "placements" || item.key === "careers") {
                              setMenuOpen(false);
                            } else {
                              setExpandedItem(expandedItem === item.key ? null : (item.key || null));
                            }
                          }}
                        >
                          <Link
                            href={item.href}
                            className={`text-lg font-bold tracking-tight transition-colors ${expandedItem === item.key ? "text-blue-600" : "text-slate-900"}`}
                            onClick={(e) => {
                              if (item.key !== "placements") e.preventDefault();
                              else setMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                          {item.key !== "placements" && item.key !== "careers" && (
                            <motion.div
                              animate={{ rotate: expandedItem === item.key ? 90 : 0 }}
                              className={`w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-colors ${expandedItem === item.key ? "bg-blue-600 border-blue-600 text-white" : "text-slate-400"}`}
                            >
                              <ChevronRight size={16} />
                            </motion.div>
                          )}
                        </div>
                        {/* Expandable Sub-items */}
                        <AnimatePresence>
                          {expandedItem === item.key && !["placements", "careers"].includes(item.key) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50/50 rounded-2xl mb-4"
                            >
                              <div className="p-4 flex flex-col gap-3">
                                {item.key === "programs" ? (
                                  /* Programs Mobile View */
                                  <div className="flex flex-col gap-5">
                                    {menuData.programs.map((cat) => (
                                      <div key={cat.category} className="flex flex-col gap-3">
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 px-2">{cat.category}</h4>
                                        <div className="flex flex-wrap gap-2.5">
                                          {cat.subCategories.map(sub => {
                                            const subKey = `${cat.category}-${sub.title}`;
                                            const isExpanded = expandedProgram === subKey;
                                            return (
                                              <div key={sub.title} className="w-full">
                                                <button
                                                  className={`w-full flex items-center justify-between py-2.5 transition-all duration-300 ${isExpanded ? "text-blue-600" : "text-slate-700"}`}
                                                  onClick={() => setExpandedProgram(isExpanded ? null : subKey)}
                                                >
                                                  <span className="text-[14px] font-semibold">{sub.title}</span>
                                                  <motion.div
                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                  >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                  </motion.div>
                                                </button>

                                                <AnimatePresence>
                                                  {isExpanded && (
                                                    <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: "auto", opacity: 1 }}
                                                      exit={{ height: 0, opacity: 0 }}
                                                      className="overflow-hidden"
                                                    >
                                                      <div className="pt-3 pb-2 px-1 flex flex-col gap-3">
                                                        {sub.courses.map(course => (
                                                          <Link
                                                            key={course.label}
                                                            href={course.href}
                                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] text-slate-500 font-semibold hover:text-blue-600 hover:bg-blue-50/50 transition-all border-l-2 border-transparent hover:border-blue-500"
                                                            onClick={() => setMenuOpen(false)}
                                                          >
                                                            <div className="w-1 h-1 rounded-full bg-blue-600/30" />
                                                            {course.label}
                                                          </Link>
                                                        ))}
                                                      </div>
                                                    </motion.div>
                                                  )}
                                                </AnimatePresence>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  /* Standard Mobile Sub-items */
                                  (menuData as any)[item.key]?.map((sub: any) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      className="py-2.5 text-slate-600 font-semibold text-[14px] flex items-center gap-3 capitalize border-l border-slate-100 pl-4 ml-1 hover:text-blue-600 hover:border-blue-600 transition-all"
                                      onClick={() => setMenuOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Bottom Footer In Side Bar */}
                <div className="p-8 pb-20 bg-slate-50/50 border-t border-slate-100 mt-auto">
                  <a
                    href="#"
                    className="block w-full text-center rounded-2xl bg-blue-600 px-6 py-5 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

