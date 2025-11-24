import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import { notFound } from "next/navigation";

const curriculumData = [
  {
    title: "Early Years",
    slug: "EarlyYears",
  },
  {
    title: "Primary Years",
    slug: "PrimaryYears",
  },
  {
    title: "Middle Years",
    slug: "MiddleYears",
  },
  {
    title: "Upper Middle Years O-Level",
    slug: "UpperMiddleYearsOLevel",
  },
  {
    title: "Upper Middle Years Matriculation",
    slug: "UpperMiddleYearsMatriculation",
  },
];

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return curriculumData.map((curriculum) => ({
    slug: curriculum.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const curriculum = curriculumData.find((item) => item.slug === slug);
  if (!curriculum) notFound();

  return {
    title: `${curriculum.title} - Curriculum | RILLS`,
    default: "Curriculum | RILLS",
  };
}

const Curriculum = async ({ params }) => {
  const slug = params.slug;
  const curriculum = curriculumData.find((item) => item.slug === slug);

  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Curriculum",
      },
      {
        type: "p",
        text: `RILLS offers a rich and stimulating curriculum. It includes a foreign language (all children learn Spoken English from Reception onwards), national language, art, design and basic sciences. Core subjects like Maths and English give your children the excellent literacy and numeracy skills they need, whatever path they choose in life. Urdu language curriculum helps to compose proud Pakistanis, whereas, Islamic Studies curriculum covers nitty-gritty of Islam.`,
      },
      {
        type: "p",
        text: `Science curriculum introduces the excitement of scientific investigation while our lively Social Studies curriculum gives the students a deeper understanding of the world in which they live. Every child can shine at RILLS - whether they are wizards at Maths, have an eye for design, or are great in the playground.`,
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our curriculum encourages children's ability to:",
      },
      {
        type: "ul",
        children: [
          {
            type: "li",
            text: "Take initiative",
          },
          {
            type: "li",
            text: "Develop self-discipline",
          },
          {
            type: "li",
            text: "Work with other children",
          },
          {
            type: "li",
            text: "Express themselves",
          },
          {
            type: "li",
            text: "Develop creativity and spirit of inquiry",
          },
          {
            type: "li",
            text: "Become self motivated",
          },
          {
            type: "li",
            text: "Take responsibility for actions",
          },
          {
            type: "li",
            text: "Solve problem",
          },
        ],
      },
    ],
  };

  if (!curriculum) notFound();

  return (
    <main>
      <HeroHeader title={curriculum.title} description="RILLS Curriculum" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Curriculum;
