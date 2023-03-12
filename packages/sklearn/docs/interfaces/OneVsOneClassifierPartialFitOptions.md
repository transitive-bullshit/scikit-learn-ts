[sklearn](../readme.md) / [Exports](../modules.md) / OneVsOneClassifierPartialFitOptions

# Interface: OneVsOneClassifierPartialFitOptions

## Table of contents

### Properties

- [X](OneVsOneClassifierPartialFitOptions.md#x)
- [classes](OneVsOneClassifierPartialFitOptions.md#classes)
- [y](OneVsOneClassifierPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`[]

Data.

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L449)

___

### classes

• `Optional` **classes**: `any`

Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls.

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L459)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Multi-class targets.

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L454)
