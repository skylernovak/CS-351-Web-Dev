const Metalsmith  = require('metalsmith');
const pluginInfo = require('./infoPlugin.js');
const metalsmithMD = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

console.log("Starting Processing!");
Metalsmith(__dirname)         // __dirname defined by node.js:
  .metadata({                 // add any variable you want
    hello: "World",           // use them in layout, other plugins
    myCourse: "Website Development",
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .use(metalsmithMD())        // Converts src MD files to build HTML files
  .use(layouts({              // Will use templates to complete build HTML files
    default: "base.njk",
    directory: "layouts",
    pattern: ["*.html", "!*.css"]
  }))
  .build(function(err, files) {      // build process
    if (err) {
        throw err;          // error handling is required
    } 
  });