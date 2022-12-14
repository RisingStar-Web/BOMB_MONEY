/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Operator, OperatorInterface } from "../Operator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361005f565b600180546001600160a01b031916339081179091556040516000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a36100af565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610367806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806329605e77146100675780634456eda21461007c578063570ca7351461009f578063715018a6146100c45780638da5cb5b146100cc578063f2fde38b146100dd575b600080fd5b61007a610075366004610301565b6100f0565b005b6001546001600160a01b0316331460405190151581526020015b60405180910390f35b6001546001600160a01b03165b6040516001600160a01b039091168152602001610096565b61007a610104565b6000546001600160a01b03166100ac565b61007a6100eb366004610301565b610118565b6100f8610193565b610101816101ed565b50565b61010c610193565b61011660006102b1565b565b610120610193565b6001600160a01b03811661018a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610101816102b1565b6000546001600160a01b031633146101165760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610181565b6001600160a01b0381166102595760405162461bcd60e51b815260206004820152602d60248201527f6f70657261746f723a207a65726f206164647265737320676976656e20666f7260448201526c103732bb9037b832b930ba37b960991b6064820152608401610181565b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561031357600080fd5b81356001600160a01b038116811461032a57600080fd5b939250505056fea26469706673582212209096464a4759d4d0fa62a6b624cf41d4f1994e9f18fc0ca64936bfd590af0e8864736f6c634300080d0033";

type OperatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OperatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Operator__factory extends ContractFactory {
  constructor(...args: OperatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Operator> {
    return super.deploy(overrides || {}) as Promise<Operator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Operator {
    return super.attach(address) as Operator;
  }
  connect(signer: Signer): Operator__factory {
    return super.connect(signer) as Operator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OperatorInterface {
    return new utils.Interface(_abi) as OperatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Operator {
    return new Contract(address, _abi, signerOrProvider) as Operator;
  }
}
