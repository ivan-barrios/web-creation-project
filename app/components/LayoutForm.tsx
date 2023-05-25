"use client";
import layout1 from "/public/layout1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const layouts = [
  {
    id: 1,
    imgSrc: layout1,
    path: "/layout1",
  },
  {
    id: 2,
    imgSrc: layout1,
    path: "/layout2",
  },
  {
    id: 3,
    imgSrc: layout1,
    path: "/layout3",
  },
];

const LayoutForm = ({ selectedLayout, setSelectedLayout }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full px-12"
    >
      <h2 className="text-2xl mb-8 md:mb-16">Select your layout</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {layouts.map((layout) => (
          <Image
            src={layout.imgSrc}
            key={layout.id}
            alt="Layout"
            width={200}
            height={200}
            onClick={() => setSelectedLayout(layout.path)}
            className={`cursor-pointer rounded-lg ${
              selectedLayout == layout.path ? "ring-4 ring-activeText" : ""
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LayoutForm;
