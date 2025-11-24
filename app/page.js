import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import Team from "@/components/Team";
import About from "@/components/About";

const Pipeline = dynamic(() => import("../components/Pipeline"));
const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
// const Curriculum = dynamic(() => import("../components/Curriculum"));
const Clubs = dynamic(() => import("../components/Clubs"));
const VideoSec = dynamic(() => import("../components/VideoSec"));
const AccessLMS = dynamic(() => import("../components/AccessLMS"));
const Franchises = dynamic(() => import("../components/Franchises"));
const Stats2 = dynamic(() => import("../components/Stats2"));

export default function Home() {
  return (
    <main>
      <HeroHeader
        title={
          <>
            Corporate Social <br /> Responsibility
          </>
        }
        description="RILLS has always been a strong advocate of social responsibility and
            is committed to providing public and community services through
            wide-ranging activities."
      />
      <Bento />
      <Marquee direction={"right"} speed={0.2} />
      <Pipeline />
      {/* <Curriculum direction={"right"} speed={0.2} /> */}
      <About />
      <Clubs direction={"right"} speed={0.2} />
      <VideoSec />
      <Team />
      <AccessLMS />
      <Franchises />
      <Stats2 />
    </main>
  );
}
