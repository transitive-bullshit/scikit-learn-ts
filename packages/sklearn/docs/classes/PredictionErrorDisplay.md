# Class: PredictionErrorDisplay

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#visualization-regression-evaluation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html)

## Constructors

### new PredictionErrorDisplay()

> **new PredictionErrorDisplay**(`opts`?): [`PredictionErrorDisplay`](PredictionErrorDisplay.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.y_pred`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Prediction values. |
| `opts.y_true`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True values. |

#### Returns

[`PredictionErrorDisplay`](PredictionErrorDisplay.md)

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/PredictionErrorDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/PredictionErrorDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/PredictionErrorDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L23) |
| `id` | `string` | `undefined` | [generated/metrics/PredictionErrorDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L20) |
| `opts` | `any` | `undefined` | [generated/metrics/PredictionErrorDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L21) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with the different matplotlib axis.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L408)

***

### errors\_lines\_

#### Get Signature

> **get** **errors\_lines\_**(): `Promise`\<`any`\>

Residual lines. If `with_errors=False`, then it is set to `undefined`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L354)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the scatter and lines.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L435)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Optimal line representing `y_true \== y_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L327)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L42)

***

### scatter\_

#### Get Signature

> **get** **scatter\_**(): `Promise`\<`any`\>

Scatter data points.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L381)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L98)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot the prediction error given a regressor and some data.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#visualization-regression-evaluation).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator`? | `any` | Fitted regressor or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a regressor. |
| `opts.kind`? | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw: |
| `opts.line_kwargs`? | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.random_state`? | `number` | Controls the randomness when `subsample` is not `undefined`. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details. |
| `opts.scatter_kwargs`? | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |
| `opts.subsample`? | `number` | Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, 1000 samples or less will be displayed. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Input values. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L117)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot the prediction error given the true and predicted targets.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#visualization-regression-evaluation).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kind`? | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw: |
| `opts.line_kwargs`? | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.random_state`? | `number` | Controls the randomness when `subsample` is not `undefined`. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details. |
| `opts.scatter_kwargs`? | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |
| `opts.subsample`? | `number` | Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, 1000 samples or less will be displayed. |
| `opts.y_pred`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Predicted target values. |
| `opts.y_true`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L199)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L55)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kind`? | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw: |
| `opts.line_kwargs`? | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.scatter_kwargs`? | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L276)
