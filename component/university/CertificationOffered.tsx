// "use client";

// import Image from "next/image";

// // Map certifications to their exact SVG logos for a professional look
// const certifications = [
//   {
//     name: "AWS Academy",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//   },
//   {
//     name: "Microsoft Learn",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
//   },
//   {
//     name: "Google Cloud",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   },
//   {
//     name: "Cisco Academy",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
//   },
//   {
//     name: "Adobe Certified",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Systems_logo_and_wordmark.svg",
//   },
//   {
//     name: "Figma Campus",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
//   },
// ];

// export default function CertificationsOffered() {
//   // Double the list to ensure a seamless infinite marquee loop
//   const scrollingCertifications = [...certifications, ...certifications];

//   return (
//     <>
//       <section className="py-16 bg-white border-b border-slate-100 overflow-hidden select-none">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <span className="text-[11px] font-bold tracking-[0.2em] text-[#c5a880] uppercase block mb-2">
//             Global Recognition
//           </span>
//           <h2 className="text-2xl md:text-3xl font-serif font-normal text-black">
//             Certifications{" "}
//             <span className="font-serif font-normal  text-black">Offered</span>
//           </h2>
//         </div>

//         {/* Marquee Wrapper with Smooth Fading Edges */}
//         <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent">
//           <div className="flex w-max gap-16 md:gap-24 animate-marquee opacity-60 hover:opacity-100 hover:[animation-play-state:paused] transition-opacity duration-300 py-4 items-center">
//             {/* Main + Duplicated Loop tracks automatically via mapping */}
//             {scrollingCertifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-wider text-slate-700 whitespace-nowrap"
//                 aria-hidden={
//                   index >= certifications.length ? "true" : undefined
//                 }
//               >
//                 <div className="relative h-8 w-16 flex items-center justify-center">
//                   <Image
//                     src={cert.logo}
//                     alt={`${cert.name} logo`}
//                     fill
//                     className="object-contain"
//                     sizes="64px"
//                   />
//                 </div>
//                 {/* <span>{cert.name}</span> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Embedded CSS for smooth continuous carousel animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import Image from "next/image";

// Map certifications to their exact SVG logos for a professional look
const certifications = [
  {
    name: "AWS Academy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Microsoft Learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Cisco Academy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
  {
    name: "Adobe Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Systems_logo_and_wordmark.svg",
  },
  {
    name: "Figma Campus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];

export default function CertificationsOffered() {
  // Double the list to ensure a seamless infinite marquee loop
  const scrollingCertifications = [...certifications, ...certifications];

  return (
    <>
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden select-none">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#c5a880] uppercase block mb-2">
            Global Recognition
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-normal text-black">
            Certifications{" "}
            <span className="font-serif font-normal  text-black">Offered</span>
          </h2>
        </div>

        {/* Marquee Wrapper with Smooth Fading Edges */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="flex w-max gap-16 md:gap-24 animate-marquee opacity-60 hover:opacity-100 hover:[animation-play-state:paused] transition-opacity duration-300 py-4 items-center">
            {/* Main + Duplicated Loop tracks automatically via mapping */}
            {scrollingCertifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-wider text-slate-700 whitespace-nowrap"
                aria-hidden={
                  index >= certifications.length ? "true" : undefined
                }
              >
                <div className="relative h-8 w-16 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} logo`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                {/* <span>{cert.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded CSS for smooth continuous carousel animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </>
  );
}
