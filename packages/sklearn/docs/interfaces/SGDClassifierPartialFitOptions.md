[sklearn](../readme.md) / [Exports](../modules.md) / SGDClassifierPartialFitOptions

# Interface: SGDClassifierPartialFitOptions

## Table of contents

### Properties

- [X](SGDClassifierPartialFitOptions.md#x)
- [classes](SGDClassifierPartialFitOptions.md#classes)
- [sample\_weight](SGDClassifierPartialFitOptions.md#sample_weight)
- [y](SGDClassifierPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Subset of the training data.

#### Defined in

[generated/linear_model/SGDClassifier.ts:809](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L809)

___

### classes

• `Optional` **classes**: [`ArrayLike`](../modules.md#arraylike)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

#### Defined in

[generated/linear_model/SGDClassifier.ts:819](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L819)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weights applied to individual samples. If not provided, uniform weights are assumed.

#### Defined in

[generated/linear_model/SGDClassifier.ts:824](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L824)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Subset of the target values.

#### Defined in

[generated/linear_model/SGDClassifier.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L814)
