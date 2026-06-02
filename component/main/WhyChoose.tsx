import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Technicians",
      description:
        "Our certified experts provide top-quality service. Trust us for accurate diagnostics and repairs.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Fast Turnaround",
      description:
        "Get back on the road quickly with our efficient service. Most repairs are completed within the same day.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Affordable Pricing",
      description:
        "High-quality repairs at prices you can afford. No hidden fees, just honest and transparent pricing.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-100 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-50 rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4">
            Why choose{" "}
            <span className="italic font-light text-blue-600">us?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            From routine maintenance to major repairs, we&apos;ve got your car
            covered with reliable and friendly service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {features.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="text-center lg:text-right flex flex-col items-center lg:items-end"
              >
                <div className="mb-4 p-3 bg-blue-50 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image Component */}
          <div className="relative group">
            {/* The offset blue background box */}
            <div className="absolute top-6 left-6 w-full h-full bg-blue-100 rounded-lg -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative aspect-[4/4] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600'" // Replace with your image path
                alt="Luxury Car Detail"
                fill
                className="object-cover"
              />
              {/* Optional blue overlay to match the theme */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {features.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="mb-4 p-3 bg-blue-50 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
