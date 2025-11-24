import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Policies = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Attendance",
      },
      {
        type: "p",
        text: "Students must maintain at least 85% attendance each academic year, with a goal of 100% attendance.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Late Arrivals",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "Students should arrive at least 10 minutes before the school gate closes. Latecomers will receive warning slips after five late arrivals and be fined Rs.100 per day. For the 6th time he/she ",
          },
          {
            type: "b",
            text: "will not be ",
          },
          {
            type: "text",
            text: "allowed to enter the school gate and will have to go back home.",
          },
        ],
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Absences",
      },
      {
        type: "p",
        text: "Leave applications must be submitted within two days. A medical certificate is required for long sick leave.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Security Refund",
      },
      {
        type: "p",
        text: "O Level students who withdraw mid-session are not eligible for a security refund.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "O Level Cambridge Exams",
      },
      {
        type: "p",
        text: "No private sitting in any subject is allowed before the designated time.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Prohibited Items",
      },
      {
        type: "p",
        text: "Electronic gadgets, cameras, iPods, iPads, and cell phones are not allowed. Violations result in confiscation and a Rs.2500 fine.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Discipline/Warning Rules",
      },
      {
        type: "p",
        text: "Discipline Warning Letters are issued for misbehavior, academic slackness, improper uniform, and other indiscipline. Three slips result in a one-day suspension; three suspensions lead to expulsion.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Grooming",
      },
      {
        type: "p",
        text: "Students must wear the proper uniform, have short haircuts for boys, trimmed nails, and polished shoes. Repeated violations will incur fines.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Fee Policy",
      },
      {
        type: "p",
        text: "Fees are charged monthly. Late fees apply after the due date.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Communication and SMS Service",
      },
      {
        type: "p",
        text: "The school uses SMS, notices, and letters for communication. Event and trip permission letters must be authorized by the school administration.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Discipline",
      },
      {
        type: "p",
        text: "Students must uphold the school's reputation. Misconduct such as vandalism, smoking, fighting, foul language, misbehavior, and possession of drugs or alcohol will lead to severe disciplinary action, including possible expulsion.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Transport",
      },
      {
        type: "p",
        text: "Students are prohibited from driving or riding motorbikes to school. Parents are responsible for ensuring compliance. Contact to school head office if you want school transport.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Appointments/Meetings",
      },
      {
        type: "p",
        text: "Meetings are scheduled Monday-Saturday from 9:00 am - 12:00 noon. Parents meetings are generally held on Saturdays. ",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Bullying and Harassment Policy",
      },
      {
        type: "p",
        text: "At RILLS, we are committed to providing a safe and respectful environment for all students. Bullying and harassment in any form—whether physical, verbal, or online—are strictly prohibited. Any incidents of bullying or harassment must be reported immediately to a teacher or school administrator. All reports will be taken seriously and investigated promptly. Disciplinary actions will be enforced, ranging from warnings to suspension or expulsion, depending on the severity of the offense. Our goal is to ensure that every student feels safe, respected, and valued within our school community.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"RILLS Guidelines and Policies"}
        description={"Ensuring Excellence and Compliance"}
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Policies;
