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
import type { CZbnbToken, CZbnbTokenInterface } from "../CZbnbToken";

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
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_taxFund",
        type: "address",
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taxFund",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TaxAdded",
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
    inputs: [],
    name: "INITIAL_GENESIS_POOL_DISTRIBUTION",
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
    name: "addLiquidityEnabled",
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
    name: "burnRate",
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
        name: "_genesisPool",
        type: "address",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenPrice",
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
    name: "getTokenUpdatedPrice",
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
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isExcludedFromFee",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "isExcludedToFee",
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
    name: "oracle",
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
    name: "rewardPoolDistributed",
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
        name: "_burnRate",
        type: "uint256",
      },
    ],
    name: "setBurnRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeBothDirectionsFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeToFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_taxFund",
        type: "address",
      },
    ],
    name: "setTaxFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
    ],
    name: "setTaxRate",
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
    name: "taxFund",
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
    name: "taxRate",
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
    name: "toggleAddLiquidityEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
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
    inputs: [],
    name: "totalTaxAdded",
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
  "0x60806040526007805461ffff191690553480156200001c57600080fd5b5060405162001f5138038062001f518339810160408190526200003f91620003b8565b83836200004c336200010d565b600180546001600160a01b031916339081179091556040516000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a38151620000a190600590602085019062000245565b508051620000b790600690602084019062000245565b5050600d805460ff191660ff851617905550600a80546001600160a01b0319166001600160a01b0383161790556102ee60088190556009556200010333678ac7230489e800006200015d565b50505050620004bf565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216620001b85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060046000828254620001cc91906200045c565b90915550506001600160a01b03821660009081526002602052604081208054839290620001fb9084906200045c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620002539062000483565b90600052602060002090601f016020900481019282620002775760008555620002c2565b82601f106200029257805160ff1916838001178555620002c2565b82800160010185558215620002c2579182015b82811115620002c2578251825591602001919060010190620002a5565b50620002d0929150620002d4565b5090565b5b80821115620002d05760008155600101620002d5565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031357600080fd5b81516001600160401b0380821115620003305762000330620002eb565b604051601f8301601f19908116603f011681019082821181831017156200035b576200035b620002eb565b816040528381526020925086838588010111156200037857600080fd5b600091505b838210156200039c57858201830151818301840152908201906200037d565b83821115620003ae5760008385830101525b9695505050505050565b60008060008060808587031215620003cf57600080fd5b84516001600160401b0380821115620003e757600080fd5b620003f58883890162000301565b955060208701519150808211156200040c57600080fd5b506200041b8782880162000301565b935050604085015160ff811681146200043357600080fd5b60608601519092506001600160a01b03811681146200045157600080fd5b939692955090935050565b600082198211156200047e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200049857607f821691505b602082108103620004b957634e487b7160e01b600052602260045260246000fd5b50919050565b611a8280620004cf6000396000f3fe608060405234801561001057600080fd5b50600436106102685760003560e01c8063771a3a1d11610151578063a9059cbb116100c3578063c732050911610087578063c732050914610548578063d89135cd1461055b578063dd62ed3e14610563578063e8d4a0f314610576578063ee7e767114610589578063f2fde38b1461059c57600080fd5b8063a9059cbb146104fe578063af9549e014610511578063b90e32ee14610524578063bed998501461052c578063c6d69a301461053557600080fd5b8063860139401161011557806386013940146104ab5780638b93e49e146104bd5780638da5cb5b146104c557806395d89b41146104d65780639662676c146104de578063a457c2d7146104eb57600080fd5b8063771a3a1d1461043757806379cc6790146104405780637adbf973146104535780637dc0d1d014610466578063844f30fb1461047f57600080fd5b806339509351116101ea5780634e20a02c116101ae5780634e20a02c146103925780635342acb4146103a2578063570ca735146103ce5780636409de78146103f357806370a0823114610406578063715018a61461042f57600080fd5b8063395093511461033e57806340c10f191461035157806342966c68146103645780634456eda2146103775780634b94f50e1461038a57600080fd5b806318160ddd1161023157806318160ddd146102e8578063189d165e146102f057806323b872dd1461030357806329605e7714610316578063313ce5671461032957600080fd5b80620321041461026d578063023176011461028857806306fdde031461029d578063092193ab146102b2578063095ea7b3146102c5575b600080fd5b6102756105af565b6040519081526020015b60405180910390f35b61029b610296366004611746565b61065f565b005b6102a56106a5565b60405161027f919061177f565b61029b6102c03660046117d4565b610737565b6102d86102d33660046117f1565b610826565b604051901515815260200161027f565b600454610275565b61029b6102fe36600461181d565b61083e565b6102d8610311366004611836565b610888565b61029b6103243660046117d4565b6108ac565b600d5460405160ff909116815260200161027f565b6102d861034c3660046117f1565b6108bd565b6102d861035f3660046117f1565b6108df565b61029b61037236600461181d565b610954565b6001546001600160a01b031633146102d8565b61027561095d565b610275681043561a882930000081565b6102d86103b03660046117d4565b6001600160a01b03166000908152600e602052604090205460ff1690565b6001546001600160a01b03165b6040516001600160a01b03909116815260200161027f565b61029b610401366004611746565b6109b2565b6102756104143660046117d4565b6001600160a01b031660009081526002602052604090205490565b61029b6109e5565b61027560095481565b61029b61044e3660046117f1565b6109f9565b61029b6104613660046117d4565b610a31565b6007546103db906201000090046001600160a01b031681565b6102d861048d3660046117d4565b6001600160a01b03166000908152600f602052604090205460ff1690565b6007546102d890610100900460ff1681565b600c54610275565b6000546001600160a01b03166103db565b6102a5610a63565b6007546102d89060ff1681565b6102d86104f93660046117f1565b610a72565b6102d861050c3660046117f1565b610aed565b61029b61051f366004611746565b610afb565b61029b610b2e565b61027560085481565b61029b61054336600461181d565b610b53565b600a546103db906001600160a01b031681565b600b54610275565b610275610571366004611877565b610b9d565b61029b6105843660046117d4565b610bc8565b61029b6105973660046117d4565b610cc8565b61029b6105aa3660046117d4565b610d31565b6007546000906201000090046001600160a01b0316801561064f57604051630d01142560e31b8152306004820152670de0b6b3a764000060248201526001600160a01b03821690636808a128906044015b602060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064191906118a5565b6001600160901b0316610659565b670de0b6b3a76400005b91505090565b610667610da7565b6001600160a01b039091166000908152600e60209081526040808320805494151560ff199586168117909155600f9092529091208054909216179055565b6060600580546106b4906118ce565b80601f01602080910402602001604051908101604052809291908181526020018280546106e0906118ce565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b5050505050905090565b6001546001600160a01b0316331461076a5760405162461bcd60e51b815260040161076190611908565b60405180910390fd5b60075460ff16156107bd5760405162461bcd60e51b815260206004820152601860248201527f6f6e6c792063616e2064697374726962757465206f6e636500000000000000006044820152606401610761565b6001600160a01b0381166108035760405162461bcd60e51b815260206004820152600d60248201526c0857d9d95b995cda5cd41bdbdb609a1b6044820152606401610761565b6007805460ff1916600117905561082381681043561a8829300000610e01565b50565b600033610834818585610ee0565b5060019392505050565b610846610da7565b6105dc8111156108835760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610761565b600855565b600033610896858285611004565b6108a185858561107e565b506001949350505050565b6108b4610da7565b6108238161127f565b6000336108348185856108d08383610b9d565b6108da9190611962565b610ee0565b6001546000906001600160a01b0316331461090c5760405162461bcd60e51b815260040161076190611908565b6001600160a01b03831660009081526002602052604090205461092f8484610e01565b6001600160a01b03841660009081526002602052604081205491909111949350505050565b61082381611343565b6007546000906201000090046001600160a01b0316801561064f57604051633ddac95360e01b8152306004820152670de0b6b3a764000060248201526001600160a01b03821690633ddac95390604401610600565b6109ba610da7565b6001600160a01b03919091166000908152600f60205260409020805460ff1916911515919091179055565b6109ed610da7565b6109f7600061134d565b565b6001546001600160a01b03163314610a235760405162461bcd60e51b815260040161076190611908565b610a2d828261139d565b5050565b610a39610da7565b600780546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b6060600680546106b4906118ce565b60003381610a808286610b9d565b905083811015610ae05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610761565b6108a18286868403610ee0565b60003361083481858561107e565b610b03610da7565b6001600160a01b03919091166000908152600e60205260409020805460ff1916911515919091179055565b610b36610da7565b6007805461ff001981166101009182900460ff1615909102179055565b610b5b610da7565b6105dc811115610b985760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610761565b600955565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b610bd0610da7565b806001600160a01b031663a9059cbb610bf16000546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a0823190602401602060405180830381865afa158015610c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c59919061197a565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610ca4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2d9190611993565b610cd0610da7565b6001600160a01b038116610d0f5760405162461bcd60e51b8152600401610761906020808252600490820152637a65726f60e01b604082015260600190565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b610d39610da7565b6001600160a01b038116610d9e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610761565b6108238161134d565b6000546001600160a01b031633146109f75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610761565b6001600160a01b038216610e575760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610761565b8060046000828254610e699190611962565b90915550506001600160a01b03821660009081526002602052604081208054839290610e96908490611962565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038316610f425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610761565b6001600160a01b038216610fa35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610761565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006110108484610b9d565b90506000198114611078578181101561106b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610761565b6110788484848403610ee0565b50505050565b6001600160a01b0383166110a45760405162461bcd60e51b8152600401610761906119b0565b6001600160a01b0382166110ca5760405162461bcd60e51b8152600401610761906119b0565b806001600160a01b0384166000908152600e602052604090205460ff1615801561110d57506001600160a01b0383166000908152600f602052604090205460ff16155b1561127457600061111c6105af565b9050670de0b6b3a764000081101561127257600954801561123a57600061114f61271061114987856113b2565b906113c5565b600a549091506001600160a01b03166111698882846113d1565b611173858361159f565b600c5490955061118390836115ab565b600c55600754610100900460ff16156111f1576040516328e32c8560e11b8152600481018390526001600160a01b038216906351c6590a90602401600060405180830381600087803b1580156111d857600080fd5b505af11580156111ec573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528a16917f3518075fae16f1bca7d9a1f28fede590b3ee4854c3c0bb4c5259b4ed62aa1674910160405180910390a250505b50600854801561127057600061125661271061114987856113b2565b905061126287826115b7565b61126c848261159f565b9350505b505b505b6110788484836113d1565b6001600160a01b0381166112eb5760405162461bcd60e51b815260206004820152602d60248201527f6f70657261746f723a207a65726f206164647265737320676976656e20666f7260448201526c103732bb9037b832b930ba37b960991b6064820152608401610761565b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b61082333826115b7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6113a8823383611004565b610a2d82826115b7565b60006113be82846119f4565b9392505050565b60006113be8284611a13565b6001600160a01b0383166114355760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610761565b6001600160a01b0382166114975760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610761565b6001600160a01b0383166000908152600260205260409020548181101561150f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610761565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290611546908490611962565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161159291815260200190565b60405180910390a3611078565b60006113be8284611a35565b60006113be8284611962565b6115c182826115d5565b600b546115ce90826115ab565b600b555050565b6001600160a01b0382166116355760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610761565b6001600160a01b038216600090815260026020526040902054818110156116a95760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610761565b6001600160a01b03831660009081526002602052604081208383039055600480548492906116d8908490611a35565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038116811461082357600080fd5b801515811461082357600080fd5b6000806040838503121561175957600080fd5b823561176481611723565b9150602083013561177481611738565b809150509250929050565b600060208083528351808285015260005b818110156117ac57858101830151858201604001528201611790565b818111156117be576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156117e657600080fd5b81356113be81611723565b6000806040838503121561180457600080fd5b823561180f81611723565b946020939093013593505050565b60006020828403121561182f57600080fd5b5035919050565b60008060006060848603121561184b57600080fd5b833561185681611723565b9250602084013561186681611723565b929592945050506040919091013590565b6000806040838503121561188a57600080fd5b823561189581611723565b9150602083013561177481611723565b6000602082840312156118b757600080fd5b81516001600160901b03811681146113be57600080fd5b600181811c908216806118e257607f821691505b60208210810361190257634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526024908201527f6f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657260408201526330ba37b960e11b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156119755761197561194c565b500190565b60006020828403121561198c57600080fd5b5051919050565b6000602082840312156119a557600080fd5b81516113be81611738565b60208082526024908201527f435a706567733a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6000816000190483118215151615611a0e57611a0e61194c565b500290565b600082611a3057634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611a4757611a4761194c565b50039056fea26469706673582212201a64fbb3d56da197fc3c0c9284f3837e681ef6ac13c5b05e0949dd945679982764736f6c634300080d0033";

type CZbnbTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CZbnbTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CZbnbToken__factory extends ContractFactory {
  constructor(...args: CZbnbTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    _taxFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CZbnbToken> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      _taxFund,
      overrides || {}
    ) as Promise<CZbnbToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    _taxFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      _taxFund,
      overrides || {}
    );
  }
  attach(address: string): CZbnbToken {
    return super.attach(address) as CZbnbToken;
  }
  connect(signer: Signer): CZbnbToken__factory {
    return super.connect(signer) as CZbnbToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CZbnbTokenInterface {
    return new utils.Interface(_abi) as CZbnbTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CZbnbToken {
    return new Contract(address, _abi, signerOrProvider) as CZbnbToken;
  }
}
