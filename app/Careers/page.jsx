import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Careers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "RILLS CAREERS",
      },
      {
        type: "p",
        text: "Join the dynamic team at RILLS School and be part of an inspiring environment dedicated to academic excellence, innovation, and holistic student development. We offer exciting career opportunities for teachers, administrative staff, and education professionals who are passionate about shaping young minds and fostering leadership, creativity, and critical thinking. At RILLS, employees benefit from professional growth, continuous training, and a supportive work culture that values collaboration and innovation. Explore our current openings and build a rewarding career while making a lasting impact on students’ lives. Interested candidates can send their CVs to jobs@rills.edu.pk to join our team today.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Careers"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Careers;
