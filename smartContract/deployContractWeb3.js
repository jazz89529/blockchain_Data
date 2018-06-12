const fs = require('fs');
const solc = require('solc');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let source = fs.readFileSync('test.sol', 'utf8');// solc file source decided by yourself
let compiledContract = solc.compile(source, 1);
let abi = compiledContract.contracts[':SimpleStorage'].interface;
let bytecode = compiledContract.contracts[':SimpleStorage'].bytecode;

let gasEstimate = web3.eth.estimateGas({data: bytecode});
let MyContract = web3.eth.contract(JSON.parse(abi));

let myContractReturned = MyContract.new({
	    from: '0xc59e450074040bafb7b57cf87edfe38384b755b9', // account address decided by yourself
	    data: bytecode,
	    gas: gasEstimate
    }, function(err, myContract){
    	if(err) throw err;
	    if(!err) {
	        console.log('abi: !', /*JSON.parse(*/abi/*)*/) // 用JSON.parse 出來的abi，will not call contract in callContractWeb3.js
	       if(!myContract.address) {
	           console.log('txHash: ', myContract.transactionHash)
	       } else {
	           console.log('contractAddress: ', myContract.address)
	       }
	    }
  	}
);
