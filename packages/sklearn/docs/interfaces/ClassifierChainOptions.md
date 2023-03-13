# ClassifierChainOptions

## Properties

### base\_estimator?

> `any`

The base estimator from which the classifier chain is built.

Defined in:  [generated/multioutput/ClassifierChain.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L385)

### cv?

> `number`

Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are:

Defined in:  [generated/multioutput/ClassifierChain.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L395)

### order?

> [`ArrayLike`](../types/ArrayLike.md) \| `"random"`

If `undefined`, the order will be determined by the order of columns in the label matrix Y.:

Defined in:  [generated/multioutput/ClassifierChain.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L390)

### random\_state?

> `number`

If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/multioutput/ClassifierChain.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L400)

### verbose?

> `boolean`

If `true`, chain progress is output as each model is completed.

#### Default Value

`false`

Defined in:  [generated/multioutput/ClassifierChain.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L407)
