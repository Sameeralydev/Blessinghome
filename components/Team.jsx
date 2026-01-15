"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Riasat Ali Asad",
    title: "Founder & Chairman",
    image: "/owner.webp",
  },
  {
    name: "Mrs. Iram Qazi",
    title: "Patron in Chief",
    image: "/patron.webp",
  },
  {
    name: "Asif Ali Javed",
    title: "Director & Head of Operations",
    image: "/director.webp",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft += 1;

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth
      ) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 20); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12"
    >
      <h2 className="h2 text-center">
        Meet the <span className="text-main">Leadership</span>
      </h2>

      <div
        ref={sliderRef}
        className="w-full overflow-x-hidden"
      >
        <div className="flex gap-8 w-max">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[350px] flex flex-col items-center gap-4"
            >
              <div className="h-[29rem] w-full overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
