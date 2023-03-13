# CalibrationDisplay

Calibration curve (also known as reliability diagram) visualization.

It is recommended to use [`from\_estimator`](#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from\_predictions`](#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new CalibrationDisplay(opts?: object): CalibrationDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator_name?` | `string` | Name of estimator. If `undefined`, the estimator name is not shown. |
| `opts.pos_label?` | `string` \| `number` | The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.prob_pred?` | [`ArrayLike`](../types/ArrayLike.md) | The mean predicted probability in each bin. |
| `opts.prob_true?` | [`ArrayLike`](../types/ArrayLike.md) | The proportion of samples whose class is the positive class (fraction of positives), in each bin. |
| `opts.y_prob?` | [`ArrayLike`](../types/ArrayLike.md) | Probability estimates for the positive class, for each sample. |

### Returns

[`CalibrationDisplay`](CalibrationDisplay.md)

Defined in:  [generated/calibration/CalibrationDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibrationDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibrationDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/calibration/CalibrationDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/calibration/CalibrationDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/calibration/CalibrationDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L19)

## Accessors

### ax\_

Axes with calibration curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L426)

Defined in:  [generated/calibration/CalibrationDisplay.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L426)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L453)

Defined in:  [generated/calibration/CalibrationDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L453)

### line\_

Calibration curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L399)

Defined in:  [generated/calibration/CalibrationDisplay.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L399)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/calibration/CalibrationDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L55)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L59)

Defined in:  [generated/calibration/CalibrationDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L55) [generated/calibration/CalibrationDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L59)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L122)

### from\_estimator()

Plot calibration curve using a binary classifier and data.

A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Signature

```ts
from_estimator(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input values. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict\_proba](../../glossary.html#term-predict_proba) method. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)"). |
| `opts.n_bins?` | `number` | Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.  `Default Value`  `5` |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, the name of the estimator is used. |
| `opts.pos_label?` | `string` \| `number` | The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.ref_line?` | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier.  `Default Value`  `true` |
| `opts.strategy?` | `"uniform"` \| `"quantile"` | Strategy used to define the widths of the bins.  `Default Value`  `'uniform'` |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Binary target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L145)

### from\_predictions()

Plot calibration curve using true labels and predicted probabilities.

Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)"). |
| `opts.n_bins?` | `number` | Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.  `Default Value`  `5` |
| `opts.name?` | `string` | Name for labeling curve. |
| `opts.pos_label?` | `string` \| `number` | The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.ref_line?` | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier.  `Default Value`  `true` |
| `opts.strategy?` | `"uniform"` \| `"quantile"` | Strategy used to define the widths of the bins.  `Default Value`  `'uniform'` |
| `opts.y_prob?` | [`ArrayLike`](../types/ArrayLike.md) | The predicted probabilities of the positive class. |
| `opts.y_true?` | [`ArrayLike`](../types/ArrayLike.md) | True labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L249)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L68)

### plot()

Plot visualization.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)"). |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown. |
| `opts.ref_line?` | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L345)
