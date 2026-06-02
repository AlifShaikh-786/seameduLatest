import FAQsSection from "@/component/main/FAQsSection";
import PlacementPartner from "@/component/main/PlacementPartner";
import TopPlacement from "@/component/main/TopPlacement";
import CertificationsOffered from "@/component/university/CertificationOffered";
import CoursesGrid from "@/component/university/CoursesGrids";

import HeroSection from "@/component/university/HeroSection";
import HowToReachUs from "@/component/university/HowToReach";
import HiringPartners from "@/component/university/HiringPartner";
import OurCampuses from "@/component/university/OurCampuse";
import UniversityHighlight from "@/component/university/UniversityHighlights";
import WhyUs from "@/component/university/WhyUs";
import PlacementHiring from "@/component/main/PlacementHiring";
import PlacementHighlights from "@/component/main/PlacementHighlights";
import WhySeamedu from "@/component/university/WhySeamedu";
import InformationRequestForm from "@/component/university/InformationRequestForm";
// import WhySeamedu from "@/component/course-page/WhySeamedu";

export default function UniversityPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhySeamedu />
      {/* <UniversityHighlight />
      <WhyUs /> */}

      <CoursesGrid />
      <CertificationsOffered />
      <TopPlacement />
      <InformationRequestForm />
      {/* <PlacementHiring /> */}

      {/* <PlacementHighlights /> */}
      {/* <PlacementPartner titlePart1="Hiring" count="100" /> */}
      <OurCampuses />

      <HowToReachUs />
      <FAQsSection />
    </main>
  );
}
