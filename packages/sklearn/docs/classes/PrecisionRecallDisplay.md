# PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new PrecisionRecallDisplay(opts?: object): PrecisionRecallDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.average_precision?` | `number` | Average precision. If `undefined`, the average precision is not shown. |
| `opts.estimator_name?` | `string` | Name of estimator. If `undefined`, then the estimator name is not shown. |
| `opts.pos_label?` | `string` \| `number` \| `boolean` | The class considered as the positive class. If `undefined`, the class will not be shown in the legend. |
| `opts.precision?` | [`ArrayLike`](../types/ArrayLike.md) | Precision values. |
| `opts.prevalence_pos_label?` | `number` | The prevalence of the positive label. It is used for plotting the chance level line. If `undefined`, the chance level line will not be plotted even if `plot\_chance\_level` is set to `true` when plotting. |
| `opts.recall?` | [`ArrayLike`](../types/ArrayLike.md) | Recall values. |

### Returns

[`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L129)

### from\_estimator()

Plot precision-recall curve given an estimator and some data.

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
| `opts.chance_level_kw?` | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.drop_intermediate?` | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.  `Default Value`  `false` |
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, no name is used. |
| `opts.plot_chance_level?` | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.  `Default Value`  `false` |
| `opts.pos_label?` | `string` \| `number` \| `boolean` | The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.response_method?` | `"auto"` \| `"predict_proba"` \| `"decision_function"` | Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.  `Default Value`  `'auto'` |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L146)

### from\_predictions()

Plot precision-recall curve given binary class predictions.

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.chance_level_kw?` | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.drop_intermediate?` | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.  `Default Value`  `false` |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, name will be set to `"Classifier"`. |
| `opts.plot_chance_level?` | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.  `Default Value`  `false` |
| `opts.pos_label?` | `string` \| `number` \| `boolean` | The class considered as the positive class when computing the precision and recall metrics. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y_pred?` | [`ArrayLike`](../types/ArrayLike.md) | Estimated probabilities or output of decision function. |
| `opts.y_true?` | [`ArrayLike`](../types/ArrayLike.md) | True binary labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L261)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L73)

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
| `opts.chance_level_kw?` | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name of precision recall curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown. |
| `opts.plot_chance_level?` | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L366)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19)

## Accessors

### ax\_

Axes with precision recall curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L481)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L481)

### chance\_level\_

The chance level line. It is `undefined` if the chance level is not plotted.

#### Signature

```ts
chance_level_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L454)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L454)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L508)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L508)

### line\_

Precision recall curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L60)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L64)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L60) [generated/metrics/PrecisionRecallDisplay.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L64)
