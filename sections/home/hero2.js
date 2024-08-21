"use client";
import Card from "@/app/components/card";
import { motion, useScroll, useTransform } from "framer-motion";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero1 = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 66]);

  return (
    <div className="bg-[#fff8ed]">
      <div className="flex gap-10 relative top-0 h-[120vh] flex-col">
        <motion.div className="absolute top-5" id="card1" style={{ rotate }}>
          <Card
            background={"#F2EEEB"}
            name={"Setters Design School"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[8rem] left-[7rem]"
          id="card2"
          style={{ rotate }}
        >
          <Card
            background={"#EC8B87"}
            name={"hr & 5n3hec"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[13rem] left-[14rem]"
          id="card3"
          style={{ rotate }}
        >
          <Card
            background={"#3EB971"}
            name={"soft skills"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[18rem] left-[21rem]"
          id="card4"
          style={{ rotate }}
        >
          <Card
            background={"#060606"}
            name={"kopnopatnbhoe o6y4ehne"}
            description={"setters.digital"}
            text={"#F2F2F2"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[23rem] left-[28rem]"
          id="card5"
          style={{ rotate }}
        >
          <Card
            background={"#E84D3E"}
            name={"creative &copywriting"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[28rem] left-[35rem]"
          id="card6"
          style={{ rotate }}
        >
          <Card
            background={"#E77042"}
            name={"production"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[32rem] left-[42rem]"
          id="card7"
          style={{ rotate }}
        >
          <Card
            background={"#0B92B5"}
            name={"npoabnxehne"}
            description={"setters.digital"}
            text={"#0E0C0B"}
          />
        </motion.div>
        <motion.div
          className="absolute top-[37rem] left-[49rem]"
          id="card8"
          style={{ rotate }}
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
