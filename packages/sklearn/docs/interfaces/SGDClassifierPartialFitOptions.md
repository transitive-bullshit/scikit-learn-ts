# SGDClassifierPartialFitOptions

## Properties

### X?

> `any`

Subset of the training data.

Defined in:  [generated/linear\_model/SGDClassifier.ts:809](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L809)

### classes?

> [`ArrayLike`](../types/ArrayLike.md)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

Defined in:  [generated/linear\_model/SGDClassifier.ts:819](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L819)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Weights applied to individual samples. If not provided, uniform weights are assumed.

Defined in:  [generated/linear\_model/SGDClassifier.ts:824](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L824)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Subset of the target values.

Defined in:  [generated/linear\_model/SGDClassifier.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L814)
