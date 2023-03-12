[sklearn](../readme.md) / [Exports](../modules.md) / PassiveAggressiveClassifierPartialFitOptions

# Interface: PassiveAggressiveClassifierPartialFitOptions

## Table of contents

### Properties

- [X](PassiveAggressiveClassifierPartialFitOptions.md#x)
- [classes](PassiveAggressiveClassifierPartialFitOptions.md#classes)
- [y](PassiveAggressiveClassifierPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Subset of the training data.

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L733)

___

### classes

• `Optional` **classes**: [`ArrayLike`](../modules.md#arraylike)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:743](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L743)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Subset of the target values.

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L738)
