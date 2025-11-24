import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const AboutUs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Vision",
      },
      {
        type: "p",
        text: "Our vision is to empower students to excel in a dynamic world by providing a balanced education that fosters both foundational knowledge and critical skills. We aim to cultivate future leaders who are not only well-prepared to navigate a competitive landscape but also equipped to make impactful contributions to their communities and beyond. Through a commitment to adaptability, excellence, and moral integrity, RILLS School aspires to shape responsible, influential citizens who drive positive change in society.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Mission",
      },
      {
        type: "p",
        text: "RILLS School empowers students to thrive and innovate in a fast-evolving world. We are dedicated to equipping our students with both the foundational education and the critical skills necessary for achieving success and becoming influential leaders. Our goal is to provide comprehensive practical and theoretical knowledge, enabling students to gain a deeper understanding of our society and make meaningful contributions to their communities.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Philosophy",
      },
      {
        type: "p",
        text: "At RILLS, we believe that children are a precious gift of Allah and our greatest natural resource. Every child has potential to achieve success based on his unique skills and talents, who deserves to be treated with love and respect. We know that a child thrives when given the chance to spend his early childhood in a home like nurturing environment with warm, caring and dedicated adults. The staff and administration at RILLS are united in their commitment to the belief that all students can learn properly and they are the center of the educational process.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "RILLS Core Values",
      },
      {
        type: "h4",
        text: "Core Values",
      },
      {
        type: "p",
        text: "At RILLS, we've grown with the times but still keep our core values and traditions. We focus on nurturing all parts of our students' growth, giving them chances to find and build on their strengths. We also prepare them for the challenges of a global economy and a changing world, helping them become independent and responsible citizens.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Stimulation",
      },
      {
        type: "p",
        text: "At RILLS School, we create a vibrant and engaging learning environment that stimulates intellectual curiosity and critical thinking. Our dynamic teaching methods and interactive activities motivate students to explore new ideas and foster a lifelong love of learning.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Creation",
      },
      {
        type: "p",
        text: "We empower students to express their unique talents and creativity across various disciplines. By encouraging creative thinking and problem-solving, we nurture well-rounded individuals capable of developing innovative solutions and contributing original ideas to society.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Innovation",
      },
      {
        type: "p",
        text: "Innovation is at the core of our educational approach. We prepare students for a fast-evolving world by promoting forward-thinking and adaptability. Our curriculum incorporates the latest technological advancements and fosters an innovative spirit, ensuring students are ready to tackle global challenges with creativity and confidence.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"About"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AboutUs;
