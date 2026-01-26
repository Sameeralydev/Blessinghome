import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const EarlyYears = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Affiliation:",
      },
      {
        type: "p",
        text: "RILLS School is proudly affiliated with Cambridge Assessment International Education. Our Cambridge affiliation number is 968, which reflects our commitment to providing internationally recognized standards of education.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Early Years Programs:",
      },
      {
        type: "p",
        text: "Our Early Years program lays the foundation for lifelong learning through play-based and sensorimotor activities. Rooted in Montessori philosophy, it fosters independence, phonics development, and self-regulation. Children explore concepts through storytelling, creative play, hands-on exploration, and thematic learning, supporting emotional, cognitive, and physical development. The program emphasizes hands-on learning with Montessori materials, phonics-based literacy and early numeracy, as well as the development of social skills and emotional growth.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Primray and Middle Years Programs:",
      },
      {
        type: "p",
        text: "In the Primary Years, students transition into structured academic learning guided by the Cambridge Primary Curriculum and SNC standards, covering core subjects such as English, Urdu, Mathematics, General Science, Social Studies, and Islamiat. Lessons are enriched through thematic learning, visual aids, and technology-enhanced activities to support varied learning styles, focusing on the development of reading, writing, and numeracy skills, inquiry-based learning, multiple intelligences for diverse learners, and laying the foundation for STEAM education.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "In the Middle Years (Grades 4–6), the program deepens conceptual understanding while strengthening thinking and collaboration skills. Lessons become increasingly interdisciplinary, engaging students in project-based learning, structured debates, and STEAM experiments, with a focus on analytical and reasoning skills, cultivating habits of mind, regular use of digital tools and coding basics, and promoting values education and personal responsibility.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "O-Levels Track:",
      },
      {
        type: "p",
        text: "This track prepares students for the Cambridge O-Level program by gradually introducing subject specialization, academic rigor, and exam techniques. Learners are encouraged to develop research skills, effective communication, and a global perspective, with subjects aligned with Cambridge Lower Secondary. The program emphasizes critical thinking and independent learning, supported through continuous assessment and project work, as well as the integration of STEAM, presentations, and digital tools.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Syllabus and Affiliations"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default EarlyYears;
