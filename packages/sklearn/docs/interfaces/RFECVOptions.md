[sklearn](../readme.md) / [Exports](../modules.md) / RFECVOptions

# Interface: RFECVOptions

## Table of contents

### Properties

- [cv](RFECVOptions.md#cv)
- [estimator](RFECVOptions.md#estimator)
- [importance\_getter](RFECVOptions.md#importance_getter)
- [min\_features\_to\_select](RFECVOptions.md#min_features_to_select)
- [n\_jobs](RFECVOptions.md#n_jobs)
- [scoring](RFECVOptions.md#scoring)
- [step](RFECVOptions.md#step)
- [verbose](RFECVOptions.md#verbose)

## Properties

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/feature_selection/RFECV.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L641)

___

### estimator

• `Optional` **estimator**: `any`

A supervised learning estimator with a `fit` method that provides information about feature importance either through a `coef\_` attribute or through a `feature\_importances\_` attribute.

#### Defined in

[generated/feature_selection/RFECV.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L622)

___

### importance\_getter

• `Optional` **importance\_getter**: `string`

If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance. For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

**`Default Value`**

`'auto'`

#### Defined in

[generated/feature_selection/RFECV.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L669)

___

### min\_features\_to\_select

• `Optional` **min\_features\_to\_select**: `number`

The minimum number of features to be selected. This number of features will always be scored, even if the difference between the original feature count and `min\_features\_to\_select` isn’t divisible by `step`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_selection/RFECV.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L636)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of cores to run in parallel while fitting across folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/feature_selection/RFECV.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L658)

___

### scoring

• `Optional` **scoring**: `string`

A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`.

#### Defined in

[generated/feature_selection/RFECV.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L646)

___

### step

• `Optional` **step**: `number`

If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration. Note that the last iteration may remove fewer than `step` features in order to reach `min\_features\_to\_select`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_selection/RFECV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L629)

___

### verbose

• `Optional` **verbose**: `number`

Controls verbosity of output.

**`Default Value`**

`0`

#### Defined in

[generated/feature_selection/RFECV.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L653)
