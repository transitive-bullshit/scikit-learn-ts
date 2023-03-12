[sklearn](../readme.md) / [Exports](../modules.md) / GaussianNBPartialFitOptions

# Interface: GaussianNBPartialFitOptions

## Table of contents

### Properties

- [X](GaussianNBPartialFitOptions.md#x)
- [classes](GaussianNBPartialFitOptions.md#classes)
- [sample\_weight](GaussianNBPartialFitOptions.md#sample_weight)
- [y](GaussianNBPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/naive_bayes/GaussianNB.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L555)

___

### classes

• `Optional` **classes**: [`ArrayLike`](../modules.md#arraylike)

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

#### Defined in

[generated/naive_bayes/GaussianNB.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L567)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weights applied to individual samples (1. for unweighted).

#### Defined in

[generated/naive_bayes/GaussianNB.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L572)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/naive_bayes/GaussianNB.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L560)
