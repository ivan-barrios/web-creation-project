import Image from "next/image";
import layout1 from "/public/layout1.png";

const layouts = [
  {
    id: 1,
    imgSrc: layout1,
  },
  {
    id: 2,
    imgSrc: layout1,
  },
  {
    id: 3,
    imgSrc: layout1,
  },
];

const Form = () => {
  return (
    <section className="w-full text-white">
      <form
        className={`flex-1 flex flex-col md:flex-row xl:px-0 sm:px-16 px-6 py-8`}
      >
        {/* Text and layout form */}
        <div className="flex flex-col w-1/2">
          <h2>Layout</h2>
          <div className="flex w-full px-4 py-2">
            {layouts.map((layout) => (
              <div key={layout.id} className="w-full">
                <Image
                  src={layout.imgSrc}
                  alt="Layout"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12 py-4">
            <div>
              <label>Logo: </label>
              <input type="file"></input>
            </div>
            <div>
              <label>Navlinks: </label>
              <input type="text"></input>
            </div>
            <div>
              <label>Hero Title</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Hero paragraph</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
        {/* Color form */}
        <div>Color</div>
      </form>
    </section>
  );
};
export default Form;
