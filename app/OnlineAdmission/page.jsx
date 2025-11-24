import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import AdmissionForm from "@/components/AdmissionForm";

const OnlineAdmission = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Welcome to RILLS School Online Admission!",
      },
      {
        type: "p",
        text: "We are excited to make the admission process easier and more accessible for you. At RILLS, we believe in providing a seamless experience for parents and students alike. Our online application system allows you to apply from the comfort of your home, ensuring that your child's journey towards academic excellence starts smoothly. Simply fill out the required forms, upload necessary documents, and submit your application—all with just a few clicks.",
      },
      {
        type: "p",
        text: "Join us at RILLS, where education meets innovation!",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Online Admission"}
        description="from pre school to O/A Level"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
      <AdmissionForm />
    </main>
  );
};

export default OnlineAdmission;
