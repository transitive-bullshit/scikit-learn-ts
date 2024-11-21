[**sklearn**](../README.md) • **Docs**

***

Feature ranking with recursive feature elimination.

Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

Read more in the [User Guide](../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)

## Constructors

### new RFE()

> **new RFE**(`opts`?): [`RFE`](RFE.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

A supervised learning estimator with a `fit` method that provides information about feature importance (e.g. `coef\_`, `feature\_importances\_`).

• **opts.importance\_getter?**: `string`

If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.

Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of class:`~sklearn.pipeline.Pipeline` with its last step named `clf`.

If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

**Default Value**

`'auto'`

• **opts.n\_features\_to\_select?**: `number`

The number of features to select. If `undefined`, half of the features are selected. If integer, the parameter is the absolute number of features to select. If float between 0 and 1, it is the fraction of features to select.

• **opts.step?**: `number`

If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration.

**Default Value**

`1`

• **opts.verbose?**: `number`

Controls verbosity of output.

**Default Value**

`0`

#### Returns

[`RFE`](RFE.md)

#### Defined in

[generated/feature\_selection/RFE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/RFE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/RFE.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_selection/RFE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_selection/RFE.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_selection/RFE.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L19)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The fitted estimator used to select features.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFE.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L580)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/RFE.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L648)

***

### n\_features\_

#### Get Signature

> **get** **n\_features\_**(): `Promise`\<`number`\>

The number of selected features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/RFE.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L602)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/RFE.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L625)

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

[generated/feature\_selection/RFE.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L65)

***

### ranking\_

#### Get Signature

> **get** **ranking\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/RFE.ts:671](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L671)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The mask of selected features.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/RFE.ts:693](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L693)

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

[generated/feature\_selection/RFE.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L133)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/RFE.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L116)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the RFE model and then the underlying estimator on the selected features.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional parameters passed to the `fit` method of the underlying estimator.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The training input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/RFE.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L165)

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

[generated/feature\_selection/RFE.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L208)

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

[generated/feature\_selection/RFE.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L250)

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

[generated/feature\_selection/RFE.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L284)

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

[generated/feature\_selection/RFE.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L310)

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

[generated/feature\_selection/RFE.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L78)

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

[generated/feature\_selection/RFE.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L344)

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

[generated/feature\_selection/RFE.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L376)

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

[generated/feature\_selection/RFE.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L408)

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

[generated/feature\_selection/RFE.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L440)

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

[generated/feature\_selection/RFE.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L472)

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

[generated/feature\_selection/RFE.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L516)

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

[generated/feature\_selection/RFE.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/RFE.ts#L548)
