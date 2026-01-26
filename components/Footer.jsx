"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "General Inquiries",
      content: [
        { title: "info@rills.edu.pk", src: "mailto:info@rills.edu.pk", blank: true },
        { title: "+92 300 1729597", src: "tel:+923001729597", blank: true },
        { title: "+92 300 0649597", src: "tel:+923000649597", blank: true },
        { title: "+92 300 0669597", src: "tel:+923000669597", blank: true },
      ],
    },
    {
      title: "About",
      content: [
        { title: "About", src: "/About" },
        { title: "Career", src: "/Career" },
        { title: "Timing", src: "/Timing" },
      ],
    },
    {
      title: "Education",
      content: [
        { title: "Admissions", src: "/Admissions" },
        { title: "Tests", src: "/Tests" },
        { title: "Results", src: "/Results" },
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
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-dark text-light w-full fixed -bottom-0.5 z-10"
      >
        <div className="maxWSec px-4 sm:px-12 py-6 sm:py-12 gap-6 sm:gap-12 flex max-sm:flex-col justify-between w-full">
          {/* LOGO + FOLLOW */}
          <div className="flex flex-col gap-4 max-sm:items-center">
            <Link href="/">
              <Image
                src="/RILLS-Logo-new.png"
                width={600}
                height={600}
                alt="RILLS Logo"
                priority
                className="w-36 sm:w-44"
              />
            </Link>

            <a
              href="#social"
              className="mt-2 inline-flex justify-center rounded-full bg-main px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Follow Us
            </a>
          </div>

          {/* LINKS */}
          <div className="flex max-sm:flex-col items-start flex-grow sm:max-w-[60%] gap-1 sm:gap-8">
            {Links.map((item, index) => (
              <div key={index} className="flex-1 text-gray">
                <h5 className="font-berlin font-medium text-xl text-white mb-1">
                  {item.title}
                </h5>
                {item.content.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.src}
                    target={subItem.blank ? "_blank" : "_self"}
                    rel={subItem.blank ? "noopener noreferrer" : ""}
                  >
                    <LinkEffect noicon text={subItem.title} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* APP STORE BUTTONS — WHITE LINE SE UPAR */}
        <div className="maxWSec px-4 sm:px-12 flex justify-end mb-4 gap-3">
          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FCBB55] text-white font-medium shadow hover:scale-105 transition"
          >
            <FaGooglePlay className="text-xl" />
            <span className="text-sm">Get it on Play Store</span>
          </Link>

          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-medium shadow hover:scale-105 transition"
          >
            <FaApple className="text-xl" />
            <span className="text-sm">Download on App Store</span>
          </Link>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t py-2 sm:py-4 border-[#333]">
          <div
            id="social"
            className="maxWSec max-sm:pb-8 text-sm sm:text-base flex flex-wrap justify-between items-center px-4"
          >
            <div>© 2025 RILLS</div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 sm:gap-4 items-center text-xl">
              <Link href="/" target="_blank"><FaLinkedin /></Link>

              <Link
                href="https://www.facebook.com/rillsschool"
                target="_blank"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://www.instagram.com/rillsschool/"
                target="_blank"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://x.com/rillsschool"
                target="_blank"
              >
                <FaXTwitter />
              </Link>

              <Link
                href="https://www.youtube.com/@rillsschool"
                target="_blank"
              >
                <FaYoutube />
              </Link>

              <Link
                href="https://www.youtube.com/@rillsfranchise"
                target="_blank"
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
