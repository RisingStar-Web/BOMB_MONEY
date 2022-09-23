/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BondBNB, BondBNBInterface } from "../BondBNB";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator_",
        type: "address",
      },
    ],
    name: "transferOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200128e3803806200128e833981016040819052620000349162000291565b8151829082906200004d9060039060208501906200011e565b508051620000639060049060208401906200011e565b505050620000806200007a620000c860201b60201c565b620000cc565b600680546001600160a01b031916339081179091556040516000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3505062000337565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012c90620002fb565b90600052602060002090601f0160209004810192826200015057600085556200019b565b82601f106200016b57805160ff19168380011785556200019b565b828001600101855582156200019b579182015b828111156200019b5782518255916020019190600101906200017e565b50620001a9929150620001ad565b5090565b5b80821115620001a95760008155600101620001ae565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ec57600080fd5b81516001600160401b0380821115620002095762000209620001c4565b604051601f8301601f19908116603f01168101908282118183101715620002345762000234620001c4565b816040528381526020925086838588010111156200025157600080fd5b600091505b8382101562000275578582018301518183018401529082019062000256565b83821115620002875760008385830101525b9695505050505050565b60008060408385031215620002a557600080fd5b82516001600160401b0380821115620002bd57600080fd5b620002cb86838701620001da565b93506020850151915080821115620002e257600080fd5b50620002f185828601620001da565b9150509250929050565b600181811c908216806200031057607f821691505b6020821081036200033157634e487b7160e01b600052602260045260246000fd5b50919050565b610f4780620003476000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063570ca735116100ad57806395d89b411161007157806395d89b4114610281578063a457c2d714610289578063a9059cbb1461029c578063dd62ed3e146102af578063f2fde38b146102c257600080fd5b8063570ca7351461020757806370a082311461022c578063715018a61461025557806379cc67901461025d5780638da5cb5b1461027057600080fd5b8063313ce567116100f4578063313ce567146101ac57806339509351146101bb57806340c10f19146101ce57806342966c68146101e15780634456eda2146101f457600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd1461018457806329605e7714610197575b600080fd5b6101396102d5565b6040516101469190610d09565b60405180910390f35b61016261015d366004610d7a565b610367565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610da4565b61037f565b6101aa6101a5366004610de0565b6103a3565b005b60405160128152602001610146565b6101626101c9366004610d7a565b6103b7565b6101626101dc366004610d7a565b6103d9565b6101aa6101ef366004610e02565b610457565b6006546001600160a01b03163314610162565b6006546001600160a01b03165b6040516001600160a01b039091168152602001610146565b61017661023a366004610de0565b6001600160a01b031660009081526020819052604090205490565b6101aa610460565b6101aa61026b366004610d7a565b610474565b6005546001600160a01b0316610214565b6101396104ac565b610162610297366004610d7a565b6104bb565b6101626102aa366004610d7a565b610536565b6101766102bd366004610e1b565b610544565b6101aa6102d0366004610de0565b61056f565b6060600380546102e490610e4e565b80601f016020809104026020016040519081016040528092919081815260200182805461031090610e4e565b801561035d5780601f106103325761010080835404028352916020019161035d565b820191906000526020600020905b81548152906001019060200180831161034057829003601f168201915b5050505050905090565b6000336103758185856105e5565b5060019392505050565b60003361038d858285610709565b610398858585610783565b506001949350505050565b6103ab610951565b6103b4816109ab565b50565b6000336103758185856103ca8383610544565b6103d49190610e9e565b6105e5565b6006546000906001600160a01b0316331461040f5760405162461bcd60e51b815260040161040690610eb6565b60405180910390fd5b6001600160a01b0383166000908152602081905260409020546104328484610a6f565b6001600160a01b03841660009081526020819052604081205491909111949350505050565b6103b481610b4e565b610468610951565b6104726000610b58565b565b6006546001600160a01b0316331461049e5760405162461bcd60e51b815260040161040690610eb6565b6104a88282610baa565b5050565b6060600480546102e490610e4e565b600033816104c98286610544565b9050838110156105295760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610406565b61039882868684036105e5565b600033610375818585610783565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610577610951565b6001600160a01b0381166105dc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610406565b6103b481610b58565b6001600160a01b0383166106475760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610406565b6001600160a01b0382166106a85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610406565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006107158484610544565b9050600019811461077d57818110156107705760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610406565b61077d84848484036105e5565b50505050565b6001600160a01b0383166107e75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610406565b6001600160a01b0382166108495760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610406565b6001600160a01b038316600090815260208190526040902054818110156108c15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610406565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108f8908490610e9e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161094491815260200190565b60405180910390a361077d565b6005546001600160a01b031633146104725760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610406565b6001600160a01b038116610a175760405162461bcd60e51b815260206004820152602d60248201527f6f70657261746f723a207a65726f206164647265737320676976656e20666f7260448201526c103732bb9037b832b930ba37b960991b6064820152608401610406565b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610ac55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610406565b8060026000828254610ad79190610e9e565b90915550506001600160a01b03821660009081526020819052604081208054839290610b04908490610e9e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6103b43382610bbb565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610bb5823383610709565b6104a882825b6001600160a01b038216610c1b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610406565b6001600160a01b03821660009081526020819052604090205481811015610c8f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610406565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610cbe908490610efa565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060208083528351808285015260005b81811015610d3657858101830151858201604001528201610d1a565b81811115610d48576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d7557600080fd5b919050565b60008060408385031215610d8d57600080fd5b610d9683610d5e565b946020939093013593505050565b600080600060608486031215610db957600080fd5b610dc284610d5e565b9250610dd060208501610d5e565b9150604084013590509250925092565b600060208284031215610df257600080fd5b610dfb82610d5e565b9392505050565b600060208284031215610e1457600080fd5b5035919050565b60008060408385031215610e2e57600080fd5b610e3783610d5e565b9150610e4560208401610d5e565b90509250929050565b600181811c90821680610e6257607f821691505b602082108103610e8257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610eb157610eb1610e88565b500190565b60208082526024908201527f6f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657260408201526330ba37b960e11b606082015260800190565b600082821015610f0c57610f0c610e88565b50039056fea26469706673582212200c463edb0b8fef9c3fccd211b11b7700ca75e54105edb5f74296a96c2403acd664736f6c634300080d0033";

type BondBNBConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BondBNBConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BondBNB__factory extends ContractFactory {
  constructor(...args: BondBNBConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BondBNB> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<BondBNB>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): BondBNB {
    return super.attach(address) as BondBNB;
  }
  connect(signer: Signer): BondBNB__factory {
    return super.connect(signer) as BondBNB__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BondBNBInterface {
    return new utils.Interface(_abi) as BondBNBInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BondBNB {
    return new Contract(address, _abi, signerOrProvider) as BondBNB;
  }
}
