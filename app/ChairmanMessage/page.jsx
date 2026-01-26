import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ChairmanMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Chairman's Message",
      },
      {
        type: "p",
        text: "Riasat Ali Asad",
      },
      {
        type: "p",
        text: "Dear prospective students and families,",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "On behalf of the entire RILLS family, it is my pleasure to welcome you to our prospectus. At RILLS, we believe that education is more than just acquiring knowledge. It is about fostering curiosity, critical thinking, and a passion for learning that lasts a lifetime. Our school has a rich history of academic excellence, and we are committed to providing a challenging and supportive learning environment for all of our students. Our dedicated faculty and staff work tirelessly to create a curriculum that is both rigorous and engaging, and our extracurricular programs offer a wide range of opportunities for students to explore their interests and develop their talents.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We believe that a strong school community is built on a foundation of mutual respect, empathy, and inclusiveness. At RILLS, we embrace diversity and strive to create a safe and welcoming environment for all of our students, regardless of their backgrounds or experiences.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Whether you are a prospective student, a parent, or a member of our wider community, we hope that this prospectus gives you a sense of what makes RILLS such a special place. We invite you to visit our campuses, meet our faculty and students, and learn more about the exciting programs and opportunities that await you here.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Thanks for considering RILLS as your educational home.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Riasat Ali Asad",
      },
      {
        type: "p",
        text: "Founder and Chairman",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Chairman's Message"} description="RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ChairmanMessage;
