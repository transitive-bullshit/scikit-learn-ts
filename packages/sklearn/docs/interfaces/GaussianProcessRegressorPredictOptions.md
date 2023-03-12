[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessRegressorPredictOptions

# Interface: GaussianProcessRegressorPredictOptions

## Table of contents

### Properties

- [X](GaussianProcessRegressorPredictOptions.md#x)
- [return\_cov](GaussianProcessRegressorPredictOptions.md#return_cov)
- [return\_std](GaussianProcessRegressorPredictOptions.md#return_std)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Query points where the GP is evaluated.

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L591)

___

### return\_cov

• `Optional` **return\_cov**: `boolean`

If `true`, the covariance of the joint predictive distribution at the query points is returned along with the mean.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L605)

___

### return\_std

• `Optional` **return\_std**: `boolean`

If `true`, the standard-deviation of the predictive distribution at the query points is returned along with the mean.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L598)
