import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const VideoSec = () => {
  return (
    <section className="p-4 h-screen w-full max-h-[calc(1080px-3rem)]">
      <div
        className="w-full h-full relative overflow-hidden rounded-3xl maxW"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        <div className="w-screen h-screen fixed left-0 top-0 object-cover">
          <Image
            src={"/mainbanner.jpeg"}
            width={1000}
            height={600}
            alt="Blessing Home Public School"
            className="w-full h-full absolute inset-0 object-cover"
          />
          <div className="bg-gradient-to-b from-main/40 to-sec/40 absolute inset-0 z-10"></div>
        </div>
        <div className="bg-black/20 h-full relative z-20 flex flex-col justify-center items-center gap-4 text-light">
          <h1
            style={{ textShadow: "0 0 1rem #00000020" }}
            className="h1 text-center"
          >
            Learning That Feels
            <br />
            Like Home
          </h1>
          <h4
            style={{ textShadow: "0 0 .5rem #00000020" }}
            className="mb-4 text-center max-w-[min(54ch,85%)] leading-normal text-sm sm:text-base"
          >
            Blessing Home Public School supports students with structured
            academics, caring supervision, co-curricular opportunities, and a
            welcoming campus culture for families in Pakpattan.
          </h4>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:03071693780">
              <Button>Call 03071693780</Button>
            </a>
            <a
              href="https://www.facebook.com/blessinghomeschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button btnType="sec">Visit Facebook</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
