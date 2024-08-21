"use client";
import Card from "@/app/components/card";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const cardData = [
  {
    background: "#F2EEEB",
    name: "Setters Design School",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "2.25rem",
    left: "0",
  },
  {
    background: "#EC8B87",
    name: "hr & 5n3hec",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "5rem",
    left: "8rem",
  },
  {
    background: "#3EB971",
    name: "soft skills",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "10rem",
    left: "16rem",
  },
  {
    background: "#060606",
    name: "kopnopatnbhoe o6y4ehne",
    description: "setters.digital",
    text: "#F2F2F2",
    top: "15rem",
    left: "25rem",
  },
  {
    background: "#E84D3E",
    name: "creative &copywriting",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "20rem",
    left: "35rem",
  },
  {
    background: "#E77042",
    name: "production",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "25rem",
    left: "45rem",
  },
  {
    background: "#0B92B5",
    name: "npoabnxehne",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "30rem",
    left: "56rem",
  },
  {
    background: "#F2DD05",
    name: "strategy",
    description: "setters.digital",
    text: "#0E0C0B",
    top: "35rem",
    left: "65rem",
  },
];

// Duplicate the card data for infinite scrolling effect
const extendedCardData = [...cardData, ...cardData, ...cardData];

const Hero1 = () => {
  const ref = useRef();
  const { scrollY } = useScroll({ target: ref });

  const scrollRange = [0, 1000]; // Adjust based on the number of duplicated cards and desired scrolling effect
  const xTranslation = useTransform(scrollY, scrollRange, [0, -6000]); // Adjust based on the width of the cards and number of duplicates
  const yTranslation = useTransform(scrollY, scrollRange, [0, -1000]); // Adjust based on the height of the cards and number of duplicates

  return (
    <div className="bg-[#e4e2df]">
      <div
        className="flex relative top-0 h-[120vh] flex-col overflow-hidden"
        ref={ref}
      >
        {extendedCardData.map((card, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              x: xTranslation,
              y: yTranslation,
              top: card.top,
              left: card.left,
            }}
          >
            <Card
              background={card.background}
              name={card.name}
              description={card.description}
              text={card.text}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero1;
