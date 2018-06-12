const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

web3.shh.newKeyPair()
    .then((keyPairID) => {
        web3.shh.subscribe("messages", {privateKeyID: keyPairID}, (err, msg) => {
            console.log(web3.utils.hexToUtf8(msg.payload));
        })
        web3.shh.getPublicKey(keyPairID).then((publicKey) => {
            console.log(`This is public key: ${publicKey}`);
        })
    });

