import { motion } from "framer-motion";

const TextForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      {/*
  <h3 className="flex gap-1 font-medium text-xl">
    Title <span className="text-textGreen tracking-wide">ComanyName</span>
  </h3>
  <p className="text-sm mt-1 font-medium text-textDark">
    Jan 2023 - Present
  </p>
  <ul className="mt-6 flex flex-col gap-3">
    <li className="text-base flex gap-2 text-textDark">
      <span className="text-activeText mt-1">
        <TiArrowForward />
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      voluptatem.
    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className="text-activeText mt-1">
        <TiArrowForward />
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      voluptatem.
    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className="text-activeText mt-1">
        <TiArrowForward />
      </span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      voluptatem.
    </li>
  </ul>
*/}
    </motion.div>
  );
};

export default TextForm;
