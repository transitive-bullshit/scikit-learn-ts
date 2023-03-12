[sklearn](../readme.md) / [Exports](../modules.md) / RidgeCVFitOptions

# Interface: RidgeCVFitOptions

## Table of contents

### Properties

- [X](RidgeCVFitOptions.md#x)
- [sample\_weight](RidgeCVFitOptions.md#sample_weight)
- [y](RidgeCVFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data. If using GCV, will be cast to float64 if necessary.

#### Defined in

[generated/linear_model/RidgeCV.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L409)

___

### sample\_weight

• `Optional` **sample\_weight**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Individual weights for each sample. If given a float, every sample will have the same weight.

#### Defined in

[generated/linear_model/RidgeCV.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L419)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values. Will be cast to X’s dtype if necessary.

#### Defined in

[generated/linear_model/RidgeCV.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L414)
