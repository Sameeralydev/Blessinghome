"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef]);

  useEffect(() => {
    if (contentRef.current) {
      const handleResize = () => {
        setContentHeight(contentRef.current.offsetHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const Links = [
    {
      title: "General Inquiries",
      content: [
        {
          title: "info@rills.edu.pk",
          src: "mailto:info@rills.edu.pk",
          blank: true,
        },
        {
          title: "+92 300 1729597",
          src: "tel:+92 300 1729597",
          blank: true,
        },
        {
          title: "+92 300 0649597",
          src: "tel:+92 300 0649597",
          blank: true,
        },
        {
          title: "+92 300 0669597",
          src: "tel:+92 300 0669597",
          blank: true,
        },
      ],
    },
    {
      title: "About",
      content: [
        {
          title: "About",
          src: "/About",
        },
        {
          title: "Career",
          src: "/Career",
        },
        {
          title: "Timing",
          src: "/Timing",
        },
      ],
    },
    {
      title: "Education",
      content: [
        {
          title: "Admissions",
          src: "/Admissions",
        },
        {
          title: "Tests",
          src: "/Tests",
        },
        {
          title: "Results",
          src: "/Results",
        },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute top-0 left-0 right-0"></div>
      </div>
      <div
        ref={contentRef}
        className="pt-16 bg-dark text-light w-full fixed -bottom-0.5 z-10"
      >
        <div className="maxWSec px-4 sm:px-12 py-6 sm:py-12 gap-6 sm:gap-12 flex max-sm:flex-col justify-between  w-full">
          <Link href={"/"} name="home link" className="flex-shrink-0">
            <Image
              src={"/RILLS-Logo-new.png"}
              width={400}
              height={400}
              alt="Logo"
              priority
              className={`w-20 sm:w-24 max-sm:mx-auto`}
            />
          </Link>
          <div className="flex max-sm:flex-col items-start flex-grow sm:max-w-[60%] gap-1 sm:gap-8 whitespace-nowrap w-fit">
            {Links.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex justify-center text-base text-gray"
                >
                  <div className="flex sm:flex-col items-start flex-wrap text-sm sm:text-base">
                    <h5 className="w-full font-berlin font-medium tracking-wide text-xl text-white mb-1">
                      {item.title}
                    </h5>
                    {item.content.map((subItem, subIndex) => {
                      return (
                        <Link
                          key={subIndex}
                          href={subItem.src}
                          target={item.blank ? "_blank" : "_self"}
                          rel={item.blank ? "noopener noreferrer" : ""}
                        >
                          <LinkEffect noicon text={subItem.title} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-t py-2 sm:py-4 border-[#333]">
          <div className="maxWSec max-sm:pb-8 text-sm sm:text-base flex flex-wrap justify-between items-center relative px-4">
            {/* <div className="flex gap-1 sm:gap-4 items-center">
              <Link href={"/"}>
                <LinkEffect noicon text={"Guidelines & Policies"} />
              </Link>
              <Link href={"/"}>
                <LinkEffect noicon text={"Online Admission"} />
              </Link>
            </div> */}
            <div className="max-md:py-2 flex gap-1 sm:gap-4 items-center text-base">
              © 2025 Rills
            </div>
            {/* <div className="absolute whitespace-nowrap text-sm text-gray left-1/2 bottom-0 md:bottom-1/2 -translate-x-1/2 md:translate-y-1/2">
              made by{" "}
              <a
                href="https://sheharyarsaeed.vercel.app/"
                target="_blank"
                className="text-light text-base"
              >
                sheharyar saeed
              </a>
            </div> */}
            <div className="max-md:py-2 flex gap-2 sm:gap-4 items-center text-xl ">
              <Link href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaLinkedin />
              </Link>
              <Link
                href={"https://www.facebook.com/rillsschool"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <FaFacebook />
              </Link>
              <Link
                href={"https://www.instagram.com/rillsschool/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://www.youtube.com/@rillsschool"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <FaYoutube />
              </Link>
              <Link
                href={"https://www.youtube.com/@rillsfranchise"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
