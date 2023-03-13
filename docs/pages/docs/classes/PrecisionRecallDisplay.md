# PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a `PredictionRecallDisplay`. All parameters are stored as attributes.

Read more in the User Guide.

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
| `opts.pos_label?` | `string` \| `number` | The class considered as the positive class. If `undefined`, the class will not be shown in the legend. |
| `opts.precision?` | `ArrayLike` | Precision values. |
| `opts.recall?` | `ArrayLike` | Recall values. |

### Returns

[`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L120)

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
| `opts.X?` | `ArrayLike` | Input values. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, no name is used. |
| `opts.pos_label?` | `string` \| `number` | The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class. |
| `opts.response_method?` | `"auto"` \| `"predict_proba"` \| `"decision_function"` | Specifies whether to use predict\_proba or decision\_function as the target response. If set to ‘auto’, predict\_proba is tried first and if it does not exist decision\_function is tried next.  `Default Value`  `'auto'` |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L137)

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
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name for labeling curve. If `undefined`, name will be set to `"Classifier"`. |
| `opts.pos_label?` | `string` \| `number` | The class considered as the positive class when computing the precision and recall metrics. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y_pred?` | `ArrayLike` | Estimated probabilities or output of decision function. |
| `opts.y_true?` | `ArrayLike` | True binary labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L229)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L68)

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
| `opts.kwargs?` | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name?` | `string` | Name of precision recall curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L309)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19)

## Accessors

### ax\_

Axes with precision recall curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PrecisionRecallDisplay.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L383)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PrecisionRecallDisplay.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L410)

### line\_

Precision recall curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/PrecisionRecallDisplay.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L356)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L55)

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

Defined in: [generated/metrics/PrecisionRecallDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L59)
