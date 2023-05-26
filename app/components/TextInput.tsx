import { TiArrowForward } from "react-icons/ti";

const TextInput = ({ inputObjective, placeholder }) => {
  return (
    <div className="flex flex-col min-w-[200px] sm:w-[400px] gap-4">
      <div className="flex justify-start items-center gap-2">
        <span className="text-activeText text-lg">
          <TiArrowForward />
        </span>
        <label htmlFor={inputObjective} className="text-2xl">
          {inputObjective}
        </label>
      </div>
      <input
        type="text"
        id={inputObjective}
        placeholder={placeholder}
        className="px-2 py-1 rounded-lg text-lg text-black focus:ring-4 focus:ring-activeText focus:outline-none focus:animate-pulse"
      />
    </div>
  );
};

export default TextInput;
