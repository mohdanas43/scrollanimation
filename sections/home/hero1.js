"use client";
import Card from "@/app/components/card";
import {
  easeInOut,
  useMotionValue,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const Hero1 = () => {
  const ref = useRef();
  const { scrollY } = useScroll({ target: ref });

  const scrollRange = [0, 500];

  const xTranslation = useTransform(scrollY, scrollRange, [0, -1800]);
  const yTranslation = useTransform(scrollY, scrollRange, [0, -800]);

  return (
    <div className="bg-[#e4e2df]">
      
      <div
        className="flex relative top-0 h-[120vh] flex-col overflow-hidden"
        ref={ref}
      >
        <motion.div
          className="absolute top-[2.25rem] "
          style={{ x: xTranslation, y: yTranslation}}
          
        >
          <Card
            background={"#F2EEEB"}
            name={"Setters Design School"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[5rem] left-[8rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#EC8B87"}
            name={"hr & 5n3hec"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[10rem] left-[16rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#3EB971"}
            name={"soft skills"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[15rem] left-[25rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#060606"}
            name={"kopnopatnbhoe o6y4ehne"}
            description={"setters.digital"}
            text={"#F2F2F2"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[20rem] left-[35rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#E84D3E"}
            name={"creative &copywriting"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[25rem] left-[45rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#E77042"}
            name={"production"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[30rem] left-[56rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#0B92B5"}
            name={"npoabnxehne"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[35rem] left-[65rem]"
          style={{ x: xTranslation, y: yTranslation }}
        >
          <Card
            background={"#F2DD05"}
            name={"strategy"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero1;
