/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleERCFund, SimpleERCFundInterface } from "../SimpleERCFund";

const _abi = [
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
        internalType: "uint256",
        name: "at",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
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
        indexed: true,
        internalType: "uint256",
        name: "at",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "deposit",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
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
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361005f565b600180546001600160a01b031916339081179091556040516000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a36100af565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109dc806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f257806395c66ddb14610103578063bfe07da614610116578063f2fde38b1461012957600080fd5b806329605e771461008d5780634456eda2146100a2578063570ca735146100c5578063715018a6146100ea575b600080fd5b6100a061009b36600461078c565b61013c565b005b6001546001600160a01b0316331460405190151581526020015b60405180910390f35b6001546001600160a01b03165b6040516001600160a01b0390911681526020016100bc565b6100a0610150565b6000546001600160a01b03166100d2565b6100a061011136600461084a565b610164565b6100a06101243660046108b2565b610235565b6100a061013736600461078c565b610291565b610144610307565b61014d81610361565b50565b610158610307565b6101626000610425565b565b6001546001600160a01b031633146101cf5760405162461bcd60e51b8152602060048201526024808201527f6f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657260448201526330ba37b960e11b60648201526084015b60405180910390fd5b6101e36001600160a01b0385168385610475565b42826001600160a01b0316336001600160a01b03167f2b0d35cc55a37536a00cf056f44b5f4b453659ddd18bc131a978463523ad3a1f846040516102279190610935565b60405180910390a450505050565b61024a6001600160a01b0384163330856104dd565b42336001600160a01b03167f643e927b32d5bfd08eccd2fcbd97057ad413850f857a2359639114e8e8dd3d7b836040516102849190610935565b60405180910390a3505050565b610299610307565b6001600160a01b0381166102fe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101c6565b61014d81610425565b6000546001600160a01b031633146101625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c6565b6001600160a01b0381166103cd5760405162461bcd60e51b815260206004820152602d60248201527f6f70657261746f723a207a65726f206164647265737320676976656e20666f7260448201526c103732bb9037b832b930ba37b960991b60648201526084016101c6565b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b0383166024820152604481018290526104d890849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261051b565b505050565b6040516001600160a01b03808516602483015283166044820152606481018290526105159085906323b872dd60e01b906084016104a1565b50505050565b6000610570826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166105ed9092919063ffffffff16565b8051909150156104d8578080602001905181019061058e9190610968565b6104d85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101c6565b60606105fc8484600085610606565b90505b9392505050565b6060824710156106675760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101c6565b6001600160a01b0385163b6106be5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c6565b600080866001600160a01b031685876040516106da919061098a565b60006040518083038185875af1925050503d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b509150915061072c828286610737565b979650505050505050565b606083156107465750816105ff565b8251156107565782518084602001fd5b8160405162461bcd60e51b81526004016101c69190610935565b80356001600160a01b038116811461078757600080fd5b919050565b60006020828403121561079e57600080fd5b6105ff82610770565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126107ce57600080fd5b813567ffffffffffffffff808211156107e9576107e96107a7565b604051601f8301601f19908116603f01168101908282118183101715610811576108116107a7565b8160405283815286602085880101111561082a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561086057600080fd5b61086985610770565b93506020850135925061087e60408601610770565b9150606085013567ffffffffffffffff81111561089a57600080fd5b6108a6878288016107bd565b91505092959194509250565b6000806000606084860312156108c757600080fd5b6108d084610770565b925060208401359150604084013567ffffffffffffffff8111156108f357600080fd5b6108ff868287016107bd565b9150509250925092565b60005b8381101561092457818101518382015260200161090c565b838111156105155750506000910152565b6020815260008251806020840152610954816040850160208701610909565b601f01601f19169190910160400192915050565b60006020828403121561097a57600080fd5b815180151581146105ff57600080fd5b6000825161099c818460208701610909565b919091019291505056fea26469706673582212209e68add831bfdac14956980df603a9ad1aa3ee0bfcf38ff76bc1022e23b88d5f64736f6c634300080d0033";

type SimpleERCFundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleERCFundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleERCFund__factory extends ContractFactory {
  constructor(...args: SimpleERCFundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleERCFund> {
    return super.deploy(overrides || {}) as Promise<SimpleERCFund>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleERCFund {
    return super.attach(address) as SimpleERCFund;
  }
  connect(signer: Signer): SimpleERCFund__factory {
    return super.connect(signer) as SimpleERCFund__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleERCFundInterface {
    return new utils.Interface(_abi) as SimpleERCFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleERCFund {
    return new Contract(address, _abi, signerOrProvider) as SimpleERCFund;
  }
}
