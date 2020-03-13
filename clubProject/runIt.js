var Metalsmith  = require('metalsmith');
Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
});