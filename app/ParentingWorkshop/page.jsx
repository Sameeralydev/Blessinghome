import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ParentingWorkshop = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Parenting Workshop:",
      },
      {
        type: "p",
        text: "RILLS School organizes exclusive Parenting Workshops at every campus, led by our visionary Founder and Chairman, Mr. Riasat Ali Asad. These workshops are designed to empower parents with practical strategies for supporting their child’s academic, social, and emotional development. Attendees gain insights into effective parenting techniques, fostering a growth mindset, and enhancing communication with their children. By bridging the gap between home and school, these sessions help parents actively participate in their child’s learning journey, creating a strong partnership that nurtures confident, well-rounded, and successful students.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Parenting Workshop:"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ParentingWorkshop;
