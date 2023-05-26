import { motion } from "framer-motion";
import TextInput from "./TextInput";

const TextForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full px-12"
    >
      <h2 className="text-3xl mb-8 md:mb-16">Text Form</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col w-[300px] sm:w-[400px] gap-4">
          <label htmlFor="Logo" className="text-2xl">
            Logo
          </label>
          <input className={fileInputStyle} type="file" />
        </div>
        <TextInput inputObjective="Hero Title" />
        <TextInput inputObjective="Hero Subtitle" />
        <TextInput inputObjective="Hero Description" />
      </div>
    </motion.div>
  );
};

export default TextForm;

const fileInputStyle =
  "cursor-pointer rounded-lg border border-neutral-300 px-2 py-1 text-lg text-neutral-400 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:bg-white file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:[margin-inline-end:0.75rem] hover:file:bg-neutral-300 focus:border-activeText";
