"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const HeroHeader = ({ title, description }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const Slides = [
    "/hero.JPG",
    "/hero2.JPG",
    "/hero3.JPG",
    "/hero4.JPG",
    "/hero5.JPG",
    "/hero6.JPG",
    "/hero7.JPG",
    "/hero8.JPG",
    "/hero9.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderImages = useCallback(() => {
    return Slides.map((item, index) => {
      const isActive = index === currentSlide;
      return (
        <Image
          key={item}
          src={item}
          width={1000}
          height={600}
          priority
          alt={`Hero Image ${index + 1}`}
          className={`${
            isActive ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
          } transition-opacity duration-1000 transform h-full w-full object-cover absolute inset-0`}
        />
      );
    });
  }, [currentSlide]);

  return (
    <header
      className={`p-4 flex h-[calc(100vh-0rem)] ${
        isHomePage
          ? "max-h-[calc(890px-0rem)] sm:max-h-[calc(1080px-0rem)]"
          : "max-h-[calc(620px-0rem)] sm:max-h-[calc(700px-0rem)]"
      }`}
    >
      <div className="bg-black flex relative flex-1 rounded-3xl overflow-hidden maxW">
        {renderImages()}
        <div className="bg-gradient-to-b from-main/40 to-sec/40 absolute inset-0 z-[3]"></div>
        <div className="relative bg-black/20 text-light z-10 flex-1 flex flex-col items-center justify-center gap-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.8,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{ textShadow: "0 0 1rem #00000020" }}
            className="h1 text-center"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.h4
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              style={{ textShadow: "0 0 .5rem #00000020" }}
              className="text-center max-w-[min(54ch,85%)] leading-normal text-sm sm:text-base"
            >
              {description}
            </motion.h4>
          )}
          {isHomePage && <Sections />}
        </div>
      </div>
    </header>
  );
};

const Sections = () => {
  const Sections = [
    {
      title: "About",
      icon: "/icons/About.svg",
      link: "#About",
    },
    {
      title: "Timeline",
      icon: "/icons/Timeline.svg",
      link: "#Timeline",
    },
    {
      title: "Curriculum",
      icon: "/icons/Curriculum.svg",
      link: "#Curriculum",
    },
    {
      title: "RILLS Digital",
      icon: "/icons/LMS.svg",
      link: "#LMS",
    },
    {
      title: "Franchises",
      icon: "/icons/Campuses.svg",
      link: "#franchises",
    },
    {
      title: "Contact",
      icon: "/icons/Contact.svg",
      link: "#Contact",
    },
  ];
  const handleSectionClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-9 sm:h-16 px-2 sm:px-5 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-light text-dark"
    >
      <div class="z-[-1] rotate-90 absolute bottom-0 left-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>
      <div class="z-[-1] absolute bottom-0 right-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>

      {Sections.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative w-12 sm:w-24 h-full cursor-pointer"
            onClick={() => handleSectionClick(item.link)}
          >
            <div className="w-11 sm:w-16 -top-6 sm:-top-8 aspect-square group-hover:bg-main bg-sec transition-all duration-300 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full">
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt="icon"
                priority
                className="w-[60%]"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-sm leading-tight">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;
