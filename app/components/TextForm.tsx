import { motion } from "framer-motion";
import TextInput from "./TextInput";

const TextForm = ({
  setLogo,
  setHeroTitle,
  setHeroSubtitle,
  setHeroDescription,
}) => {
  const handleSave = () => {
    const logoInput = document.getElementById("Logo");
    setLogo(logoInput?.files[0]); //Ts error
    setHeroTitle(document.getElementById("Hero Title")?.value);
    setHeroSubtitle(document.getElementById("Hero Subtitle")?.value);
    setHeroDescription(document.getElementById("Hero Description")?.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full px-12 py-8 border border-inactiveText rounded-lg"
    >
      <h2 className="text-3xl mb-8 md:mb-16">Text Form</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col min-w-[200px] sm:w-[400px] gap-4">
          <label htmlFor="Logo" className="text-2xl">
            Logo
          </label>
          <input id="Logo" className={fileInputStyle} type="file" />
        </div>
        <TextInput inputObjective="Hero Title" placeholder="Your hero title" />
        <TextInput
          inputObjective="Hero Subtitle"
          placeholder="Your hero subtitle"
        />
        <TextInput
          inputObjective="Hero Description"
          placeholder="Your hero description"
        />
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

export default TextForm;

const fileInputStyle =
  "cursor-pointer rounded-lg border border-neutral-300 px-2 py-1 text-lg text-neutral-400 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:bg-white file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:[margin-inline-end:0.75rem] hover:file:bg-neutral-300 focus:border-activeText";
