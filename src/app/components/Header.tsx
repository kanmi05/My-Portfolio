"use client";

import { headers } from "next/dist/client/components/headers";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {/*social icons*/}
        <SocialIcon
          url="https://www.twitter.com/olapaulsunkanmi"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          bgColor="transparent"
          fgColor="gray"
        />

        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

      <Link href="#Contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer ">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            bgColor="transparent"
            fgColor="gray"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
