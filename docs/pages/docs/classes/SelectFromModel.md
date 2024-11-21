# Class: SelectFromModel

Meta-transformer for selecting features based on importance weights.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html)

## Constructors

### new SelectFromModel()

> **new SelectFromModel**(`opts`?): [`SelectFromModel`](SelectFromModel.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator`? | `any` | The base estimator from which the transformer is built. This can be both a fitted (if `prefit` is set to `true`) or a non-fitted estimator. The estimator should have a `feature_importances_` or `coef_` attribute after fitting. Otherwise, the `importance_getter` parameter should be used. |
| `opts.importance_getter`? | `string` | If ‘auto’, uses the feature importance either through a `coef_` attribute or `feature_importances_` attribute of estimator. Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor_.coef_` in case of [`TransformedTargetRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named_steps.clf.feature_importances_` in case of [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`. If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature. |
| `opts.max_features`? | `number` | The maximum number of features to select. |
| `opts.norm_order`? | `any` | Order of the norm used to filter the vectors of coefficients below `threshold` in the case where the `coef_` attribute of the estimator is of dimension 2. |
| `opts.prefit`? | `boolean` | Whether a prefit model is expected to be passed into the constructor directly or not. If `true`, `estimator` must be a fitted estimator. If `false`, `estimator` is fitted and updated by calling `fit` and `partial_fit`, respectively. |
| `opts.threshold`? | `string` \| `number` | The threshold value to use for feature selection. Features whose absolute importance value is greater or equal are kept while the others are discarded. If “median” (resp. “mean”), then the `threshold` value is the median (resp. the mean) of the feature importances. A scaling factor (e.g., “1.25\*mean”) may also be used. If `undefined` and if the estimator has a parameter penalty set to l1, either explicitly or implicitly (e.g, Lasso), the threshold used is 1e-5. Otherwise, “mean” is used by default. |

**Returns** [`SelectFromModel`](SelectFromModel.md)

**Defined in** [generated/feature\_selection/SelectFromModel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/feature\_selection/SelectFromModel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/feature\_selection/SelectFromModel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/feature\_selection/SelectFromModel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L17) |
| `id` | `string` | `undefined` | [generated/feature\_selection/SelectFromModel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L14) |
| `opts` | `any` | `undefined` | [generated/feature\_selection/SelectFromModel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L15) |

## Accessors

### estimator\_

**Get Signature**

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the transformer is built. This attribute exist only when `fit` has been called.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L467)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L517)

***

### max\_features\_

**Get Signature**

> **get** **max\_features\_**(): `Promise`\<`number`\>

Maximum number of features calculated during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the `max_features` is not `undefined`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L492)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/feature\_selection/SelectFromModel.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L66)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L118)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the SelectFromModel meta-transformer.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | If `enable_metadata_routing=False` (default): |
| `opts.X`? | `ArrayLike`[] | The training input samples. |
| `opts.y`? | `ArrayLike` | The target values (integers that correspond to classes in classification, real numbers in regression). |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L135)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | `ArrayLike`[] | Input samples. |
| `opts.y`? | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L179)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Mask feature names according to selected features.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Input features. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L221)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L257)

***

### get\_support()

> **get\_support**(`opts`): `Promise`\<`any`\>

Get a mask, or integer index, of the features selected.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.indices`? | `boolean` | If `true`, the return value will be an array of integers, rather than a boolean mask. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L291)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L79)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Reverse the transformation operation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | The input samples. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L325)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit the SelectFromModel meta-transformer only once.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.partial_fit_params`? | `any` | If `enable_metadata_routing=False` (default): |
| `opts.X`? | `ArrayLike`[] | The training input samples. |
| `opts.y`? | `ArrayLike` | The target values (integers that correspond to classes in classification, real numbers in regression). |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L359)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L403)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | The input samples. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/SelectFromModel.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L435)
