[**sklearn**](../README.md) • **Docs**

***

Meta-transformer for selecting features based on importance weights.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html)

## Constructors

### new SelectFromModel()

> **new SelectFromModel**(`opts`?): [`SelectFromModel`](SelectFromModel.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

The base estimator from which the transformer is built. This can be both a fitted (if `prefit` is set to `true`) or a non-fitted estimator. The estimator should have a `feature\_importances\_` or `coef\_` attribute after fitting. Otherwise, the `importance\_getter` parameter should be used.

• **opts.importance\_getter?**: `string`

If ‘auto’, uses the feature importance either through a `coef\_` attribute or `feature\_importances\_` attribute of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

**Default Value**

`'auto'`

• **opts.max\_features?**: `number`

The maximum number of features to select.

• **opts.norm\_order?**: `any`

Order of the norm used to filter the vectors of coefficients below `threshold` in the case where the `coef\_` attribute of the estimator is of dimension 2.

**Default Value**

`1`

• **opts.prefit?**: `boolean`

Whether a prefit model is expected to be passed into the constructor directly or not. If `true`, `estimator` must be a fitted estimator. If `false`, `estimator` is fitted and updated by calling `fit` and `partial\_fit`, respectively.

**Default Value**

`false`

• **opts.threshold?**: `string` \| `number`

The threshold value to use for feature selection. Features whose absolute importance value is greater or equal are kept while the others are discarded. If “median” (resp. “mean”), then the `threshold` value is the median (resp. the mean) of the feature importances. A scaling factor (e.g., “1.25\*mean”) may also be used. If `undefined` and if the estimator has a parameter penalty set to l1, either explicitly or implicitly (e.g, Lasso), the threshold used is 1e-5. Otherwise, “mean” is used by default.

#### Returns

[`SelectFromModel`](SelectFromModel.md)

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L21)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L19)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L18)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L17)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L14)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L15)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the transformer is built. This attribute exist only when `fit` has been called.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L467)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L517)

***

### max\_features\_

#### Get Signature

> **get** **max\_features\_**(): `Promise`\<`number`\>

Maximum number of features calculated during [fit](../../glossary.html#term-fit). Only defined if the `max\_features` is not `undefined`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L492)

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

[generated/feature\_selection/SelectFromModel.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L66)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L118)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the SelectFromModel meta-transformer.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The training input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values (integers that correspond to classes in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L135)

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

[generated/feature\_selection/SelectFromModel.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L179)

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

[generated/feature\_selection/SelectFromModel.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L221)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L257)

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

[generated/feature\_selection/SelectFromModel.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L291)

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

[generated/feature\_selection/SelectFromModel.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L79)

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

[generated/feature\_selection/SelectFromModel.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L325)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit the SelectFromModel meta-transformer only once.

#### Parameters

• **opts**

• **opts.partial\_fit\_params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The training input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values (integers that correspond to classes in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFromModel.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L359)

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

[generated/feature\_selection/SelectFromModel.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L403)

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

[generated/feature\_selection/SelectFromModel.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L435)
