"use client";
import { useState } from "react";
import LayoutForm from "./LayoutForm";
import TextForm from "./TextForm";
import ColorForm from "./ColorForm";

import { createStructure } from "../../file_manipulation/file_global.mjs";

const Form = () => {
  //Display managers
  const [layoutForm, setLayoutForm] = useState(true);
  const [textForm, setTextForm] = useState(false);
  const [colorForm, setColorForm] = useState(false);

  //Form submit managers
  const [selectedLayout, setSelectedLayout] = useState({ name: "", path: "" });
  const [selectedText, setSelectedText] = useState({
    logo: "",
    heroTitle: "",
    heroSubtitle: "",
    heroDescription: "",
  });
  const [selectedColors, setSelectedColors] = useState({
    backgroundColor: "",
    primaryColor: "",
    secondaryColor: "",
    textHighlightColor: "",
  });

  // --------------Display managers--------------
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
  // --------------Display managers--------------

  const handleGenerate = () => {
    //Here I set the data to the file manager
    const options = {
      color: {
        backgroundColor: selectedColors.backgroundColor,
        primary: selectedColors.primaryColor,
        secondary: selectedColors.secondaryColor,
        textHighlightColor: selectedColors.textHighlightColor,
      },
      text: {
        logo: selectedText.logo,
        heroTitle: selectedText.heroTitle,
        heroSubtitle: selectedText.heroSubtitle,
        heroDescription: selectedText.heroDescription,
      },
      layout: [{ name: "", path: "" }], //En orden de renderizado
    };
    // Cuando llamo a la funcion me tira error en file_global.mjs por
    // algun import
    //createStructure(options);
  };

  return (
    <form
      id="create"
      className="py-6 sm:py-16 xl:px-0 sm:px-16 px-6 text-white"
    >
      <div className="min-h-[400px] h-max md:min-h-[800px] xl:min-h-[500px]">
        <h1 className="text-4xl">Web Form</h1>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-42 flex flex-col mt-16">
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
          {layoutForm && (
            <LayoutForm
              selectedLayout={selectedLayout}
              setSelectedLayout={setSelectedLayout}
            />
          )}
          {textForm && <TextForm setSelectedText={setSelectedText} />}
          {colorForm && <ColorForm setSelectedColors={setSelectedColors} />}
        </div>
      </div>
      <div className="w-full flex justify-center mt-16 sm:mt-24">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          className="button-style text-black font-extrabold text-xl px-8 py-3 rounded-lg"
        >
          Generate web code!
        </button>
      </div>
    </form>
  );
};
export default Form;
