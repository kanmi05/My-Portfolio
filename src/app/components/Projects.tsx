/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x  z-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB04]/80 scrollbar-thin">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col
          space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-50 h-60"
              src="https://tin-dog05.netlify.app/images/iphone6.png"
              alt=""
            />

            <div className="space-y-10 PX-0 md:px-10 max-w-6xl">
              <h4 className="text-center font-semibold text-4xl">
                {" "}
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                inventore, vitae debitis perspiciatis, ipsa molestias officiis
                deleniti, expedita ut molestiae recusandae reiciendis numquam
                exercitationem doloremque cupiditate labore sint. Quam, itaque?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
