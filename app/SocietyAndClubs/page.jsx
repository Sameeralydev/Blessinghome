import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const SocietyAndClubs = () => {
  const cmsData = {
    content: [
  {
    type: "h2",
    text: "RILLS CAREERS",
  },
  {
    type: "p",
    text: "At RILLS School, we prioritize continuous professional development through our comprehensive Teacher Training Sessions, ensuring that educators are equipped with the latest teaching strategies, digital tools, and classroom innovations. Every year, RILLS proudly hosts the RILLS Innovation Educators Forum, a platform where teachers from all campuses come together to share best practices, explore emerging trends in education, and foster collaborative learning. These initiatives empower our educators to deliver high-quality, innovative learning experiences, ultimately enhancing student outcomes and reinforcing RILLS’ commitment to academic excellence.",
  },
  {
    type: "br",
  },
  {
    type: "h2",
    text: "RILLS Reading Society:",
  },
  {
    type: "p",
    text: "The RILLS Reading Society promotes a love for reading while building essential skills like communication, leadership, and critical thinking, key for success in international schools, colleges, and top universities. Rooted in our student-centered teaching methodology, it supports academic and personal growth across all levels, from early childhood to higher grades. Aligned with our global curriculum and STEM focus, the society gives all students, from home schools to formal settings, opportunities to explore, discuss, and lead.",
  },
  {
    type: "p",
    text: "The student who reads the most library books annually becomes the group leader, inspiring peers on their path to the world’s best universities. At RILLS, we prepare readers and thinkers for the future of education.",
  },
  {
    type: "br",
  },
  {
    type: "h2",
    text: "RILLS Sports Club:",
  },
  {
    type: "p",
    text: "At RILLS, we value sports and physical education as key to holistic child development. In a digital world, our Sports Club encourages students to stay active, promoting physical fitness, emotional well-being, and social growth, essential for success in top educational institutions and international schools.",
  },
  {
    type: "p",
    text: "Our engaging curriculum and teaching methodology include structured games, team sports, and skill-building activities. A major highlight is the annual RILLS Sports Gala, where students showcase talent, teamwork, and school spirit. By blending academics with physical activity, RILLS helps students stay focused, confident, and prepared for higher education, top colleges, and the best universities worldwide.",
  },
  {
    type: "br",
  },
  {
    type: "h2",
    text: "RILLS Theatre Society:",
  },
  {
    type: "p",
    text: "The RILLS Theatre Society nurtures student talent through drama, storytelling, and stage expression. It enhances verbal communication, presentation skills, and imaginative thinking, supporting growth in both academics and personality. Students engage in scriptwriting, stagecraft, and costume design while learning timing, coordination, and expression.",
  },
  {
    type: "p",
    text: "This co-curricular program fosters youth development, confidence building, and interpersonal skills — traits highly valued in top performing arts programs, speech and drama courses, and modern school enrichment programs across Pakistan and beyond.",
  },
  {
    type: "br",
  },
  {
    type: "h2",
    text: "RILLS Language Club:",
  },
  {
    type: "p",
    text: "The RILLS Language Club provides students with a dynamic platform to enhance their speaking skills while building confidence, communication, and critical thinking. Rooted in a student-centered approach, it encourages active participation, discussions, and debates, supporting both academic and personal growth.",
  },
  {
    type: "p",
    text: "By engaging with peers in a collaborative environment, students develop fluency and leadership qualities, preparing them for success in international schools, colleges, and top universities. This club nurtures effective communicators and confident speakers ready for the future.",
  },
  {
    type: "br",
  },
  {
    type: "h2",
    text: "RILLS Alumni Society:",
  },
  {
    type: "p",
    text: "The RILLS Alumni Society is a dynamic alumni network that connects former students with opportunities for mentorship, career guidance, and professional growth. Members can participate in exclusive networking events, workshops, and reunions, share their success stories, and inspire current students.",
  },
  {
    type: "p",
    text: "The society also offers platforms to give back to the school community and engage in meaningful initiatives, creating a lifelong bond with RILLS School while fostering leadership, learning, and a strong sense of community.",
  },
],
  };

  return (
    <main>
      <HeroHeader
        title={"Society And Clubs"}
        description="RILLS School offers an exceptional educational experience"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default SocietyAndClubs;
