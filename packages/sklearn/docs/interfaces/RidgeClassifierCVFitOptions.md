[sklearn](../readme.md) / [Exports](../modules.md) / RidgeClassifierCVFitOptions

# Interface: RidgeClassifierCVFitOptions

## Table of contents

### Properties

- [X](RidgeClassifierCVFitOptions.md#x)
- [sample\_weight](RidgeClassifierCVFitOptions.md#sample_weight)
- [y](RidgeClassifierCVFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. When using GCV, will be cast to float64 if necessary.

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L485)

___

### sample\_weight

• `Optional` **sample\_weight**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Individual weights for each sample. If given a float, every sample will have the same weight.

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L495)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values. Will be cast to X’s dtype if necessary.

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L490)
