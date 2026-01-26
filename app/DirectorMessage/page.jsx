import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const DirectorMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Director's Message",
      },
      {
        type: "p",
        text: "Asif Ali Javed",
      },
      {
        type: "p",
        text: "Director and Head of Operations",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "I am pleased to extend a warm welcome to RILLS Schools. Our primary objective is to provide educational excellence, ensuring that every student makes a meaningful and positive impact during their time with us. We are committed to creating an environment where children find joy in learning, within a safe and secure setting designed to foster their potential.",
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
        text: "Our curriculum is meticulously designed to deliver a high standard of education. To meet the demands of contemporary education, we integrate the most innovative and effective practices in both pedagogy and technology. We understand the critical role that educators play in the growth and progress of our students. Consequently, at RILLS, we recruit highly qualified, intrinsically motivated, and dynamic professionals who are dedicated to fostering both the academic and personal development of our students, thereby reinforcing our vision and mission.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Thank you for your interest in RILLS Schools. We eagerly anticipate the opportunity to meet you soon.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Warm regards,",
      },
      {
        type: "p",
        text: "Asif Ali Javed",
      },
      {
        type: "p",
        text: "Director and Head of Operations",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Director's Message"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default DirectorMessage;
