/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    inputs: [],
    name: "MAXIMUM_DELAY",
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
    inputs: [],
    name: "MINIMUM_DELAY",
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
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516110d83803806110d883398101604081905261002f9161014f565b620151808110156100ad5760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360448201527f7420657863656564206d696e696d756d2064656c61792e00000000000000000060648201526084015b60405180910390fd5b62278d008111156101265760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016100a4565b600080546001600160a01b0319166001600160a01b039390931692909217909155600255610189565b6000806040838503121561016257600080fd5b82516001600160a01b038116811461017957600080fd5b6020939093015192949293505050565b610f40806101986000396000f3fe6080604052600436106100c65760003560e01c80636a42b8f81161007f578063c1a287e211610059578063c1a287e2146101fc578063e177246e14610213578063f2b0653714610233578063f851a4401461027357600080fd5b80636a42b8f8146101b85780637d645fab146101ce578063b1b43ae5146101e557600080fd5b80630825f38f146100d25780630e18b681146100fb57806326782247146101125780633a66f9011461014a5780634dd18bf514610178578063591fcdfe1461019857600080fd5b366100cd57005b600080fd5b6100e56100e0366004610c9a565b610293565b6040516100f29190610da7565b60405180910390f35b34801561010757600080fd5b50610110610605565b005b34801561011e57600080fd5b50600154610132906001600160a01b031681565b6040516001600160a01b0390911681526020016100f2565b34801561015657600080fd5b5061016a610165366004610c9a565b6106ce565b6040519081526020016100f2565b34801561018457600080fd5b50610110610193366004610dba565b610881565b3480156101a457600080fd5b506101106101b3366004610c9a565b610940565b3480156101c457600080fd5b5061016a60025481565b3480156101da57600080fd5b5061016a62278d0081565b3480156101f157600080fd5b5061016a6201518081565b34801561020857600080fd5b5061016a6212750081565b34801561021f57600080fd5b5061011061022e366004610dd5565b610a5a565b34801561023f57600080fd5b5061026361024e366004610dd5565b60036020526000908152604090205460ff1681565b60405190151581526020016100f2565b34801561027f57600080fd5b50600054610132906001600160a01b031681565b6000546060906001600160a01b0316331461031b5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000060648201526084015b60405180910390fd5b60008686868686604051602001610336959493929190610dee565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166103c15760405162461bcd60e51b815260206004820152603d6024820152600080516020610eeb83398151915260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e0000006064820152608401610312565b824210156104335760405162461bcd60e51b81526020600482015260456024820152600080516020610eeb83398151915260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d65206064820152643637b1b59760d91b608482015260a401610312565b6104408362127500610bdf565b4211156104995760405162461bcd60e51b81526020600482015260336024820152600080516020610eeb83398151915260448201527230b739b0b1ba34b7b71034b99039ba30b6329760691b6064820152608401610312565b6000818152600360205260408120805460ff191690558551606091036104c05750836104ec565b8580519060200120856040516020016104da929190610e3a565b60405160208183030381529060405290505b600080896001600160a01b031689846040516105089190610e6b565b60006040518083038185875af1925050503d8060008114610545576040519150601f19603f3d011682016040523d82523d6000602084013e61054a565b606091505b5091509150816105b05760405162461bcd60e51b815260206004820152603d6024820152600080516020610eeb83398151915260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006064820152608401610312565b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b6040516105f09493929190610e87565b60405180910390a39998505050505050505050565b6001546001600160a01b031633146106855760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e00000000000000006064820152608401610312565b60008054336001600160a01b0319918216811783556001805490921690915560405190917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b600080546001600160a01b031633146107485760405162461bcd60e51b815260206004820152603660248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c6044820152751036bab9ba1031b7b6b290333937b69030b236b4b71760511b6064820152608401610312565b61075b6002546107554290565b90610bdf565b8210156107e25760405162461bcd60e51b815260206004820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d757374207361746973606482015268333c903232b630bc9760b91b608482015260a401610312565b600086868686866040516020016107fd959493929190610dee565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b0388169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f9061086f908a908a908a908a90610e87565b60405180910390a39695505050505050565b3330146108f65760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e00000000000000006064820152608401610312565b600180546001600160a01b0319166001600160a01b0383169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b031633146109c05760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000006064820152608401610312565b600085858585856040516020016109db959493929190610dee565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b0387169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610a4a908990899089908990610e87565b60405180910390a3505050505050565b333014610ac35760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527036b290333937b6902a34b6b2b637b1b59760791b6064820152608401610312565b62015180811015610b335760405162461bcd60e51b815260206004820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420656044820152733c31b2b2b21036b4b734b6bab6903232b630bc9760611b6064820152608401610312565b62278d00811115610bac5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e00000000000000006064820152608401610312565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b6000610beb8284610ec4565b9392505050565b80356001600160a01b0381168114610c0957600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610c3f57610c3f610c0e565b604051601f8501601f19908116603f01168101908282118183101715610c6757610c67610c0e565b81604052809350858152868686011115610c8057600080fd5b858560208301376000602087830101525050509392505050565b600080600080600060a08688031215610cb257600080fd5b610cbb86610bf2565b945060208601359350604086013567ffffffffffffffff80821115610cdf57600080fd5b818801915088601f830112610cf357600080fd5b610d0289833560208501610c24565b94506060880135915080821115610d1857600080fd5b508601601f81018813610d2a57600080fd5b610d3988823560208401610c24565b95989497509295608001359392505050565b60005b83811015610d66578181015183820152602001610d4e565b83811115610d75576000848401525b50505050565b60008151808452610d93816020860160208601610d4b565b601f01601f19169290920160200192915050565b602081526000610beb6020830184610d7b565b600060208284031215610dcc57600080fd5b610beb82610bf2565b600060208284031215610de757600080fd5b5035919050565b60018060a01b038616815284602082015260a060408201526000610e1560a0830186610d7b565b8281036060840152610e278186610d7b565b9150508260808301529695505050505050565b6001600160e01b0319831681528151600090610e5d816004850160208701610d4b565b919091016004019392505050565b60008251610e7d818460208701610d4b565b9190910192915050565b848152608060208201526000610ea06080830186610d7b565b8281036040840152610eb28186610d7b565b91505082606083015295945050505050565b60008219821115610ee557634e487b7160e01b600052601160045260246000fd5b50019056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472a2646970667358221220218788ccf36fe30d920f4f2f8574d39927b62eeff8429e273f63e2038e232a6a64736f6c634300080d0033";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
