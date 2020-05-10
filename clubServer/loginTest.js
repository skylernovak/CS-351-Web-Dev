const rp = require('request-promise-native');
let urlBase = 'http://127.9.19.28:4188';

let loginGood = {
    uri: urlBase + '/login',
    json: true,
    method: "POST",
    body: {
        "email": "kazatske2053@outlook.com",
        "password": "Aq[|gi_q"
    }
};

let loginBadEmail = {
    uri: urlBase + '/login',
    json: true,
    method: "POST",
    body: {
        "email": "sylvan206@live.com",
        "password": "Aq[|gi_q"
    }
};

let loginBadPass = {
    uri: urlBase + '/login',
    json: true,
    method: "POST",
    body: {
        email: "kazatske2053@outlook.com",
        "password": "pasword123"
    }
};

async function someTests() {
    let res;

    // good email/pass
    try {
        res = await rp(loginGood);
        console.log(`Good login test result: ${JSON.stringify(res)}\n`);
    }
    catch (error) {
        console.log(`Good login error: ${error}\n`);
    }

    // bad email
    try {
        res = await rp(loginBadEmail);
        console.log(`Bad email login test result: ${JSON.stringify(res)}\n`);
    }
    catch (error) {
        console.log(`Bad email login error: ${error}\n`);
    }

    // bad pass
    try {
        res = await rp(loginBadPass);
        console.log(`Bad password login test result: ${JSON.stringify(res)}\n`);
    }
    catch (error) {
        console.log(`Bad password login error: ${error}\n`);
    }

} //  someTests()

someTests();