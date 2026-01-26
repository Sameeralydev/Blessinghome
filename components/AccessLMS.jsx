import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const AccessLMS = () => {
  return (
    <section id="LMS" className="maxWSec w-full px-6 sm:px-12 py-12 flex">
      <div className="w-full flex bg-main/10 rounded-3xl max-sm:flex-col">
        <div className="flex-1 flex flex-col justify-center p-8 gap-4 ">
          <h2 className="h2">
            Digitizing <br />
            <span className="text-main">RILLS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray leading-snug max-w-[50ch] mb-4">
            Most of their intrinsic abilities while also modelling good social
            behavior, so preparing them to be responsible members of society on
            a worldwide scale.
          </p>

          {/* Buttons side by side */}
          <div className="flex flex-row gap-4 mt-4">
            {/* Parent Portal */}
            <a href="https://rills.edu.pk/signin" target="_blank">
              <Button>
                <span>Access Parent Portal</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>

            {/* Staff Portal */}
            <a href="https://rills.edu.pk/login" target="_blank">
              <Button
                btnType="custom"
                className="bg-black text-white border-black hover:opacity-90"
              >
                <span>Access Staff Portal</span>
                <svg
                  className="h-auto w-4"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 aspect-square flex justify-center items-center">
          <Image
            src={"/lms.png"}
            width={1000}
            height={600}
            alt="Hero Image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AccessLMS;
