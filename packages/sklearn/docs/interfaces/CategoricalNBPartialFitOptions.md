# CategoricalNBPartialFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder.

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L591)

### classes?

> [`ArrayLike`](../types/ArrayLike.md)

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L603)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Weights applied to individual samples (1. for unweighted).

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L608)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L596)
