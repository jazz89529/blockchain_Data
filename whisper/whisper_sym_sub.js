const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

let identities = [];
let subscription = null;

Promise.all([
    web3.shh.newSymKey().then((id) => {identities.push(id);}),
    web3.shh.newKeyPair().then((id) => {identities.push(id);})

]).then(() => {
    console.log(`This is symKey(symKey_ID) : ${identities[0]}`);
    console.log(`This is keyPair(signature): ${identities[1]}`);

    subscription = web3.shh.subscribe("messages", {
        symKeyID: identities[0],
        topics: ['0xffaadd11']
    }).on('data', (message) => {
        console.log(web3.utils.hexToUtf8(message.payload));
    });

});

