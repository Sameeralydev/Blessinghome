import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Library = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Discover",
      },
      {
        type: "p",
        text: "A world where knowledge meets imagination and curiosity knows no bounds. At RILLS Library, we believe that every book is a journey waiting to unfold. Our modern, dynamic library is not just a place to borrow books, but a hub of inspiration where students can explore, learn, and grow.",
      },
      {
        type: "p",
        text: "We boast a vast collection of history, stories, and subject-specific books, offering a treasure trove of literature and resources to ignite your passion for reading and discovery. With interactive learning spaces and a vibrant atmosphere, RILLS Library is designed to foster creativity and critical thinking. Dive into our diverse range of materials and experience the joy of learning in an environment tailored for your success",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"RILLS Library"}
        description="Your Gateway to Endless Possibilities!"
      />
       <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Library;
