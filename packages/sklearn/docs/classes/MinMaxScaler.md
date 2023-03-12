[sklearn](../readme.md) / [Exports](../modules.md) / MinMaxScaler

# Class: MinMaxScaler

Transform features by scaling each feature to a given range.

This estimator scales and translates each feature individually such that it is in the given range on the training set, e.g. between zero and one.

The transformation is given by:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html

## Table of contents

### Constructors

- [constructor](MinMaxScaler.md#constructor)

### Properties

- [\_isDisposed](MinMaxScaler.md#_isdisposed)
- [\_isInitialized](MinMaxScaler.md#_isinitialized)
- [\_py](MinMaxScaler.md#_py)
- [id](MinMaxScaler.md#id)
- [opts](MinMaxScaler.md#opts)

### Accessors

- [data\_max\_](MinMaxScaler.md#data_max_)
- [data\_min\_](MinMaxScaler.md#data_min_)
- [data\_range\_](MinMaxScaler.md#data_range_)
- [feature\_names\_in\_](MinMaxScaler.md#feature_names_in_)
- [min\_](MinMaxScaler.md#min_)
- [n\_features\_in\_](MinMaxScaler.md#n_features_in_)
- [n\_samples\_seen\_](MinMaxScaler.md#n_samples_seen_)
- [py](MinMaxScaler.md#py)
- [scale\_](MinMaxScaler.md#scale_)

### Methods

- [dispose](MinMaxScaler.md#dispose)
- [fit](MinMaxScaler.md#fit)
- [fit\_transform](MinMaxScaler.md#fit_transform)
- [get\_feature\_names\_out](MinMaxScaler.md#get_feature_names_out)
- [init](MinMaxScaler.md#init)
- [inverse\_transform](MinMaxScaler.md#inverse_transform)
- [partial\_fit](MinMaxScaler.md#partial_fit)
- [set\_output](MinMaxScaler.md#set_output)
- [transform](MinMaxScaler.md#transform)

## Constructors

### constructor

• **new MinMaxScaler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MinMaxScalerOptions`](../interfaces/MinMaxScalerOptions.md) |

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L19)

## Accessors

### data\_max\_

• `get` **data_max_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature maximum seen in the data

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L388)

___

### data\_min\_

• `get` **data_min_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature minimum seen in the data

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L363)

___

### data\_range\_

• `get` **data_range_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature range `(data\_max\_ \- data\_min\_)` seen in the data

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L413)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L488)

___

### min\_

• `get` **min_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature adjustment for minimum. Equivalent to `min \- X.min(axis=0) \* self.scale\_`

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L317)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L438)

___

### n\_samples\_seen\_

• `get` **n_samples_seen_**(): `Promise`<`number`\>

The number of samples processed by the estimator. It will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L463)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L34)

___

### scale\_

• `get` **scale_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature relative scaling of the data. Equivalent to `(max \- min) / (X.max(axis=0) \- X.min(axis=0))`

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L340)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the minimum and maximum to be used for later scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerFitOptions`](../interfaces/MinMaxScalerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L102)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerFitTransformOptions`](../interfaces/MinMaxScalerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L132)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerGetFeatureNamesOutOptions`](../interfaces/MinMaxScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L164)

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

[generated/preprocessing/MinMaxScaler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Undo the scaling of X according to feature\_range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerInverseTransformOptions`](../interfaces/MinMaxScalerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L197)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Online computation of min and max on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MinMaxScaler.fit "sklearn.preprocessing.MinMaxScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerPartialFitOptions`](../interfaces/MinMaxScalerPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L231)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerSetOutputOptions`](../interfaces/MinMaxScalerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L261)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Scale features of X according to feature\_range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinMaxScalerTransformOptions`](../interfaces/MinMaxScalerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L289)
