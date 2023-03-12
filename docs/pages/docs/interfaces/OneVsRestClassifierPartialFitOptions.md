# OneVsRestClassifierPartialFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Data.

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L500)

### classes?

> `any`

Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls.

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L510)

### y?

> `any`

Multi-class targets. An indicator matrix turns on multilabel classification.

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L505)
