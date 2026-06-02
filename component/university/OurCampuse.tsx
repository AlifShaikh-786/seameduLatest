"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import CampusGalleryModal from "./CampusGalleryModal";

const campusLifeImages = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    category: "Infrastructure",
    label: "Main Infrastructure Hub",
    date: "Semester 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    category: "Studios & Labs",
    label: "Innovation Workspace",
    date: "Studio Session 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Studios & Labs",
    label: "Advanced Sound Engineering Lab",
    date: "Tech Week 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
    category: "Infrastructure",
    label: "Urban Campus Commons",
    date: "Orientation 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800&q=80",
    category: "Campus Life",
    label: "Main Auditorium Hall",
    date: "Convocation 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    category: "Campus Life",
    label: "Creative Design Studio",
    date: "Exhibition 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
    category: "Infrastructure",
    label: "Alternative Campus Quad",
    date: "Orientation 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800&q=80",
    category: "Campus Life",
    label: "Exhibition Amphitheater",
    date: "Convocation 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    category: "Campus Life",
    label: "Post-Production Suite",
    date: "Exhibition 2026",
  },
];

const categories = [
  "All Spaces",
  "Infrastructure",
  "Studios & Labs",
  "Campus Life",
];

const IMAGES_PER_PAGE = 6;

export default function OurCampuses() {
  const [activeCategory, setActiveCategory] = useState("All Spaces");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Map elements correctly for the modal context (contains all raw items)
  const galleryItems = useMemo(() => {
    return campusLifeImages.map((img) => ({
      image: img.src,
      title: img.label,
      location: img.category,
      date: img.date,
    }));
  }, []);

  // Filter items matching current category tab selection
  const filteredImages = useMemo(() => {
    return activeCategory === "All Spaces"
      ? campusLifeImages
      : campusLifeImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Reset page window index safety flag upon cross-category click switches
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Extract pagination math windows cleanly
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);

  const displayedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  }, [filteredImages, currentPage]);

  const openModalFromFiltered = (originalSrc: string) => {
    const originalIndex = campusLifeImages.findIndex(
      (img) => img.src === originalSrc,
    );
    if (originalIndex !== -1) {
      setSelectedIndex(originalIndex);
      setIsModalOpen(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section
      id="campus"
      className="py-10 lg:py-28 bg-white select-none border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col items-start space-y-4 mb-10">
          {/* <span className="text-[11px] font-bold tracking-[0.25em] text-black uppercase block">
            Exhibition & Spaces
          </span> */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h3 className="text-3xl mb-6 md:text-5xl font-serif font-normal text-black tracking-tight leading-none">
              Our{" "}
              <span className="font-sans font-black uppercase text-blue-600">
                Campus
              </span>
            </h3>
            <p className="text-black/60 text-sm md:text-base font-normal max-w-md leading-relaxed">
              An elegant preview of our architectural highlights, dynamic
              multi-media recording rooms, and student hubs.
            </p>
          </div>
        </div>

        {/* Uniform Grid Exhibition Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayedImages.map((img, idx) => {
            // Absolute indexing calculation for UI catalog numbering tag appearance
            const absoluteIndex = (currentPage - 1) * IMAGES_PER_PAGE + idx + 1;

            return (
              <div
                key={img.src + idx}
                onClick={() => openModalFromFiltered(img.src)}
                className="group cursor-pointer block space-y-4"
              >
                {/* Image Box Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-black/5">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="(max-w-7xl) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-102 filter grayscale-[15%] group-hover:grayscale-0"
                  />

                  {/* Clean Top-Left Tag indicator */}
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black border border-black/5">
                    {img.category}
                  </div>
                </div>

                {/* Text Info Row under image - Highly Premium */}
                <div className="flex justify-between items-start pt-1">
                  <div className="space-y-1 max-w-[80%]">
                    <h4 className="text-sm font-bold text-black tracking-tight transition-colors group-hover:text-blue-600">
                      {img.label}
                    </h4>
                    <p className="text-[11px] uppercase tracking-wider text-black/40">
                      {img.date}
                    </p>
                  </div>

                  {/* Clean structural index tracking numbering */}
                  <span className="text-xs font-mono font-bold text-blue-600">
                    / {absoluteIndex < 10 ? `0${absoluteIndex}` : absoluteIndex}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls Footer Bar - Prev / Next Buttons */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-16 mt-8 border-t border-black/5">
            <span className="text-xs font-mono font-bold text-black/40">
              Page {currentPage} of {totalPages}
            </span>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  currentPage === 1
                    ? "border-black/5 text-black/20 cursor-not-allowed"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                Previous
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  currentPage === totalPages
                    ? "border-black/5 text-black/20 cursor-not-allowed"
                    : "border-black bg-blue-600 text-white border-blue-600 hover:bg-black hover:border-black"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Integration */}
      <CampusGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={galleryItems}
        initialIndex={selectedIndex}
      />
    </section>
  );
}
