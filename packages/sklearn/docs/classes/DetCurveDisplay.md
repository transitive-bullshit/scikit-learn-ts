[sklearn](../readme.md) / [Exports](../modules.md) / DetCurveDisplay

# Class: DetCurveDisplay

DET curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html

## Table of contents

### Constructors

- [constructor](DetCurveDisplay.md#constructor)

### Properties

- [\_isDisposed](DetCurveDisplay.md#_isdisposed)
- [\_isInitialized](DetCurveDisplay.md#_isinitialized)
- [\_py](DetCurveDisplay.md#_py)
- [id](DetCurveDisplay.md#id)
- [opts](DetCurveDisplay.md#opts)

### Accessors

- [ax\_](DetCurveDisplay.md#ax_)
- [figure\_](DetCurveDisplay.md#figure_)
- [line\_](DetCurveDisplay.md#line_)
- [py](DetCurveDisplay.md#py)

### Methods

- [dispose](DetCurveDisplay.md#dispose)
- [from\_estimator](DetCurveDisplay.md#from_estimator)
- [from\_predictions](DetCurveDisplay.md#from_predictions)
- [init](DetCurveDisplay.md#init)
- [plot](DetCurveDisplay.md#plot)

## Constructors

### constructor

• **new DetCurveDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DetCurveDisplayOptions`](../interfaces/DetCurveDisplayOptions.md) |

#### Defined in

[generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with DET Curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L250)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L273)

___

### line\_

• `get` **line_**(): `Promise`<`any`\>

DET Curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L227)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L87)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot DET curve given an estimator and data.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayFromEstimatorOptions`](../interfaces/DetCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L106)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot the DET curve given the true and predicted labels.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayFromPredictionsOptions`](../interfaces/DetCurveDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L154)

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

[generated/metrics/DetCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayPlotOptions`](../interfaces/DetCurveDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L197)
