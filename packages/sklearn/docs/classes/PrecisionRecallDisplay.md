[sklearn](../readme.md) / [Exports](../modules.md) / PrecisionRecallDisplay

# Class: PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a `PredictionRecallDisplay`. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html

## Table of contents

### Constructors

- [constructor](PrecisionRecallDisplay.md#constructor)

### Properties

- [\_isDisposed](PrecisionRecallDisplay.md#_isdisposed)
- [\_isInitialized](PrecisionRecallDisplay.md#_isinitialized)
- [\_py](PrecisionRecallDisplay.md#_py)
- [id](PrecisionRecallDisplay.md#id)
- [opts](PrecisionRecallDisplay.md#opts)

### Accessors

- [ax\_](PrecisionRecallDisplay.md#ax_)
- [figure\_](PrecisionRecallDisplay.md#figure_)
- [line\_](PrecisionRecallDisplay.md#line_)
- [py](PrecisionRecallDisplay.md#py)

### Methods

- [dispose](PrecisionRecallDisplay.md#dispose)
- [from\_estimator](PrecisionRecallDisplay.md#from_estimator)
- [from\_predictions](PrecisionRecallDisplay.md#from_predictions)
- [init](PrecisionRecallDisplay.md#init)
- [plot](PrecisionRecallDisplay.md#plot)

## Constructors

### constructor

• **new PrecisionRecallDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PrecisionRecallDisplayOptions`](../interfaces/PrecisionRecallDisplayOptions.md) |

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with precision recall curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L265)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L292)

___

### line\_

• `get` **line_**(): `Promise`<`any`\>

Precision recall curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L238)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L95)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot precision-recall curve given an estimator and some data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayFromEstimatorOptions`](../interfaces/PrecisionRecallDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L112)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot precision-recall curve given binary class predictions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayFromPredictionsOptions`](../interfaces/PrecisionRecallDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L159)

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

[generated/metrics/PrecisionRecallDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayPlotOptions`](../interfaces/PrecisionRecallDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L206)
