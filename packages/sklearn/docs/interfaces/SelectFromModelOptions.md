# SelectFromModelOptions

## Properties

### estimator?

> `any`

The base estimator from which the transformer is built. This can be both a fitted (if `prefit` is set to `true`) or a non-fitted estimator. The estimator should have a `feature\_importances\_` or `coef\_` attribute after fitting. Otherwise, the `importance\_getter` parameter should be used.

Defined in:  [generated/feature\_selection/SelectFromModel.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L428)

### importance\_getter?

> `string`

If ‘auto’, uses the feature importance either through a `coef\_` attribute or `feature\_importances\_` attribute of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

#### Default Value

`'auto'`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L463)

### max\_features?

> `number`

The maximum number of features to select.

Defined in:  [generated/feature\_selection/SelectFromModel.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L452)

### norm\_order?

> `any`

Order of the norm used to filter the vectors of coefficients below `threshold` in the case where the `coef\_` attribute of the estimator is of dimension 2.

#### Default Value

`1`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L447)

### prefit?

> `boolean`

Whether a prefit model is expected to be passed into the constructor directly or not. If `true`, `estimator` must be a fitted estimator. If `false`, `estimator` is fitted and updated by calling `fit` and `partial\_fit`, respectively.

#### Default Value

`false`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L440)

### threshold?

> `string` \| `number`

The threshold value to use for feature selection. Features whose absolute importance value is greater or equal are kept while the others are discarded. If “median” (resp. “mean”), then the `threshold` value is the median (resp. the mean) of the feature importances. A scaling factor (e.g., “1.25\*mean”) may also be used. If `undefined` and if the estimator has a parameter penalty set to l1, either explicitly or implicitly (e.g, Lasso), the threshold used is 1e-5. Otherwise, “mean” is used by default.

Defined in:  [generated/feature\_selection/SelectFromModel.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L433)
