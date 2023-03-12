[sklearn](../readme.md) / [Exports](../modules.md) / StackingClassifierPredictOptions

# Interface: StackingClassifierPredictOptions

## Table of contents

### Properties

- [X](StackingClassifierPredictOptions.md#x)
- [predict\_params](StackingClassifierPredictOptions.md#predict_params)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/ensemble/StackingClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L679)

___

### predict\_params

• `Optional` **predict\_params**: `any`

Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.

#### Defined in

[generated/ensemble/StackingClassifier.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L684)
