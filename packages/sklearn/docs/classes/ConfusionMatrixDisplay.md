# ConfusionMatrixDisplay

Confusion Matrix visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new ConfusionMatrixDisplay(opts?: object): ConfusionMatrixDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.confusion_matrix?` | [`ArrayLike`](../types/ArrayLike.md)[] | Confusion matrix. |
| `opts.display_labels?` | [`ArrayLike`](../types/ArrayLike.md) | Display labels for plot. If `undefined`, display labels are set from 0 to `n\_classes \- 1`. |

### Returns

[`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L25)

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

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L102)

### from\_estimator()

Plot Confusion Matrix given an estimator and some data.

Read more in the [User Guide](../model_evaluation.html#confusion-matrix).

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
| `opts.cmap?` | `string` | Colormap recognized by matplotlib.  `Default Value`  `'viridis'` |
| `opts.colorbar?` | `boolean` | Whether or not to add a colorbar to the plot.  `Default Value`  `true` |
| `opts.display_labels?` | [`ArrayLike`](../types/ArrayLike.md) | Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used. |
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.im_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.imshow` call. |
| `opts.include_values?` | `boolean` | Includes values in confusion matrix.  `Default Value`  `true` |
| `opts.labels?` | [`ArrayLike`](../types/ArrayLike.md) | List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order. |
| `opts.normalize?` | `"all"` \| `"true"` \| `"pred"` | Either to normalize the counts display in the matrix: |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.text_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.text` call. |
| `opts.values_format?` | `string` | Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter. |
| `opts.xticks_rotation?` | `number` \| `"vertical"` \| `"horizontal"` | Rotation of xtick labels.  `Default Value`  `'horizontal'` |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L121)

### from\_predictions()

Plot Confusion Matrix given true and predicted labels.

Read more in the [User Guide](../model_evaluation.html#confusion-matrix).

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.cmap?` | `string` | Colormap recognized by matplotlib.  `Default Value`  `'viridis'` |
| `opts.colorbar?` | `boolean` | Whether or not to add a colorbar to the plot.  `Default Value`  `true` |
| `opts.display_labels?` | [`ArrayLike`](../types/ArrayLike.md) | Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used. |
| `opts.im_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.imshow` call. |
| `opts.include_values?` | `boolean` | Includes values in confusion matrix.  `Default Value`  `true` |
| `opts.labels?` | [`ArrayLike`](../types/ArrayLike.md) | List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order. |
| `opts.normalize?` | `"all"` \| `"true"` \| `"pred"` | Either to normalize the counts display in the matrix: |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.text_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.text` call. |
| `opts.values_format?` | `string` | Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter. |
| `opts.xticks_rotation?` | `number` \| `"vertical"` \| `"horizontal"` | Rotation of xtick labels.  `Default Value`  `'horizontal'` |
| `opts.y_pred?` | [`ArrayLike`](../types/ArrayLike.md) | The predicted labels given by the method `predict` of an classifier. |
| `opts.y_true?` | [`ArrayLike`](../types/ArrayLike.md) | True labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L261)

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

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L53)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.cmap?` | `string` | Colormap recognized by matplotlib.  `Default Value`  `'viridis'` |
| `opts.colorbar?` | `boolean` | Whether or not to add a colorbar to the plot.  `Default Value`  `true` |
| `opts.im_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.imshow` call. |
| `opts.include_values?` | `boolean` | Includes values in confusion matrix.  `Default Value`  `true` |
| `opts.text_kw?` | `any` | Dict with keywords passed to `matplotlib.pyplot.text` call. |
| `opts.values_format?` | `string` | Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter. |
| `opts.xticks_rotation?` | `number` \| `"vertical"` \| `"horizontal"` | Rotation of xtick labels.  `Default Value`  `'horizontal'` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L394)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L19)

## Accessors

### ax\_

Axes with confusion matrix.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L532)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L532)

### figure\_

Figure containing the confusion matrix.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L559)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L559)

### im\_

Image representing the confusion matrix.

#### Signature

```ts
im_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L478)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L478)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L40)

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

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L44)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L40) [generated/metrics/ConfusionMatrixDisplay.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L44)

### text\_

Array of matplotlib axes. `undefined` if `include\_values` is false.

#### Signature

```ts
text_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L505)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L505)
