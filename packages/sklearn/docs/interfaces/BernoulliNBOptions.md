# BernoulliNBOptions

## Properties

### alpha?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

#### Default Value

`1`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L514)

### binarize?

> `number`

Threshold for binarizing (mapping to booleans) of sample features. If `undefined`, input is presumed to already consist of binary vectors.

#### Default Value

`0`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L528)

### class\_prior?

> [`ArrayLike`](../types/ArrayLike.md)

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L540)

### fit\_prior?

> `boolean`

Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

#### Default Value

`true`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L535)

### force\_alpha?

> `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

#### Default Value

`false`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L521)
