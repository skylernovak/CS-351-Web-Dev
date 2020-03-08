const nunjucks = require('nunjucks');
const fs = require('fs');  // The file system module

let filesInfo = require('./renderList.json'); // Turns into JS array/object
let srcDir = "./content/";
let outDir = "./output/";

// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: true });

for (let finfo of filesInfo) {
    let contents = fs.readFileSync(srcDir + finfo.fname);
    let tempData = {mainContent: contents, title: finfo.title, header: finfo.header};
    let outString = nunjucks.render('base.njk', tempData);
    fs.writeFileSync(outDir + finfo.fname, outString);
    console.log(`Wrote file: ${finfo.fname}`);
}