[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsRegressor

# Class: KNeighborsRegressor

Regression based on k-nearest neighbors.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](../neighbors.html#regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html

## Table of contents

### Constructors

- [constructor](KNeighborsRegressor.md#constructor)

### Properties

- [\_isDisposed](KNeighborsRegressor.md#_isdisposed)
- [\_isInitialized](KNeighborsRegressor.md#_isinitialized)
- [\_py](KNeighborsRegressor.md#_py)
- [id](KNeighborsRegressor.md#id)
- [opts](KNeighborsRegressor.md#opts)

### Accessors

- [effective\_metric\_](KNeighborsRegressor.md#effective_metric_)
- [effective\_metric\_params\_](KNeighborsRegressor.md#effective_metric_params_)
- [feature\_names\_in\_](KNeighborsRegressor.md#feature_names_in_)
- [n\_features\_in\_](KNeighborsRegressor.md#n_features_in_)
- [n\_samples\_fit\_](KNeighborsRegressor.md#n_samples_fit_)
- [py](KNeighborsRegressor.md#py)

### Methods

- [dispose](KNeighborsRegressor.md#dispose)
- [fit](KNeighborsRegressor.md#fit)
- [init](KNeighborsRegressor.md#init)
- [kneighbors](KNeighborsRegressor.md#kneighbors)
- [kneighbors\_graph](KNeighborsRegressor.md#kneighbors_graph)
- [predict](KNeighborsRegressor.md#predict)
- [score](KNeighborsRegressor.md#score)

## Constructors

### constructor

• **new KNeighborsRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsRegressorOptions`](../interfaces/KNeighborsRegressorOptions.md) |

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L283)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L310)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L364)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L337)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L391)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the k-nearest neighbors regressor from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorFitOptions`](../interfaces/KNeighborsRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L110)

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

[generated/neighbors/KNeighborsRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L43)

___

### kneighbors

▸ **kneighbors**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorKneighborsOptions`](../interfaces/KNeighborsRegressorKneighborsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L144)

___

### kneighbors\_graph

▸ **kneighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorKneighborsGraphOptions`](../interfaces/KNeighborsRegressorKneighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L180)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the target for the provided data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorPredictOptions`](../interfaces/KNeighborsRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L217)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorScoreOptions`](../interfaces/KNeighborsRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L249)
