[sklearn](../readme.md) / [Exports](../modules.md) / LabelEncoder

# Class: LabelEncoder

Encode target labels with value between 0 and n\_classes-1.

This transformer should be used to encode target values, *i.e.* `y`, and not the input `X`.

Read more in the [User Guide](../preprocessing_targets.html#preprocessing-targets).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html

## Table of contents

### Constructors

- [constructor](LabelEncoder.md#constructor)

### Properties

- [\_isDisposed](LabelEncoder.md#_isdisposed)
- [\_isInitialized](LabelEncoder.md#_isinitialized)
- [\_py](LabelEncoder.md#_py)
- [id](LabelEncoder.md#id)
- [opts](LabelEncoder.md#opts)

### Accessors

- [py](LabelEncoder.md#py)

### Methods

- [dispose](LabelEncoder.md#dispose)
- [fit](LabelEncoder.md#fit)
- [fit\_transform](LabelEncoder.md#fit_transform)
- [init](LabelEncoder.md#init)
- [inverse\_transform](LabelEncoder.md#inverse_transform)
- [set\_output](LabelEncoder.md#set_output)
- [transform](LabelEncoder.md#transform)

## Constructors

### constructor

• **new LabelEncoder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelEncoderOptions`](../interfaces/LabelEncoderOptions.md) |

#### Defined in

[generated/preprocessing/LabelEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit label encoder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelEncoderFitOptions`](../interfaces/LabelEncoderFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L100)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit label encoder and return encoded labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelEncoderFitTransformOptions`](../interfaces/LabelEncoderFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L128)

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

[generated/preprocessing/LabelEncoder.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform labels back to original encoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelEncoderInverseTransformOptions`](../interfaces/LabelEncoderInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L158)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelEncoderSetOutputOptions`](../interfaces/LabelEncoderSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L192)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform labels to normalized encoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelEncoderTransformOptions`](../interfaces/LabelEncoderTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L220)
