"use client";
import Tag from "./ui/Tag";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";

const List = [
  {
    title: ["Reading", "Society"],
    slug: "/Curriculum/EarlyYears",
  },
  {
    title: ["Sports", "Club"],
    slug: "/Curriculum/PrimaryYears",
  },
  {
    title: ["Theatre", "Society"],
    slug: "/Curriculum/MiddleYears",
  },
];

const Clubs = ({ direction, speed }) => {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;
  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    const rightAnimation = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(rightAnimation);
      xPercent += speed / 10;
    };

    const leftAnimation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(leftAnimation);
      xPercent -= speed / 10;
    };

    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  return (
    <section
      id="Curriculum"
      className="maxW sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="max-sm:px-4 h2 text-center">
        <span className="text-main">RILLS</span> Club <br />& Societies
      </h2>
      <div className="flex gap-4 text-light">
        <section
          style={{
            maskImage: `linear-gradient(
        to right,
        transparent,
        black 2%,
        black 98%,
        transparent
      )`,
            WebkitMaskImage: `linear-gradient(
        to right,
        transparent,
        black 2%,
        black 98%,
        transparent
      )`,
          }}
          className="w-full flex justify-center items-center py-2 sm:py-8 lg:py-16 overflow-hidden"
        >
          <div
            ref={marquee}
            className="h-fit w-fit flex-nowrap relative flex border-y flex-shrink-0"
          >
            <div
              className="h-full flex-1 flex w-fit flex-nowrap items-center flex-shrink-0"
              ref={first}
            >
              {ArrayData.map((item, i) => {
                return (
                  <Link key={i} href={item.slug}>
                    <TiltCard
                      key={i}
                      className={`${
                        i % 2 === 0
                          ? "bg-gradient-to-br from-main/30 to-mainD/30"
                          : "bg-gradient-to-br from-sec/30 to-secD/30"
                      } w-[220px] sm:w-[320px] lg:w-[430px] aspect-[.9] sm:aspect-[1.3] rounded-3xl mx-1 sm:mx-3`}
                      innerClassName={`${
                        i % 2 === 0
                          ? "bg-gradient-to-br from-main to-mainD"
                          : "bg-gradient-to-br from-sec to-secD"
                      } rounded-2xl p-2 sm:p-4 flex flex-col gap-4 justify-between`}
                    >
                      <div className="w-full h-full p-2 lg:p-4 flex flex-col gap-4 justify-between">
                        <Tag>RILLS</Tag>
                        <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium ">
                          {item.title.map((word, j) => {
                            return (
                              <div className="leading-normal sm:leading-tight">
                                {word} {j != item.title.length && <br />}{" "}
                              </div>
                            );
                          })}
                        </h4>
                      </div>
                    </TiltCard>
                  </Link>
                );
              })}
            </div>
            <div
              ref={second}
              className="flex-shrink-0 h-full flex w-full flex-nowrap items-center absolute left-full top-0"
            >
              {ArrayData.map((item, i) => {
                return (
                  <Link key={i} href={item.slug}>
                    <TiltCard
                      className={`${
                        i % 2 === 0
                          ? "bg-gradient-to-br from-main/30 to-mainD/30"
                          : "bg-gradient-to-br from-sec/30 to-secD/30"
                      } w-[220px] sm:w-[430px] aspect-[.9] sm:aspect-[1.3] rounded-3xl mx-1 sm:mx-3`}
                      innerClassName={`${
                        i % 2 === 0
                          ? "bg-gradient-to-br from-main to-mainD"
                          : "bg-gradient-to-br from-sec to-secD"
                      } rounded-2xl p-2 sm:p-4 flex flex-col gap-4 justify-between`}
                    >
                      <div className="w-full h-full p-2 lg:p-4 flex flex-col gap-4 justify-between">
                        <Tag>RILLS</Tag>
                        <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
                          {item.title.map((word, j) => {
                            return (
                              <div className="leading-normal sm:leading-tight">
                                {word} {j != item.title.length && <br />}{" "}
                              </div>
                            );
                          })}
                        </h4>
                      </div>
                    </TiltCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clubs;
