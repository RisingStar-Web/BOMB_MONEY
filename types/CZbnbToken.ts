/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CZbnbTokenInterface extends utils.Interface {
  functions: {
    "INITIAL_GENESIS_POOL_DISTRIBUTION()": FunctionFragment;
    "addLiquidityEnabled()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "burnRate()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "distributeReward(address)": FunctionFragment;
    "getTokenPrice()": FunctionFragment;
    "getTokenUpdatedPrice()": FunctionFragment;
    "governanceRecoverUnsupported(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "isExcludedFromFee(address)": FunctionFragment;
    "isExcludedToFee(address)": FunctionFragment;
    "isOperator()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "operator()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPoolDistributed()": FunctionFragment;
    "setBurnRate(uint256)": FunctionFragment;
    "setExcludeBothDirectionsFee(address,bool)": FunctionFragment;
    "setExcludeFromFee(address,bool)": FunctionFragment;
    "setExcludeToFee(address,bool)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setTaxFund(address)": FunctionFragment;
    "setTaxRate(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "taxFund()": FunctionFragment;
    "taxRate()": FunctionFragment;
    "toggleAddLiquidityEnabled()": FunctionFragment;
    "totalBurned()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalTaxAdded()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOperator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "INITIAL_GENESIS_POOL_DISTRIBUTION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "burnRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenUpdatedPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceRecoverUnsupported",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isExcludedFromFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isExcludedToFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPoolDistributed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExcludeBothDirectionsFee",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setExcludeFromFee",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setExcludeToFee",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "setTaxFund", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTaxRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "taxFund", values?: undefined): string;
  encodeFunctionData(functionFragment: "taxRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "toggleAddLiquidityEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBurned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalTaxAdded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "INITIAL_GENESIS_POOL_DISTRIBUTION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenUpdatedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceRecoverUnsupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExcludedFromFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExcludedToFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPoolDistributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExcludeBothDirectionsFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExcludeFromFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExcludeToFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTaxFund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTaxRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "taxFund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "taxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toggleAddLiquidityEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBurned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTaxAdded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "OperatorTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TaxAdded(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TaxAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type OperatorTransferredEvent = TypedEvent<
  [string, string],
  { previousOperator: string; newOperator: string }
>;

export type OperatorTransferredEventFilter =
  TypedEventFilter<OperatorTransferredEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TaxAddedEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; taxFund: string; amount: BigNumber }
>;

export type TaxAddedEventFilter = TypedEventFilter<TaxAddedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface CZbnbToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CZbnbTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INITIAL_GENESIS_POOL_DISTRIBUTION(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addLiquidityEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeReward(
      _genesisPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenUpdatedPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    governanceRecoverUnsupported(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isExcludedFromFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isExcludedToFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOperator(overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<[boolean]>;

    setBurnRate(
      _burnRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExcludeBothDirectionsFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExcludeFromFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExcludeToFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxFund(
      _taxFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    taxFund(overrides?: CallOverrides): Promise<[string]>;

    taxRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    toggleAddLiquidityEnabled(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalBurned(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalTaxAdded(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  INITIAL_GENESIS_POOL_DISTRIBUTION(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addLiquidityEnabled(overrides?: CallOverrides): Promise<boolean>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnRate(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeReward(
    _genesisPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenUpdatedPrice(overrides?: CallOverrides): Promise<BigNumber>;

  governanceRecoverUnsupported(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isExcludedFromFee(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isExcludedToFee(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOperator(overrides?: CallOverrides): Promise<boolean>;

  mint(
    recipient_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardPoolDistributed(overrides?: CallOverrides): Promise<boolean>;

  setBurnRate(
    _burnRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExcludeBothDirectionsFee(
    _account: string,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExcludeFromFee(
    _account: string,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExcludeToFee(
    _account: string,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxFund(
    _taxFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxRate(
    _taxRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  taxFund(overrides?: CallOverrides): Promise<string>;

  taxRate(overrides?: CallOverrides): Promise<BigNumber>;

  toggleAddLiquidityEnabled(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalTaxAdded(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOperator(
    newOperator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INITIAL_GENESIS_POOL_DISTRIBUTION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityEnabled(overrides?: CallOverrides): Promise<boolean>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnRate(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    distributeReward(
      _genesisPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenUpdatedPrice(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isExcludedFromFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isExcludedToFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperator(overrides?: CallOverrides): Promise<boolean>;

    mint(
      recipient_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<boolean>;

    setBurnRate(
      _burnRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setExcludeBothDirectionsFee(
      _account: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setExcludeFromFee(
      _account: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setExcludeToFee(
      _account: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(_oracle: string, overrides?: CallOverrides): Promise<void>;

    setTaxFund(_taxFund: string, overrides?: CallOverrides): Promise<void>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    taxFund(overrides?: CallOverrides): Promise<string>;

    taxRate(overrides?: CallOverrides): Promise<BigNumber>;

    toggleAddLiquidityEnabled(overrides?: CallOverrides): Promise<void>;

    totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalTaxAdded(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOperator(
      newOperator_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "OperatorTransferred(address,address)"(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;
    OperatorTransferred(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TaxAdded(address,address,uint256)"(
      account?: string | null,
      taxFund?: null,
      amount?: null
    ): TaxAddedEventFilter;
    TaxAdded(
      account?: string | null,
      taxFund?: null,
      amount?: null
    ): TaxAddedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    INITIAL_GENESIS_POOL_DISTRIBUTION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnRate(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeReward(
      _genesisPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenUpdatedPrice(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isExcludedFromFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExcludedToFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperator(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<BigNumber>;

    setBurnRate(
      _burnRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExcludeBothDirectionsFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExcludeFromFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExcludeToFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxFund(
      _taxFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    taxFund(overrides?: CallOverrides): Promise<BigNumber>;

    taxRate(overrides?: CallOverrides): Promise<BigNumber>;

    toggleAddLiquidityEnabled(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalTaxAdded(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INITIAL_GENESIS_POOL_DISTRIBUTION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addLiquidityEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeReward(
      _genesisPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenUpdatedPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceRecoverUnsupported(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isExcludedFromFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExcludedToFee(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      recipient_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardPoolDistributed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBurnRate(
      _burnRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExcludeBothDirectionsFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExcludeFromFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExcludeToFee(
      _account: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxFund(
      _taxFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    toggleAddLiquidityEnabled(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalBurned(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalTaxAdded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
