[sklearn](../readme.md) / [Exports](../modules.md) / PartialDependenceDisplay

# Class: PartialDependenceDisplay

Partial Dependence Plot (PDP).

This can also display individual partial dependencies which are often referred to as: Individual Condition Expectation (ICE).

It is recommended to use [`from\_estimator`](#sklearn.inspection.PartialDependenceDisplay.from_estimator "sklearn.inspection.PartialDependenceDisplay.from_estimator") to create a [`PartialDependenceDisplay`](#sklearn.inspection.PartialDependenceDisplay "sklearn.inspection.PartialDependenceDisplay"). All parameters are stored as attributes.

Read more in [Advanced Plotting With Partial Dependence](../../auto_examples/miscellaneous/plot_partial_dependence_visualization_api.html#sphx-glr-auto-examples-miscellaneous-plot-partial-dependence-visualization-api-py) and the [User Guide](../partial_dependence.html#partial-dependence).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.inspection.PartialDependenceDisplay.html

## Table of contents

### Constructors

- [constructor](PartialDependenceDisplay.md#constructor)

### Properties

- [\_isDisposed](PartialDependenceDisplay.md#_isdisposed)
- [\_isInitialized](PartialDependenceDisplay.md#_isinitialized)
- [\_py](PartialDependenceDisplay.md#_py)
- [id](PartialDependenceDisplay.md#id)
- [opts](PartialDependenceDisplay.md#opts)

### Accessors

- [axes\_](PartialDependenceDisplay.md#axes_)
- [bars\_](PartialDependenceDisplay.md#bars_)
- [bounding\_ax\_](PartialDependenceDisplay.md#bounding_ax_)
- [contours\_](PartialDependenceDisplay.md#contours_)
- [deciles\_hlines\_](PartialDependenceDisplay.md#deciles_hlines_)
- [deciles\_vlines\_](PartialDependenceDisplay.md#deciles_vlines_)
- [figure\_](PartialDependenceDisplay.md#figure_)
- [heatmaps\_](PartialDependenceDisplay.md#heatmaps_)
- [lines\_](PartialDependenceDisplay.md#lines_)
- [py](PartialDependenceDisplay.md#py)

### Methods

- [dispose](PartialDependenceDisplay.md#dispose)
- [from\_estimator](PartialDependenceDisplay.md#from_estimator)
- [init](PartialDependenceDisplay.md#init)
- [plot](PartialDependenceDisplay.md#plot)

## Constructors

### constructor

• **new PartialDependenceDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PartialDependenceDisplayOptions`](../interfaces/PartialDependenceDisplayOptions.md) |

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L21)

## Accessors

### axes\_

• `get` **axes_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `axes\_\[i, j\]` is the axes on the i-th row and j-th column. If `ax` is a list of axes, `axes\_\[i\]` is the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes in that position.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L246)

___

### bars\_

• `get` **bars_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `bars\_\[i, j\]` is the partial dependence bar plot on the i-th row and j-th column (for a categorical feature). If `ax` is a list of axes, `bars\_\[i\]` is the partial dependence bar plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a bar plot.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L381)

___

### bounding\_ax\_

• `get` **bounding_ax_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, the `bounding\_ax\_` is the axes where the grid of partial dependence plots are drawn. If `ax` is a list of axes or a numpy array of axes, `bounding\_ax\_` is `undefined`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L219)

___

### contours\_

• `get` **contours_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `contours\_\[i, j\]` is the partial dependence plot on the i-th row and j-th column. If `ax` is a list of axes, `contours\_\[i\]` is the partial dependence plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a contour plot.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L354)

___

### deciles\_hlines\_

• `get` **deciles_hlines_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the y axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a 2-way plot.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L327)

___

### deciles\_vlines\_

• `get` **deciles_vlines_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the x axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a PDP plot.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L300)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing partial dependence plots.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L435)

___

### heatmaps\_

• `get` **heatmaps_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `heatmaps\_\[i, j\]` is the partial dependence heatmap on the i-th row and j-th column (for a pair of categorical features) . If `ax` is a list of axes, `heatmaps\_\[i\]` is the partial dependence heatmap corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a heatmap.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L408)

___

### lines\_

• `get` **lines_**(): `Promise`<`any`\>

If `ax` is an axes or `undefined`, `lines\_\[i, j\]` is the partial dependence curve on the i-th row and j-th column. If `ax` is a list of axes, `lines\_\[i\]` is the partial dependence curve corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a line plot.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L273)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L97)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Partial dependence (PD) and individual conditional expectation (ICE) plots.

Partial dependence plots, individual conditional expectation plots or an overlay of both of them can be plotted by setting the `kind` parameter. The `len(features)` plots are arranged in a grid with `n\_cols` columns. Two-way partial dependence plots are plotted as contour plots. The deciles of the feature values will be shown with tick marks on the x-axes for one-way plots, and on both axes for two-way plots.

Read more in the [User Guide](../partial_dependence.html#partial-dependence).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PartialDependenceDisplayFromEstimatorOptions`](../interfaces/PartialDependenceDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L118)

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

[generated/inspection/PartialDependenceDisplay.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L45)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot partial dependence plots.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PartialDependenceDisplayPlotOptions`](../interfaces/PartialDependenceDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L181)
