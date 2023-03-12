[sklearn](../readme.md) / [Exports](../modules.md) / PerceptronPartialFitOptions

# Interface: PerceptronPartialFitOptions

## Table of contents

### Properties

- [X](PerceptronPartialFitOptions.md#x)
- [classes](PerceptronPartialFitOptions.md#classes)
- [sample\_weight](PerceptronPartialFitOptions.md#sample_weight)
- [y](PerceptronPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Subset of the training data.

#### Defined in

[generated/linear_model/Perceptron.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L679)

___

### classes

• `Optional` **classes**: [`ArrayLike`](../modules.md#arraylike)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

#### Defined in

[generated/linear_model/Perceptron.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L689)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weights applied to individual samples. If not provided, uniform weights are assumed.

#### Defined in

[generated/linear_model/Perceptron.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L694)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Subset of the target values.

#### Defined in

[generated/linear_model/Perceptron.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L684)