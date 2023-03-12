[sklearn](../readme.md) / [Exports](../modules.md) / CalibrationDisplay

# Class: CalibrationDisplay

Calibration curve (also known as reliability diagram) visualization.

It is recommended to use [`from\_estimator`](#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from\_predictions`](#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html

## Table of contents

### Constructors

- [constructor](CalibrationDisplay.md#constructor)

### Properties

- [\_isDisposed](CalibrationDisplay.md#_isdisposed)
- [\_isInitialized](CalibrationDisplay.md#_isinitialized)
- [\_py](CalibrationDisplay.md#_py)
- [id](CalibrationDisplay.md#id)
- [opts](CalibrationDisplay.md#opts)

### Accessors

- [ax\_](CalibrationDisplay.md#ax_)
- [figure\_](CalibrationDisplay.md#figure_)
- [line\_](CalibrationDisplay.md#line_)
- [py](CalibrationDisplay.md#py)

### Methods

- [dispose](CalibrationDisplay.md#dispose)
- [from\_estimator](CalibrationDisplay.md#from_estimator)
- [from\_predictions](CalibrationDisplay.md#from_predictions)
- [init](CalibrationDisplay.md#init)
- [plot](CalibrationDisplay.md#plot)

## Constructors

### constructor

• **new CalibrationDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CalibrationDisplayOptions`](../interfaces/CalibrationDisplayOptions.md) |

#### Defined in

[generated/calibration/CalibrationDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with calibration curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L276)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L303)

___

### line\_

• `get` **line_**(): `Promise`<`any`\>

Calibration curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L249)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L97)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot calibration curve using a binary classifier and data.

A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayFromEstimatorOptions`](../interfaces/CalibrationDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L120)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot calibration curve using true labels and predicted probabilities.

Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayFromPredictionsOptions`](../interfaces/CalibrationDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L170)

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

[generated/calibration/CalibrationDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayPlotOptions`](../interfaces/CalibrationDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L217)
