[sklearn](../readme.md) / [Exports](../modules.md) / RFEOptions

# Interface: RFEOptions

## Table of contents

### Properties

- [estimator](RFEOptions.md#estimator)
- [importance\_getter](RFEOptions.md#importance_getter)
- [n\_features\_to\_select](RFEOptions.md#n_features_to_select)
- [step](RFEOptions.md#step)
- [verbose](RFEOptions.md#verbose)

## Properties

### estimator

• `Optional` **estimator**: `any`

A supervised learning estimator with a `fit` method that provides information about feature importance (e.g. `coef\_`, `feature\_importances\_`).

#### Defined in

[generated/feature_selection/RFE.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L593)

___

### importance\_getter

• `Optional` **importance\_getter**: `string`

If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of class:`~sklearn.pipeline.Pipeline` with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

**`Default Value`**

`'auto'`

#### Defined in

[generated/feature_selection/RFE.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L623)

___

### n\_features\_to\_select

• `Optional` **n\_features\_to\_select**: `number`

The number of features to select. If `undefined`, half of the features are selected. If integer, the parameter is the absolute number of features to select. If float between 0 and 1, it is the fraction of features to select.

#### Defined in

[generated/feature_selection/RFE.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L598)

___

### step

• `Optional` **step**: `number`

If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration.

**`Default Value`**

`1`

#### Defined in

[generated/feature_selection/RFE.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L605)

___

### verbose

• `Optional` **verbose**: `number`

Controls verbosity of output.

**`Default Value`**

`0`

#### Defined in

[generated/feature_selection/RFE.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L612)
