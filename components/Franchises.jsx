"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Franchises = ({ headcampus }) => {
  const [active, setActive] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const mapRef = useRef(null);
  const overlayRef = useRef(null);

  const camps = [
    {
      title: "Alaska (Head Office)",
      city: "Lahore",
      contact: "0300-0649597",
      location: "RILLS Alaska Campus, 2 Rachna block Allama Iqbal Town, Lahore",
      email: "info@rills.edu.pk",
      src: "",
    },
    {
      title: "Altai ",
      city: "Gujranwala",
      contact: "0300-6539597",
      location: "People Colony",
      src: "",
      url: ""
    },
    {
      title: "Andes",
      city: "Gujranwala",
      contact: "0300-6449597",
      location: "People Colony",
      src: "",
      url: ""
    },
    {
      title: "Alborz",
      city: "Gujranwala",
      contact: "0300-6269597",
      location: "Jalil Town",
      src: "",
    },
    {
      title: "Zagros",
      city: "Gujranwala",
      contact: "0300-1059597",
      location: "Satellite Town",
      src: "",
    },
    {
      title: "Alpine",
      city: "Gujranwala",
      contact: "0321-1115461",
      location: "People Colony",
      src: "",
    },
    {
      title: "Alps",
      city: "Gujranwala",
      contact: "0300-6559597",
      location: "People Colony",
      src: "",
    },
    {
      title: "Atlas",
      city: "Lahore",
      contact: "0300-0469597",
      location: "Kot Abdul Malik",
      src: "",
      url: "https://www.google.com/maps/place/RILLS+School+Atlas+Kot+Abdul+Malik+Campus/@31.6233105,74.2352751,17z/data=!3m1!4b1!4m6!3m5!1s0x39191d8a015e10ff:0x7d4599d41b5bf55a!8m2!3d31.623306!4d74.23785!16s%2Fg%2F11sjfq5fvy?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Elbrus",
      city: "Lahore",
      contact: "0300-1709597",
      location: "Wapda Town",
      src: "",
    },
    {
      title: "Sierra",
      city: "Lahore",
      contact: "0328-1309597",
      location: "Johar Town",
      src: "",
    },
    {
      title: "Monarch",
      city: "Lahore",
      contact: "0328-7111189",
      location: "Nawab Town",
      src: "",
    },
    {
      title: "Vinson",
      city: "Lahore",
      contact: "0300-0119597",
      location: "Bahria Town",
      src: "",
    },
    {
      title: "Eiger",
      city: "Lahore",
      contact: "0344-4417972",
      location: "Harbanspura",
      src: "",
    },
    {
      title: "Sinai",
      city: "Lahore",
      contact: "0333-8124741",
      location: "Rehman Garden",
      src: "",
    },
    {
      title: "Margalla",
      city: "Kamoke",
      contact: "0300-0229597",
      location: "Pak Town",
      src: "",
    },
    {
      title: "Himalaya",
      city: "Kamoke",
      contact: "0300-0409597",
      location: "Nagri Abbas Shah",
      src: "",
    },
    {
      title: "Pico",
      city: "Gujranwala",
      contact: "0300-0649535",
      location: "Citi Housing",
      src: "",
    },
    {
      title: "Everest",
      city: "Gujranwala",
      contact: "0303-4633723",
      location: "Wapda Town",
      src: "",
    },
    {
      title: "Coast",
      city: "Gujranwala",
      contact: "0303-4633723",
      location: "Wapda Town",
      src: "",
    },
    {
      title: "Cameroon",
      city: "Gujranwala",
      contact: "0303-4633723",
      location: "D.C Road",
      src: "",
    },
    {
      title: "Olympus",
      city: "Gujranwala",
      contact: "0303-4633723",
      location: "D.C Road",
      src: "",
    },
    {
      title: "Denali",
      city: "Gujranwala",
      contact: "0303-4633723",
      location: "D.C Road",
      src: "",
    },
    {
      title: "Pearl",
      city: "Gujranwala",
      contact: "0300-0609597",
      location: "Citi Housing",
      src: "",
    },
    {
      title: "Alsek",
      city: "Gujranwala",
      contact: "0300-0899597",
      location: "Model Town",
      src: "",
    },
    {
      title: "Aures",
      city: "Gujranwala",
      contact: "0300-0899597",
      location: "Model Town",
      src: "",
    },
    {
      title: "Brecon",
      city: "Sialkot",
      contact: "0330-8110002",
      location: "Khadim Ali Road",
      src: "",
    },
    {
      title: "Anvil",
      city: "Gujrat",
      contact: "0300-1209597",
      location: "Margzhar Colony",
      src: "",
    },
    {
      title: "Brooks",
      city: "Gujranwala",
      contact: "0332-6850361",
      location: "G-Magnolia",
      src: "",
    },
    {
      title: "Balkan",
      city: "Gujranwala",
      contact: "0309-9624097",
      location: "Nowshera Road",
      src: "",
    },
    {
      title: "Marwa",
      city: "Gujranwala",
      contact: "0349-1231273",
      location: "Shalimar Town",
      src: "",
    },
    {
      title: "Safa",
      city: "Hafizabad",
      contact: "0322-6512005",
      location: "Hafizabad City",
      src: "",
    },
    {
      title: "Gibraltar",
      city: "Sheikhupura",
      contact: "0310-7387100",
      location: "Civil Lines",
      src: "",
    },
    {
      title: "Crystal",
      city: "Gujranwala",
      contact: "0309-9624097",
      location: "Hafizabad Road",
      src: "",
    },
  ];

  const cityOrder = [
    "Lahore",
    "Gujranwala",
    "Kamoke",
    "Gujrat",
    "Sialkot",
    "Hafizabad",
    "Sheikhupura",
  ];

  const sortedCamps = [...camps].sort((a, b) => {
    const aIndex = cityOrder.indexOf(a.city);
    const bIndex = cityOrder.indexOf(b.city);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(sortedCamps.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedCamps.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const map = mapRef.current;
    const overlay = overlayRef.current;

    map.classList.add("sm:pointer-events-none");

    const handleMouseDown = () => {
      map.classList.remove("sm:pointer-events-none");
    };

    const handleMouseUp = () => {
      map.classList.add("sm:pointer-events-none");
    };

    const handleMouseLeave = () => {
      map.classList.add("sm:pointer-events-none");
    };

    overlay.addEventListener("mousedown", handleMouseDown);
    overlay.addEventListener("mouseup", handleMouseUp);
    map.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      overlay.removeEventListener("mousedown", handleMouseDown);
      overlay.removeEventListener("mouseup", handleMouseUp);
      map.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const currentItems = getCurrentPageItems();
  const activeItem =
    active === -1 ? sortedCamps[0] : sortedCamps[active] || sortedCamps[0];

  return (
    <section
      id="Franchises"
      className="maxWSec w-full px-6 sm:px-12 py-12 flex bg-gray/25 flex-col gap-8"
    >
      <div className="w-full flex max-sm:flex-col justify-between max-sm:gap-8">
        <div className="sm:w-[calc(50%-2rem)] flex flex-col justify-center gap-4">
          <div
            className={`${
              headcampus ? "justify-center" : ""
            } h-full flex flex-col sm:gap-2`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={headcampus ? "/Headoffice.svg" : "/location.svg"}
                width={32}
                height={32}
                alt="location"
                className="h-6 sm:h-8"
              />
              <span className="h3">
                {headcampus ? "Head Office" : "Our Franchises"}
              </span>
            </div>

            {headcampus ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`flex-col flex gap-1 mt-4`}
              >
                <p className="uppercase text-xl sm:text-2xl font-medium sm:pb-1">
                  {activeItem.title}
                </p>
                <p className="text-gray text-base sm:text-lg leading-snug pr-8">
                  {activeItem.location}, {activeItem.city}
                </p>
                <div className="mt-4 text-sec flex flex-col gap-3 sm:gap-2 items-start text-base sm:text-lg leading-none">
                  <a
                    href={`tel:00923234656333`}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaPhoneAlt />
                    <span>+92 300 1729597</span>
                  </a>
                  <a
                    href={`tel:00923247661111`}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaPhoneAlt />
                    <span>+92 300 0669597</span>
                  </a>
                  {activeItem.email && (
                    <a
                      href={`mailto:${activeItem.email}`}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <HiOutlineMail />
                      <span>{activeItem.email}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ) : (
              <>
                <div className="flex-grow felx flex-col mt-2">
                  {currentItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      onClick={() =>
                        setActive((currentPage - 1) * itemsPerPage + index)
                      }
                      className={`${
                        (currentPage - 1) * itemsPerPage + index === active
                          ? "border-mainD bg-main/5"
                          : "hover:bg-main/5 border-transparent"
                      } border rounded-md sm:rounded-xl duration-150 transition-colors cursor-pointer px-3 py-2 sm:py-3 flex items-center justify-between gap-4`}
                    >
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-base sm:text-lg uppercase whitespace-nowrap overflow-hidden text-ellipsis w-auto underline underline-offset-2"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg uppercase whitespace-nowrap overflow-hidden text-ellipsis w-auto">
                          {item.title}
                        </p>
                      )}
                      <p className="text-xs sm:text-base text-black/70 text-right whitespace-nowrap overflow-hidden text-ellipsis w-1/2">
                        {item.location}, {item.city}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gray">
                    Page {currentPage} of {totalPages}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="w-8 h-8 grid place-content-center bg-black/10 rounded-lg disabled:opacity-40 transition-opacity duration-300"
                    >
                      <Image
                        src={"/left.svg"}
                        width={16}
                        height={16}
                        alt="arrow left"
                        className="h-4"
                      />
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="w-8 h-8 grid place-content-center bg-black/10 rounded-lg disabled:opacity-40 transition-opacity duration-300"
                    >
                      <Image
                        src={"/right.svg"}
                        width={16}
                        height={16}
                        alt="arrow right"
                        className="h-4"
                      />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className={`${
            headcampus ? "aspect-square sm:aspect-[1.4]" : "aspect-square"
          } sm:w-[calc(50%-1rem)] bg-main/10 rounded-2xl flex p-[1px] relative overflow-hidden`}
        >
          <div
            ref={overlayRef}
            className="flex-1 bg-[#FFF7EC] rounded-[calc(1rem-1px)] relative z-10 text-center p-1"
          >
            <iframe
              ref={mapRef}
              src={
                activeItem.src ||
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.306980463176!2d74.2874612!3d31.515727600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903bb93ece755%3A0xe80dce718821930a!2sRILLS%20School%20Alaska%20Iqbal%20town%20Campus!5e0!3m2!1sen!2s!4v1763743329289!5m2!1sen!2s"
              }
              width="100%"
              height="100%"
              loading="eager"
              className="w-full h-full rounded-[calc(1rem-3px)] border-none !outline-none"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {!headcampus && (
              <div className="absolute shadow-md left-3 bottom-3 rounded-lg text-left w-[min(calc(100%-5rem),30rem)] sm:min-h-20 bg-white flex flex-col gap-1 p-3 sm:p-4">
                <p className="text-sm sm:text-xl leading-tight">
                  <span className="font-semibold uppercase">
                    {activeItem.title}
                  </span>{" "}
                  -{" "}
                  <span className="text-xs sm:text-lg">{activeItem.city}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray leading-tight">
                  {activeItem.location}
                </p>
                <div className="text-sec flex gap-2 items-center text-xs sm:text-sm leading-none">
                  <a
                    href={`tel:${activeItem.contact}`}
                    rel="noopener noreferrer"
                  >
                    {activeItem.contact}
                  </a>
                  {activeItem.email && (
                    <a
                      href={`mailto:${activeItem.email}`}
                      rel="noopener noreferrer"
                    >
                      {activeItem.email}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            style={{ "--conic-color": "#F58634" }}
            className={`ConicGradient ConicRotate absolute inset-0 w-[200%] h-[200%] left-1/2 top-1/2 -transform-x-1/2 -transform-y-1/2`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Franchises;
