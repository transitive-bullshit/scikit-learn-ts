# DetCurveDisplay

DET curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new DetCurveDisplay(opts?: object): DetCurveDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator_name?` | `string` | Name of estimator. If `undefined`, the estimator name is not shown. |
| `opts.fnr?` | [`ArrayLike`](../types/ArrayLike.md) | False negative rate. |
| `opts.fpr?` | [`ArrayLike`](../types/ArrayLike.md) | False positive rate. |
| `opts.pos_label?` | `string` \| `number` | The label of the positive class. |

### Returns

[`DetCurveDisplay`](DetCurveDisplay.md)

Defined in:  [generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with DET Curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L361)

Defined in:  [generated/metrics/DetCurveDisplay.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L361)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L384)

Defined in:  [generated/metrics/DetCurveDisplay.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L384)

### line\_

DET Curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L338)

Defined in:  [generated/metrics/DetCurveDisplay.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L338)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/DetCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L50)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L54)

Defined in:  [generated/metrics/DetCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L50) [generated/metrics/DetCurveDisplay.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L54)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L107)

### from\_estimator()

Plot DET curve given an estimator and data.

Read more in the [User Guide](../../visualizations.html#visualizations).

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
| `opts.estimator?` | `any` | Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs?` | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name?` | `string` | Name of DET curve for labeling. If `undefined`, use the name of the estimator. |
| `opts.pos_label?` | `string` \| `number` | The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised. |
| `opts.response_method?` | `"decision_function"` \| `"auto’} default=’auto"` | Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L126)

### from\_predictions()

Plot the DET curve given the true and predicted labels.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs?` | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name?` | `string` | Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`. |
| `opts.pos_label?` | `string` \| `number` | The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y_pred?` | [`ArrayLike`](../types/ArrayLike.md) | Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision\_function` on some classifiers). |
| `opts.y_true?` | [`ArrayLike`](../types/ArrayLike.md) | True labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L217)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L63)

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
| `opts.kwargs?` | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name?` | `string` | Name of DET curve for labeling. If `undefined`, use `estimator\_name` if it is not `undefined`, otherwise no labeling is shown. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L293)
