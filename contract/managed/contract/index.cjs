'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

var Token;
(function (Token) {
  Token[Token['foo'] = 0] = 'foo';
  Token[Token['bar'] = 1] = 'bar';
})(Token = exports.Token || (exports.Token = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeField();

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value)));
  }
}

const _descriptor_3 = new _CoinInfo_0();

class _tuple_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_1.fromValue(value_0),
      _descriptor_1.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0[0]).concat(_descriptor_1.toValue(value_0[1]));
  }
}

const _descriptor_4 = new _tuple_0();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_5 = new _ZswapCoinPublicKey_0();

const _descriptor_6 = new __compactRuntime.CompactTypeEnum(1, 1);

class _tuple_1 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_5.fromValue(value_0),
      _descriptor_6.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0[0]).concat(_descriptor_6.toValue(value_0[1]));
  }
}

const _descriptor_7 = new _tuple_1();

const _descriptor_8 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_9 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_10 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_11 = new _ContractAddress_0();

class _tuple_2 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_2.fromValue(value_0),
      _descriptor_2.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0[0]).concat(_descriptor_2.toValue(value_0[1]));
  }
}

const _descriptor_12 = new _tuple_2();

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_10.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0),
      mt_index: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value).concat(_descriptor_10.toValue(value_0.mt_index))));
  }
}

const _descriptor_13 = new _QualifiedCoinInfo_0();

class _Either_0 {
  alignment() {
    return _descriptor_8.alignment().concat(_descriptor_5.alignment().concat(_descriptor_11.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_8.fromValue(value_0),
      left: _descriptor_5.fromValue(value_0),
      right: _descriptor_11.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_8.toValue(value_0.is_left).concat(_descriptor_5.toValue(value_0.left).concat(_descriptor_11.toValue(value_0.right)));
  }
}

const _descriptor_14 = new _Either_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_8.alignment().concat(_descriptor_3.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_8.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_8.toValue(value_0.is_some).concat(_descriptor_3.toValue(value_0.value));
  }
}

const _descriptor_15 = new _Maybe_0();

class _SendResult_0 {
  alignment() {
    return _descriptor_15.alignment().concat(_descriptor_3.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_15.fromValue(value_0),
      sent: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_15.toValue(value_0.change).concat(_descriptor_3.toValue(value_0.sent));
  }
}

const _descriptor_16 = new _SendResult_0();

const _descriptor_17 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_8.alignment().concat(_descriptor_0.alignment().concat(_descriptor_17.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_3.fromValue(value_0),
      dataType: _descriptor_8.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_17.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.info).concat(_descriptor_8.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_17.toValue(value_0.domain_sep))));
  }
}

const _descriptor_18 = new _CoinPreimage_0();

const _descriptor_19 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_20 = new __compactRuntime.CompactTypeVector(2, _descriptor_1);

const _descriptor_21 = new __compactRuntime.CompactTypeVector(3, _descriptor_1);

const _descriptor_22 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    if (typeof(witnesses_0.amountsToSwap) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named amountsToSwap');
    this.witnesses = witnesses_0;
    this.circuits = {
      mint: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`mint: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const tk_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('mint',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 66 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(tk_0) === 'number' && tk_0 >= 0 && tk_0 <= 1))
          __compactRuntime.type_error('mint',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 66 char 1',
                                      'Enum<Token, foo, bar>',
                                      tk_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_6.toValue(tk_0),
            alignment: _descriptor_6.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_mint_0(context, partialProofData, tk_0);
        partialProofData.output = { value: _descriptor_3.toValue(result_0), alignment: _descriptor_3.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      addLiquidity: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`addLiquidity: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin__0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 104 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin__0) === 'object' && coin__0.nonce.buffer instanceof ArrayBuffer && coin__0.nonce.BYTES_PER_ELEMENT === 1 && coin__0.nonce.length === 32 && coin__0.color.buffer instanceof ArrayBuffer && coin__0.color.BYTES_PER_ELEMENT === 1 && coin__0.color.length === 32 && typeof(coin__0.value) === 'bigint' && coin__0.value >= 0 && coin__0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 104 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin__0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(coin__0),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_addLiquidity_0(context,
                                               partialProofData,
                                               coin__0);
        partialProofData.output = { value: _descriptor_2.toValue(result_0), alignment: _descriptor_2.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      removeLiquidity: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`removeLiquidity: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token__0 = args_1[1];
        const amount__0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 134 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(token__0) === 'number' && token__0 >= 0 && token__0 <= 1))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 134 char 1',
                                      'Enum<Token, foo, bar>',
                                      token__0)
        if (!(typeof(amount__0) === 'bigint' && amount__0 >= 0 && amount__0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contract.compact line 134 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      amount__0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_6.toValue(token__0).concat(_descriptor_2.toValue(amount__0)),
            alignment: _descriptor_6.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_removeLiquidity_0(context,
                                                  partialProofData,
                                                  token__0,
                                                  amount__0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swapFooForBar: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`swapFooForBar: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const fromCoin__0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('swapFooForBar',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 186 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(fromCoin__0) === 'object' && fromCoin__0.nonce.buffer instanceof ArrayBuffer && fromCoin__0.nonce.BYTES_PER_ELEMENT === 1 && fromCoin__0.nonce.length === 32 && fromCoin__0.color.buffer instanceof ArrayBuffer && fromCoin__0.color.BYTES_PER_ELEMENT === 1 && fromCoin__0.color.length === 32 && typeof(fromCoin__0.value) === 'bigint' && fromCoin__0.value >= 0 && fromCoin__0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('swapFooForBar',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 186 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      fromCoin__0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(fromCoin__0),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_swapFooForBar_0(context,
                                                partialProofData,
                                                fromCoin__0);
        partialProofData.output = { value: _descriptor_4.toValue(result_0), alignment: _descriptor_4.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swapBarForFoo: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`swapBarForFoo: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const fromCoin__0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('swapBarForFoo',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 217 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(fromCoin__0) === 'object' && fromCoin__0.nonce.buffer instanceof ArrayBuffer && fromCoin__0.nonce.BYTES_PER_ELEMENT === 1 && fromCoin__0.nonce.length === 32 && fromCoin__0.color.buffer instanceof ArrayBuffer && fromCoin__0.color.BYTES_PER_ELEMENT === 1 && fromCoin__0.color.length === 32 && typeof(fromCoin__0.value) === 'bigint' && fromCoin__0.value >= 0 && fromCoin__0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('swapBarForFoo',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 217 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      fromCoin__0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(fromCoin__0),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_swapBarForFoo_0(context,
                                                partialProofData,
                                                fromCoin__0);
        partialProofData.output = { value: _descriptor_4.toValue(result_0), alignment: _descriptor_4.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      mint: this.circuits.mint,
      addLiquidity: this.circuits.addLiquidity,
      removeLiquidity: this.circuits.removeLiquidity,
      swapFooForBar: this.circuits.swapFooForBar,
      swapBarForFoo: this.circuits.swapBarForFoo
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 2)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    const initialNonce_0 = args_0[1];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(initialNonce_0.buffer instanceof ArrayBuffer && initialNonce_0.BYTES_PER_ELEMENT === 1 && initialNonce_0.length === 32))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'contract.compact line 23 char 1',
                                  'Bytes<32>',
                                  initialNonce_0)
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('mint', new __compactRuntime.ContractOperation());
    state_0.setOperation('addLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('removeLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('swapFooForBar', new __compactRuntime.ContractOperation());
    state_0.setOperation('swapBarForFoo', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(0n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(1n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(2n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(3n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(4n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(5n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue({ bytes: new Uint8Array(32) }),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(6n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(7n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(8n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(9n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(12n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(1n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(initialNonce_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this.#_persistentHash_0(context,
                                          partialProofData,
                                          _descriptor_0.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 0 } },
                                                                                   { idx: { cached: false,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_22.toValue(1n),
                                                                                                              alignment: _descriptor_22.alignment() } }] } },
                                                                                   { popeq: { cached: false,
                                                                                              result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(2n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = this.#_ownPublicKey_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(5n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_1),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_2 = this.#_tokenType_0(context,
                                     partialProofData,
                                     new Uint8Array([102, 111, 111, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                     _descriptor_11.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 2 } },
                                                                               { idx: { cached: true,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_22.toValue(0n),
                                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                                               { popeq: { cached: true,
                                                                                          result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(6n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_2),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_3 = this.#_tokenType_0(context,
                                     partialProofData,
                                     new Uint8Array([98, 97, 114, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                     _descriptor_11.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 2 } },
                                                                               { idx: { cached: true,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_22.toValue(0n),
                                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                                               { popeq: { cached: true,
                                                                                          result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(7n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_3),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_4 = 10n;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(12n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_4),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const ammTokens_0 = 1000000n;
    this.#_mintToken_0(context,
                       partialProofData,
                       _descriptor_0.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(6n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value),
                       ammTokens_0,
                       _descriptor_0.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(1n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value),
                       this.#_right_0(context,
                                      partialProofData,
                                      _descriptor_11.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 2 } },
                                                                                { idx: { cached: true,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_22.toValue(0n),
                                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                                { popeq: { cached: true,
                                                                                           result: undefined } }]).value)));
    const tmp_5 = ammTokens_0;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(3n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_5),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_6 = ammTokens_0;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_6),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#_mintToken_0(context,
                       partialProofData,
                       _descriptor_0.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(7n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value),
                       ammTokens_0,
                       _descriptor_0.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(2n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value),
                       this.#_right_0(context,
                                      partialProofData,
                                      _descriptor_11.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 2 } },
                                                                                { idx: { cached: true,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_22.toValue(0n),
                                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                                { popeq: { cached: true,
                                                                                           result: undefined } }]).value)));
    const tmp_7 = ammTokens_0;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(4n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_7),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_8 = ammTokens_0;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_8),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_some_0(context, partialProofData, value_0) {
    return { is_some: true, value: value_0 };
  }
  #_none_0(context, partialProofData) {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_right_0(context, partialProofData, value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  #_transientHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_21, value_0);
    return result_0;
  }
  #_transientHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_20, value_0);
    return result_0;
  }
  #_persistentHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_0, value_0);
    return result_0;
  }
  #_persistentHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_18, value_0);
    return result_0;
  }
  #_persistentCommit_0(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_19,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  #_degradeToTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_upgradeFromTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_5.toValue(result_0),
      alignment: _descriptor_5.alignment()
    });
    return result_0;
  }
  #_createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_tokenType_0(context, partialProofData, domain_sep_0, contractAddress_0) {
    return this.#_persistentCommit_0(context,
                                     partialProofData,
                                     [domain_sep_0, contractAddress_0.bytes],
                                     new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  #_mintToken_0(context,
                partialProofData,
                domain_sep_0,
                value_0,
                nonce_0,
                recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this.#_tokenType_0(context,
                                          partialProofData,
                                          domain_sep_0,
                                          _descriptor_11.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 2 } },
                                                                                    { idx: { cached: true,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_22.toValue(0n),
                                                                                                               alignment: _descriptor_22.alignment() } }] } },
                                                                                    { popeq: { cached: true,
                                                                                               result: undefined } }]).value)),
                     value: value_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(4n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(value_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     'neg',
                     { branch: { skip: 4 } },
                     { dup: { n: 2 } },
                     { dup: { n: 2 } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [ { tag: 'stack' }] } },
                     'add',
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this.#_coinCommitment_0(context,
                                         partialProofData,
                                         coin_0,
                                         recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(2n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  #_evolveNonce_0(context, partialProofData, index_0, nonce_0) {
    return this.#_upgradeFromTransient_0(context,
                                         partialProofData,
                                         this.#_transientHash_0(context,
                                                                partialProofData,
                                                                [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                               new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                 index_0,
                                                                 this.#_degradeToTransient_0(context,
                                                                                             partialProofData,
                                                                                             nonce_0)]));
  }
  #_receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this.#_right_0(context,
                                       partialProofData,
                                       _descriptor_11.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 2 } },
                                                                                 { idx: { cached: true,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_22.toValue(0n),
                                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                                 { popeq: { cached: true,
                                                                                            result: undefined } }]).value));
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          coin_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(1n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  #_send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_11.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_22.toValue(0n),
                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this.#_createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this.#_coinNullifier_0(context,
                                         partialProofData,
                                         this.#_downcastQualifiedCoin_0(context,
                                                                        partialProofData,
                                                                        input_0),
                                         selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(0n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this.#_upgradeFromTransient_0(context,
                                                       partialProofData,
                                                       this.#_transientHash_1(context,
                                                                              partialProofData,
                                                                              [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                             new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                               this.#_degradeToTransient_0(context,
                                                                                                           partialProofData,
                                                                                                           input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this.#_createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          output_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(2n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this.#_equal_0(change_0, 0n)) {
      return { change: this.#_none_0(context, partialProofData), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this.#_upgradeFromTransient_0(context,
                                                             partialProofData,
                                                             this.#_transientHash_1(context,
                                                                                    partialProofData,
                                                                                    [__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                   new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                     this.#_degradeToTransient_0(context,
                                                                                                                 partialProofData,
                                                                                                                 input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this.#_createZswapOutput_0(context,
                                 partialProofData,
                                 changeCoin_0,
                                 this.#_right_0(context,
                                                partialProofData,
                                                selfAddr_0));
      const cm_0 = this.#_coinCommitment_0(context,
                                           partialProofData,
                                           changeCoin_0,
                                           this.#_right_0(context,
                                                          partialProofData,
                                                          selfAddr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(2n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(1n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this.#_some_0(context, partialProofData, changeCoin_0),
               sent: output_0 };
    }
  }
  #_sendImmediate_0(context, partialProofData, input_0, target_0, value_0) {
    return this.#_send_0(context,
                         partialProofData,
                         this.#_upcastQualifiedCoin_0(context,
                                                      partialProofData,
                                                      input_0),
                         target_0,
                         value_0);
  }
  #_downcastQualifiedCoin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  #_upcastQualifiedCoin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce,
             color: coin_0.color,
             value: coin_0.value,
             mt_index: 0n };
  }
  #_coinCommitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: recipient_0.is_left,
                                     data:
                                       recipient_0.is_left ?
                                       recipient_0.left.bytes :
                                       recipient_0.right.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_coinNullifier_0(context, partialProofData, coin_0, addr_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: false,
                                     data: addr_0.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  #_amountsToSwap_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.amountsToSwap(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 2  && typeof(result_0[0]) === 'bigint' && result_0[0] >= 0 && result_0[0] <= 340282366920938463463374607431768211455n && typeof(result_0[1]) === 'bigint' && result_0[1] >= 0 && result_0[1] <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('amountsToSwap',
                                  'return value',
                                  'contract.compact line 21 char 1',
                                  '[Uint<0..340282366920938463463374607431768211455>, Uint<0..340282366920938463463374607431768211455>]',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_12.toValue(result_0),
      alignment: _descriptor_12.alignment()
    });
    return result_0;
  }
  #_safeAdd_0(context, partialProofData, a_0, b_0) {
    return ((t1) => {
             if (t1 > 340282366920938463463374607431768211455n)
               throw new __compactRuntime.CompactError('contract.compact line 52 char 10: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
             return t1;
           })(a_0 + b_0);
  }
  #_sendCoin_0(context, partialProofData, tk_0, amount_0, recipient_0) {
    const coinInfo_0 = this.#_mintToken_0(context,
                                          partialProofData,
                                          tk_0,
                                          amount_0,
                                          this.#_evolveNonce_0(context,
                                                               partialProofData,
                                                               _descriptor_10.fromValue(Contract._query(context,
                                                                                                        partialProofData,
                                                                                                        [
                                                                                                         { dup: { n: 0 } },
                                                                                                         { idx: { cached: false,
                                                                                                                  pushPath: false,
                                                                                                                  path: [
                                                                                                                         { tag: 'value',
                                                                                                                           value: { value: _descriptor_22.toValue(0n),
                                                                                                                                    alignment: _descriptor_22.alignment() } }] } },
                                                                                                         { popeq: { cached: true,
                                                                                                                    result: undefined } }]).value),
                                                               _descriptor_0.fromValue(Contract._query(context,
                                                                                                       partialProofData,
                                                                                                       [
                                                                                                        { dup: { n: 0 } },
                                                                                                        { idx: { cached: false,
                                                                                                                 pushPath: false,
                                                                                                                 path: [
                                                                                                                        { tag: 'value',
                                                                                                                          value: { value: _descriptor_22.toValue(1n),
                                                                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                                                                        { popeq: { cached: false,
                                                                                                                   result: undefined } }]).value)),
                                          this.#_left_0(context,
                                                        partialProofData,
                                                        recipient_0));
    this.#_sendImmediate_0(context,
                           partialProofData,
                           coinInfo_0,
                           this.#_left_0(context, partialProofData, recipient_0),
                           amount_0);
    return coinInfo_0;
  }
  #_mint_0(context, partialProofData, tk_0) {
    const pub_tk_0 = tk_0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = this.#_ownPublicKey_0(context,
                                                           partialProofData),
                             _descriptor_8.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_22.toValue(8n),
                                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_5.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value))
                            ===
                            false,
                            'user already minted tokens');
    const tmp_1 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_22.toValue(0n),
                                                alignment: _descriptor_22.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_9.toValue(tmp_1),
                                              alignment: _descriptor_9.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    if (pub_tk_0 === 0) {
      const newNonce_0 = this.#_evolveNonce_0(context,
                                              partialProofData,
                                              _descriptor_10.fromValue(Contract._query(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_22.toValue(0n),
                                                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                                              _descriptor_0.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_22.toValue(1n),
                                                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value));
      const tmp_2 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('contract.compact line 75 char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(_descriptor_2.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(3n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value)
                       +
                       _descriptor_10.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 0 } },
                                                                 { idx: { cached: false,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_22.toValue(12n),
                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                 { popeq: { cached: false,
                                                                            result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(3n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_2),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
      const coinInfo_0 = this.#_mintToken_0(context,
                                            partialProofData,
                                            new Uint8Array([102, 111, 111, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                            _descriptor_10.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_22.toValue(12n),
                                                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                                                      { popeq: { cached: false,
                                                                                                 result: undefined } }]).value),
                                            newNonce_0,
                                            this.#_left_0(context,
                                                          partialProofData,
                                                          this.#_ownPublicKey_0(context,
                                                                                partialProofData)));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(1n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newNonce_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
      const tmp_3 = this.#_ownPublicKey_0(context, partialProofData);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(8n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_3),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      this.#_sendCoin_0(context,
                        partialProofData,
                        _descriptor_0.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 0 } },
                                                                 { idx: { cached: false,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_22.toValue(6n),
                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                 { popeq: { cached: false,
                                                                            result: undefined } }]).value),
                        _descriptor_10.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_22.toValue(12n),
                                                                                             alignment: _descriptor_22.alignment() } }] } },
                                                                  { popeq: { cached: false,
                                                                             result: undefined } }]).value),
                        this.#_ownPublicKey_0(context, partialProofData));
      return coinInfo_0;
    } else {
      const newNonce_1 = this.#_evolveNonce_0(context,
                                              partialProofData,
                                              _descriptor_10.fromValue(Contract._query(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_22.toValue(0n),
                                                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                                              _descriptor_0.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_22.toValue(2n),
                                                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value));
      const tmp_4 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('contract.compact line 89 char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(_descriptor_2.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_22.toValue(4n),
                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value)
                       +
                       _descriptor_10.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 0 } },
                                                                 { idx: { cached: false,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_22.toValue(12n),
                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                 { popeq: { cached: false,
                                                                            result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(4n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_4),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
      const coinInfo_1 = this.#_mintToken_0(context,
                                            partialProofData,
                                            new Uint8Array([98, 97, 114, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                            _descriptor_10.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_22.toValue(12n),
                                                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                                                      { popeq: { cached: false,
                                                                                                 result: undefined } }]).value),
                                            newNonce_1,
                                            this.#_left_0(context,
                                                          partialProofData,
                                                          this.#_ownPublicKey_0(context,
                                                                                partialProofData)));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(2n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newNonce_1),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
      const tmp_5 = this.#_ownPublicKey_0(context, partialProofData);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(8n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_5),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      this.#_sendCoin_0(context,
                        partialProofData,
                        _descriptor_0.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 0 } },
                                                                 { idx: { cached: false,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_22.toValue(7n),
                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                 { popeq: { cached: false,
                                                                            result: undefined } }]).value),
                        _descriptor_10.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_22.toValue(12n),
                                                                                             alignment: _descriptor_22.alignment() } }] } },
                                                                  { popeq: { cached: false,
                                                                             result: undefined } }]).value),
                        this.#_ownPublicKey_0(context, partialProofData));
      return coinInfo_1;
    }
  }
  #_addLiquidity_0(context, partialProofData, coin__0) {
    const coin_0 = coin__0;
    __compactRuntime.assert(this.#_equal_1(coin_0.color,
                                           _descriptor_0.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_22.toValue(6n),
                                                                                                               alignment: _descriptor_22.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value))
                            ||
                            this.#_equal_2(coin_0.color,
                                           _descriptor_0.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_22.toValue(7n),
                                                                                                               alignment: _descriptor_22.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value)),
                            'invalid token provided');
    const token_0 = this.#_equal_3(coin_0.color,
                                   _descriptor_0.fromValue(Contract._query(context,
                                                                           partialProofData,
                                                                           [
                                                                            { dup: { n: 0 } },
                                                                            { idx: { cached: false,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_22.toValue(6n),
                                                                                                       alignment: _descriptor_22.alignment() } }] } },
                                                                            { popeq: { cached: false,
                                                                                       result: undefined } }]).value))
                    ?
                    0 :
                    1;
    this.#_receive_0(context, partialProofData, coin_0);
    if (token_0 === 0) {
      const tmp_0 = this.#_safeAdd_0(context,
                                     partialProofData,
                                     ((t1) => {
                                       if (t1 > 340282366920938463463374607431768211455n)
                                         throw new __compactRuntime.CompactError('contract.compact line 112 char 33: cast from field value to Uint value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                                       return t1;
                                     })(_descriptor_1.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_22.toValue(10n),
                                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value)),
                                     coin_0.value);
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      const tmp_1 = this.#_safeAdd_0(context,
                                     partialProofData,
                                     ((t1) => {
                                       if (t1 > 340282366920938463463374607431768211455n)
                                         throw new __compactRuntime.CompactError('contract.compact line 114 char 33: cast from field value to Uint value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                                       return t1;
                                     })(_descriptor_1.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_22.toValue(11n),
                                                                                                            alignment: _descriptor_22.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value)),
                                     coin_0.value);
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    }
    let tmp_2;
    if (!(tmp_2 = [this.#_ownPublicKey_0(context, partialProofData), token_0],
          _descriptor_8.fromValue(Contract._query(context,
                                                  partialProofData,
                                                  [
                                                   { dup: { n: 0 } },
                                                   { idx: { cached: false,
                                                            pushPath: false,
                                                            path: [
                                                                   { tag: 'value',
                                                                     value: { value: _descriptor_22.toValue(9n),
                                                                              alignment: _descriptor_22.alignment() } }] } },
                                                   { push: { storage: false,
                                                             value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_2),
                                                                                                          alignment: _descriptor_7.alignment() }).encode() } },
                                                   'member',
                                                   { popeq: { cached: true,
                                                              result: undefined } }]).value)))
    {
      const tmp_3 = [this.#_ownPublicKey_0(context, partialProofData), token_0];
      const tmp_4 = coin_0.value;
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(9n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_3),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_4),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      return coin_0.value;
    } else {
      let tmp_5;
      const currentBalance_0 = (tmp_5 = [this.#_ownPublicKey_0(context,
                                                               partialProofData),
                                         token_0],
                                _descriptor_2.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_22.toValue(9n),
                                                                                                    alignment: _descriptor_22.alignment() } }] } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_7.toValue(tmp_5),
                                                                                                    alignment: _descriptor_7.alignment() } }] } },
                                                                         { popeq: { cached: false,
                                                                                    result: undefined } }]).value));
      const newBalance_0 = this.#_safeAdd_0(context,
                                            partialProofData,
                                            currentBalance_0,
                                            coin_0.value);
      const tmp_6 = [this.#_ownPublicKey_0(context, partialProofData), token_0];
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(9n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_6),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(newBalance_0),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      return newBalance_0;
    }
  }
  #_removeLiquidity_0(context, partialProofData, token__0, amount__0) {
    const token_0 = token__0;
    const amount_0 = amount__0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = [this.#_ownPublicKey_0(context,
                                                            partialProofData),
                                      token_0],
                             _descriptor_8.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_22.toValue(9n),
                                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_7.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'this user has no liquidity');
    const color_0 = token_0 === 0 ?
                    _descriptor_0.fromValue(Contract._query(context,
                                                            partialProofData,
                                                            [
                                                             { dup: { n: 0 } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_22.toValue(6n),
                                                                                        alignment: _descriptor_22.alignment() } }] } },
                                                             { popeq: { cached: false,
                                                                        result: undefined } }]).value)
                    :
                    _descriptor_0.fromValue(Contract._query(context,
                                                            partialProofData,
                                                            [
                                                             { dup: { n: 0 } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_22.toValue(7n),
                                                                                        alignment: _descriptor_22.alignment() } }] } },
                                                             { popeq: { cached: false,
                                                                        result: undefined } }]).value);
    let tmp_1;
    const currentBalance_0 = (tmp_1 = [this.#_ownPublicKey_0(context,
                                                             partialProofData),
                                       token_0],
                              _descriptor_2.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_22.toValue(9n),
                                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(tmp_1),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value));
    __compactRuntime.assert(currentBalance_0 >= amount_0, 'insufficient balance');
    if (this.#_equal_4(currentBalance_0, amount_0)) {
      const tmp_2 = [this.#_ownPublicKey_0(context, partialProofData), token_0];
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(9n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_2),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      const newBalance_0 = (__compactRuntime.assert(!(currentBalance_0
                                                      <
                                                      amount_0),
                                                    'result of subtraction would be negative'),
                            currentBalance_0 - amount_0);
      const tmp_3 = [this.#_ownPublicKey_0(context, partialProofData), token_0];
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_22.toValue(9n),
                                                  alignment: _descriptor_22.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_3),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(newBalance_0),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    if (token_0 === 0) {
      const tmp_4 = __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_22.toValue(10n),
                                                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value),
                                              amount_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_4),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      const tmp_5 = __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_22.toValue(11n),
                                                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value),
                                              amount_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                              alignment: _descriptor_22.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_5),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    }
    this.#_sendCoin_0(context,
                      partialProofData,
                      color_0,
                      ((t1) => {
                        if (t1 > 18446744073709551615n)
                          throw new __compactRuntime.CompactError('contract.compact line 166 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                        return t1;
                      })(amount_0),
                      this.#_ownPublicKey_0(context, partialProofData));
    return [];
  }
  #_verifySwap_0(context,
                 partialProofData,
                 tokenTo_0,
                 amountToBuy_0,
                 amountToSell_0)
  {
    if (tokenTo_0 === 1) {
      return __compactRuntime.mulField(amountToSell_0,
                                       __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                                         partialProofData,
                                                                                                         [
                                                                                                          { dup: { n: 0 } },
                                                                                                          { idx: { cached: false,
                                                                                                                   pushPath: false,
                                                                                                                   path: [
                                                                                                                          { tag: 'value',
                                                                                                                            value: { value: _descriptor_22.toValue(11n),
                                                                                                                                     alignment: _descriptor_22.alignment() } }] } },
                                                                                                          { popeq: { cached: false,
                                                                                                                     result: undefined } }]).value),
                                                                 amountToBuy_0))
             ===
             __compactRuntime.mulField(_descriptor_1.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_22.toValue(10n),
                                                                                                           alignment: _descriptor_22.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value),
                                       amountToBuy_0);
    } else {
      if (tokenTo_0 === 0) {
        return __compactRuntime.mulField(amountToSell_0,
                                         __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                                           partialProofData,
                                                                                                           [
                                                                                                            { dup: { n: 0 } },
                                                                                                            { idx: { cached: false,
                                                                                                                     pushPath: false,
                                                                                                                     path: [
                                                                                                                            { tag: 'value',
                                                                                                                              value: { value: _descriptor_22.toValue(10n),
                                                                                                                                       alignment: _descriptor_22.alignment() } }] } },
                                                                                                            { popeq: { cached: false,
                                                                                                                       result: undefined } }]).value),
                                                                   amountToBuy_0))
               ===
               __compactRuntime.mulField(_descriptor_1.fromValue(Contract._query(context,
                                                                                 partialProofData,
                                                                                 [
                                                                                  { dup: { n: 0 } },
                                                                                  { idx: { cached: false,
                                                                                           pushPath: false,
                                                                                           path: [
                                                                                                  { tag: 'value',
                                                                                                    value: { value: _descriptor_22.toValue(11n),
                                                                                                             alignment: _descriptor_22.alignment() } }] } },
                                                                                  { popeq: { cached: false,
                                                                                             result: undefined } }]).value),
                                         amountToBuy_0);
      } else {
        return false;
      }
    }
  }
  #_swapFooForBar_0(context, partialProofData, fromCoin__0) {
    const fromCoin_0 = fromCoin__0;
    __compactRuntime.assert(this.#_equal_5(fromCoin_0.color,
                                           _descriptor_0.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_22.toValue(6n),
                                                                                                               alignment: _descriptor_22.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value)),
                            'invalid token provided for swap');
    const __compact_pattern_tmp2_0 = this.#_amountsToSwap_0(context,
                                                            partialProofData);
    const barToBuy_0 = __compact_pattern_tmp2_0[0];
    const fooToSell_0 = __compact_pattern_tmp2_0[1];
    __compactRuntime.assert(barToBuy_0 > 0n && fooToSell_0 > 0n,
                            'invalid amounts to swap');
    __compactRuntime.assert(!this.#_equal_6(fromCoin_0.value, fooToSell_0),
                            'value of $foo from parameter and witness do not match');
    __compactRuntime.assert(this.#_verifySwap_0(context,
                                                partialProofData,
                                                1,
                                                barToBuy_0,
                                                fooToSell_0),
                            'invalid swap amounts');
    this.#_receive_0(context, partialProofData, fromCoin_0);
    const tmp_0 = __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                    partialProofData,
                                                                                    [
                                                                                     { dup: { n: 0 } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_22.toValue(10n),
                                                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                                                     { popeq: { cached: false,
                                                                                                result: undefined } }]).value),
                                            fooToSell_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = this.#_safeAdd_0(context,
                                   partialProofData,
                                   ((t1) => {
                                     if (t1 > 340282366920938463463374607431768211455n)
                                       throw new __compactRuntime.CompactError('contract.compact line 206 char 29: cast from field value to Uint value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                                     return t1;
                                   })(_descriptor_1.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_22.toValue(11n),
                                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value)),
                                   barToBuy_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#_sendCoin_0(context,
                      partialProofData,
                      _descriptor_0.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_22.toValue(7n),
                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                               { popeq: { cached: false,
                                                                          result: undefined } }]).value),
                      ((t1) => {
                        if (t1 > 18446744073709551615n)
                          throw new __compactRuntime.CompactError('contract.compact line 210 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                        return t1;
                      })(barToBuy_0),
                      this.#_ownPublicKey_0(context, partialProofData));
    return [_descriptor_1.fromValue(Contract._query(context,
                                                    partialProofData,
                                                    [
                                                     { dup: { n: 0 } },
                                                     { idx: { cached: false,
                                                              pushPath: false,
                                                              path: [
                                                                     { tag: 'value',
                                                                       value: { value: _descriptor_22.toValue(11n),
                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                     { popeq: { cached: false,
                                                                result: undefined } }]).value),
            _descriptor_1.fromValue(Contract._query(context,
                                                    partialProofData,
                                                    [
                                                     { dup: { n: 0 } },
                                                     { idx: { cached: false,
                                                              pushPath: false,
                                                              path: [
                                                                     { tag: 'value',
                                                                       value: { value: _descriptor_22.toValue(10n),
                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                     { popeq: { cached: false,
                                                                result: undefined } }]).value)];
  }
  #_swapBarForFoo_0(context, partialProofData, fromCoin__0) {
    const fromCoin_0 = fromCoin__0;
    __compactRuntime.assert(this.#_equal_7(fromCoin_0.color,
                                           _descriptor_0.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_22.toValue(7n),
                                                                                                               alignment: _descriptor_22.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value)),
                            'invalid token provided for swap');
    const __compact_pattern_tmp1_0 = this.#_amountsToSwap_0(context,
                                                            partialProofData);
    const fooToBuy_0 = __compact_pattern_tmp1_0[0];
    const barToSell_0 = __compact_pattern_tmp1_0[1];
    __compactRuntime.assert(fooToBuy_0 > 0n && barToSell_0 > 0n,
                            'invalid amounts to swap');
    __compactRuntime.assert(!this.#_equal_8(fromCoin_0.value, barToSell_0),
                            'value of $bar from parameter and witness do not match');
    __compactRuntime.assert(this.#_verifySwap_0(context,
                                                partialProofData,
                                                0,
                                                fooToBuy_0,
                                                barToSell_0),
                            'invalid swap amounts');
    this.#_receive_0(context, partialProofData, fromCoin_0);
    const tmp_0 = __compactRuntime.subField(_descriptor_1.fromValue(Contract._query(context,
                                                                                    partialProofData,
                                                                                    [
                                                                                     { dup: { n: 0 } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_22.toValue(11n),
                                                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                                                     { popeq: { cached: false,
                                                                                                result: undefined } }]).value),
                                            barToSell_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(11n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = this.#_safeAdd_0(context,
                                   partialProofData,
                                   ((t1) => {
                                     if (t1 > 340282366920938463463374607431768211455n)
                                       throw new __compactRuntime.CompactError('contract.compact line 237 char 29: cast from field value to Uint value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                                     return t1;
                                   })(_descriptor_1.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_22.toValue(10n),
                                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value)),
                                   fooToBuy_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(10n),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#_sendCoin_0(context,
                      partialProofData,
                      _descriptor_0.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_22.toValue(6n),
                                                                                          alignment: _descriptor_22.alignment() } }] } },
                                                               { popeq: { cached: false,
                                                                          result: undefined } }]).value),
                      ((t1) => {
                        if (t1 > 18446744073709551615n)
                          throw new __compactRuntime.CompactError('contract.compact line 241 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                        return t1;
                      })(fooToBuy_0),
                      this.#_ownPublicKey_0(context, partialProofData));
    return [_descriptor_1.fromValue(Contract._query(context,
                                                    partialProofData,
                                                    [
                                                     { dup: { n: 0 } },
                                                     { idx: { cached: false,
                                                              pushPath: false,
                                                              path: [
                                                                     { tag: 'value',
                                                                       value: { value: _descriptor_22.toValue(11n),
                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                     { popeq: { cached: false,
                                                                result: undefined } }]).value),
            _descriptor_1.fromValue(Contract._query(context,
                                                    partialProofData,
                                                    [
                                                     { dup: { n: 0 } },
                                                     { idx: { cached: false,
                                                              pushPath: false,
                                                              path: [
                                                                     { tag: 'value',
                                                                       value: { value: _descriptor_22.toValue(10n),
                                                                                alignment: _descriptor_22.alignment() } }] } },
                                                     { popeq: { cached: false,
                                                                result: undefined } }]).value)];
  }
  #_equal_0(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_4(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_6(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_8(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get counter() {
      return _descriptor_10.fromValue(Contract._query(context,
                                                      partialProofData,
                                                      [
                                                       { dup: { n: 0 } },
                                                       { idx: { cached: false,
                                                                pushPath: false,
                                                                path: [
                                                                       { tag: 'value',
                                                                         value: { value: _descriptor_22.toValue(0n),
                                                                                  alignment: _descriptor_22.alignment() } }] } },
                                                       { popeq: { cached: true,
                                                                  result: undefined } }]).value);
    },
    get fooNonce() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(1n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get barNonce() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(2n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get fooTotalSupply() {
      return _descriptor_2.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(3n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get barTotalSupply() {
      return _descriptor_2.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(4n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get admin() {
      return _descriptor_5.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(5n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get fooColor() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(6n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get barColor() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(7n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    alreadyMinted: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_22.toValue(8n),
                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                                                               alignment: _descriptor_10.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_10.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_22.toValue(8n),
                                                                                    alignment: _descriptor_22.alignment() } }] } },
                                                         'size',
                                                         { popeq: { cached: true,
                                                                    result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const elem_0 = args_0[0];
        if (!(typeof(elem_0) === 'object' && elem_0.bytes.buffer instanceof ArrayBuffer && elem_0.bytes.BYTES_PER_ELEMENT === 1 && elem_0.bytes.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'contract.compact line 15 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      elem_0)
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_22.toValue(8n),
                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(elem_0),
                                                                                                               alignment: _descriptor_5.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[8];
        return self_0.asMap().keys().map((elem) => _descriptor_5.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    liquidityProviders: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_22.toValue(9n),
                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                                                               alignment: _descriptor_10.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_10.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_22.toValue(9n),
                                                                                    alignment: _descriptor_22.alignment() } }] } },
                                                         'size',
                                                         { popeq: { cached: true,
                                                                    result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(Array.isArray(key_0) && key_0.length === 2  && typeof(key_0[0]) === 'object' && key_0[0].bytes.buffer instanceof ArrayBuffer && key_0[0].bytes.BYTES_PER_ELEMENT === 1 && key_0[0].bytes.length === 32 && typeof(key_0[1]) === 'number' && key_0[1] >= 0 && key_0[1] <= 1))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'contract.compact line 16 char 1',
                                      '[struct ZswapCoinPublicKey<bytes: Bytes<32>>, Enum<Token, foo, bar>]',
                                      key_0)
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_22.toValue(9n),
                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(key_0),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(Array.isArray(key_0) && key_0.length === 2  && typeof(key_0[0]) === 'object' && key_0[0].bytes.buffer instanceof ArrayBuffer && key_0[0].bytes.BYTES_PER_ELEMENT === 1 && key_0[0].bytes.length === 32 && typeof(key_0[1]) === 'number' && key_0[1] >= 0 && key_0[1] <= 1))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'contract.compact line 16 char 1',
                                      '[struct ZswapCoinPublicKey<bytes: Bytes<32>>, Enum<Token, foo, bar>]',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_22.toValue(9n),
                                                                                   alignment: _descriptor_22.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(key_0),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[9];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_7.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get fooPool() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(10n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get barPool() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_22.toValue(11n),
                                                                                 alignment: _descriptor_22.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ amountsToSwap: (...args) => undefined });
const pureCircuits = { };
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
