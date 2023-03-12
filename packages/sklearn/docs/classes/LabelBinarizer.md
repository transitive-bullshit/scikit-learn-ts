[sklearn](../readme.md) / [Exports](../modules.md) / LabelBinarizer

# Class: LabelBinarizer

Binarize labels in a one-vs-all fashion.

Several regression and binary classification algorithms are available in scikit-learn. A simple way to extend these algorithms to the multi-class classification case is to use the so-called one-vs-all scheme.

At learning time, this simply consists in learning one regressor or binary classifier per class. In doing so, one needs to convert multi-class labels to binary labels (belong or does not belong to the class). LabelBinarizer makes this process easy with the transform method.

At prediction time, one assigns the class for which the corresponding model gave the greatest confidence. LabelBinarizer makes this easy with the inverse\_transform method.

Read more in the [User Guide](../preprocessing_targets.html#preprocessing-targets).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html

## Table of contents

### Constructors

- [constructor](LabelBinarizer.md#constructor)

### Properties

- [\_isDisposed](LabelBinarizer.md#_isdisposed)
- [\_isInitialized](LabelBinarizer.md#_isinitialized)
- [\_py](LabelBinarizer.md#_py)
- [id](LabelBinarizer.md#id)
- [opts](LabelBinarizer.md#opts)

### Accessors

- [classes\_](LabelBinarizer.md#classes_)
- [py](LabelBinarizer.md#py)
- [sparse\_input\_](LabelBinarizer.md#sparse_input_)
- [y\_type\_](LabelBinarizer.md#y_type_)

### Methods

- [dispose](LabelBinarizer.md#dispose)
- [fit](LabelBinarizer.md#fit)
- [fit\_transform](LabelBinarizer.md#fit_transform)
- [init](LabelBinarizer.md#init)
- [inverse\_transform](LabelBinarizer.md#inverse_transform)
- [set\_output](LabelBinarizer.md#set_output)
- [transform](LabelBinarizer.md#transform)

## Constructors

### constructor

• **new LabelBinarizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelBinarizerOptions`](../interfaces/LabelBinarizerOptions.md) |

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L23)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Holds the label for each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L262)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L38)

___

### sparse\_input\_

• `get` **sparse_input_**(): `Promise`<`boolean`\>

True if the input data to transform is given as a sparse matrix, `false` otherwise.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L312)

___

### y\_type\_

• `get` **y_type_**(): `Promise`<`string`\>

Represents the type of the target data as evaluated by utils.multiclass.type\_of\_target. Possible type are ‘continuous’, ‘continuous-multioutput’, ‘binary’, ‘multiclass’, ‘multiclass-multioutput’, ‘multilabel-indicator’, and ‘unknown’.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L287)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit label binarizer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelBinarizerFitOptions`](../interfaces/LabelBinarizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit label binarizer/transform multi-class labels to binary labels.

The output of transform is sometimes referred to as the 1-of-K coding scheme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelBinarizerFitTransformOptions`](../interfaces/LabelBinarizerFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L136)

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

[generated/preprocessing/LabelBinarizer.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L47)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Transform binary labels back to multi-class labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelBinarizerInverseTransformOptions`](../interfaces/LabelBinarizerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L166)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelBinarizerSetOutputOptions`](../interfaces/LabelBinarizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L202)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform multi-class labels to binary labels.

The output of transform is sometimes referred to by some authors as the 1-of-K coding scheme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelBinarizerTransformOptions`](../interfaces/LabelBinarizerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L232)
