[sklearn](../readme.md) / [Exports](../modules.md) / PartialDependenceDisplayPlotOptions

# Interface: PartialDependenceDisplayPlotOptions

## Table of contents

### Properties

- [ax](PartialDependenceDisplayPlotOptions.md#ax)
- [bar\_kw](PartialDependenceDisplayPlotOptions.md#bar_kw)
- [centered](PartialDependenceDisplayPlotOptions.md#centered)
- [contour\_kw](PartialDependenceDisplayPlotOptions.md#contour_kw)
- [heatmap\_kw](PartialDependenceDisplayPlotOptions.md#heatmap_kw)
- [ice\_lines\_kw](PartialDependenceDisplayPlotOptions.md#ice_lines_kw)
- [line\_kw](PartialDependenceDisplayPlotOptions.md#line_kw)
- [n\_cols](PartialDependenceDisplayPlotOptions.md#n_cols)
- [pd\_line\_kw](PartialDependenceDisplayPlotOptions.md#pd_line_kw)
- [pdp\_lim](PartialDependenceDisplayPlotOptions.md#pdp_lim)

## Properties

### ax

• `Optional` **ax**: `any`

and a grid of partial dependence plots will be drawn within these bounds. The `n\_cols` parameter controls the number of columns in the grid.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L654)

___

### bar\_kw

• `Optional` **bar\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.bar` call for one-way categorical partial dependence plots.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L686)

___

### centered

• `Optional` **centered**: `boolean`

If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

**`Default Value`**

`false`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L703)

___

### contour\_kw

• `Optional` **contour\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.contourf` call for two-way partial dependence plots.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L681)

___

### heatmap\_kw

• `Optional` **heatmap\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.imshow` call for two-way categorical partial dependence plots.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L691)

___

### ice\_lines\_kw

• `Optional` **ice\_lines\_kw**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice\_lines\_kw` takes priority over `line\_kw`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:671](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L671)

___

### line\_kw

• `Optional` **line\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:666](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L666)

___

### n\_cols

• `Optional` **n\_cols**: `number`

The maximum number of columns in the grid plot. Only active when `ax` is a single axes or `undefined`.

**`Default Value`**

`3`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:661](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L661)

___

### pd\_line\_kw

• `Optional` **pd\_line\_kw**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd\_line\_kw` takes priority over `line\_kw`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L676)

___

### pdp\_lim

• `Optional` **pdp\_lim**: `any`

Global min and max average predictions, such that all plots will have the same scale and y limits. `pdp\_lim\[1\]` is the global min and max for single partial dependence curves. `pdp\_lim\[2\]` is the global min and max for two-way partial dependence curves. If `undefined` (default), the limit will be inferred from the global minimum and maximum of all predictions.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L696)
