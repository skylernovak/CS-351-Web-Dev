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
rp(site1)
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Microsoft status: ${res.statusCode}, time: ${time}`);
    return rp(site2);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Gilman Brewing status: ${res.statusCode}, time: ${time}`);
    return rp(site3);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Samsung (S. Korea) status: ${res.statusCode}, time: ${time}`);
  });
console.log("Starting my web requests:");