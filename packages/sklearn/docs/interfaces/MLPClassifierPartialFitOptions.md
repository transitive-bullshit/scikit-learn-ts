[sklearn](../readme.md) / [Exports](../modules.md) / MLPClassifierPartialFitOptions

# Interface: MLPClassifierPartialFitOptions

## Table of contents

### Properties

- [X](MLPClassifierPartialFitOptions.md#x)
- [classes](MLPClassifierPartialFitOptions.md#classes)
- [y](MLPClassifierPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input data.

#### Defined in

[generated/neural_network/MLPClassifier.ts:854](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L854)

___

### classes

• `Optional` **classes**: `any`[]

Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

#### Defined in

[generated/neural_network/MLPClassifier.ts:864](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L864)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values.

#### Defined in

[generated/neural_network/MLPClassifier.ts:859](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L859)
