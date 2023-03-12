[sklearn](../readme.md) / [Exports](../modules.md) / ElasticNetCVFitOptions

# Interface: ElasticNetCVFitOptions

## Table of contents

### Properties

- [X](ElasticNetCVFitOptions.md#x)
- [sample\_weight](ElasticNetCVFitOptions.md#sample_weight)
- [y](ElasticNetCVFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.

#### Defined in

[generated/linear_model/ElasticNetCV.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L605)

___

### sample\_weight

• `Optional` **sample\_weight**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.

#### Defined in

[generated/linear_model/ElasticNetCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L615)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/linear_model/ElasticNetCV.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L610)
