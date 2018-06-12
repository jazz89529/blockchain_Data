const fs = require('fs');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let myContractAddress = '0x8c784a7fe2adf1c4659277450b97835f29d9c141'; // decided by your contract deployed

web3.eth.defaultAccount = web3.eth.accounts[1];

let abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "Instructor",
		"type": "event"
	}
];

let myContract = web3.eth.contract(abi).at(myContractAddress);

let instructorEvent = myContract.Instructor();

instructorEvent.watch(function(error, result){
            if (!error)
                {
                    console.log(`result.args.name: ${result.args.name}, result.args.age: ${result.args.age}`)
                } else {
                    console.log(error);
                }
        });

//console.log(myContract);

// call function => myContract.contract_function_name(parameter)
// call function without changing state => myContract.contract_function_name.call()

// var data = web3.eth.contract(abi).at(address).increment.getData()
// data放置TX裡面的data
