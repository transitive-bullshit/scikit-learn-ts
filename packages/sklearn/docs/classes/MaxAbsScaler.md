[sklearn](../readme.md) / [Exports](../modules.md) / MaxAbsScaler

# Class: MaxAbsScaler

Scale each feature by its maximum absolute value.

This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

This scaler can also be applied to sparse CSR or CSC matrices.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html

## Table of contents

### Constructors

- [constructor](MaxAbsScaler.md#constructor)

### Properties

- [\_isDisposed](MaxAbsScaler.md#_isdisposed)
- [\_isInitialized](MaxAbsScaler.md#_isinitialized)
- [\_py](MaxAbsScaler.md#_py)
- [id](MaxAbsScaler.md#id)
- [opts](MaxAbsScaler.md#opts)

### Accessors

- [feature\_names\_in\_](MaxAbsScaler.md#feature_names_in_)
- [max\_abs\_](MaxAbsScaler.md#max_abs_)
- [n\_features\_in\_](MaxAbsScaler.md#n_features_in_)
- [n\_samples\_seen\_](MaxAbsScaler.md#n_samples_seen_)
- [py](MaxAbsScaler.md#py)
- [scale\_](MaxAbsScaler.md#scale_)

### Methods

- [dispose](MaxAbsScaler.md#dispose)
- [fit](MaxAbsScaler.md#fit)
- [fit\_transform](MaxAbsScaler.md#fit_transform)
- [get\_feature\_names\_out](MaxAbsScaler.md#get_feature_names_out)
- [init](MaxAbsScaler.md#init)
- [inverse\_transform](MaxAbsScaler.md#inverse_transform)
- [partial\_fit](MaxAbsScaler.md#partial_fit)
- [set\_output](MaxAbsScaler.md#set_output)
- [transform](MaxAbsScaler.md#transform)

## Constructors

### constructor

• **new MaxAbsScaler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MaxAbsScalerOptions`](../interfaces/MaxAbsScalerOptions.md) |

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L388)

___

### max\_abs\_

• `get` **max_abs_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature maximum absolute value.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L340)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L363)

___

### n\_samples\_seen\_

• `get` **n_samples_seen_**(): `Promise`<`number`\>

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L413)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L34)

___

### scale\_

• `get` **scale_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per feature relative scaling of the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L317)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the maximum absolute value to be used for later scaling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerFitOptions`](../interfaces/MaxAbsScalerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L100)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerFitTransformOptions`](../interfaces/MaxAbsScalerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L130)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerGetFeatureNamesOutOptions`](../interfaces/MaxAbsScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L162)

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

[generated/preprocessing/MaxAbsScaler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scale back the data to the original representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerInverseTransformOptions`](../interfaces/MaxAbsScalerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L195)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Online computation of max absolute value of X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MaxAbsScaler.fit "sklearn.preprocessing.MaxAbsScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerPartialFitOptions`](../interfaces/MaxAbsScalerPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L229)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerSetOutputOptions`](../interfaces/MaxAbsScalerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L259)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scale the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaxAbsScalerTransformOptions`](../interfaces/MaxAbsScalerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L287)
