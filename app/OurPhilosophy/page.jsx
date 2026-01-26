import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurPhilosophy = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Philosophy",
      },
      {
        type: "p",
        text: "At RILLS, we believe that education is more than just acquiring knowledge. It is about fostering curiosity, critical thinking, and a passion for learning that lasts a lifetime.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "\"The whole purpose of education is to turn mirrors into windows.\" - Sydney J. Harris",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "This quotation eloquently captures the essence of our educational philosophy at RILLS Schools. We are devoted to transforming our students' perspectives, encouraging them to look beyond their own reflections and explore the vibrant and colorful ideas and opportunities that extend beyond themselves.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Our philosophy is built on the foundation of mutual respect, empathy, and inclusiveness. We embrace diversity and strive to create a safe and welcoming environment for all of our students, regardless of their backgrounds or experiences.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We believe in nurturing the whole child - academically, socially, emotionally, and physically. Our approach focuses on developing critical thinking skills, creativity, and character that will serve our students throughout their lives.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Our Philosophy"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurPhilosophy;
