import { mkdir, readFile, cp, copyFile, writeFile } from 'fs/promises'

async function colorStructure(tailDir, palette){
    //Color structure will edit tailwind.config.js to include the chosen palette included in the submitted form


    //Read the tailwind config file
    let file = await readFile(tailDir, 'utf8');
    
    //Replace color variables with the chosen palette
    for(const [k, v] of Object.entries(palette)){
        file = file.replace(`{${k}}`, `"${v}"`);
    }
    
    //Write the new file
    let newFile = await writeFile(tailDir, file);
}
async function layoutStructure(dst, components){
    // Layout structure has to 1) Put components into components folder inside the dst folder and 2)Edit
    // page.tsx to include the new components

    for(const component of components){
        //1) Put components into components folder inside the dst folder
        await copyFile(component.path, `${dst}/components/${component.name}`);
        //2)Edit page.tsx to include the new components
        let pageFile = await readFile(`${dst}/app/page.tsx`, 'utf8');
        pageFile = file.replace(`Componente${i}`, `<${component.name} />`);
        await writeFile(`${dst}/pages/page.tsx`, pageFile);
    };
    }

async function textStructure(dst, text){
    //Preguntar TIBU: En que componentes estaria el texto, solo en HERO?, para incluir el path correcto
}

async function createStructure(options){
    const srcDir = ''; // path to the basic strucutre
    const dstDir = ''; // path to the downloadable folder
    const filePaths = ["path1", "path2", "path3",];  //Replaced by options.layout in the future

    //Create downloadable directory with basic structure
    const createDir = await mkdir('carpeta', {recursive: true});
    const copyDir = await cp(srcDir, dstDir, { recursive: true });

    //Copy chosen files to the downloadable directory
    for (const filePath of filePaths) {
        await copyFile(filePath, `${dstDir}/components/${structOption}`);
    }

    colorStructure(`dstDir/tailwind.config.js`, options.color);
    textStructure(dstDir,options.text);
    layoutStructure(options.layout);
}

colorStructure('carpeta/tailwind.config.js', {primary: 'blue', secondary: 'red', terciary: 'green'});