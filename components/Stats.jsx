import React from "react";
import { Origami } from "./ui/Origami";

const Stats = () => {
  return (
    <div className="maxWSec px-12 mt-24 mb-12 ">
      <div className="flex gap-8 items-center justify-center">
        <div className="h-56 w-[300px]">
          <Origami>
            <div className="w-full h-full flex-1 flex  flex-col justify-center items-center">
              <h2 className="text-6xl font-berlin font-bold tracking-wide leading-snug">
                15
              </h2>
              <p className="text-2xl leading-snug">Franchises</p>
            </div>
          </Origami>
        </div>
        <div className="h-56 w-[300px]">
          <Origami inverse>
            <div className="w-full h-full flex-1 flex  flex-col justify-center items-center">
              <h2 className="text-6xl font-berlin font-bold tracking-wide leading-snug">
                4.5k
              </h2>
              <p className="text-2xl leading-snug">Enroll Students</p>
            </div>
          </Origami>
        </div>
        <div className="h-56 w-[300px]">
          <Origami>
            <div className="w-full h-full flex-1 flex  flex-col justify-center items-center">
              <h2 className="text-6xl font-berlin font-bold tracking-wide leading-snug">
                7.3k
              </h2>
              <p className="text-2xl leading-snug">Passouts</p>
            </div>
          </Origami>
        </div>
      </div>
    </div>
  );
};

export default Stats;
