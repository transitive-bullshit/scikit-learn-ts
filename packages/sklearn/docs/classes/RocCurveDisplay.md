[sklearn](../readme.md) / [Exports](../modules.md) / RocCurveDisplay

# Class: RocCurveDisplay

ROC Curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html

## Table of contents

### Constructors

- [constructor](RocCurveDisplay.md#constructor)

### Properties

- [\_isDisposed](RocCurveDisplay.md#_isdisposed)
- [\_isInitialized](RocCurveDisplay.md#_isinitialized)
- [\_py](RocCurveDisplay.md#_py)
- [id](RocCurveDisplay.md#id)
- [opts](RocCurveDisplay.md#opts)

### Accessors

- [ax\_](RocCurveDisplay.md#ax_)
- [figure\_](RocCurveDisplay.md#figure_)
- [line\_](RocCurveDisplay.md#line_)
- [py](RocCurveDisplay.md#py)

### Methods

- [dispose](RocCurveDisplay.md#dispose)
- [from\_estimator](RocCurveDisplay.md#from_estimator)
- [from\_predictions](RocCurveDisplay.md#from_predictions)
- [init](RocCurveDisplay.md#init)
- [plot](RocCurveDisplay.md#plot)

## Constructors

### constructor

• **new RocCurveDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RocCurveDisplayOptions`](../interfaces/RocCurveDisplayOptions.md) |

#### Defined in

[generated/metrics/RocCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with ROC Curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L258)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L281)

___

### line\_

• `get` **line_**(): `Promise`<`any`\>

ROC Curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L235)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L89)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Create a ROC Curve display from an estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayFromEstimatorOptions`](../interfaces/RocCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L106)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot ROC curve given the true and predicted values.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayFromPredictionsOptions`](../interfaces/RocCurveDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L156)

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

[generated/metrics/RocCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayPlotOptions`](../interfaces/RocCurveDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L205)
