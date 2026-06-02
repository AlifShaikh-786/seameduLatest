"use client";

import React, { useState, FormEvent } from "react";

export default function InformationRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
    state: "",
    city: "",
    course: "",
    university: "Ajeenkya DY Patil University",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle information submission logic here
    console.log("Submitted Inquiry Data:", formData);
  };

  return (
    <section className="py-10 lg:py- bg-white select-none border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Heading matching image_a7a423.png content */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase block">
            Connect With Us
          </span>
          <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-black uppercase">
            LOOKING FOR MORE <span className="text-blue-600">INFORMATION</span>
          </h2>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
          {/* Inputs Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1: Text Fields */}
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border border-black/20 focus:border-blue-600 text-black placeholder-black/40 text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                required
                placeholder="Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border border-black/20 focus:border-blue-600 text-black placeholder-black/40 text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-transparent border border-black/20 focus:border-blue-600 text-black placeholder-black/40 text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium"
              />
            </div>

            {/* Row 2: Location Selectors */}
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full bg-white border border-black/20 focus:border-blue-600 text-black text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium appearance-none cursor-pointer"
              >
                <option value="India">India</option>
                <option value="International">Outside India</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 text-xs">
                ▼
              </div>
            </div>

            <div className="relative">
              <select
                value={formData.state}
                required
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full bg-white border border-black/20 focus:border-blue-600 text-black text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>
                  -- Select State --
                </option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 text-xs">
                ▼
              </div>
            </div>

            <div className="relative">
              <select
                value={formData.city}
                required
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full bg-white border border-black/20 focus:border-blue-600 text-black text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>
                  -- Select City --
                </option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 text-xs">
                ▼
              </div>
            </div>

            {/* Row 3: Course & Prefilled University Selection */}
            <div className="relative">
              <select
                value={formData.course}
                required
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full bg-white border border-black/20 focus:border-blue-600 text-black text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>
                  Select Course
                </option>
                <option value="B.Tech Computer Science">
                  B.Tech Computer Science
                </option>
                <option value="B.Des Product Design">
                  B.Des Product Design
                </option>
                <option value="MBA Digital Technology">
                  MBA Digital Technology
                </option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 text-xs">
                ▼
              </div>
            </div>

            <div className="relative md:col-span-1">
              <select
                value={formData.university}
                onChange={(e) =>
                  setFormData({ ...formData, university: e.target.value })
                }
                className="w-full bg-white border border-black/20 focus:border-blue-600 text-black text-sm px-4 py-3.5 outline-none transition-colors duration-300 font-medium appearance-none cursor-pointer"
              >
                <option value="Ajeenkya DY Patil University">
                  Ajeenkya DY Patil University
                </option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Centered Submit Action Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="w-full sm:w-64 py-3.5 rounded-full border-2  text-white font-sans bg-blue-600 font-black tracking-widest text-sm hover:bg-white hover:border-blue-600 hover:text-black transition-all duration-300 uppercase cursor-pointer"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
