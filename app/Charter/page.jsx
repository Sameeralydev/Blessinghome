import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Charter = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "RILLS CHARTER",
      },
      {
        type: "p",
        text: "RILLS School offers an exceptional educational experience designed to inspire, engage, and empower its diverse student community across Pakistan and around the globe.",
      },
      {
        type: "p",
        text: "This Charter of Parents' Rights and Responsibilities aims to foster a collaborative and supportive environment between parents, students, and the school community. By outlining the rights and responsibilities of parents, we strive to ensure a positive and effective educational experience for all students. At RILLS, a joint venture between the school and parents, we deeply emphasize a profound mutual understanding and commitment to our shared rights and responsibilities, fostering a partnership that ultimately prioritizes and enriches the lives of our children.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Charter"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Charter;
