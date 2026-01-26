import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const StudentCounselling = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Student Counselling & Mentoring Session",
      },
      {
        type: "p",
        text: "At RILLS School, our Student Counselling and Mentoring Sessions are designed to support the emotional, academic, and personal growth of every student. Through personalized guidance, experienced mentors help students set goals, overcome challenges, and develop critical life skills. These sessions provide a safe and supportive environment where students can discuss concerns, explore career pathways, and receive academic and personal advice. By integrating mentorship with counselling, RILLS ensures that every learner is empowered to build confidence, make informed decisions, and achieve their full potential.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Student Counselling & Mentoring Session"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default StudentCounselling;
