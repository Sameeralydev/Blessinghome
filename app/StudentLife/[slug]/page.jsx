import React from "react";
import RichTextRenderer from "@/components/RichTextRenderer";
import HeroHeader from "@/components/HeroHeader";
import { notFound } from "next/navigation";
import Link from "next/link";

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

// Content per page
const cmsContentBySlug = {
  OLevel: [
    {
      type: "h2",
      text: "Registration Process:",
    },
    {
      type: "p",
      text: "The journey at RILLS begins with a simple yet comprehensive registration process. Parents are invited to visit our campuses and experience the vibrant learning environment firsthand. Our dedicated admission team is available to guide you through the necessary documentation and procedures, making the transition smooth and hassle-free.",
    },
    {
      type: "p",
      text: "We conduct assessments to understand each child's unique strengths and areas for growth, allowing us to tailor our educational approach to best suit their needs.",
    },
  ],

  ALevel: [
    {
      type: "h2",
      text: "Withdrawals and Transfers:",
    },
    {
      type: "p",
      text: "We understand that circumstances change, and sometimes, withdrawal from school is necessary. At RILLS, we handle such transitions with sensitivity and care. Parents are requested to provide written notice at least one month in advance. This allows us to complete all necessary formalities and provide a smooth exit for the student, ensuring they are well-prepared for their next steps.",
    },
    {
      type: "p",
      text: "For families relocating or seeking a different academic environment, RILLS facilitates seamless transfers. Our administration cooperates fully with other educational institutions, ensuring that student records and important documentation are transferred promptly and accurately. We aim to make the process as effortless as possible, so students can continue their educational journey without interruption.",
    },
  ],

  Primary: [
    {
      type: "h2",
      text: "Primary Student Life at RILLS",
    },
    {
      type: "p",
      text: "In the Primary years, RILLS creates a nurturing and engaging environment where students develop strong academic foundations alongside social and emotional growth.",
    },
    {
      type: "p",
      text: "Through hands-on learning, creative activities, and technology-enhanced lessons, students build confidence, curiosity, and a love for learning.",
    },
    {
      type: "p",
      text: "Our Primary program focuses on holistic development, ensuring every child feels safe, valued, and inspired to grow.",
    },
  ],
};

const StudentLife = async ({ params }) => {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);

  if (!studentLife) notFound();

  const cmsData = {
    content: cmsContentBySlug[slug] || [],
  };

  return (
    <main>
      <HeroHeader title={studentLife.title} description="Campus Life at RILLS" />
      <div className="flex flex-col gap-4 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />

        {/* ✅ Show button only on O Level page */}
        {slug === "OLevel" && (
          <Link href="/register-online">
            <button className="mt-4 w-fit rounded-xl bg-[#FCBB55] px-6 py-3 text-white  hover:opacity-90 transition">
              Register Online
            </button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default StudentLife;
