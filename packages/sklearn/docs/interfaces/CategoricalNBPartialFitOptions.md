[sklearn](../readme.md) / [Exports](../modules.md) / CategoricalNBPartialFitOptions

# Interface: CategoricalNBPartialFitOptions

## Table of contents

### Properties

- [X](CategoricalNBPartialFitOptions.md#x)
- [classes](CategoricalNBPartialFitOptions.md#classes)
- [sample\_weight](CategoricalNBPartialFitOptions.md#sample_weight)
- [y](CategoricalNBPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L591)

___

### classes

• `Optional` **classes**: [`ArrayLike`](../modules.md#arraylike)

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L603)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weights applied to individual samples (1. for unweighted).

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L608)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L596)
