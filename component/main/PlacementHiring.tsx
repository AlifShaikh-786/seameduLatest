import React from 'react';

const row1Logos = [
  { src: "/images/HighringPatners/Cisco1.webp", h: "h-[90px] md:h-[100px]", w: "w-auto" },
  { src: "/images/HighringPatners/DWAO.webp", h: "h-[40px] md:h-[34px]", w: "w-auto" },


  { src: "/images/HighringPatners/tcs1.webp", h: "h-[80px] md:h-[90px]", w: "w-auto" },
  { src: "/images/HighringPatners/IBM1.webp", h: "h-[70px] md:h-[100px]", w: "w-auto" },
  { src: "/images/HighringPatners/cognizant.webp", h: "h-[50px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/cohesity.webp", h: "h-[20px] md:h-[20px]", w: "w-auto" },
  { src: "/images/HighringPatners/microsoft1.webp", h: "h-[80px] md:h-[90px]", w: "w-auto" },
  { src: "/images/HighringPatners/siemens.webp", h: "h-[34px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/capgemini.webp", h: "h-[30px] md:h-[36px]", w: "w-auto" },
  { src: "/images/HighringPatners/trilogy.webp", h: "h-[40px] md:h-[34px]", w: "w-auto" },
  { src: "/images/HighringPatners/wipro.webp", h: "h-[60px] md:h-[60px]", w: "w-auto" },
  { src: "/images/HighringPatners/zeeplework.webp", h: "h-[40px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/zensar-logo.webp", h: "h-[40px] md:h-[50px]", w: "w-auto" },

];

const row2Logos = [
  { src: "/images/HighringPatners/cordelia.png", h: "h-[40px] md:h-[60px]", w: "w-auto" },
  { src: "/images/HighringPatners/hilton.png", h: "h-[40px] md:h-[40px]", w: "w-auto" },
  { src: "/images/HighringPatners/oberoi.png", h: "h-[50px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/oceania.png", h: "h-[50px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/sheraton.png", h: "h-[70px] md:h-[70px]", w: "w-auto" },
  { src: "/images/HighringPatners/taj.png", h: "h-[50px] md:h-[50px]", w: "w-auto" },
  { src: "/images/HighringPatners/IBM1.webp", h: "h-[80px] md:h-[90px]", w: "w-auto" },
  { src: "/images/HighringPatners/Cisco1.webp", h: "h-[40px] md:h-[100px]", w: "w-auto" },
  { src: "/images/HighringPatners/wipro.webp", h: "h-[40px] md:h-[60px]", w: "w-auto" },
];

export default function PlacementHiring() {
  return (
    <section className="bg-white my-14 md:my-20 font-sans overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
          Placement <span className="text-blue-600">Highlights</span>
        </h2>
        <p className='text-md md:text-lg font-medium text-slate-500 mt-4 px-8 sm:px-10'>
          Gain access to top recruiters, real-world experience, and dedicated career support <br /> to kickstart your professional journey.
        </p>
      </div>
      {/* Stats Header Card */}
      <div className="max-w-6xl mx-auto px-4 sm:mb-16 mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-wrap md:flex-nowrap justify-between overflow-hidden text-center border border-gray-50">
          {[
            { l: 'Industry Experts', v: '1200+' },
            { l: 'Students Placed', v: '2000+' },
            { l: 'Highest Package', v: '30 LPA' },



            { l: 'Placement Assistance', v: '100%' },
          ].map((stat, idx, arr) => (
            <div
              key={idx}
              className={`
                py-8 px-4 flex flex-col justify-center
                ${idx === 4 ? 'w-full' : 'w-1/2 md:w-full'}
                ${idx < 4 ? 'border-b border-gray-100 md:border-b-0' : ''}
                ${(idx % 2 === 0 && idx < 4) ? 'border-r border-gray-100' : ''}
                ${idx < 4 ? 'md:border-r md:border-gray-100' : ''}
                ${idx === 3 ? 'md:border-r-0' : ''}
              `}
            >
              <p className="text-gray-500 text-[10px] md:text-sm font-medium mb-1 uppercase tracking-wider">{stat.l}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{stat.v}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
        Hiring <span className="text-blue-600">Partners</span>
      </h2>
      </div>

      {/* Infinite Sliders Container */}
      <div className="flex flex-col gap-3">

        {/* Row 1: Left Moving */}
  <div className="relative flex overflow-hidden mx-auto w-full huge:max-w-[1270px]">
          <div className="flex marquee-scroll-left w-max whitespace-nowrap items-center  ">
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt="Partner Logo"
                className={`${logo.h || 'h-[40px] md:h-[50px]'} ${logo.w || 'w-auto'}  mx-4 md:mx-10 object-contain flex-shrink-0 transition-all duration-300`}
              />
            ))}
          </div>
          {/* Gradient Fades for Smoothness */}
          {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div> */}
        </div>

        {/* Row 2: Right Moving */}
    <div className="relative flex overflow-hidden mx-auto w-full huge:max-w-[1270px]">
          <div className="flex marquee-scroll-right w-max whitespace-nowrap items-center ">
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt="Partner Logo"
                className={`${logo.h || 'h-[40px] md:h-[50px]'} ${logo.w || 'w-auto'} mx-4 md:mx-10 object-contain flex-shrink-0 transition-all duration-400`}
              />
            ))}
          </div>
          {/* Gradient Fades for Smoothness */}
          {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div> */}
        </div>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 text-sm md:text-lg hover:bg-blue-700 text-white font-semibold py-3 sm:py-3 px-8 sm:px-12 rounded-xl transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0">
          View All Placements
        </button>
      </div>
    </section>
  );
}