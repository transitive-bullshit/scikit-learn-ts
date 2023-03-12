[sklearn](../readme.md) / [Exports](../modules.md) / ShrunkCovarianceScoreOptions

# Interface: ShrunkCovarianceScoreOptions

## Table of contents

### Properties

- [X\_test](ShrunkCovarianceScoreOptions.md#x_test)
- [y](ShrunkCovarianceScoreOptions.md#y)

## Properties

### X\_test

• `Optional` **X\_test**: [`ArrayLike`](../modules.md#arraylike)[]

Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).

#### Defined in

[generated/covariance/ShrunkCovariance.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L479)

___

### y

• `Optional` **y**: `any`

Not used, present for API consistency by convention.

#### Defined in

[generated/covariance/ShrunkCovariance.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L484)
