[sklearn](../readme.md) / [Exports](../modules.md) / LassoCVFitOptions

# Interface: LassoCVFitOptions

## Table of contents

### Properties

- [X](LassoCVFitOptions.md#x)
- [sample\_weight](LassoCVFitOptions.md#sample_weight)
- [y](LassoCVFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.

#### Defined in

[generated/linear_model/LassoCV.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L562)

___

### sample\_weight

• `Optional` **sample\_weight**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.

#### Defined in

[generated/linear_model/LassoCV.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L572)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/linear_model/LassoCV.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L567)
