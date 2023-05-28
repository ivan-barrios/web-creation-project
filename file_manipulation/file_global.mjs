import { mkdir, readFile, cp, copyFile, writeFile } from "fs/promises";

async function colorStructure(tailDir, palette) {
  //Color structure will edit tailwind.config.js to include the chosen palette included in the submitted form

  //Read the tailwind config file
  let file = await readFile(tailDir, "utf8");

  //Replace color variables with the chosen palette
  for (const [k, v] of Object.entries(palette)) {
    file = file.replace(`{${k}}`, `"${v}"`);
  }

  //Write the new file
  let newFile = await writeFile(tailDir, file);
}

async function layoutStructure(dst, components) {
  // Layout structure has to 1) Put components into components folder inside the dst folder and 2)Edit
  // page.tsx to include the new components
  let i = 1;
  let pageFile = await readFile(`${dst}/app/page.tsx`, "utf8");

  for (const component of components) {
    // 1) Put components into components folder inside the dst folder
    await copyFile(
      component.path,
      `${dst}/app/components/${component.name}.tsx`
    );
    // 2)Edit page.tsx to include the new components
    pageFile = pageFile.replace(`{Componente${i}}`, `<${component.name} />`);
    i++;
  }
  //Write changes into new file
  await writeFile(`${dst}/app/page.tsx`, pageFile);
}

async function textStructure(dst, text) {
  //Preguntar TIBU: En que componentes estaria el texto, solo en HERO?, para incluir el path correcto
}

export async function createStructure(options) {
  const dirName = "reusable_structure";
  const srcDir = `../${dirName}`; //Path to basic structure and reusable components
  const dstDir = "./"; // path to the downloadable folder

  const copyDir = await cp(srcDir, dstDir, { recursive: true });

  //Working as intended
  colorStructure(`./${dirName}/tailwind.config.js`, options.color);

  //Working as intended
  layoutStructure("./reusable_structure", options.layout);

  //textStructure(dstDir,options.text);
}

createStructure({
  color: { primary: "blue", secondary: "red", terciary: "green" },
  text: "Hola",
  layout: [{ name: "Hello", path: "../reusable_components/Hello.tsx" }],
});
