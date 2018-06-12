const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

let symKey_ID = '1875b9ce6a760bd6cad27cd3ee23887309a5e869a5b364445c17c942dad1110a';
let signature = '320636f8a22f6f114069897087c14022695e42091783c7c8528142cf2d9529c4';

let message_content = web3.utils.utf8ToHex('I love Blockchain');

web3.shh.post({
    symKeyID: symKey_ID, // encrypts using the sym key ID
    sig: signature, // signs the message using the keyPair ID
    ttl: 10,
    topic: '0xffaadd11',
    payload: message_content,
    powTime: 3,
    powTarget: 0.5
}).then(h => console.log(`Message with hash ${h} was successfuly sent`))
    .catch(err => console.log("Error: ", err));