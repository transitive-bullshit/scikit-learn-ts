# PassiveAggressiveClassifierPartialFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Subset of the training data.

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L733)

### classes?

> [`ArrayLike`](../types/ArrayLike.md)

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:743](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L743)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Subset of the target values.

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L738)
