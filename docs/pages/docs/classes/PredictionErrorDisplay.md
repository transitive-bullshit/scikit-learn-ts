# PredictionErrorDisplay

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from\_estimator`](#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new PredictionErrorDisplay(opts?: object): PredictionErrorDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.y_pred?` | `ArrayLike` | Prediction values. |
| `opts.y_true?` | `ArrayLike` | True values. |

### Returns

[`PredictionErrorDisplay`](PredictionErrorDisplay.md)

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L23)

### id

> `string`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L20)

### opts

> `any`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L21)

## Accessors

### ax\_

Axes with the different matplotlib axis.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L436)

### errors\_lines\_

Residual lines. If `with\_errors=False`, then it is set to `undefined`.

#### Signature

```ts
errors_lines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L382)

### figure\_

Figure containing the scatter and lines.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L463)

### line\_

Optimal line representing `y\_true \== y\_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L355)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L42)

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

Defined in: [generated/metrics/PredictionErrorDisplay.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L46)

### scatter\_

Scatter data points.

#### Signature

```ts
scatter_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PredictionErrorDisplay.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L409)

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

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L101)

### from\_estimator()

Plot the prediction error given a regressor and some data.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

#### Signature

```ts
from_estimator(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input values. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator?` | `any` | Fitted regressor or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a regressor. |
| `opts.kind?` | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw:  `Default Value`  `'residual_vs_predicted'` |
| `opts.line_kwargs?` | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.random_state?` | `number` | Controls the randomness when `subsample` is not `undefined`. See Glossary for details. |
| `opts.scatter_kwargs?` | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |
| `opts.subsample?` | `number` | Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.  `Default Value`  `1` |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L120)

### from\_predictions()

Plot the prediction error given the true and predicted targets.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kind?` | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw:  `Default Value`  `'residual_vs_predicted'` |
| `opts.line_kwargs?` | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.random_state?` | `number` | Controls the randomness when `subsample` is not `undefined`. See Glossary for details. |
| `opts.scatter_kwargs?` | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |
| `opts.subsample?` | `number` | Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.  `Default Value`  `1` |
| `opts.y_pred?` | `ArrayLike` | Predicted target values. |
| `opts.y_true?` | `ArrayLike` | True target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L214)

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

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L55)

### plot()

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kind?` | `"actual_vs_predicted"` \| `"residual_vs_predicted"` | The type of plot to draw:  `Default Value`  `'residual_vs_predicted'` |
| `opts.line_kwargs?` | `any` | Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line. |
| `opts.scatter_kwargs?` | `any` | Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L301)
