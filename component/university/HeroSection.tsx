"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-zoomSlow"
      >
        <source
          src="/videos/campus-videos/AjeenkyaDYPatil-BaneerVideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mt-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide animate-fadeUp">
          ADMISSIONS OPEN FOR 2026-27
        </h1>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 animate-fadeUp delay-200">
          APPLY NOW
        </button>
      </div>
    </section>
  );
}
