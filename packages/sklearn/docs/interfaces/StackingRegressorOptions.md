# StackingRegressorOptions

## Properties

### cv?

> `number` \| `"prefit"`

Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are:

Defined in:  [generated/ensemble/StackingRegressor.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L492)

### estimators?

> `any`

Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.

Defined in:  [generated/ensemble/StackingRegressor.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L482)

### final\_estimator?

> `any`

A regressor which will be used to combine the base estimators. The default regressor is a [`RidgeCV`](sklearn.linear_model.RidgeCV.html#sklearn.linear_model.RidgeCV "sklearn.linear_model.RidgeCV").

Defined in:  [generated/ensemble/StackingRegressor.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L487)

### n\_jobs?

> `number`

The number of jobs to run in parallel for `fit` of all `estimators`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details.

Defined in:  [generated/ensemble/StackingRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L497)

### passthrough?

> `boolean`

When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.

#### Default Value

`false`

Defined in:  [generated/ensemble/StackingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L504)

### verbose?

> `number`

Verbosity level.

#### Default Value

`0`

Defined in:  [generated/ensemble/StackingRegressor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L511)
