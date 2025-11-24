"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

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

const Team = () => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <section
      id="Team"
      className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12"
    >
      <h2 className="h2 text-center">
        Meet the <span className="text-main">Leadership</span>
      </h2>
      <div className="flex flex-row gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            // key={index}
            // animate={{ width: activeIndex === index ? "66.66%" : "33.33%" }}
            // transition={{ duration: 0.4, ease: [0.37, 0, 0.63, 1] }}
            className={`flex-1 flex overflow-hidden relative`}
            // onMouseMove={() => setActiveIndex(index)}
            // onMouseLeave={() => setActiveIndex(null)}
          >
            <motion.div
              //   animate={{ width: activeIndex === index ? "50%" : "100%" }}
              //   transition={{ duration: 0.4, ease: [0.37, 0, 0.63, 1] }}
              className="relative z-10 flex flex-col items-center gap-4"
            >
              <div className="h-[29rem] w-full overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={800}
                  height={100}
                  className="h-full min-w-full w-auto object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            </motion.div>
            {/* <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  layout="position"
                  initial={{ left: 0 }}
                  animate={{ left: "50%" }}
                  exit={{ left: 0 }}
                  transition={{ left: { duration: 0.4, ease: "easeInOut" } }}
                  className="absolute h-[29rem] rounded-lg bg-sec left-0 w-1/2 overflow-hidden flex justify-center items-center"
                >
                  <div className="p-4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    consectetur architecto voluptatibus veniam ex dolorum vero
                    vitae, culpa dolorem, quaerat at distinctio dolor molestias,
                    officia expedita hic delectus ipsam quam.
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
