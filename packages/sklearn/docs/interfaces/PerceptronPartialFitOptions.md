# PerceptronPartialFitOptions

## Properties

### X?

> `any`

Subset of the training data.

Defined in:  [generated/linear\_model/Perceptron.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/Perceptron.ts#L679)

### classes?

> [`ArrayLike`](../types/ArrayLike.md)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

Defined in:  [generated/linear\_model/Perceptron.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/Perceptron.ts#L689)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Weights applied to individual samples. If not provided, uniform weights are assumed.

Defined in:  [generated/linear\_model/Perceptron.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/Perceptron.ts#L694)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Subset of the target values.

Defined in:  [generated/linear\_model/Perceptron.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/Perceptron.ts#L684)
