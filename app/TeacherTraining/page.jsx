import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const TeacherTraining = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Teachers Training",
      },
      {
        type: "p",
        text: "At RILLS School, we prioritize continuous professional development through our comprehensive Teacher Training Sessions, ensuring that educators are equipped with the latest teaching strategies, digital tools, and classroom innovations. Every year, RILLS proudly hosts the RILLS Innovation Educators Forum, a platform where teachers from all campuses come together to share best practices, explore emerging trends in education, and foster collaborative learning. These initiatives empower our educators to deliver high-quality, innovative learning experiences, ultimately enhancing student outcomes and reinforcing RILLS’ commitment to academic excellence.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Teacher Training"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default TeacherTraining;
