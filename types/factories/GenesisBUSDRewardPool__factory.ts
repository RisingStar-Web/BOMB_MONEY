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
import type {
  GenesisBUSDRewardPool,
  GenesisBUSDRewardPoolInterface,
} from "../GenesisBUSDRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_REWARDS",
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
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_lastRewardTime",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTime",
        type: "uint256",
      },
    ],
    name: "getGeneratedReward",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
    name: "poolEndTime",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isStarted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStartTime",
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
    name: "reserveFund",
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
    name: "runningTime",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserveFund",
        type: "address",
      },
    ],
    name: "setReserveFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPerSecond",
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
    name: "totalAllocPoint",
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
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060055567174a4f0feee4b200600855620151806009553480156200002957600080fd5b5060405162001993380380620019938339810160408190526200004c91620000fc565b8042106200008f5760405162461bcd60e51b815260040162000086906020808252600490820152636c61746560e01b604082015260600190565b60405180910390fd5b6001600160a01b03821615620000bb57600280546001600160a01b0319166001600160a01b0384161790555b6006819055600954620000cf908262000138565b600755505060008054336001600160a01b031991821681179092556001805490911690911790556200015f565b600080604083850312156200011057600080fd5b82516001600160a01b03811681146200012857600080fd5b6020939093015192949293505050565b600082198211156200015a57634e487b7160e01b600052601160045260246000fd5b500190565b611824806200016f6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80635fa7b83f116100c357806398969e821161007c57806398969e82146102eb578063b3ab15fb146102fe578063b7f92b7114610311578063e2bbb15814610324578063f498d8a614610337578063fc0c546a1461034a57600080fd5b80635fa7b83f1461026e578063630b5ba1146102775780636e271dd51461027f57806393f1a40b14610288578063943f013d146102cf57806396805e54146102d857600080fd5b8063441a3e7011610115578063441a3e70146101ee57806351eb05a6146102015780635312ea8e1461021457806354575af414610227578063570ca7351461023a5780635f96dc111461026557600080fd5b806309cf6091146101525780631526fe271461017657806317caf6f1146101bd5780631ab06ee5146101c6578063231f0c6a146101db575b600080fd5b610163691eb4773b6d1318a0000081565b6040519081526020015b60405180910390f35b610189610184366004611504565b61035d565b604080516001600160a01b03909616865260208601949094529284019190915260608301521515608082015260a00161016d565b61016360055481565b6101d96101d436600461151d565b6103ab565b005b6101636101e936600461151d565b610449565b6101d96101fc36600461151d565b61050e565b6101d961020f366004611504565b6106d0565b6101d9610222366004611504565b610828565b6101d9610235366004611557565b6108ca565b60005461024d906001600160a01b031681565b6040516001600160a01b03909116815260200161016d565b61016360065481565b61016360085481565b6101d96109fe565b61016360075481565b6102ba610296366004611599565b60046020908152600092835260408084209091529082529020805460019091015482565b6040805192835260208301919091520161016d565b61016360095481565b6101d96102e63660046115d7565b610a29565b6101636102f9366004611599565b610c0a565b6101d961030c36600461161f565b610d69565b60015461024d906001600160a01b031681565b6101d961033236600461151d565b610db5565b6101d961034536600461161f565b611054565b60025461024d906001600160a01b031681565b6003818154811061036d57600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909160ff1685565b6000546001600160a01b031633146103de5760405162461bcd60e51b81526004016103d59061163c565b60405180910390fd5b6103e66109fe565b6000600383815481106103fb576103fb611688565b60009182526020909120600590910201600481015490915060ff16156104425761043e8261043883600101546005546110a090919063ffffffff16565b906110b3565b6005555b6001015550565b600081831061045a57506000610508565b60075482106104c257600754831061047457506000610508565b60065483116104a7576104a060085461049a6006546007546110a090919063ffffffff16565b906110bf565b9050610508565b6104a060085461049a856007546110a090919063ffffffff16565b60065482116104d357506000610508565b60065483116104f7576104a060085461049a600654856110a090919063ffffffff16565b6008546104a09061049a84866110a0565b92915050565b600033905060006003848154811061052857610528611688565b600091825260208083208784526004825260408085206001600160a01b0388168652909252922080546005909202909201925084111561059f5760405162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b60448201526064016103d5565b6105a8856106d0565b60006105e582600101546105df670de0b6b3a76400006105d9876003015487600001546110bf90919063ffffffff16565b906110cb565b906110a0565b9050801561063b576105f784826110d7565b836001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04868260405161063291815260200190565b60405180910390a25b841561066557815461064d90866110a0565b82558254610665906001600160a01b0316858761117e565b6003830154825461068391670de0b6b3a7640000916105d9916110bf565b600183015560405185815286906001600160a01b038616907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a3505050505050565b6000600382815481106106e5576106e5611688565b9060005260206000209060050201905080600201544211610704575050565b80546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561074c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610770919061169e565b90508060000361078557504260029091015550565b600482015460ff166107b65760048201805460ff191660019081179091558201546005546107b2916110b3565b6005555b6005541561081d5760006107ce836002015442610449565b905060006107ef6005546105d98660010154856110bf90919063ffffffff16565b905061081561080a846105d984670de0b6b3a76400006110bf565b6003860154906110b3565b600385015550505b504260029091015550565b60006003828154811061083d5761083d611688565b60009182526020808320858452600482526040808520338087529352842080548582556001820195909555600590930201805490945091929161088d916001600160a01b0391909116908361117e565b604051818152849033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a350505050565b6000546001600160a01b031633146108f45760405162461bcd60e51b81526004016103d59061163c565b600754610904906276a7006116cd565b4210156109e5576002546001600160a01b03908116908416036109515760405162461bcd60e51b81526020600482015260056024820152643a37b5b2b760d91b60448201526064016103d5565b60035460005b818110156109e25760006003828154811061097457610974611688565b6000918252602090912060059091020180549091506001600160a01b03908116908716036109d15760405162461bcd60e51b815260206004820152600a6024820152693837b7b6173a37b5b2b760b11b60448201526064016103d5565b506109db816116e5565b9050610957565b50505b6109f96001600160a01b038416828461117e565b505050565b60035460005b81811015610a2557610a15816106d0565b610a1e816116e5565b9050610a04565b5050565b6000546001600160a01b03163314610a535760405162461bcd60e51b81526004016103d59061163c565b610a5c836111e1565b8115610a6a57610a6a6109fe565b600654421015610a995780600003610a855750600654610aad565b600654811015610a9457506006545b610aad565b801580610aa557504281105b15610aad5750425b600060065482111580610ac05750428211155b6040805160a0810182526001600160a01b03878116825260208201898152928201868152600060608401818152861580156080870190815260038054600181018255945295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600590940293840180546001600160a01b031916919096161790945594517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c82015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d82015592517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e84015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85f909201805460ff191692151592909217909155909150610c0357600554610bff90866110b3565b6005555b5050505050565b60008060038481548110610c2057610c20611688565b60009182526020808320878452600480835260408086206001600160a01b038a8116885294528086206005959095029092016003810154815493516370a0823160e01b8152309381019390935290965093949291909116906370a0823190602401602060405180830381865afa158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc2919061169e565b9050836002015442118015610cd657508015155b15610d33576000610ceb856002015442610449565b90506000610d0c6005546105d98860010154856110bf90919063ffffffff16565b9050610d2e610d27846105d984670de0b6b3a76400006110bf565b85906110b3565b935050505b610d5e83600101546105df670de0b6b3a76400006105d98688600001546110bf90919063ffffffff16565b979650505050505050565b6000546001600160a01b03163314610d935760405162461bcd60e51b81526004016103d59061163c565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000339050600060038481548110610dcf57610dcf611688565b600091825260208083208784526004825260408085206001600160a01b0388168652909252922060059091029091019150610e09856106d0565b805415610e99576000610e4182600101546105df670de0b6b3a76400006105d9876003015487600001546110bf90919063ffffffff16565b90508015610e9757610e5384826110d7565b836001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e048682604051610e8e91815260200190565b60405180910390a25b505b8315610fea5781546040516370a0823160e01b81523060048201526001600160a01b039091169060009082906370a0823190602401602060405180830381865afa158015610eeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0f919061169e565b9050610f266001600160a01b038316333089611283565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610f6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f91919061169e565b9050610f9d82826116fe565b96506000610fb26127106105d98a60646110bf565b6001548754919250610fd1916001600160a01b0390811691168361117e565b8454610fe39082906105df908b6110b3565b8555505050505b6003820154815461100891670de0b6b3a7640000916105d9916110bf565b600182015560405184815285906001600160a01b038516907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a35050505050565b6000546001600160a01b0316331461107e5760405162461bcd60e51b81526004016103d59061163c565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006110ac82846116fe565b9392505050565b60006110ac82846116cd565b60006110ac8284611715565b60006110ac8284611734565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611120573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611144919061169e565b905080156109f9578082111561116b576002546109f9906001600160a01b0316848361117e565b6002546109f9906001600160a01b031684845b6040516001600160a01b0383166024820152604481018290526109f990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526112c1565b60035460005b818110156109f957826001600160a01b03166003828154811061120c5761120c611688565b60009182526020909120600590910201546001600160a01b0316036112735760405162461bcd60e51b815260206004820181905260248201527f546f6b656e47656e65736973506f6f6c3a206578697374696e6720706f6f6c3f60448201526064016103d5565b61127c816116e5565b90506111e7565b6040516001600160a01b03808516602483015283166044820152606481018290526112bb9085906323b872dd60e01b906084016111aa565b50505050565b6000611316826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113939092919063ffffffff16565b8051909150156109f957808060200190518101906113349190611756565b6109f95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103d5565b60606113a284846000856113aa565b949350505050565b60608247101561140b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103d5565b6001600160a01b0385163b6114625760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103d5565b600080866001600160a01b0316858760405161147e919061179f565b60006040518083038185875af1925050503d80600081146114bb576040519150601f19603f3d011682016040523d82523d6000602084013e6114c0565b606091505b5091509150610d5e828286606083156114da5750816110ac565b8251156114ea5782518084602001fd5b8160405162461bcd60e51b81526004016103d591906117bb565b60006020828403121561151657600080fd5b5035919050565b6000806040838503121561153057600080fd5b50508035926020909101359150565b6001600160a01b038116811461155457600080fd5b50565b60008060006060848603121561156c57600080fd5b83356115778161153f565b925060208401359150604084013561158e8161153f565b809150509250925092565b600080604083850312156115ac57600080fd5b8235915060208301356115be8161153f565b809150509250929050565b801515811461155457600080fd5b600080600080608085870312156115ed57600080fd5b8435935060208501356115ff8161153f565b9250604085013561160f816115c9565b9396929550929360600135925050565b60006020828403121561163157600080fd5b81356110ac8161153f565b6020808252602c908201527f546f6b656e47656e65736973506f6f6c3a2063616c6c6572206973206e6f742060408201526b3a34329037b832b930ba37b960a11b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156116b057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116e0576116e06116b7565b500190565b6000600182016116f7576116f76116b7565b5060010190565b600082821015611710576117106116b7565b500390565b600081600019048311821515161561172f5761172f6116b7565b500290565b60008261175157634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561176857600080fd5b81516110ac816115c9565b60005b8381101561178e578181015183820152602001611776565b838111156112bb5750506000910152565b600082516117b1818460208701611773565b9190910192915050565b60208152600082518060208401526117da816040850160208701611773565b601f01601f1916919091016040019291505056fea264697066735822122026fde9da5a47a59673f364d74233843fcd649eb9d6033f2cba356e0f3fe3f7ab64736f6c634300080d0033";

type GenesisBUSDRewardPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenesisBUSDRewardPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenesisBUSDRewardPool__factory extends ContractFactory {
  constructor(...args: GenesisBUSDRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenesisBUSDRewardPool> {
    return super.deploy(
      _token,
      _poolStartTime,
      overrides || {}
    ) as Promise<GenesisBUSDRewardPool>;
  }
  getDeployTransaction(
    _token: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _poolStartTime, overrides || {});
  }
  attach(address: string): GenesisBUSDRewardPool {
    return super.attach(address) as GenesisBUSDRewardPool;
  }
  connect(signer: Signer): GenesisBUSDRewardPool__factory {
    return super.connect(signer) as GenesisBUSDRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenesisBUSDRewardPoolInterface {
    return new utils.Interface(_abi) as GenesisBUSDRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenesisBUSDRewardPool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GenesisBUSDRewardPool;
  }
}