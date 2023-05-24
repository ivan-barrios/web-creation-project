"use client";
import { useState } from "react";
import LayoutForm from "./LayoutForm";
import TextForm from "./TextForm";
import ColorForm from "./ColorForm";

const Form = () => {
  const [layoutForm, setLayoutForm] = useState(true);
  const [textForm, setTextForm] = useState(false);
  const [colorForm, setColorForm] = useState(false);

  const handleLayoutForm = () => {
    setLayoutForm(true);
    setTextForm(false);
    setColorForm(false);
  };
  const handleTextForm = () => {
    setLayoutForm(false);
    setTextForm(true);
    setColorForm(false);
  };
  const handleColorForm = () => {
    setLayoutForm(false);
    setTextForm(false);
    setColorForm(true);
  };

  return (
    <section
      id="create"
      className="py-6 sm:py-16 xl:px-0 sm:px-16 px-6 text-white"
    >
      <h1 className="text-3xl">Web Form</h1>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-42 flex flex-col ">
          <li
            onClick={handleLayoutForm}
            className={`${
              layoutForm
                ? "border-l-activeText text-activeText"
                : "border-l-inactiveText text-inactiveText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-lg cursor-pointer duration-300 px-8 font-medium`}
          >
            Layout Form
          </li>
          <li
            onClick={handleTextForm}
            className={`${
              textForm
                ? "border-l-activeText text-activeText"
                : "border-l-inactiveText text-inactiveText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-lg cursor-pointer duration-300 px-8 font-medium`}
          >
            Text Form
          </li>
          <li
            onClick={handleColorForm}
            className={`${
              colorForm
                ? "border-l-activeText text-activeText"
                : "border-l-inactiveText text-inactiveText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-lg cursor-pointer duration-300 px-8 font-medium`}
          >
            Color Form
          </li>
        </ul>
        {layoutForm && <LayoutForm />}
        {textForm && <TextForm />}
        {colorForm && <ColorForm />}
      </div>
    </section>
  );
};
export default Form;
