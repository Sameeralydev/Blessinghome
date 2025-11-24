"use client";

import React, { useEffect, useState } from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const Bento = () => {
  const News = [
    {
      title: "School calender update",
      url: "/",
    },
    {
      title: "Ramadan Timing",
      url: "/",
    },
    {
      title: "Results",
      url: "/",
    },
    {
      title: "New Admissions",
      url: "/",
    },
  ];

  const Slides = [
    "/slider1.JPG",
    "/slider2.JPG",
    "/slider3.JPG",
    "/slider4.JPG",
    "/slider5.JPG",
    "/slider6.JPG",
    "/slider7.JPG",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="About"
      className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="h2 text-center">
        Welcome to <span className="text-main">RILLS</span> School
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {/* mission */}
        <div className="sm:[grid-area:1/1/2/3]  group/card p-6 rounded-3xl bg-main text-light relative overflow-hidden  ">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-96 translate-x-[5%] translate-y-[15%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag>Our Mission</Tag>
            <p className="text-base sm:text-lg">
              Our mission is to provide quality education that's not just
              accessible and affordable, but also inclusive and future-focused.
              We're committed to:
            </p>
            <ul className="leading-relaxed list-disc list-inside">
              <li>
                Equipping students with practical knowledge and essential life
                skills
              </li>
              <li>
                Encouraging creativity, critical thinking, and effective
                communication
              </li>
              <li>
                Creating an environment that celebrates individuality and
                diversity
              </li>
              <li>
                Strengthening Islamic values while blending them with modern
                academics
              </li>
              <li>Partnering with parents to nurture each child's growth</li>
            </ul>

            <div className="flex justify-end">
              <Link href={"/OnlineAdmission"}>
                <Button btnType="sec">
                  <span>Online Admission</span>
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
                      fill="#fff"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* latest */}
        <div className="sm:[grid-area:2/1/3/2] group/card flex-1 min-h-72 p-6 rounded-3xl bg-sec text-light relative overflow-hidden">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-40 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag>Latest</Tag>
            <div>
              {News.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.url}
                    name="detail link"
                    className="w-fit text-light text-base sm:text-lg flex items-center gap-2 hover:gap-4 hover:underline transition-all duration-300"
                  >
                    <span>{item.title}</span>
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
                        fill="#FDBC58"
                      />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* images */}
        <div className="sm:[grid-area:2/2/3/3] xl:[grid-area:1/3/3/4] min-h-72 rounded-3xl bg-slate-100 overflow-hidden relative">
          {Slides.map((item, index) => {
            const isActive = index === currentSlide;
            return (
              <Image
                key={index}
                src={item}
                width="600"
                height="600"
                alt="book"
                className={`${
                  isActive ? "opacity-100 z-20" : "opacity-0 z-10"
                } transition-opacity duration-1000 transform h-full w-full object-cover absolute inset-0`}
              />
            );
          })}
          <div className="bg-gradient-to-b from-sec/20 to-secD/20 absolute inset-0 z-30"></div>
          <div className="absolute bottom-0 right-0 z-40 py-5 px-6 w-fit flex gap-2 items-center">
            {Slides.map((_, i) => {
              return (
                <button
                  onClick={() => handleSlideClick(i)}
                  key={i}
                  className={`${
                    i === currentSlide ? "bg-main w-8" : "bg-light w-3"
                  } h-3 rounded-full border-none outline-none cursor-pointer transition-all duration-300`}
                ></button>
              );
            })}
          </div>
        </div>

        {/* vision */}
        <div className="sm:[grid-area:3/1/4/3] xl:[grid-area:2/2/3/3] group/card min-h-72 p-6 rounded-3xl bg-main relative overflow-hidden">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <Tag>Our Vision</Tag>
            <p className="text-base sm:text-lg text-light">
              RILLS believes that every child has the potential to achieve
              success based on his unique talent and skills. RILLS has achieved
              its highest status in Gujranwala region till September 2020. RILLS
              aims to achieve the highest ranking in Pakistan till 2027 and in
              the world till September 2045, Inshallah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
