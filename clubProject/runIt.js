const Metalsmith  = require('metalsmith');
const pluginInfo = require('./infoPlugin.js');

console.log("Starting Processing!");
Metalsmith(__dirname)         // __dirname defined by node.js:
  .metadata({                 // add any variable you want
    hello: "World",           // use them in layout, other plugins
    myCourse: "Website Development",
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .ignore("*.jpg")           // Use to ignore files and directories
  .use(pluginInfo())
  .build(function(err, files) {      // build process
    if (err) {
        throw err;          // error handling is required
    } else {
        console.log(`Finished Processing: ${Object.keys(files)}`);
  }});