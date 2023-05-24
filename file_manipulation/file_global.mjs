import { mkdir, readFile, cp, copyFile, writeFile } from 'fs/promises'

async function colorStructure(tailDir, palette){
    //Read the tailwind config file
    let file = await readFile(tailDir, 'utf8');

    //Replace color variables with the chosen palette
    for(const [k, v] of Object.entries(palette)){
        file = file.replace(`{${k}}`, `"${v}"`);
    }

    //Write the new file
    let newFile = await writeFile(tailDir, file);
}

async function createStructure(options){
    const srcDir = ''; // path to the basic strucutre
    const dstDir = ''; // path to the downloadable folder
    const filePaths = ["path1", "path2", "path3",];  //Replaced by options.files in the future

    //Create downloadable directory with basic structure
    const createDir = await mkdir('carpeta', {recursive: true});
    const copyDir = await cp(srcDir, dstDir, { recursive: true });

    //Copy chosen files to the downloadable directory
    for (const filePath of filePaths) {
        await copyFile(filePath, `${dstDir}/components/${structOption}`);
    }

    colorStructure(`dstDir/tailwind.config.js`, options.colorStructure)
}

colorStructure('carpeta/tailwind.config.js', {primary: 'blue', secondary: 'red', terciary: 'green'});