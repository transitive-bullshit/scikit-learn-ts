[sklearn](../readme.md) / [Exports](../modules.md) / OrdinalEncoder

# Class: OrdinalEncoder

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html

## Table of contents

### Constructors

- [constructor](OrdinalEncoder.md#constructor)

### Properties

- [\_isDisposed](OrdinalEncoder.md#_isdisposed)
- [\_isInitialized](OrdinalEncoder.md#_isinitialized)
- [\_py](OrdinalEncoder.md#_py)
- [id](OrdinalEncoder.md#id)
- [opts](OrdinalEncoder.md#opts)

### Accessors

- [categories\_](OrdinalEncoder.md#categories_)
- [feature\_names\_in\_](OrdinalEncoder.md#feature_names_in_)
- [n\_features\_in\_](OrdinalEncoder.md#n_features_in_)
- [py](OrdinalEncoder.md#py)

### Methods

- [dispose](OrdinalEncoder.md#dispose)
- [fit](OrdinalEncoder.md#fit)
- [fit\_transform](OrdinalEncoder.md#fit_transform)
- [get\_feature\_names\_out](OrdinalEncoder.md#get_feature_names_out)
- [init](OrdinalEncoder.md#init)
- [inverse\_transform](OrdinalEncoder.md#inverse_transform)
- [set\_output](OrdinalEncoder.md#set_output)
- [transform](OrdinalEncoder.md#transform)

## Constructors

### constructor

• **new OrdinalEncoder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OrdinalEncoderOptions`](../interfaces/OrdinalEncoderOptions.md) |

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L19)

## Accessors

### categories\_

• `get` **categories_**(): `Promise`<`any`\>

The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L291)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L341)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L316)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the OrdinalEncoder to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderFitOptions`](../interfaces/OrdinalEncoderFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderFitTransformOptions`](../interfaces/OrdinalEncoderFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L136)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderGetFeatureNamesOutOptions`](../interfaces/OrdinalEncoderGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L168)

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

[generated/preprocessing/OrdinalEncoder.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Convert the data back to the original representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderInverseTransformOptions`](../interfaces/OrdinalEncoderInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L201)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderSetOutputOptions`](../interfaces/OrdinalEncoderSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L235)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X to ordinal codes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderTransformOptions`](../interfaces/OrdinalEncoderTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L263)
