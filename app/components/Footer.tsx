"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../animations/motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    viewport={{ once: true }}
    whileInView="show"
    className={`sm:p-16 xs:p-8 px-6 py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`lg:w-[80%] w-[100%] mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Give us some feedback
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <AiFillDollarCircle className="w-[24px] h-[24] cursor-pointer text-white" />
          <span className="font-normal text-[16px] text-white">
            Donate now!
          </span>
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">{"<Name>"}</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 {"<Name>"}. All rights reserved.
          </p>
          <div className="flex gap-4 text-white">
            <FaTwitter className="w-[24px] h-[24] cursor-pointer" />
            <FaInstagram className="w-[24px] h-[24] cursor-pointer" />
            <FaLinkedin className="w-[24px] h-[24] cursor-pointer" />
            <FaFacebook className="w-[24px] h-[24] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
