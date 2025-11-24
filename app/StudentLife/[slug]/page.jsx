import React from "react";
import RichTextRenderer from "@/components/RichTextRenderer";
import HeroHeader from "@/components/HeroHeader";
import { notFound } from "next/navigation";

const studentLifeData = [
  { title: "O Level", slug: "OLevel" },
  { title: "A Level", slug: "ALevel" },
  { title: "Primary", slug: "Primary" },
];


// Generate static params for dynamic routes
export async function generateStaticParams() {
  return studentLifeData.map((studentLife) => ({
    slug: studentLife.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);
  if (!studentLife) notFound();

  return {
    title: `${studentLife.title} - Student Life | RILLS`,
    default: "Student Life | RILLS",
  };
}

const StudentLife = async ({ params }) => {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);
 
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "At RILLS School",
      },
      {
        type: "p",
        text: "we strive to create a welcoming and inclusive environment where every student feels at home. Our vibrant community is dedicated to fostering both academic and social success, embracing diverse interests, perspectives, and cultures. We pride ourselves on our rich legacy of excellence.",
      },
      {
        type: "p",
        text: "Our unwavering focus on academics, combined with outstanding extracurricular opportunities, ensures that our students receive the best of everything. Whether we are singing, acting, competing, or learning, we do so in a unique way that shapes an education defining a lifetime.",
      },
    
      {
        type: "p",
        text: "Join us at RILLS School, where we cultivate an atmosphere of growth, creativity, and lifelong learning.",
      },
    
    ],
  };

  if (!studentLife) notFound();

  return (
    <main>
      <HeroHeader title={studentLife.title} description="Campus Life at RILLS" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>  
    </main>
  );
};

export default StudentLife;
