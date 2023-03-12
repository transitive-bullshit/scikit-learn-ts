[sklearn](../readme.md) / [Exports](../modules.md) / PredictionErrorDisplay

# Class: PredictionErrorDisplay

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from\_estimator`](#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html

## Table of contents

### Constructors

- [constructor](PredictionErrorDisplay.md#constructor)

### Properties

- [\_isDisposed](PredictionErrorDisplay.md#_isdisposed)
- [\_isInitialized](PredictionErrorDisplay.md#_isinitialized)
- [\_py](PredictionErrorDisplay.md#_py)
- [id](PredictionErrorDisplay.md#id)
- [opts](PredictionErrorDisplay.md#opts)

### Accessors

- [ax\_](PredictionErrorDisplay.md#ax_)
- [errors\_lines\_](PredictionErrorDisplay.md#errors_lines_)
- [figure\_](PredictionErrorDisplay.md#figure_)
- [line\_](PredictionErrorDisplay.md#line_)
- [py](PredictionErrorDisplay.md#py)
- [scatter\_](PredictionErrorDisplay.md#scatter_)

### Methods

- [dispose](PredictionErrorDisplay.md#dispose)
- [from\_estimator](PredictionErrorDisplay.md#from_estimator)
- [from\_predictions](PredictionErrorDisplay.md#from_predictions)
- [init](PredictionErrorDisplay.md#init)
- [plot](PredictionErrorDisplay.md#plot)

## Constructors

### constructor

• **new PredictionErrorDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PredictionErrorDisplayOptions`](../interfaces/PredictionErrorDisplayOptions.md) |

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L21)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with the different matplotlib axis.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L315)

___

### errors\_lines\_

• `get` **errors_lines_**(): `Promise`<`any`\>

Residual lines. If `with\_errors=False`, then it is set to `undefined`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L261)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the scatter and lines.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L342)

___

### line\_

• `get` **line_**(): `Promise`<`any`\>

Optimal line representing `y\_true \== y\_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L234)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L36)

___

### scatter\_

• `get` **scatter_**(): `Promise`<`any`\>

Scatter data points.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L288)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L91)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot the prediction error given a regressor and some data.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayFromEstimatorOptions`](../interfaces/PredictionErrorDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L110)

___

### from\_predictions

▸ **from_predictions**(`opts`): `Promise`<`any`\>

Plot the prediction error given the true and predicted targets.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayFromPredictionsOptions`](../interfaces/PredictionErrorDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L157)

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

[generated/metrics/PredictionErrorDisplay.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L45)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayPlotOptions`](../interfaces/PredictionErrorDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L202)
