"use client"
import React from "react";
import { motion } from "framer-motion";

const Card = ({ background,text, name, description }) => {
  const cardStyle = {
    backgroundColor: background,
  };
  const textStyle = {
    color: text,
  };

  return (
    <motion.div style={cardStyle} className=" rotated w-[51rem] h-[19rem] rounded-[1rem] shadow-lg "
     
    
    >
      <div className="w-full h-full flex flex-col justify-between px-10 py-2 ">
        <div style={textStyle} className=" shadow-2xl uppercase text-[3rem]  w-[5rem] leading-[3rem]  font-medium" >{name}</div>
        <div style={textStyle} className="shadow-2xl text-[1.5rem] "> {description}</div>
      </div>
    </motion.div>
  );
};

export default Card;
