[**sklearn**](../README.md) • **Docs**

***

Recursive feature elimination with cross-validation to select features.

The number of features selected is tuned automatically by fitting an [`RFE`](sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE "sklearn.feature_selection.RFE") selector on the different cross-validation splits (provided by the `cv` parameter). The performance of the [`RFE`](sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE "sklearn.feature_selection.RFE") selector are evaluated using `scorer` for different number of selected features and aggregated together. Finally, the scores are averaged across folds and the number of features selected is set to the number of features that maximize the cross-validation score. See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html)

## Constructors

### new RFECV()

> **new RFECV**(`opts`?): [`RFECV`](RFECV.md)

#### Parameters

• **opts?**

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.estimator?**: `any`

A supervised learning estimator with a `fit` method that provides information about feature importance either through a `coef\_` attribute or through a `feature\_importances\_` attribute.

• **opts.importance\_getter?**: `string`

If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance. For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

**Default Value**

`'auto'`

• **opts.min\_features\_to\_select?**: `number`

The minimum number of features to be selected. This number of features will always be scored, even if the difference between the original feature count and `min\_features\_to\_select` isn’t divisible by `step`.

**Default Value**

`1`

• **opts.n\_jobs?**: `number`

Number of cores to run in parallel while fitting across folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.scoring?**: `string`

A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`.

• **opts.step?**: `number`

If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration. Note that the last iteration may remove fewer than `step` features in order to reach `min\_features\_to\_select`.

**Default Value**

`1`

• **opts.verbose?**: `number`

Controls verbosity of output.

**Default Value**

`0`

#### Returns

[`RFECV`](RFECV.md)

#### Defined in

[generated/feature\_selection/RFECV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/RFECV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/RFECV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_selection/RFECV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_selection/RFECV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_selection/RFECV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L19)

## Accessors

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

All arrays (values of the dictionary) are sorted in ascending order by the number of features used (i.e., the first element of the array represents the models that used the least number of features, while the last element represents the models that used all available features). This dictionary contains the following keys:

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L657)

***

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The fitted estimator used to select features.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L634)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/RFECV.ts:726](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L726)

***

### n\_features\_

#### Get Signature

> **get** **n\_features\_**(): `Promise`\<`number`\>

The number of selected features with cross-validation.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L680)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L703)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/feature\_selection/RFECV.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L82)

***

### ranking\_

#### Get Signature

> **get** **ranking\_**(): `Promise`\<`any`[]\>

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_selection/RFECV.ts:751](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L751)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The mask of selected features.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/RFECV.ts:773](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L773)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`any`\>

Compute the decision function of `X`.

#### Parameters

• **opts**

• **opts.X?**: `any`[]

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L150)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L133)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the RFE model and automatically tune the number of selected features.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the total number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (integers for classification, real numbers for regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L182)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_selection/RFECV.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L226)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Mask feature names according to selected features.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L268)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Raise `NotImplementedError`.

This estimator does not support metadata routing yet.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L302)

***

### get\_support()

> **get\_support**(`opts`): `Promise`\<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

• **opts**

• **opts.indices?**: `boolean`

If `true`, the return value will be an array of integers, rather than a boolean mask.

**Default Value**

`false`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L328)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L95)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Reverse the transformation operation.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L362)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features and predict using the estimator.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L394)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`any`[]\>

Predict class log-probabilities for X.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_selection/RFECV.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L426)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`[]\>

Predict class probabilities for X.

#### Parameters

• **opts**

• **opts.X?**: `any`[]

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_selection/RFECV.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L458)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Reduce X to the selected features and return the score of the estimator.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters to pass to the `score` method of the underlying estimator.

• **opts.X?**: `any`

The input samples.

• **opts.y?**: `any`

The target values.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L490)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.groups?**: `string` \| `boolean`

Metadata routing for `groups` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L536)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L570)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFECV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_selection/RFECV.ts#L602)
