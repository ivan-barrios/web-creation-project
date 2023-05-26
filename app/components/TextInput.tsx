import { TiArrowForward } from "react-icons/ti";

const TextInput = ({ inputObjective }) => {
  return (
    <div className="flex flex-col w-[300px] sm:w-[400px] gap-4">
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
        placeholder={inputObjective}
        className="px-2 py-1 rounded-lg text-lg text-black focus:ring-4 focus:ring-activeText focus:outline-none focus:animate-pulse"
      />
    </div>
  );
};

export default TextInput;
