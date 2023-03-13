# PartialDependenceDisplay

Partial Dependence Plot (PDP).

This can also display individual partial dependencies which are often referred to as: Individual Condition Expectation (ICE).

It is recommended to use [`from\_estimator`](#sklearn.inspection.PartialDependenceDisplay.from_estimator "sklearn.inspection.PartialDependenceDisplay.from_estimator") to create a [`PartialDependenceDisplay`](#sklearn.inspection.PartialDependenceDisplay "sklearn.inspection.PartialDependenceDisplay"). All parameters are stored as attributes.

Read more in Advanced Plotting With Partial Dependence and the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.PartialDependenceDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new PartialDependenceDisplay(opts?: PartialDependenceDisplayOptions): PartialDependenceDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `PartialDependenceDisplayOptions` |

### Returns

[`PartialDependenceDisplay`](PartialDependenceDisplay.md)

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L23)

### id

> `string`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L20)

### opts

> `any`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L21)

## Accessors

### axes\_

If `ax` is an axes or `undefined`, `axes\_\[i, j\]` is the axes on the i-th row and j-th column. If `ax` is a list of axes, `axes\_\[i\]` is the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes in that position.

#### Signature

```ts
axes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L246)

### bars\_

If `ax` is an axes or `undefined`, `bars\_\[i, j\]` is the partial dependence bar plot on the i-th row and j-th column (for a categorical feature). If `ax` is a list of axes, `bars\_\[i\]` is the partial dependence bar plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a bar plot.

#### Signature

```ts
bars_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L381)

### bounding\_ax\_

If `ax` is an axes or `undefined`, the `bounding\_ax\_` is the axes where the grid of partial dependence plots are drawn. If `ax` is a list of axes or a numpy array of axes, `bounding\_ax\_` is `undefined`.

#### Signature

```ts
bounding_ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L219)

### contours\_

If `ax` is an axes or `undefined`, `contours\_\[i, j\]` is the partial dependence plot on the i-th row and j-th column. If `ax` is a list of axes, `contours\_\[i\]` is the partial dependence plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a contour plot.

#### Signature

```ts
contours_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L354)

### deciles\_hlines\_

If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the y axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a 2-way plot.

#### Signature

```ts
deciles_hlines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L327)

### deciles\_vlines\_

If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the x axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a PDP plot.

#### Signature

```ts
deciles_vlines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L300)

### figure\_

Figure containing partial dependence plots.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L435)

### heatmaps\_

If `ax` is an axes or `undefined`, `heatmaps\_\[i, j\]` is the partial dependence heatmap on the i-th row and j-th column (for a pair of categorical features) . If `ax` is a list of axes, `heatmaps\_\[i\]` is the partial dependence heatmap corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a heatmap.

#### Signature

```ts
heatmaps_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L408)

### lines\_

If `ax` is an axes or `undefined`, `lines\_\[i, j\]` is the partial dependence curve on the i-th row and j-th column. If `ax` is a list of axes, `lines\_\[i\]` is the partial dependence curve corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a line plot.

#### Signature

```ts
lines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/PartialDependenceDisplay.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L273)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L32)

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

Defined in: [generated/inspection/PartialDependenceDisplay.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L36)

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

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L97)

### from\_estimator()

Partial dependence (PD) and individual conditional expectation (ICE) plots.

Partial dependence plots, individual conditional expectation plots or an overlay of both of them can be plotted by setting the `kind` parameter. The `len(features)` plots are arranged in a grid with `n\_cols` columns. Two-way partial dependence plots are plotted as contour plots. The deciles of the feature values will be shown with tick marks on the x-axes for one-way plots, and on both axes for two-way plots.

Read more in the User Guide.

#### Signature

```ts
from_estimator(opts: PartialDependenceDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PartialDependenceDisplayFromEstimatorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L118)

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

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L45)

### plot()

Plot partial dependence plots.

#### Signature

```ts
plot(opts: PartialDependenceDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PartialDependenceDisplayPlotOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/PartialDependenceDisplay.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L181)
