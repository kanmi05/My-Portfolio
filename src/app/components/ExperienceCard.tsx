"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
    xl:w=[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px]
        object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1623643023681720321/jOvI3gBk_400x400.jpg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">job title</h4>
        <p className="font-bold text-2xl mt-1 ">company name</p>
        <div className=" flex space-x-2 my-2 ">
          {/*tech used*/}
          <img
            className="rounded-full h-10  w-10"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3293449/settings_images/a51d1ac-3ea4-c5c8-438-e16a6447204_GNVpOQtiTAuH8off2Dxg_r9AJn36QQ1GlRuoZPr1i_1280px-React-icon.svg_1_.png"
            alt=""
          />
          <img
            className="rounded-full h-10  w-10"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3293449/settings_images/a51d1ac-3ea4-c5c8-438-e16a6447204_GNVpOQtiTAuH8off2Dxg_r9AJn36QQ1GlRuoZPr1i_1280px-React-icon.svg_1_.png"
            alt=""
          />
          <img
            className="rounded-full h-10  w-10"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3293449/settings_images/a51d1ac-3ea4-c5c8-438-e16a6447204_GNVpOQtiTAuH8off2Dxg_r9AJn36QQ1GlRuoZPr1i_1280px-React-icon.svg_1_.png"
            alt=""
          />
          <img
            className="rounded-full h-10  w-10"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3293449/settings_images/a51d1ac-3ea4-c5c8-438-e16a6447204_GNVpOQtiTAuH8off2Dxg_r9AJn36QQ1GlRuoZPr1i_1280px-React-icon.svg_1_.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">started ....ended</p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li>summary points summary points summary points</li>
          <li>summary points summary pointsummary points</li>
          <li>summary points summary pointsummary points</li>
          <li>summary points summary pointsummary points</li>
        </ul>
      </div>
    </article>
  );
}
