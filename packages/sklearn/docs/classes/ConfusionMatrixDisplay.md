[sklearn](../readme.md) / [Exports](../modules.md) / ConfusionMatrixDisplay

# Class: ConfusionMatrixDisplay

Confusion Matrix visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html

## Table of contents

### Constructors

- [constructor](ConfusionMatrixDisplay.md#constructor)

### Properties

- [\_isDisposed](ConfusionMatrixDisplay.md#_isdisposed)
- [\_isInitialized](ConfusionMatrixDisplay.md#_isinitialized)
- [\_py](ConfusionMatrixDisplay.md#_py)
- [id](ConfusionMatrixDisplay.md#id)
- [opts](ConfusionMatrixDisplay.md#opts)

### Accessors

- [ax\_](ConfusionMatrixDisplay.md#ax_)
- [figure\_](ConfusionMatrixDisplay.md#figure_)
- [im\_](ConfusionMatrixDisplay.md#im_)
- [py](ConfusionMatrixDisplay.md#py)
- [text\_](ConfusionMatrixDisplay.md#text_)

### Methods

- [dispose](ConfusionMatrixDisplay.md#dispose)
- [from\_estimator](ConfusionMatrixDisplay.md#from_estimator)
- [from\_predictions](ConfusionMatrixDisplay.md#from_predictions)
- [init](ConfusionMatrixDisplay.md#init)
- [plot](ConfusionMatrixDisplay.md#plot)

## Constructors

### constructor

• **new ConfusionMatrixDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ConfusionMatrixDisplayOptions`](../interfaces/ConfusionMatrixDisplayOptions.md) |

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with confusion matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L317)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the confusion matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L344)

___

### im\_

• `get` **im_**(): `Promise`<`any`\>

Image representing the confusion matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L263)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L34)

___

### text\_

• `get` **text_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Array of matplotlib axes. `undefined` if `include\_values` is false.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L290)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L92)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot Confusion Matrix given an estimator and some data.

Read more in the [User Guide](../model_evaluation.html#confusion-matrix).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConfusionMatrixDisplayFromEstimatorOptions`](../interfaces/ConfusionMatrixDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L111)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot Confusion Matrix given true and predicted labels.

Read more in the [User Guide](../model_evaluation.html#confusion-matrix).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConfusionMatrixDisplayFromPredictionsOptions`](../interfaces/ConfusionMatrixDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L170)

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

[generated/metrics/ConfusionMatrixDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConfusionMatrixDisplayPlotOptions`](../interfaces/ConfusionMatrixDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L227)
