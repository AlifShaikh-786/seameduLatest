"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, ChevronRight, ChevronDown,  ArrowRight,
  User,
  LogIn
} from "lucide-react";

// REUSABLE LOGO COMPONENT TO ENSURE CONSISTENCY

import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  aboutUs: [
    { label: "Our Philosophy", href: "#", desc: "Discover our core values and mission." },
    { label: "Meet the Team", href: "#", desc: "The experts behind Seamedu." },
    { label: "Industry Partners", href: "#", desc: "Companies we collaborate with." },
    { label: "Expert Faculty", href: "#", desc: "Learn from industry veterans." },
  ],
  programs: [
    {
      category: "Media & Arts",
      subCategories: [
        {
          title: "Creative Arts",
          courses: [
            { label: "Game Development", href: "#" },
            { label: "Filmmaking", href: "#" },
            { label: "Sound Engineering", href: "#" },
            { label: "Animation & VFX", href: "#" }
          ]
        },
        {
          title: "Media Studies",
          courses: [
            { label: "Digital Marketing", href: "#" },
            { label: "Media & IT", href: "#" },
            { label: "Communication Design", href: "#" }
          ]
        }
      ]
    },
    {
      category: "Technology",
      subCategories: [
        {
          title: "Computing",
          courses: [
            { label: "AI & Data Engineering", href: "#" },
            { label: "Cyber Security", href: "#" },
            { label: "Cloud Computing", href: "#" }
          ]
        }
      ]
    }
  ],
  campuses: [
    { label: "Pune Campus", href: "#", loc: "Maharashtra" },
    { label: "Mumbai Campus", href: "#", loc: "Maharashtra" },
    { label: "Bengaluru Campus", href: "#", loc: "Karnataka" },
  ],
  resources: [
    { label: "Career Guides", href: "#" },
    { label: "Articles", href: "#" },
    { label: "Events", href: "#" },
    { label: "Student Work", href: "#" },
  ]
};

export default function NavNew() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navItems = [
    { label: "About Us", key: "aboutUs", href: "#" },
    { label: "Programs", key: "programs", href: "#" },
    { label: "Campuses", key: "campuses", href: "#" },
    { label: "Placements", key: "placements", href: "#" },
    { label: "Resources", key: "resources", href: "#" },
  ];

  return (
    <>
      <style>{`
        @media (min-width: 1900px) {
          .nav-container-custom { max-width: 2500px !important; padding-left: 6rem !important; padding-right: 6rem !important; }
          .nav-link-custom { padding: 1.5rem 3rem !important; font-size: 24px !important; }
          .nav-btn-custom { padding: 1.5rem 3.5rem !important; font-size: 20px !important; }
          .nav-logo-custom svg { height: 90px !important; }
          .nav-chevron-custom { width: 24px !important; height: 24px !important; }
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between nav-container-custom">
          
          {/* LOGO */}
          <Link href="/" className="relative z-[110] flex-shrink-0 group nav-logo-custom">
            <Logo isScrolled={isScrolled} menuOpen={menuOpen} />
          </Link>

          {/* CENTER LINKS (Desktop) */}
          <nav className="hidden nav:flex items-center ">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-2.5 ultra:px-7 ultra:py-3.5 text-[14px] ultra:text-[18px] font-bold tracking-tight transition-all duration-300 rounded-full flex items-center gap-1.5 nav-link-custom ${
                    isScrolled ? "text-slate-700" : "text-white"
                  } hover:text-blue-600`}
                >
                  {item.label}
                  {item.key !== "placements" && (
                    <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 nav-chevron-custom ${activeMenu === item.key ? "rotate-180" : ""}`} />
                  )}
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 bg-slate-100/50 rounded-full -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: activeMenu === item.key ? 1 : 0, scale: activeMenu === item.key ? 1 : 0.9 }}
                  />
                </Link>

                {/* PREMIUM DROPDOWN */}
                <AnimatePresence>
                  {activeMenu === item.key && item.key !== "placements" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[120] ${
                        item.key === "programs" ? "w-[850px]" : "w-72"
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/50 overflow-hidden flex">
                        {item.key === "programs" ? (
                          <>
                            {/* Mega Menu Categories */}
                            <div className="w-56 bg-slate-50/50 p-6 border-r border-slate-100 flex flex-col gap-2">
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 px-2">Disciplines</p>
                              {menuData.programs.map((prog, idx) => (
                                <button
                                  key={prog.category}
                                  onMouseEnter={() => setActiveCategory(idx)}
                                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all text-left ${
                                    activeCategory === idx 
                                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                                      : "text-slate-600 hover:bg-slate-100"
                                  }`}
                                >
                                  {prog.category}
                                  <ChevronRight size={14} className={activeCategory === idx ? "opacity-100" : "opacity-30"} />
                                </button>
                              ))}
                            </div>
                            {/* Mega Menu Content */}
                            <div className="flex-1 p-10 grid grid-cols-2 gap-12">
                              {menuData.programs[activeCategory].subCategories.map((sub) => (
                                <div key={sub.title} className="space-y-6">
                                  <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-6 h-[2px] bg-blue-600/20"></span>
                                    {sub.title}
                                  </h4>
                                  <ul className="space-y-4">
                                    {sub.courses.map((course) => (
                                      <li key={course.label} className="group/item">
                                        <Link
                                          href={course.href}
                                          className="flex items-center gap-3 text-[14.5px] text-slate-600 hover:text-blue-600 transition-all font-semibold"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all" />
                                          {course.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="p-4 w-full flex flex-col gap-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 px-3 mt-2">Explore</p>
                            {(menuData as any)[item.key]?.map((sub: any) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="group flex flex-col px-4 py-3.5 rounded-2xl hover:bg-blue-50 transition-all"
                              >
                                <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{sub.label}</span>
                                {sub.desc && <span className="text-[11px] text-slate-400 mt-1 line-clamp-1">{sub.desc}</span>}
                                {sub.loc && <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-widest mt-1">{sub.loc}</span>}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* RIGHT CTA (Desktop) */}
          <div className="hidden nav:flex items-center gap-6">
           
            <Link
              href="#"
              className="relative group overflow-hidden bg-blue-600 text-white px-6 py-3.5 ultra:px-10 ultra:py-5 rounded-full font-black uppercase tracking-widest text-[11px] ultra:text-[14px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 nav-btn-custom"
            >
              <span className="relative z-10 flex items-center">
                Apply Now
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav:hidden relative z-[110] p-3 rounded-full bg-slate-100/10 backdrop-blur-sm group transition-all"
          >
            <div className="flex flex-col gap-1.5 w-6 items-end">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8, width: "100%", backgroundColor: "#0f172a" } : { rotate: 0, y: 0, width: "100%", backgroundColor: isScrolled ? "#0f172a" : "#ffffff" }}
                className="h-0.5 rounded-full block transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: "70%", backgroundColor: isScrolled ? "#0f172a" : "#ffffff" }}
                className="h-0.5 rounded-full block transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8, width: "100%", backgroundColor: "#0f172a" } : { rotate: 0, y: 0, width: "40%", backgroundColor: isScrolled ? "#0f172a" : "#ffffff" }}
                className="h-0.5 rounded-full block transition-all"
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU PORTAL */}
      {mounted && createPortal(
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[150] nav:hidden"
              />
              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-4 right-4 bottom-4 w-[90%] max-w-[420px] bg-white z-[160] nav:hidden flex flex-col rounded-[2rem] shadow-2xl overflow-hidden"
              >
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
                  <Logo isScrolled={isScrolled} menuOpen={menuOpen} isMobile={true} />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-3 rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">Navigation</p>
                  {navItems.map((item) => (
                    <div key={item.key} className="group">
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.key ? null : item.key)}
                        className={`w-full flex items-center justify-between py-4 px-4 rounded-2xl transition-all ${
                          expandedItem === item.key ? "bg-blue-50 text-blue-600" : "text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-xl font-black tracking-tight">{item.label}</span>
                        {item.key !== "placements" && (
                          <ChevronRight size={18} className={`transition-transform duration-300 ${expandedItem === item.key ? "rotate-90" : ""}`} />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.key && item.key !== "placements" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-2 space-y-1">
                              {(menuData as any)[item.key]?.map((sub: any) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block py-3.5 px-5 rounded-xl text-slate-500 font-bold text-[15px] hover:text-blue-600 hover:bg-blue-50/50 transition-all border-l-2 border-transparent hover:border-blue-600"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                              {item.key === "programs" && (
                                <div className="space-y-4 pt-4">
                                  {menuData.programs.map((cat) => (
                                    <div key={cat.category} className="space-y-3 px-5">
                                      <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-600/60">{cat.category}</h5>
                                      <div className="grid gap-2">
                                        {cat.subCategories.flatMap(s => s.courses).slice(0, 4).map(course => (
                                          <Link key={course.label} href={course.href} className="text-sm font-bold text-slate-800 py-1" onClick={() => setMenuOpen(false)}>{course.label}</Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-slate-50/80 backdrop-blur-md">
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-blue-600/20"
                  >
                    Start Your Application <ArrowRight size={16} />
                  </Link>
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
