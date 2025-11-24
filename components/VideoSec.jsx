import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import WaveButton from "./ui/WaveButton";

const VideoSec = () => {
  return (
    <section className="p-4 h-screen w-full max-h-[calc(1080px-3rem)]">
      <div
        className="w-full h-full relative overflow-hidden rounded-3xl maxW"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        <div className="w-screen h-screen fixed left-0 top-0 object-cover">
          <Image
            src={"/youtube.png"}
            width={1000}
            height={600}
            alt="Hero Image"
            className="w-full h-full absolute inset-0 object-cover"
          />
          <div className="bg-gradient-to-b from-main/40 to-sec/40 absolute inset-0 z-10"></div>
        </div>
        <div className="bg-black/20 h-full relative z-20 flex flex-col justify-center items-center gap-4 text-light">
          <h1
            style={{ textShadow: "0 0 1rem #00000020" }}
            className="h1 text-center"
          >
            Corporate Social
            <br />
            Responsibility
          </h1>
          <h4
            style={{ textShadow: "0 0 .5rem #00000020" }}
            className="mb-4 text-center max-w-[min(54ch,85%)] leading-normal text-sm sm:text-base"
          >
            RILLS has always been a strong advocate of social responsibility and
            is committed to providing public and community services through
            wide-ranging activities.
          </h4>
          <a href="https://youtu.be/VTuCDim5FQM?feature=shared" target="_blank">
            <WaveButton>
              <FaPlay />
            </WaveButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
