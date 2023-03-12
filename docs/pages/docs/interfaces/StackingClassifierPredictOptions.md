# StackingClassifierPredictOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Defined in:  [generated/ensemble/StackingClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L679)

### predict\_params?

> `any`

Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.

Defined in:  [generated/ensemble/StackingClassifier.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L684)
