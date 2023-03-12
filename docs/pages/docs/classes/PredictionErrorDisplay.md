# PredictionErrorDisplay

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from\_estimator`](#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new PredictionErrorDisplay(opts?: PredictionErrorDisplayOptions): PredictionErrorDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PredictionErrorDisplayOptions`](../interfaces/PredictionErrorDisplayOptions.md) |

### Returns

[`PredictionErrorDisplay`](PredictionErrorDisplay.md)

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L23)

### id

> `string`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L20)

### opts

> `any`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L21)

## Accessors

### ax\_

Axes with the different matplotlib axis.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L315)

### errors\_lines\_

Residual lines. If `with\_errors=False`, then it is set to `undefined`.

#### Signature

```ts
errors_lines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L261)

### figure\_

Figure containing the scatter and lines.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L342)

### line\_

Optimal line representing `y\_true \== y\_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L234)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L32)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/metrics/PredictionErrorDisplay.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L36)

### scatter\_

Scatter data points.

#### Signature

```ts
scatter_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L288)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L91)

### from\_estimator()

Plot the prediction error given a regressor and some data.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

#### Signature

```ts
from_estimator(opts: PredictionErrorDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayFromEstimatorOptions`](../interfaces/PredictionErrorDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L110)

### from\_predictions()

Plot the prediction error given the true and predicted targets.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

#### Signature

```ts
from_predictions(opts: PredictionErrorDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayFromPredictionsOptions`](../interfaces/PredictionErrorDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L157)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L45)

### plot()

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Signature

```ts
plot(opts: PredictionErrorDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredictionErrorDisplayPlotOptions`](../interfaces/PredictionErrorDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L202)
