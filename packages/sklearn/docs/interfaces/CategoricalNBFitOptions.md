[sklearn](../readme.md) / [Exports](../modules.md) / CategoricalNBFitOptions

# Interface: CategoricalNBFitOptions

## Table of contents

### Properties

- [X](CategoricalNBFitOptions.md#x)
- [sample\_weight](CategoricalNBFitOptions.md#sample_weight)
- [y](CategoricalNBFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L574)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weights applied to individual samples (1. for unweighted).

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L584)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L579)
