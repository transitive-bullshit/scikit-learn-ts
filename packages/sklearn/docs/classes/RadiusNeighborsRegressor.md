[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsRegressor

# Class: RadiusNeighborsRegressor

Regression based on neighbors within a fixed radius.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](../neighbors.html#regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsRegressor.html

## Table of contents

### Constructors

- [constructor](RadiusNeighborsRegressor.md#constructor)

### Properties

- [\_isDisposed](RadiusNeighborsRegressor.md#_isdisposed)
- [\_isInitialized](RadiusNeighborsRegressor.md#_isinitialized)
- [\_py](RadiusNeighborsRegressor.md#_py)
- [id](RadiusNeighborsRegressor.md#id)
- [opts](RadiusNeighborsRegressor.md#opts)

### Accessors

- [effective\_metric\_](RadiusNeighborsRegressor.md#effective_metric_)
- [effective\_metric\_params\_](RadiusNeighborsRegressor.md#effective_metric_params_)
- [feature\_names\_in\_](RadiusNeighborsRegressor.md#feature_names_in_)
- [n\_features\_in\_](RadiusNeighborsRegressor.md#n_features_in_)
- [n\_samples\_fit\_](RadiusNeighborsRegressor.md#n_samples_fit_)
- [py](RadiusNeighborsRegressor.md#py)

### Methods

- [dispose](RadiusNeighborsRegressor.md#dispose)
- [fit](RadiusNeighborsRegressor.md#fit)
- [init](RadiusNeighborsRegressor.md#init)
- [predict](RadiusNeighborsRegressor.md#predict)
- [radius\_neighbors](RadiusNeighborsRegressor.md#radius_neighbors)
- [radius\_neighbors\_graph](RadiusNeighborsRegressor.md#radius_neighbors_graph)
- [score](RadiusNeighborsRegressor.md#score)

## Constructors

### constructor

• **new RadiusNeighborsRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsRegressorOptions`](../interfaces/RadiusNeighborsRegressorOptions.md) |

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L295)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L322)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L376)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L349)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L403)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the radius neighbors regressor from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorFitOptions`](../interfaces/RadiusNeighborsRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L110)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the target for the provided data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorPredictOptions`](../interfaces/RadiusNeighborsRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L142)

___

### radius\_neighbors

▸ **radius_neighbors**(`opts`): `Promise`<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorRadiusNeighborsOptions`](../interfaces/RadiusNeighborsRegressorRadiusNeighborsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L180)

___

### radius\_neighbors\_graph

▸ **radius_neighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsRegressorRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L218)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorScoreOptions`](../interfaces/RadiusNeighborsRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L259)
