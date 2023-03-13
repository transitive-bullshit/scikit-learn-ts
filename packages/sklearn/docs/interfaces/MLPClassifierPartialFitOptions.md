# MLPClassifierPartialFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The input data.

Defined in:  [generated/neural\_network/MLPClassifier.ts:854](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L854)

### classes?

> `any`[]

Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

Defined in:  [generated/neural\_network/MLPClassifier.ts:864](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L864)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target values.

Defined in:  [generated/neural\_network/MLPClassifier.ts:859](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L859)
