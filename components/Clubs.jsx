"use client";
import Tag from "./ui/Tag";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";

/* 🔹 DATA (logos removed) */
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

const Clubs = ({ direction = "left", speed = 1 }) => {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    const animate = () => {
      if (direction === "left") {
        if (xPercent < -100) xPercent = 0;
        xPercent -= speed / 10;
      } else {
        if (xPercent > 0) xPercent = -100;
        xPercent += speed / 10;
      }

      gsap.set([first.current, second.current], { xPercent });
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [direction, speed]);

  return (
    <section
      id="Curriculum"
      className="maxW sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="max-sm:px-4 h2 text-center">
        <span className="text-main">RILLS</span> Club <br />& Societies
      </h2>

      <div className="flex gap-4 text-light">
        <section className="w-full overflow-hidden py-2 sm:py-8 lg:py-16">
          <div
            ref={marquee}
            className="h-fit w-fit flex-nowrap relative flex border-y"
          >
            {/* FIRST */}
            <div
              ref={first}
              className="h-full flex-1 flex w-fit flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
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

                      {/* Images removed */}

                      <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
                        {item.title.map((word, j) => (
                          <div
                            key={j}
                            className="leading-normal sm:leading-tight"
                          >
                            {word}
                            <br />
                          </div>
                        ))}
                      </h4>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>

            {/* SECOND */}
            <div
              ref={second}
              className="absolute left-full top-0 h-full flex w-full flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
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

                      {/* Images removed */}

                      <h4 className="text-xl sm:text-3xl lg:text-5xl font-medium">
                        {item.title.map((word, j) => (
                          <div
                            key={j}
                            className="leading-normal sm:leading-tight"
                          >
                            {word}
                            <br />
                          </div>
                        ))}
                      </h4>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clubs;
