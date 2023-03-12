[sklearn](../readme.md) / [Exports](../modules.md) / RobustScaler

# Class: RobustScaler

Scale features using statistics that are robust to outliers.

This Scaler removes the median and scales the data according to the quantile range (defaults to IQR: Interquartile Range). The IQR is the range between the 1st quartile (25th quantile) and the 3rd quartile (75th quantile).

Centering and scaling happen independently on each feature by computing the relevant statistics on the samples in the training set. Median and interquartile range are then stored to be used on later data using the [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") method.

Standardization of a dataset is a common requirement for many machine learning estimators. Typically this is done by removing the mean and scaling to unit variance. However, outliers can often influence the sample mean / variance in a negative way. In such cases, the median and the interquartile range often give better results.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html

## Table of contents

### Constructors

- [constructor](RobustScaler.md#constructor)

### Properties

- [\_isDisposed](RobustScaler.md#_isdisposed)
- [\_isInitialized](RobustScaler.md#_isinitialized)
- [\_py](RobustScaler.md#_py)
- [id](RobustScaler.md#id)
- [opts](RobustScaler.md#opts)

### Accessors

- [center\_](RobustScaler.md#center_)
- [feature\_names\_in\_](RobustScaler.md#feature_names_in_)
- [n\_features\_in\_](RobustScaler.md#n_features_in_)
- [py](RobustScaler.md#py)
- [scale\_](RobustScaler.md#scale_)

### Methods

- [dispose](RobustScaler.md#dispose)
- [fit](RobustScaler.md#fit)
- [fit\_transform](RobustScaler.md#fit_transform)
- [get\_feature\_names\_out](RobustScaler.md#get_feature_names_out)
- [init](RobustScaler.md#init)
- [inverse\_transform](RobustScaler.md#inverse_transform)
- [set\_output](RobustScaler.md#set_output)
- [transform](RobustScaler.md#transform)

## Constructors

### constructor

• **new RobustScaler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RobustScalerOptions`](../interfaces/RobustScalerOptions.md) |

#### Defined in

[generated/preprocessing/RobustScaler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/RobustScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/RobustScaler.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/RobustScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/RobustScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/RobustScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L21)

## Accessors

### center\_

• `get` **center_**(): `Promise`<`any`\>

The median value for each feature in the training set.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L293)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L364)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L339)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/RobustScaler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/RobustScaler.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L36)

___

### scale\_

• `get` **scale_**(): `Promise`<`any`\>

The (scaled) interquartile range for each feature in the training set.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L316)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the median and quantiles to be used for scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerFitOptions`](../interfaces/RobustScalerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerFitTransformOptions`](../interfaces/RobustScalerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L136)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerGetFeatureNamesOutOptions`](../interfaces/RobustScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L168)

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

[generated/preprocessing/RobustScaler.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scale back the data to the original representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerInverseTransformOptions`](../interfaces/RobustScalerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L201)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerSetOutputOptions`](../interfaces/RobustScalerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L235)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Center and scale the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerTransformOptions`](../interfaces/RobustScalerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/RobustScaler.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L263)
