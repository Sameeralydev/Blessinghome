import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const RillsJourney = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our History",
      },
      {
        type: "p",
        text: "RILLS School was founded in 2007 with the aim of providing high-quality education to students in the local community. Over the years, the school has grown and evolved, and today it is recognized as one of the leading educational institutions in the region.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "In its early years, RILLS School was housed in a small building with just a handful of classrooms. Despite its humble beginnings, the school quickly gained a reputation for academic excellence, and enrollment grew rapidly. As a result, the school moved to a larger campus in 2010.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "RILLS School has also made significant efforts to integrate technology, equipping its classrooms with the latest tools and resources to enhance student learning. By the fall of 2014, RILLS had received accreditation from the University of Cambridge and the British Council Attachment Centre in the same year. Soon after RILLS set sail, news got out, and now we have a prestigious reputation in central Punjab with an ever-increasing number of campuses.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "RILLS is aware of society's needs and expectations and has the vision to serve society in all aspects and meet these educational needs. RILLS established ASPIRANTS, a sister school chain. It's been 17 years, and RILLS has a rich and distinguished history of brilliance and magnificence.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Throughout its history, RILLS School has remained committed to its mission of providing a well-rounded education to students from diverse backgrounds. The RILLS family and staff are dedicated to fostering a love of learning and instilling in students the values of respect, empathy, and civic management.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Today, RILLS School stands as a testament to the power of education to transform lives and communities. We are growing. Let's rise together to have a fortunate future.",
      },
    ],
  };


  return (
    <main>
      <HeroHeader title={"Rills Journey"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default RillsJourney;
