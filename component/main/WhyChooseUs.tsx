import React from 'react';

const WhyChoose = () => {
  const features = [
   {
    title: "Expert Faculty",
    description: "Learn from industry veterans and PhD scholars dedicated to your academic growth.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    title: "Modern Infrastructure",
    description: "High-tech labs, creative studios, and digital libraries built for the next generation.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Industry Aligned",
    description: "Curriculum designed with global leaders to ensure you are job-ready from day one.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V6a2 2 0 012-2h14a2 2 0 012 2v7.255z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      </svg>
    )
  },
  {
    title: "Holistic Learning",
    description: "Developing technical skills alongside leadership, creativity, and management.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
   {
      title: "Value Based Education",
      description: "Get industry-standard training and global certifications that offer the best return on your investment.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
   {
    title: "100% Placement Drive",
    description: "Benefit from our strong network of corporate partners and dedicated recruitment cell.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
    
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
            Why choose <span className="  text-blue-600">us?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-md md:text-lg">
            Empowering students with industry-grade skills, world-class facilities, and a legacy of excellence in creative media.
          </p>
        </div> 

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;