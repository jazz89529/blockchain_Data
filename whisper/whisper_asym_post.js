const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

let message_content = web3.utils.utf8ToHex('I love Percom Lab');

let publicKey = '0x044ad08170dbbc722de55e2e186d65c5b3bf3ca03c0dfcfaef18a6f2ab50aa9405e5a76607b3eb4dac13e8b3f4cb288032d3141158aa13b187cfefda45ddeb02f7';

web3.shh.post({
    pubKey: publicKey,
    ttl: 10,
    payload: message_content,
    powTime: 3,
    powTarget: 0.5
});





