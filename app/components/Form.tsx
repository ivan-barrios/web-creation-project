"use client";
import { useState } from "react";
import LayoutForm from "./LayoutForm";
import TextForm from "./TextForm";
import ColorForm from "./ColorForm";

const Form = () => {
  //Display managers
  const [layoutForm, setLayoutForm] = useState(true);
  const [textForm, setTextForm] = useState(false);
  const [colorForm, setColorForm] = useState(false);

  //Form submit managers
  const [selectedLayout, setSelectedLayout] = useState("none");
  const [logo, setLogo] = useState();
  const [heroTitle, setHeroTitle] = useState("none");
  const [heroSubtitle, setHeroSubtitle] = useState("none");
  const [heroDescription, setHeroDescription] = useState("none");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [primaryColor, setPrimaryColor] = useState("none");
  const [secondaryColor, setSecondaryColor] = useState("none");
  const [textHighlightColor, setTextHighlightColor] = useState("none");

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
    console.log(selectedLayout);
    console.log(logo);
    console.log(heroTitle);
    console.log(heroSubtitle);
    console.log(heroDescription);
    console.log(backgroundColor);
    console.log(primaryColor);
    console.log(secondaryColor);
    console.log(textHighlightColor);
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
          {textForm && (
            <TextForm
              setLogo={setLogo}
              setHeroTitle={setHeroTitle}
              setHeroSubtitle={setHeroSubtitle}
              setHeroDescription={setHeroDescription}
            />
          )}
          {colorForm && (
            <ColorForm
              setBackgroundColor={setBackgroundColor}
              setPrimaryColor={setPrimaryColor}
              setSecondaryColor={setSecondaryColor}
              setTextHighlightColor={setTextHighlightColor}
            />
          )}
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
