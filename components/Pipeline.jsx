"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import { BiSitemap } from "react-icons/bi";
import { RiDiscussLine, RiLoopRightLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const Steps = [
    {
      title: "Our Philosophy",
      detail: [
        "At RILLS, we believe that children are a precious gift of Allah and our greatest natural resource. Every child has potential to achieve success based on his unique skills and talents, who deserves to be treated with love and respect. We know that a child thrives when given the chance to spend his early childhood in a home like nurturing environment with warm, caring and dedicated adults. The staff and administration at RILLS are united in their commitment to the belief that all students can learn properly and they are the center of the educational process.",
      ],
      // points: [
      //   "Open 2 branches",
      //   "won city best school award",
      //   "challenge. The RILLS schools",
      //   "got 2 top positions ",
      // ],
    },
    {
      title: "Our Programme",
      detail: [
        "All students at RILLS, will be helped to attain their maximum potential. RILLS places a high priority on catering the different abilities of each student.",
        "Classes will be taught on a group or individual basis. Students will be helped to explore their own thinking and develop ideas through games, discussions, research and practical activities. We emphasize independent and original thoughts to take students away from mindless rote learning. We at RILLS, will take care of all your child's needs from the alphabet to research work, from table manners to practical life skills. RILLS aims to achieve the highest standards in curriculum as well as behaviour of its students, in this contemporary world.",
      ],
    },
    {
      title: "Our Curriculum",
      detail: [
        `RILLS offers a rich and stimulating curriculum. It includes a foreign language (all children learn Spoken English from Reception onwards), national language, art, design and basic sciences. Core subjects like Maths and English give your children the excellent literacy and numeracy skills they need, whatever path they choose in life. Urdu language curriculum helps to compose proud Pakistanis, whereas, Islamic Studies curriculum covers nitty-gritty of Islam.`,
        "Science curriculum introduces the excitement of scientific investigation while our lively Social Studies curriculum gives the students a deeper understanding of the world in which they live. Every child can shine at RILLS - whether they are wizards at Maths, have an eye for design, or are great in the playground.",
      ],
      // link: {
      //   title: "see all",
      //   url: "/Curriculum/EarlyYears",
      // },
    },
  ];

  const container = useRef();
  const progressLine = useRef();
  const progressRedLine = useRef();
  const iconsArray = useRef([]);
  const [isActive, setIsActive] = useState(-1);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      function SetProgressHeight(prog) {
        if (progressRedLine.current && prog) {
          gsap.to(progressRedLine.current, {
            height: `${100 * prog}%`,
            duration: 0.1,
          });
        }
      }

      ScrollTrigger.create({
        trigger: container.current,
        start: `top 50%`,
        end: `bottom 60%`,
        animation: timeline,
        scrub: 1,
        onUpdate: (self) => {
          let progress = self.progress;
          let bottomPos = 0;
          SetProgressHeight(progress);

          if (progressLine.current) {
            const progressLineT =
              progressLine.current.getBoundingClientRect().top;

            const progressLineH =
              progressLine.current.getBoundingClientRect().height * progress;

            bottomPos = progressLineH + progressLineT;
            if (iconsArray.current) {
              iconsArray.current.forEach((iconRef, index) => {
                if (iconRef) {
                  const topPos = iconRef.getBoundingClientRect().top;
                  if (bottomPos > topPos && index > isActive) {
                    setIsActive(index);
                  }
                }
              });
            }
          }
        },
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <section
      id="Timeline"
      ref={container}
      className="maxWSec flex flex-col lg:flex-row"
    >
      <div className="w-fit flex-shrink-0 px-6 py-8 sm:px-12 sm:py-12 relative">
        <div className="sticky top-28 flex flex-col max-lg:items-center max-lg:text-center">
          <h2 className="h2 w-fit">
            RILLS <br className="max-sm:hidden" />
            <span>
              <small className="text-[.5em]">since</small>{" "}
              <span className="text-main">2007</span>
            </span>
          </h2>
        </div>
      </div>

      <div className="flex-grow flex px-4 lg:px-0">
        {/* Progress */}
        <div className="w-9 flex-shrink-0 p-4 lg:py-12 flex justify-center">
          <div
            ref={progressLine}
            className="relative w-1 rounded-lg bg-grayL my-1 overflow-hidden"
          >
            <div
              ref={progressRedLine}
              className="absolute w-full left-0 top-0 bg-main"
            ></div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex-grow p-4 lg:p-12 flex flex-col gap-8 sm:gap-16">
          {Steps.map((item, i) => {
            return (
              <div key={i} className="relative">
                <div
                  ref={(el) => (iconsArray.current[i] = el)}
                  className={`w-5 aspect-square z-10 absolute -left-6 lg:-left-14 -translate-x-full top-0 bg-main border-solid rounded-full flex justify-center items-center flex-col transition-all duration-200 ${
                    isActive >= i && isActive != -1
                      ? "border-mainD border-4 scale-125"
                      : "border-transparent border-4"
                  }`}
                >
                  {item.icons &&
                    item.icons.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            index != item.icons?.length - 1 ? "-mb-1" : ""
                          }
                        >
                          <Image
                            src={item}
                            width={20}
                            height={20}
                            alt={"logo"}
                          ></Image>
                        </div>
                      );
                    })}

                  {item.icon && item.icon}
                </div>

                <div className="flex">
                  <div className="flex flex-col gap-3 sm:gap-6">
                    <h3 className="h3 w-full">{item.title}</h3>
                    {item.detail && (
                      <p className="text-gray space-y-3 text-sm sm:text-xl leading-normal w-full">
                        {item.detail &&
                          item.detail.map((detailText, detailIndex) => {
                            return (
                              <span className="block" key={detailIndex}>
                                {detailText}
                              </span>
                            );
                          })}
                      </p>
                    )}
                    {item.points && (
                      <ul className="text-gray text-base sm:text-xl w-full list-disc pl-5">
                        {item.points.map((point, i) => {
                          return (
                            <li key={i} className="leading-snug py-1">
                              {point}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {item.link && (
                      <Link
                        href={item.link.url}
                        name="detail link"
                        className="w-fit text-sec text-base sm:text-xl flex items-center gap-2 hover:gap-4 hover:underline transition-all duration-300"
                      >
                        <span>{item.link.title}</span>
                        <svg
                          className="h-auto w-4"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                            fill="#0098DB"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
