"use client";
import Tag from "./ui/Tag";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";

/* 🔹 DATA (with images) */
const List = [
  {
    slug: "/Curriculum/EarlyYears",
    image: "/clubs/ReadingSociety.jpeg",
  },
  {
    slug: "/Curriculum/PrimaryYears",
    image: "/clubs/sportsClub.jpeg",
  },
  {
    slug: "/Curriculum/MiddleYears",
    image: "/clubs/Theater.jpeg",
  },
];

const Clubs = ({ direction = "left", speed = 1 }) => {
  const marquee = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const xPercent = useRef(0);

  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    if (!first.current || !second.current) return;

    let rafId;

    const animate = () => {
      if (!first.current || !second.current) return;

      if (direction === "left") {
        if (xPercent.current < -100) xPercent.current = 0;
        xPercent.current -= speed / 10;
      } else {
        if (xPercent.current > 0) xPercent.current = -100;
        xPercent.current += speed / 10;
      }

      gsap.set([first.current, second.current], {
        xPercent: xPercent.current,
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
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
                    } w-[220px] sm:w-[320px] lg:w-[430px] aspect-[.9] sm:aspect-[1.3] rounded-3xl mx-1 sm:mx-3 overflow-hidden relative`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main to-mainD"
                        : "bg-gradient-to-br from-sec to-secD"
                    } rounded-2xl p-0 flex items-center justify-center`}
                  >
                    {/* Tag overlay on top-left */}
                    <div className="absolute top-2 left-2 z-10">
                      <Tag>RILLS</Tag>
                    </div>

                    {/* Full-cover Image centered */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={item.image}
                        alt="Club"
                        className="w-full h-full object-cover rounded-2xl"
                      />
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
                    } w-[220px] sm:w-[430px] aspect-[.9] sm:aspect-[1.3] rounded-3xl mx-1 sm:mx-3 overflow-hidden relative`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main to-mainD"
                        : "bg-gradient-to-br from-sec to-secD"
                    } rounded-2xl p-0 flex items-center justify-center`}
                  >
                    {/* Tag overlay on top-left */}
                    <div className="absolute top-2 left-2 z-10">
                      <Tag>RILLS</Tag>
                    </div>

                    {/* Full-cover Image centered */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={item.image}
                        alt="Club"
                        className="w-full h-full object-cover rounded-2xl"
                      />
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
