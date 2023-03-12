[sklearn](../readme.md) / [Exports](../modules.md) / RegressorChainOptions

# Interface: RegressorChainOptions

## Table of contents

### Properties

- [base\_estimator](RegressorChainOptions.md#base_estimator)
- [cv](RegressorChainOptions.md#cv)
- [order](RegressorChainOptions.md#order)
- [random\_state](RegressorChainOptions.md#random_state)
- [verbose](RegressorChainOptions.md#verbose)

## Properties

### base\_estimator

• `Optional` **base\_estimator**: `any`

The base estimator from which the regressor chain is built.

#### Defined in

[generated/multioutput/RegressorChain.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L298)

___

### cv

• `Optional` **cv**: `number`

Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are:

#### Defined in

[generated/multioutput/RegressorChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L308)

___

### order

• `Optional` **order**: [`ArrayLike`](../modules.md#arraylike) \| ``"random"``

If `undefined`, the order will be determined by the order of columns in the label matrix Y.:

#### Defined in

[generated/multioutput/RegressorChain.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L303)

___

### random\_state

• `Optional` **random\_state**: `number`

If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/multioutput/RegressorChain.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L313)

___

### verbose

• `Optional` **verbose**: `boolean`

If `true`, chain progress is output as each model is completed.

**`Default Value`**

`false`

#### Defined in

[generated/multioutput/RegressorChain.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L320)
