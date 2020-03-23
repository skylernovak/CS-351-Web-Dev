const rp = require("request-promise-native");
let site1 = {
    uri: "https://www.microsoft.com/en-us/",
    method: "HEAD", // What does this do?
    resolveWithFullResponse: true
  };
  
  let site2 = {
    uri: "https://gilmanbrew.com",
    method: "HEAD",
    resolveWithFullResponse: true
  };
  
  let site3 = {
    uri: "https://www.samsung.com/sec/",
    method: "HEAD",
    resolveWithFullResponse: true
  };

let start = new Date();
let p1 = rp(site1).then(res => {
  // console.log(`Grotto status: ${JSON.stringify(res)}`);
  let time = (new Date() - start) / 1000;
  return console.log(`Microsoft status: ${res.statusCode}, time: ${time}`);
});

let p2 = rp(site2).then(res => {
  let time = (new Date() - start) / 1000;
  return console.log(`Gilman Brewing status: ${res.statusCode}, time: ${time}`);
});

let p3 = rp(site3).then(res => {
  let time = (new Date() - start) / 1000;
  return console.log(
    `Samsung (S. Korea) status: ${res.statusCode}, time: ${time}`
  );
});

console.log("Starting my web requests:");
Promise.all([p1, p2, p3]).then(x => {
  let time = (new Date() - start) / 1000;
  console.log(`All Finished, total time: ${time}`);
});