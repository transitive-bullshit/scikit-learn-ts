[sklearn](../readme.md) / [Exports](../modules.md) / StandardScaler

# Class: StandardScaler

Standardize features by removing the mean and scaling to unit variance.

The standard score of a sample `x` is calculated as:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html

## Table of contents

### Constructors

- [constructor](StandardScaler.md#constructor)

### Properties

- [\_isDisposed](StandardScaler.md#_isdisposed)
- [\_isInitialized](StandardScaler.md#_isinitialized)
- [\_py](StandardScaler.md#_py)
- [id](StandardScaler.md#id)
- [opts](StandardScaler.md#opts)

### Accessors

- [feature\_names\_in\_](StandardScaler.md#feature_names_in_)
- [mean\_](StandardScaler.md#mean_)
- [n\_features\_in\_](StandardScaler.md#n_features_in_)
- [n\_samples\_seen\_](StandardScaler.md#n_samples_seen_)
- [py](StandardScaler.md#py)
- [scale\_](StandardScaler.md#scale_)
- [var\_](StandardScaler.md#var_)

### Methods

- [dispose](StandardScaler.md#dispose)
- [fit](StandardScaler.md#fit)
- [fit\_transform](StandardScaler.md#fit_transform)
- [get\_feature\_names\_out](StandardScaler.md#get_feature_names_out)
- [init](StandardScaler.md#init)
- [inverse\_transform](StandardScaler.md#inverse_transform)
- [partial\_fit](StandardScaler.md#partial_fit)
- [set\_output](StandardScaler.md#set_output)
- [transform](StandardScaler.md#transform)

## Constructors

### constructor

• **new StandardScaler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StandardScalerOptions`](../interfaces/StandardScalerOptions.md) |

#### Defined in

[generated/preprocessing/StandardScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/StandardScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/StandardScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/StandardScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/StandardScaler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/StandardScaler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L425)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L354)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L400)

___

### n\_samples\_seen\_

• `get` **n_samples_seen_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L450)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/StandardScaler.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/StandardScaler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L32)

___

### scale\_

• `get` **scale_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L331)

___

### var\_

• `get` **var_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_std=False`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L377)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the mean and std to be used for later scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerFitOptions`](../interfaces/StandardScalerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L100)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerFitTransformOptions`](../interfaces/StandardScalerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerGetFeatureNamesOutOptions`](../interfaces/StandardScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L166)

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

[generated/preprocessing/StandardScaler.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scale back the data to the original representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerInverseTransformOptions`](../interfaces/StandardScalerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L199)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Online computation of mean and std on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.StandardScaler.fit "sklearn.preprocessing.StandardScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

The algorithm for incremental mean and std is given in Equation 1.5a,b in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. “Algorithms for computing the sample variance: Analysis and recommendations.” The American Statistician 37.3 (1983): 242-247:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerPartialFitOptions`](../interfaces/StandardScalerPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L237)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerSetOutputOptions`](../interfaces/StandardScalerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L271)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform standardization by centering and scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerTransformOptions`](../interfaces/StandardScalerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L299)
