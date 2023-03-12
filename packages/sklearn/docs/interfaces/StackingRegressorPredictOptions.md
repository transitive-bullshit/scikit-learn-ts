[sklearn](../readme.md) / [Exports](../modules.md) / StackingRegressorPredictOptions

# Interface: StackingRegressorPredictOptions

## Table of contents

### Properties

- [X](StackingRegressorPredictOptions.md#x)
- [predict\_params](StackingRegressorPredictOptions.md#predict_params)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/ensemble/StackingRegressor.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L559)

___

### predict\_params

• `Optional` **predict\_params**: `any`

Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.

#### Defined in

[generated/ensemble/StackingRegressor.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L564)
