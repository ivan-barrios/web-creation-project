import { motion } from "framer-motion";
import TextInput from "./TextInput";

const ColorForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full px-12 py-8 border border-inactiveText rounded-lg"
    >
      <h2 className="text-3xl mb-8 md:mb-16">Color Form</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <TextInput
          inputObjective="Background Color"
          placeholder="rgb(43, 56, 98) || #2b3862"
        />
        <TextInput
          inputObjective="Secondary color"
          placeholder="rgb(43, 56, 98) || #2b3862"
        />
        <TextInput
          inputObjective="Text highlight color"
          placeholder="rgb(43, 56, 98) || #2b3862"
        />
      </div>
      <div className="w-full flex justify-center mt-16">
        <button className="button-style text-black font-extrabold text-xl px-8 py-3 rounded-lg">
          Save Changes
        </button>
      </div>
    </motion.div>
  );
};

export default ColorForm;
