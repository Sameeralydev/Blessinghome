import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ExtraCurricularActivities = () => {
  const cmsData = {
    content: [
      {
        type: "p",
        text: "At RILLS, we believe that learning extends beyond the classroom. Our extensive range of extracurricular activities is designed to complement academic growth and help students discover their passions and talents. From sports and arts to leadership and community service, our programs provide opportunities for students to develop essential life skills, build confidence, and engage in meaningful experiences.",
      },
      { type: "br" },
      {
        type: "h5",
        text: "Sports and Fitness: ",
      },
      {
        type: "p",
        text: "Stay active and competitive with our diverse sports programs, including soccer, basketball, swimming, and more. Whether you're a seasoned athlete or just starting out, there's something for everyone",
      },
      {
        type: "h5",
        text: "Arts and Cultur: ",
      },
      {
        type: "p",
        text: "Explore your creative side through our visual arts, music, drama, and dance clubs. Showcase your talents, participate in school performances, and enjoy a rich cultural experience.",
      },
      {
        type: "h5",
        text: "Leadership and Innovation: ",
      },
      {
        type: "p",
        text: "Join student councils, debate teams, and entrepreneurial clubs to develop leadership skills and innovative thinking. Learn how to make a difference and take on real-world challenges.",
      },
      {
        type: "h5",
        text: "Community Service: ",
      },
      {
        type: "p",
        text: "Engage in projects that give back to the community and make a positive impact. Participate in volunteer work and develop a sense of social responsibility.",
      },
      {
        type: "h5",
        text: "Academic Clubs and Competitions: ",
      },
      {
        type: "p",
        text: "Dive deeper into your interests with specialized clubs and competitions in subjects like science, math, and literature.",
      },
      {
        type: "h5",
        text: "International Trips and Competitions: ",
      },
      {
        type: "p",
        text: "Broaden your horizons with exciting international trips and compete in global competitions. Experience different cultures, build international connections, and challenge yourself on a world stage.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "At RILLS, extracurricular activities are more than just fun—they're a vital part of your personal growth and development. Join us to explore, excel, and enjoy a well-rounded education that prepares you for a successful future!",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"RILLS Extracurricular Activities"}
        description="Unleash Your Potential!"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ExtraCurricularActivities;
