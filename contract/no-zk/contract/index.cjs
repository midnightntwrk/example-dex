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

const _descriptor_1 = new _ContractAddress_0();

const _descriptor_2 = new __compactRuntime.CompactTypeEnum(1, 1);

const _descriptor_3 = new __compactRuntime.CompactTypeField();

const _descriptor_4 = new __compactRuntime.CompactTypeBoolean();

class _tuple_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_3.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_3.fromValue(value_0),
      _descriptor_3.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0[0]).concat(_descriptor_3.toValue(value_0[1]));
  }
}

const _descriptor_5 = new _tuple_0();

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

const _descriptor_6 = new _ZswapCoinPublicKey_0();

class _Either_0 {
  alignment() {
    return _descriptor_4.alignment().concat(_descriptor_6.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_4.fromValue(value_0),
      left: _descriptor_6.fromValue(value_0),
      right: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_4.toValue(value_0.is_left).concat(_descriptor_6.toValue(value_0.left).concat(_descriptor_1.toValue(value_0.right)));
  }
}

const _descriptor_7 = new _Either_0();

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _tuple_1 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_2.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_6.fromValue(value_0),
      _descriptor_2.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0[0]).concat(_descriptor_2.toValue(value_0[1]));
  }
}

const _descriptor_9 = new _tuple_1();

class _tuple_2 {
  alignment() {
    return _descriptor_8.alignment().concat(_descriptor_8.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_8.fromValue(value_0),
      _descriptor_8.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_8.toValue(value_0[0]).concat(_descriptor_8.toValue(value_0[1]));
  }
}

const _descriptor_10 = new _tuple_2();

const _descriptor_11 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_12 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_13 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

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
      claim: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`claim: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('claim',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 46 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(token_0) === 'number' && token_0 >= 0 && token_0 <= 1))
          __compactRuntime.type_error('claim',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 46 char 1',
                                      'Enum<Token, foo, bar>',
                                      token_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(token_0),
            alignment: _descriptor_2.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_claim_0(context, partialProofData, token_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      addLiquidity: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`addLiquidity: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token_0 = args_1[1];
        const amount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 72 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(token_0) === 'number' && token_0 >= 0 && token_0 <= 1))
          __compactRuntime.type_error('addLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 72 char 1',
                                      'Enum<Token, foo, bar>',
                                      token_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('addLiquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contract.compact line 72 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(token_0).concat(_descriptor_8.toValue(amount_0)),
            alignment: _descriptor_2.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_addLiquidity_0(context,
                                               partialProofData,
                                               token_0,
                                               amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      removeLiquidity: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`removeLiquidity: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token_0 = args_1[1];
        const amount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 120 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(token_0) === 'number' && token_0 >= 0 && token_0 <= 1))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 120 char 1',
                                      'Enum<Token, foo, bar>',
                                      token_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('removeLiquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contract.compact line 120 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(token_0).concat(_descriptor_8.toValue(amount_0)),
            alignment: _descriptor_2.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_removeLiquidity_0(context,
                                                  partialProofData,
                                                  token_0,
                                                  amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      transferFoo: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`transferFoo: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const to_0 = args_1[1];
        const value_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('transferFoo',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 148 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(to_0) === 'object' && typeof(to_0.is_left) === 'boolean' && typeof(to_0.left) === 'object' && to_0.left.bytes.buffer instanceof ArrayBuffer && to_0.left.bytes.BYTES_PER_ELEMENT === 1 && to_0.left.bytes.length === 32 && typeof(to_0.right) === 'object' && to_0.right.bytes.buffer instanceof ArrayBuffer && to_0.right.bytes.BYTES_PER_ELEMENT === 1 && to_0.right.bytes.length === 32))
          __compactRuntime.type_error('transferFoo',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 148 char 1',
                                      'struct Either<is_left: Boolean, left: struct ZswapCoinPublicKey<bytes: Bytes<32>>, right: struct ContractAddress<bytes: Bytes<32>>>',
                                      to_0)
        if (!(typeof(value_0) === 'bigint' && value_0 >= 0 && value_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('transferFoo',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contract.compact line 148 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      value_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_7.toValue(to_0).concat(_descriptor_8.toValue(value_0)),
            alignment: _descriptor_7.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_transferFoo_0(context,
                                              partialProofData,
                                              to_0,
                                              value_0);
        partialProofData.output = { value: _descriptor_4.toValue(result_0), alignment: _descriptor_4.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      transferBar: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`transferBar: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const to_0 = args_1[1];
        const value_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('transferBar',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 154 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(to_0) === 'object' && typeof(to_0.is_left) === 'boolean' && typeof(to_0.left) === 'object' && to_0.left.bytes.buffer instanceof ArrayBuffer && to_0.left.bytes.BYTES_PER_ELEMENT === 1 && to_0.left.bytes.length === 32 && typeof(to_0.right) === 'object' && to_0.right.bytes.buffer instanceof ArrayBuffer && to_0.right.bytes.BYTES_PER_ELEMENT === 1 && to_0.right.bytes.length === 32))
          __compactRuntime.type_error('transferBar',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 154 char 1',
                                      'struct Either<is_left: Boolean, left: struct ZswapCoinPublicKey<bytes: Bytes<32>>, right: struct ContractAddress<bytes: Bytes<32>>>',
                                      to_0)
        if (!(typeof(value_0) === 'bigint' && value_0 >= 0 && value_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('transferBar',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contract.compact line 154 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      value_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_7.toValue(to_0).concat(_descriptor_8.toValue(value_0)),
            alignment: _descriptor_7.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_transferBar_0(context,
                                              partialProofData,
                                              to_0,
                                              value_0);
        partialProofData.output = { value: _descriptor_4.toValue(result_0), alignment: _descriptor_4.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swap: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`swap: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const from_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('swap',
                                      'argument 1 (as invoked from Typescript)',
                                      'contract.compact line 176 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(from_0) === 'number' && from_0 >= 0 && from_0 <= 1))
          __compactRuntime.type_error('swap',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contract.compact line 176 char 1',
                                      'Enum<Token, foo, bar>',
                                      from_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(from_0),
            alignment: _descriptor_2.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_swap_0(context, partialProofData, from_0);
        partialProofData.output = { value: _descriptor_5.toValue(result_0), alignment: _descriptor_5.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      claim: this.circuits.claim,
      addLiquidity: this.circuits.addLiquidity,
      removeLiquidity: this.circuits.removeLiquidity,
      transferFoo: this.circuits.transferFoo,
      transferBar: this.circuits.transferBar,
      swap: this.circuits.swap
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 4)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 4 arguments (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    const names_0 = args_0[1];
    const symbols_0 = args_0[2];
    const fixedSupply_0 = args_0[3];
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
    if (!(Array.isArray(names_0) && names_0.length === 2  && true && true))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'contract.compact line 25 char 1',
                                  '[Opaque<"string">, Opaque<"string">]',
                                  names_0)
    if (!(Array.isArray(symbols_0) && symbols_0.length === 2  && true && true))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 2 (argument 3 as invoked from Typescript)',
                                  'contract.compact line 25 char 1',
                                  '[Opaque<"string">, Opaque<"string">]',
                                  symbols_0)
    if (!(typeof(fixedSupply_0) === 'bigint' && fixedSupply_0 >= 0 && fixedSupply_0 <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 3 (argument 4 as invoked from Typescript)',
                                  'contract.compact line 25 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  fixedSupply_0)
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
    state_0.data = stateValue_0;
    state_0.setOperation('claim', new __compactRuntime.ContractOperation());
    state_0.setOperation('addLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('removeLiquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('transferFoo', new __compactRuntime.ContractOperation());
    state_0.setOperation('transferBar', new __compactRuntime.ContractOperation());
    state_0.setOperation('swap', new __compactRuntime.ContractOperation());
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
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(0n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(1n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(2n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(0n),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(3n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(''),
                                                                            alignment: _descriptor_12.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(4n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(''),
                                                                            alignment: _descriptor_12.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(5n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(0n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(6n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(false),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(7n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue({ bytes: new Uint8Array(32) }),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(8n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(9n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(10n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(0n),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#_initialize_0(context, partialProofData, names_0[0], symbols_0[0], 18n);
    this.#_initialize_0(context, partialProofData, names_0[1], symbols_0[1], 18n);
    const tmp_0 = this.#_ownPublicKey_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(7n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(tmp_0),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#__mint_0(context,
                   partialProofData,
                   this.#_right_0(context,
                                  partialProofData,
                                  _descriptor_1.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_13.toValue(0n),
                                                                                                      alignment: _descriptor_13.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value)),
                   fixedSupply_0);
    this.#__mint_0(context,
                   partialProofData,
                   this.#_right_0(context,
                                  partialProofData,
                                  _descriptor_1.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_13.toValue(0n),
                                                                                                      alignment: _descriptor_13.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value)),
                   fixedSupply_0);
    const tmp_1 = this.#_padTokenAmount_0(context, partialProofData, 100n);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(10n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_right_0(context, partialProofData, value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_burnAddress_0(context, partialProofData) {
    return this.#_left_0(context,
                         partialProofData,
                         { bytes: new Uint8Array(32) });
  }
  #_initialize_0(context, partialProofData, name__0, symbol__0, decimals__0) {
    this.#_initialize_1(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(3n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(name__0),
                                                                            alignment: _descriptor_12.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(4n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(symbol__0),
                                                                            alignment: _descriptor_12.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(5n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(decimals__0),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_balanceOf_0(context, partialProofData, account_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (!_descriptor_4.fromValue(Contract._query(context,
                                                 partialProofData,
                                                 [
                                                  { dup: { n: 0 } },
                                                  { idx: { cached: false,
                                                           pushPath: false,
                                                           path: [
                                                                  { tag: 'value',
                                                                    value: { value: _descriptor_13.toValue(0n),
                                                                             alignment: _descriptor_13.alignment() } }] } },
                                                  { push: { storage: false,
                                                            value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(account_0),
                                                                                                         alignment: _descriptor_7.alignment() }).encode() } },
                                                  'member',
                                                  { popeq: { cached: true,
                                                             result: undefined } }]).value))
    {
      return 0n;
    } else {
      return _descriptor_8.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(0n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_7.toValue(account_0),
                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  }
  #_transfer_0(context, partialProofData, to_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isContractAddress_0(context,
                                                        partialProofData,
                                                        to_0),
                            'FungibleToken: Unsafe Transfer');
    return this.#__unsafeTransfer_0(context, partialProofData, to_0, value_0);
  }
  #__unsafeTransfer_0(context, partialProofData, to_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    const owner_0 = this.#_left_0(context,
                                  partialProofData,
                                  this.#_ownPublicKey_0(context,
                                                        partialProofData));
    this.#__unsafeUncheckedTransfer_0(context,
                                      partialProofData,
                                      owner_0,
                                      to_0,
                                      value_0);
    return true;
  }
  #_transferFrom_0(context, partialProofData, from_0, to_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isContractAddress_0(context,
                                                        partialProofData,
                                                        to_0),
                            'FungibleToken: Unsafe Transfer');
    return this.#__unsafeTransferFrom_0(context,
                                        partialProofData,
                                        from_0,
                                        to_0,
                                        value_0);
  }
  #__unsafeTransferFrom_0(context, partialProofData, from_0, to_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    const spender_0 = this.#_left_0(context,
                                    partialProofData,
                                    this.#_ownPublicKey_0(context,
                                                          partialProofData));
    this.#__spendAllowance_0(context,
                             partialProofData,
                             from_0,
                             spender_0,
                             value_0);
    this.#__unsafeUncheckedTransfer_0(context,
                                      partialProofData,
                                      from_0,
                                      to_0,
                                      value_0);
    return true;
  }
  #__unsafeUncheckedTransfer_0(context, partialProofData, from_0, to_0, value_0)
  {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         from_0),
                            'FungibleToken: invalid sender');
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         to_0),
                            'FungibleToken: invalid receiver');
    this.#__update_0(context, partialProofData, from_0, to_0, value_0);
    return [];
  }
  #__update_0(context, partialProofData, from_0, to_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (this.#_isKeyOrAddressZero_0(context, partialProofData, from_0)) {
      const MAX_UINT128_0 = 340282366920938463463374607431768211455n;
      let t_0;
      __compactRuntime.assert((t_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_13.toValue(2n),
                                                                                                         alignment: _descriptor_13.alignment() } }] } },
                                                                              { popeq: { cached: false,
                                                                                         result: undefined } }]).value),
                               (__compactRuntime.assert(!(MAX_UINT128_0 < t_0),
                                                        'result of subtraction would be negative'),
                                MAX_UINT128_0 - t_0))
                              >=
                              value_0,
                              'FungibleToken: arithmetic overflow');
      const tmp_0 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('FungibleToken.compact line 444 char 31: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(_descriptor_8.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_13.toValue(2n),
                                                                                           alignment: _descriptor_13.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value)
                       +
                       value_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(2n),
                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      const fromBal_0 = this.#_balanceOf_0(context, partialProofData, from_0);
      __compactRuntime.assert(fromBal_0 >= value_0,
                              'FungibleToken: insufficient balance');
      const tmp_1 = (__compactRuntime.assert(!(fromBal_0 < value_0),
                                             'result of subtraction would be negative'),
                     fromBal_0 - value_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(0n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(from_0),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    if (this.#_isKeyOrAddressZero_0(context, partialProofData, to_0)) {
      let t_1;
      const tmp_2 = (t_1 = _descriptor_8.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_13.toValue(2n),
                                                                                               alignment: _descriptor_13.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value),
                     (__compactRuntime.assert(!(t_1 < value_0),
                                              'result of subtraction would be negative'),
                      t_1 - value_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(2n),
                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_2),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      const toBal_0 = this.#_balanceOf_0(context, partialProofData, to_0);
      const tmp_3 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('FungibleToken.compact line 456 char 47: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(toBal_0 + value_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(0n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(to_0),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_3),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #__mint_0(context, partialProofData, account_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isContractAddress_0(context,
                                                        partialProofData,
                                                        account_0),
                            'FungibleToken: Unsafe Transfer');
    this.#__unsafeMint_0(context, partialProofData, account_0, value_0);
    return [];
  }
  #__unsafeMint_0(context, partialProofData, account_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         account_0),
                            'FungibleToken: invalid receiver');
    this.#__update_0(context,
                     partialProofData,
                     this.#_burnAddress_0(context, partialProofData),
                     account_0,
                     value_0);
    return [];
  }
  #__approve_0(context, partialProofData, owner_0, spender_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         owner_0),
                            'FungibleToken: invalid owner');
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         spender_0),
                            'FungibleToken: invalid spender');
    if (!_descriptor_4.fromValue(Contract._query(context,
                                                 partialProofData,
                                                 [
                                                  { dup: { n: 0 } },
                                                  { idx: { cached: false,
                                                           pushPath: false,
                                                           path: [
                                                                  { tag: 'value',
                                                                    value: { value: _descriptor_13.toValue(1n),
                                                                             alignment: _descriptor_13.alignment() } }] } },
                                                  { push: { storage: false,
                                                            value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(owner_0),
                                                                                                         alignment: _descriptor_7.alignment() }).encode() } },
                                                  'member',
                                                  { popeq: { cached: true,
                                                             result: undefined } }]).value))
    {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(1n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(owner_0),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newMap(
                                          new __compactRuntime.StateMap()
                                        ).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_13.toValue(1n),
                                                alignment: _descriptor_13.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(owner_0),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(spender_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(value_0),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    return [];
  }
  #__spendAllowance_0(context, partialProofData, owner_0, spender_0, value_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(_descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(1n),
                                                                                                alignment: _descriptor_13.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(owner_0),
                                                                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value)
                            &&
                            _descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(1n),
                                                                                                alignment: _descriptor_13.alignment() } },
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(owner_0),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(spender_0),
                                                                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'FungibleToken: insufficient allowance');
    const currentAllowance_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_13.toValue(1n),
                                                                                                   alignment: _descriptor_13.alignment() } },
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(owner_0),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(spender_0),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    const MAX_UINT128_0 = 340282366920938463463374607431768211455n;
    if (currentAllowance_0 < MAX_UINT128_0) {
      __compactRuntime.assert(currentAllowance_0 >= value_0,
                              'FungibleToken: insufficient allowance');
      this.#__approve_0(context,
                        partialProofData,
                        owner_0,
                        spender_0,
                        (__compactRuntime.assert(!(currentAllowance_0 < value_0),
                                                 'result of subtraction would be negative'),
                         currentAllowance_0 - value_0));
    }
    return [];
  }
  #_initialize_1(context, partialProofData) {
    this.#_assertNotInitialized_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(6n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(true),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_assertInitialized_0(context, partialProofData) {
    __compactRuntime.assert(_descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(6n),
                                                                                                alignment: _descriptor_13.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Initializable: contract not initialized');
    return [];
  }
  #_assertNotInitialized_0(context, partialProofData) {
    __compactRuntime.assert(!_descriptor_4.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_13.toValue(6n),
                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value),
                            'Initializable: contract already initialized');
    return [];
  }
  #_isKeyOrAddressZero_0(context, partialProofData, keyOrAddress_0) {
    if (this.#_isContractAddress_0(context, partialProofData, keyOrAddress_0)) {
      return this.#_equal_0({ bytes: new Uint8Array(32) }, keyOrAddress_0.right);
    } else {
      return this.#_equal_1({ bytes: new Uint8Array(32) }, keyOrAddress_0.left);
    }
  }
  #_isContractAddress_0(context, partialProofData, keyOrAddress_0) {
    return !keyOrAddress_0.is_left;
  }
  #_amountsToSwap_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.amountsToSwap(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 2  && typeof(result_0[0]) === 'bigint' && result_0[0] >= 0 && result_0[0] <= 340282366920938463463374607431768211455n && typeof(result_0[1]) === 'bigint' && result_0[1] >= 0 && result_0[1] <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('amountsToSwap',
                                  'return value',
                                  'contract.compact line 14 char 1',
                                  '[Uint<0..340282366920938463463374607431768211455>, Uint<0..340282366920938463463374607431768211455>]',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_10.toValue(result_0),
      alignment: _descriptor_10.alignment()
    });
    return result_0;
  }
  #_safeAdd_0(context, partialProofData, a_0, b_0) {
    return ((t1) => {
             if (t1 > 340282366920938463463374607431768211455n)
               throw new __compactRuntime.CompactError('contract.compact line 17 char 10: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
             return t1;
           })(a_0 + b_0);
  }
  #_padTokenAmount_0(context, partialProofData, amount_0) {
    return ((t1) => {
             if (t1 > 340282366920938463463374607431768211455n)
               throw new __compactRuntime.CompactError('contract.compact line 22 char 12: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
             return t1;
           })(amount_0 * 100000000000000000000n);
  }
  #_claim_0(context, partialProofData, token_0) {
    const $token_0 = token_0;
    const user_0 = this.#_ownPublicKey_0(context, partialProofData);
    __compactRuntime.assert(!_descriptor_4.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_13.toValue(8n),
                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(user_0),
                                                                                                                             alignment: _descriptor_6.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value),
                            'User has already claimed tokens');
    if ($token_0 === 0) {
      const userBalance_0 = this.#_balanceOf_0(context,
                                               partialProofData,
                                               this.#_left_0(context,
                                                             partialProofData,
                                                             user_0));
      const success_0 = this.#_transferFrom_0(context,
                                              partialProofData,
                                              this.#_right_0(context,
                                                             partialProofData,
                                                             _descriptor_1.fromValue(Contract._query(context,
                                                                                                     partialProofData,
                                                                                                     [
                                                                                                      { dup: { n: 2 } },
                                                                                                      { idx: { cached: true,
                                                                                                               pushPath: false,
                                                                                                               path: [
                                                                                                                      { tag: 'value',
                                                                                                                        value: { value: _descriptor_13.toValue(0n),
                                                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                                                      { popeq: { cached: true,
                                                                                                                 result: undefined } }]).value)),
                                              this.#_left_0(context,
                                                            partialProofData,
                                                            user_0),
                                              _descriptor_8.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_13.toValue(10n),
                                                                                                                  alignment: _descriptor_13.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value));
      __compactRuntime.assert(success_0, 'Failed to transfer Foo tokens');
    } else {
      const userBalance_1 = this.#_balanceOf_0(context,
                                               partialProofData,
                                               this.#_left_0(context,
                                                             partialProofData,
                                                             user_0));
      const success_1 = this.#_transferFrom_0(context,
                                              partialProofData,
                                              this.#_right_0(context,
                                                             partialProofData,
                                                             _descriptor_1.fromValue(Contract._query(context,
                                                                                                     partialProofData,
                                                                                                     [
                                                                                                      { dup: { n: 2 } },
                                                                                                      { idx: { cached: true,
                                                                                                               pushPath: false,
                                                                                                               path: [
                                                                                                                      { tag: 'value',
                                                                                                                        value: { value: _descriptor_13.toValue(0n),
                                                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                                                      { popeq: { cached: true,
                                                                                                                 result: undefined } }]).value)),
                                              this.#_left_0(context,
                                                            partialProofData,
                                                            user_0),
                                              _descriptor_8.fromValue(Contract._query(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_13.toValue(10n),
                                                                                                                  alignment: _descriptor_13.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value));
      __compactRuntime.assert(success_1, 'Failed to transfer Bar tokens');
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_13.toValue(8n),
                                                alignment: _descriptor_13.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(user_0),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_addLiquidity_0(context, partialProofData, token_0, amount_0) {
    const contractAddress_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 2 } },
                                                                       { idx: { cached: true,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_13.toValue(0n),
                                                                                                  alignment: _descriptor_13.alignment() } }] } },
                                                                       { popeq: { cached: true,
                                                                                  result: undefined } }]).value);
    const $token_0 = token_0;
    const $amount_0 = amount_0;
    const user_0 = this.#_ownPublicKey_0(context, partialProofData);
    if ($token_0 === 0) {
      const userBalance_0 = this.#_balanceOf_0(context,
                                               partialProofData,
                                               this.#_left_0(context,
                                                             partialProofData,
                                                             user_0));
      __compactRuntime.assert(userBalance_0 >= amount_0, 'Not enough Foo tokens');
      const success_0 = this.#_transfer_0(context,
                                          partialProofData,
                                          this.#_right_0(context,
                                                         partialProofData,
                                                         contractAddress_0),
                                          amount_0);
      __compactRuntime.assert(success_0, 'Failed to transfer Foo tokens');
      const liquidityKey_0 = [user_0, 0];
      if (_descriptor_4.fromValue(Contract._query(context,
                                                  partialProofData,
                                                  [
                                                   { dup: { n: 0 } },
                                                   { idx: { cached: false,
                                                            pushPath: false,
                                                            path: [
                                                                   { tag: 'value',
                                                                     value: { value: _descriptor_13.toValue(9n),
                                                                              alignment: _descriptor_13.alignment() } }] } },
                                                   { push: { storage: false,
                                                             value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                                                          alignment: _descriptor_9.alignment() }).encode() } },
                                                   'member',
                                                   { popeq: { cached: true,
                                                              result: undefined } }]).value))
      {
        const currentLiquidity_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                           partialProofData,
                                                                           [
                                                                            { dup: { n: 0 } },
                                                                            { idx: { cached: false,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_13.toValue(9n),
                                                                                                       alignment: _descriptor_13.alignment() } }] } },
                                                                            { idx: { cached: false,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_9.toValue(liquidityKey_0),
                                                                                                       alignment: _descriptor_9.alignment() } }] } },
                                                                            { popeq: { cached: false,
                                                                                       result: undefined } }]).value);
        const tmp_0 = this.#_safeAdd_0(context,
                                       partialProofData,
                                       currentLiquidity_0,
                                       $amount_0);
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(9n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      } else {
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(9n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue($amount_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      }
    } else {
      const userBalance_1 = this.#_balanceOf_0(context,
                                               partialProofData,
                                               this.#_left_0(context,
                                                             partialProofData,
                                                             user_0));
      __compactRuntime.assert(userBalance_1 >= amount_0, 'Not enough Bar tokens');
      const success_1 = this.#_transfer_0(context,
                                          partialProofData,
                                          this.#_right_0(context,
                                                         partialProofData,
                                                         contractAddress_0),
                                          amount_0);
      __compactRuntime.assert(success_1, 'Failed to transfer Bar tokens');
      const liquidityKey_1 = [user_0, 1];
      if (_descriptor_4.fromValue(Contract._query(context,
                                                  partialProofData,
                                                  [
                                                   { dup: { n: 0 } },
                                                   { idx: { cached: false,
                                                            pushPath: false,
                                                            path: [
                                                                   { tag: 'value',
                                                                     value: { value: _descriptor_13.toValue(9n),
                                                                              alignment: _descriptor_13.alignment() } }] } },
                                                   { push: { storage: false,
                                                             value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_1),
                                                                                                          alignment: _descriptor_9.alignment() }).encode() } },
                                                   'member',
                                                   { popeq: { cached: true,
                                                              result: undefined } }]).value))
      {
        const currentLiquidity_1 = _descriptor_8.fromValue(Contract._query(context,
                                                                           partialProofData,
                                                                           [
                                                                            { dup: { n: 0 } },
                                                                            { idx: { cached: false,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_13.toValue(9n),
                                                                                                       alignment: _descriptor_13.alignment() } }] } },
                                                                            { idx: { cached: false,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_9.toValue(liquidityKey_1),
                                                                                                       alignment: _descriptor_9.alignment() } }] } },
                                                                            { popeq: { cached: false,
                                                                                       result: undefined } }]).value);
        const tmp_1 = this.#_safeAdd_0(context,
                                       partialProofData,
                                       currentLiquidity_1,
                                       $amount_0);
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(9n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_1),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      } else {
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(9n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_1),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue($amount_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      }
    }
    return [];
  }
  #_removeLiquidity_0(context, partialProofData, token_0, amount_0) {
    const $token_0 = token_0;
    const $amount_0 = amount_0;
    const user_0 = this.#_ownPublicKey_0(context, partialProofData);
    const liquidityKey_0 = [user_0, $token_0];
    __compactRuntime.assert(_descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(9n),
                                                                                                alignment: _descriptor_13.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'User has no liquidity');
    const currentLiquidity_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_9.toValue(liquidityKey_0),
                                                                                                   alignment: _descriptor_9.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(currentLiquidity_0 >= $amount_0,
                            'Insufficient liquidity');
    if (this.#_equal_2(currentLiquidity_0, $amount_0)) {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(9n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                              alignment: _descriptor_9.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      const tmp_0 = (__compactRuntime.assert(!(currentLiquidity_0 < $amount_0),
                                             'result of subtraction would be negative'),
                     currentLiquidity_0 - $amount_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(9n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(liquidityKey_0),
                                                                              alignment: _descriptor_9.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    if ($token_0 === 0) {
      this.#_transfer_0(context,
                        partialProofData,
                        this.#_left_0(context, partialProofData, user_0),
                        $amount_0);
    } else {
      this.#_transfer_0(context,
                        partialProofData,
                        this.#_left_0(context, partialProofData, user_0),
                        $amount_0);
    }
    return [];
  }
  #_transferFoo_0(context, partialProofData, to_0, value_0) {
    return this.#_transfer_0(context, partialProofData, to_0, value_0);
  }
  #_transferBar_0(context, partialProofData, to_0, value_0) {
    return this.#_transfer_0(context, partialProofData, to_0, value_0);
  }
  #_verifySwap_0(context,
                 partialProofData,
                 tokenTo_0,
                 amountToBuy_0,
                 amountToSell_0)
  {
    const contractAddress_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 2 } },
                                                                       { idx: { cached: true,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_13.toValue(0n),
                                                                                                  alignment: _descriptor_13.alignment() } }] } },
                                                                       { popeq: { cached: true,
                                                                                  result: undefined } }]).value);
    const fooPool_0 = this.#_balanceOf_0(context,
                                         partialProofData,
                                         this.#_right_0(context,
                                                        partialProofData,
                                                        contractAddress_0));
    const barPool_0 = this.#_balanceOf_0(context,
                                         partialProofData,
                                         this.#_right_0(context,
                                                        partialProofData,
                                                        contractAddress_0));
    if (tokenTo_0 === 1) {
      return __compactRuntime.mulField(amountToSell_0,
                                       __compactRuntime.subField(barPool_0,
                                                                 amountToBuy_0))
             ===
             __compactRuntime.mulField(fooPool_0, amountToBuy_0);
    } else {
      if (tokenTo_0 === 0) {
        return __compactRuntime.mulField(amountToSell_0,
                                         __compactRuntime.subField(fooPool_0,
                                                                   amountToBuy_0))
               ===
               __compactRuntime.mulField(barPool_0, amountToBuy_0);
      } else {
        return false;
      }
    }
  }
  #_swap_0(context, partialProofData, from_0) {
    const __compact_pattern_tmp1_0 = this.#_amountsToSwap_0(context,
                                                            partialProofData);
    const amountToBuy_0 = __compact_pattern_tmp1_0[0];
    const amountToSell_0 = __compact_pattern_tmp1_0[1];
    const $from_0 = from_0;
    __compactRuntime.assert(amountToBuy_0 > 0n && amountToSell_0 > 0n,
                            'invalid amounts to swap');
    __compactRuntime.assert(this.#_verifySwap_0(context,
                                                partialProofData,
                                                from_0,
                                                amountToBuy_0,
                                                amountToSell_0),
                            'invalid swap amounts');
    const contractAddress_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 2 } },
                                                                       { idx: { cached: true,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_13.toValue(0n),
                                                                                                  alignment: _descriptor_13.alignment() } }] } },
                                                                       { popeq: { cached: true,
                                                                                  result: undefined } }]).value);
    const fooPool_0 = this.#_balanceOf_0(context,
                                         partialProofData,
                                         this.#_right_0(context,
                                                        partialProofData,
                                                        contractAddress_0));
    const barPool_0 = this.#_balanceOf_0(context,
                                         partialProofData,
                                         this.#_right_0(context,
                                                        partialProofData,
                                                        contractAddress_0));
    if ($from_0 === 0) {
      this.#_transferFrom_0(context,
                            partialProofData,
                            this.#_right_0(context,
                                           partialProofData,
                                           contractAddress_0),
                            this.#_left_0(context,
                                          partialProofData,
                                          this.#_ownPublicKey_0(context,
                                                                partialProofData)),
                            amountToSell_0);
      this.#_transfer_0(context,
                        partialProofData,
                        this.#_right_0(context,
                                       partialProofData,
                                       contractAddress_0),
                        amountToBuy_0);
    } else {
      this.#_transferFrom_0(context,
                            partialProofData,
                            this.#_right_0(context,
                                           partialProofData,
                                           contractAddress_0),
                            this.#_left_0(context,
                                          partialProofData,
                                          this.#_ownPublicKey_0(context,
                                                                partialProofData)),
                            amountToSell_0);
      this.#_transfer_0(context,
                        partialProofData,
                        this.#_right_0(context,
                                       partialProofData,
                                       contractAddress_0),
                        amountToBuy_0);
    }
    const newFooPool_0 = this.#_balanceOf_0(context,
                                            partialProofData,
                                            this.#_right_0(context,
                                                           partialProofData,
                                                           contractAddress_0));
    const newBarPool_0 = this.#_balanceOf_0(context,
                                            partialProofData,
                                            this.#_right_0(context,
                                                           partialProofData,
                                                           contractAddress_0));
    return [newFooPool_0, newBarPool_0];
  }
  #_equal_0(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_equal_1(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_equal_2(x0, y0) {
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
    get admin() {
      return _descriptor_6.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(7n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    alreadyMinted: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(8n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(0n),
                                                                                                               alignment: _descriptor_11.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_11.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_13.toValue(8n),
                                                                                    alignment: _descriptor_13.alignment() } }] } },
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
                                      'contract.compact line 10 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      elem_0)
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(8n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(elem_0),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[8];
        return self_0.asMap().keys().map((elem) => _descriptor_6.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    liquidityProviders: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(0n),
                                                                                                               alignment: _descriptor_11.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_11.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_13.toValue(9n),
                                                                                    alignment: _descriptor_13.alignment() } }] } },
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
                                      'contract.compact line 11 char 1',
                                      '[struct ZswapCoinPublicKey<bytes: Bytes<32>>, Enum<Token, foo, bar>]',
                                      key_0)
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(key_0),
                                                                                                               alignment: _descriptor_9.alignment() }).encode() } },
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
                                      'contract.compact line 11 char 1',
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
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_9.toValue(key_0),
                                                                                   alignment: _descriptor_9.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[9];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_9.fromValue(key.value),      _descriptor_8.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
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
