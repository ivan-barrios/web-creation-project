"use client";
import layout1 from "/public/layout1.png";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const handleSave = () => {
    setSelectedLayout(selectedLayout);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full px-12 py-8 border border-inactiveText rounded-lg"
    >
      <h2 className="text-3xl mb-8 md:mb-16">Select your layout</h2>
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
      <div className="w-full flex justify-center mt-16">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="button-style text-black font-extrabold text-xl px-8 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </motion.div>
  );
};

export default LayoutForm;
