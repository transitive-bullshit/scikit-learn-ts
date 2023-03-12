[sklearn](../readme.md) / [Exports](../modules.md) / MultiLabelBinarizer

# Class: MultiLabelBinarizer

Transform between iterable of iterables and a multilabel format.

Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html

## Table of contents

### Constructors

- [constructor](MultiLabelBinarizer.md#constructor)

### Properties

- [\_isDisposed](MultiLabelBinarizer.md#_isdisposed)
- [\_isInitialized](MultiLabelBinarizer.md#_isinitialized)
- [\_py](MultiLabelBinarizer.md#_py)
- [id](MultiLabelBinarizer.md#id)
- [opts](MultiLabelBinarizer.md#opts)

### Accessors

- [classes\_](MultiLabelBinarizer.md#classes_)
- [py](MultiLabelBinarizer.md#py)

### Methods

- [dispose](MultiLabelBinarizer.md#dispose)
- [fit](MultiLabelBinarizer.md#fit)
- [fit\_transform](MultiLabelBinarizer.md#fit_transform)
- [init](MultiLabelBinarizer.md#init)
- [inverse\_transform](MultiLabelBinarizer.md#inverse_transform)
- [set\_output](MultiLabelBinarizer.md#set_output)
- [transform](MultiLabelBinarizer.md#transform)

## Constructors

### constructor

• **new MultiLabelBinarizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiLabelBinarizerOptions`](../interfaces/MultiLabelBinarizerOptions.md) |

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

A copy of the `classes` parameter when provided. Otherwise it corresponds to the sorted set of classes found when fitting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L267)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the label sets binarizer, storing [classes\_](../../glossary.html#term-classes_).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiLabelBinarizerFitOptions`](../interfaces/MultiLabelBinarizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit the label sets binarizer and transform the given label sets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiLabelBinarizerFitTransformOptions`](../interfaces/MultiLabelBinarizerFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L134)

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

[generated/preprocessing/MultiLabelBinarizer.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Transform the given indicator matrix into label sets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiLabelBinarizerInverseTransformOptions`](../interfaces/MultiLabelBinarizerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L168)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiLabelBinarizerSetOutputOptions`](../interfaces/MultiLabelBinarizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L205)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Transform the given label sets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiLabelBinarizerTransformOptions`](../interfaces/MultiLabelBinarizerTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L237)
