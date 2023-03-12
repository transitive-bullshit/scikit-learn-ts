[sklearn](../readme.md) / [Exports](../modules.md) / KBinsDiscretizer

# Class: KBinsDiscretizer

Bin continuous data into intervals.

Read more in the [User Guide](../preprocessing.html#preprocessing-discretization).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html

## Table of contents

### Constructors

- [constructor](KBinsDiscretizer.md#constructor)

### Properties

- [\_isDisposed](KBinsDiscretizer.md#_isdisposed)
- [\_isInitialized](KBinsDiscretizer.md#_isinitialized)
- [\_py](KBinsDiscretizer.md#_py)
- [id](KBinsDiscretizer.md#id)
- [opts](KBinsDiscretizer.md#opts)

### Accessors

- [bin\_edges\_](KBinsDiscretizer.md#bin_edges_)
- [feature\_names\_in\_](KBinsDiscretizer.md#feature_names_in_)
- [n\_bins\_](KBinsDiscretizer.md#n_bins_)
- [n\_features\_in\_](KBinsDiscretizer.md#n_features_in_)
- [py](KBinsDiscretizer.md#py)

### Methods

- [dispose](KBinsDiscretizer.md#dispose)
- [fit](KBinsDiscretizer.md#fit)
- [fit\_transform](KBinsDiscretizer.md#fit_transform)
- [get\_feature\_names\_out](KBinsDiscretizer.md#get_feature_names_out)
- [init](KBinsDiscretizer.md#init)
- [inverse\_transform](KBinsDiscretizer.md#inverse_transform)
- [set\_output](KBinsDiscretizer.md#set_output)
- [transform](KBinsDiscretizer.md#transform)

## Constructors

### constructor

• **new KBinsDiscretizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KBinsDiscretizerOptions`](../interfaces/KBinsDiscretizerOptions.md) |

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L17)

## Accessors

### bin\_edges\_

• `get` **bin_edges_**(): `Promise`<`any`[]\>

The edges of each bin. Contain arrays of varying shapes `(n\_bins\_, )` Ignored features will have empty arrays.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L310)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L391)

___

### n\_bins\_

• `get` **n_bins_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L337)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L364)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerFitOptions`](../interfaces/KBinsDiscretizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerFitTransformOptions`](../interfaces/KBinsDiscretizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L138)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerGetFeatureNamesOutOptions`](../interfaces/KBinsDiscretizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L176)

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

[generated/preprocessing/KBinsDiscretizer.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform discretized data back to original feature space.

Note that this function does not regenerate the original data due to discretization rounding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerInverseTransformOptions`](../interfaces/KBinsDiscretizerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L213)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerSetOutputOptions`](../interfaces/KBinsDiscretizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L250)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Discretize the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KBinsDiscretizerTransformOptions`](../interfaces/KBinsDiscretizerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L280)
