import AdmissionSectionAndCriteria from "@/component/course-page/AdmissionSectionCriteria";
import MeetOurTeam from "@/component/course-page/MeetOurTeam";
import ExploreProgramsSection from "@/component/course-page/ExploreProgramsSections";
import HeroSections from "@/component/course-page/HeroSection";
import ProgrammeTab from "@/component/course-page/ProgrammeTabs";
import SoftwareCovered from "@/component/course-page/SoftwareCovereds";
import ProgramAvailability from "@/component/course-page/ProgramAvailability";
import StudentWorkSection from "@/component/course-page/StudentWorkSections";
import WhyChooseSection from "@/component/course-page/WhyChooseUsSection";
import WhySeamedu from "@/component/course-page/WhySeamedu";
import FAQsSection from "@/component/main/FAQsSection";
import InquiryForm from "@/component/main/InquiryForm";
import PlacementPartner from "@/component/main/PlacementPartner";
import TopPlacement from "@/component/main/TopPlacement";
import CertificationsOffered from "@/component/university/CertificationOffered";
import React from "react";
import WhyChooseUsNew from "@/component/course-page/WhyChooseUsNew";

export default function CoursePage() {
  return (
    <>
      <div className="bg-white">
        <HeroSections />
      </div>
      <WhySeamedu />
      <CertificationsOffered />
      <ProgrammeTab />
      <SoftwareCovered />

      <ProgramAvailability />
      <WhyChooseSection />
      {/* <WhyChooseUsNew /> */}

      {/* <WhyChooseSection /> */}

      <TopPlacement />
      <PlacementPartner />
      <StudentWorkSection />
      <AdmissionSectionAndCriteria />
      <MeetOurTeam />
      <ExploreProgramsSection />

      <FAQsSection />
    </>
  );
}
