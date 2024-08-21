"use client";
import Card from "@/app/components/card";
import { easeInOut, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const ref = useRef();
  const { scrollY } = useScroll({ target: ref });
  const cardTransforms1 = {
    top: useTransform(scrollY, [0, 15], [80, 0]),
    left: useTransform(scrollY, [0, 15], [65, 0]),
  };
  const cardTransforms2 = {
    top: useTransform(scrollY, [0, 15], [140, 0]),
    left: useTransform(scrollY, [0, 15], [130, 0]),
  };
  const cardTransforms3 = {
    top: useTransform(scrollY, [0, 15], [200, 0]),
    left: useTransform(scrollY, [0, 15], [195, 0]),
  };
  const cardTransforms4 = {
    top: useTransform(scrollY, [0, 15], [260, 0]),
    left: useTransform(scrollY, [0, 15], [260, 0]),
  };
  const cardTransforms5 = {
    top: useTransform(scrollY, [0, 15], [330, 0]),
    left: useTransform(scrollY, [0, 15], [330, 0]),
  };
  const cardTransforms6 = {
    top: useTransform(scrollY, [0, 15], [390, 0]),
    left: useTransform(scrollY, [0, 15], [400, 0]),
  };
  const cardTransforms7 = {
    top: useTransform(scrollY, [0, 15], [450, 0]),
    left: useTransform(scrollY, [0, 15], [465, 0]),
  };

  return (
    <div className="bg-[#fff8ed]  ">
      <Marquee>
        <div className="flex gap-5 py-15">
          <div className="text-[1.2rem] font-bold text-[black] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[pink] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[red] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[yellow] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[lightblue] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[lightpink] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[grey] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-[brown] shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-fuchsia-800 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-950 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-900 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-800 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-700 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-600 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-500 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-rose-400 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-pink-600 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-fuchsia-800 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-fuchsia-950 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-purple-900 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
          <div className="text-[1.2rem] font-bold text-violet-400 shadow-2xl ">
            View my Scroll Animation{" "}
          </div>
        </div>
      </Marquee>
      <div className="flex relative top-0 h-[120vh] flex-col " ref={ref}>
        <div className="absolute top-5 " id="card1">
          <Card
            background={"#F2EEEB"}
            name={"Setters Design School"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </div>
        <motion.div
          className="absolute top-15 left-[3rem] "
          id="card2"
          style={cardTransforms1}
          transition={easeInOut}
        >
          <Card
            background={"#EC8B87"}
            name={"hr & 5n3hec"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[5.5rem] left-[6rem]"
          id="card3"
          style={cardTransforms2}
          transition={easeInOut}
        >
          <Card
            background={"#3EB971"}
            name={"soft skills"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[8rem] left-[9rem]"
          id="card4"
          style={cardTransforms3}
          transition={easeInOut}
        >
          <Card
            background={"#060606"}
            name={"kopnopatnbhoe o6y4ehne"}
            description={"setters.digital"}
            text={"#F2F2F2"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[11rem] left-[12rem]"
          id="card5"
          style={cardTransforms4}
          transition={easeInOut}
        >
          <Card
            background={"#E84D3E"}
            name={"creative &copywriting"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[14rem] left-[15rem]"
          id="card6"
          style={cardTransforms5}
          transition={easeInOut}
        >
          <Card
            background={"#E77042"}
            name={"production"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[17rem] left-[18rem]"
          id="card7"
          style={cardTransforms6}
          transition={easeInOut}
        >
          <Card
            background={"#0B92B5"}
            name={"npoabnxehne"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
        <motion.div
          className="absolute top-[20rem] left-[21rem]"
          id="card8"
          style={cardTransforms7}
          transition={easeInOut}
        >
          {" "}
          <Card
            background={"#F2DD05"}
            name={"strategy"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          ></Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
