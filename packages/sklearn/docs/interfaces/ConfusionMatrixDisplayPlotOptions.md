[sklearn](../readme.md) / [Exports](../modules.md) / ConfusionMatrixDisplayPlotOptions

# Interface: ConfusionMatrixDisplayPlotOptions

## Table of contents

### Properties

- [ax](ConfusionMatrixDisplayPlotOptions.md#ax)
- [cmap](ConfusionMatrixDisplayPlotOptions.md#cmap)
- [colorbar](ConfusionMatrixDisplayPlotOptions.md#colorbar)
- [im\_kw](ConfusionMatrixDisplayPlotOptions.md#im_kw)
- [include\_values](ConfusionMatrixDisplayPlotOptions.md#include_values)
- [text\_kw](ConfusionMatrixDisplayPlotOptions.md#text_kw)
- [values\_format](ConfusionMatrixDisplayPlotOptions.md#values_format)
- [xticks\_rotation](ConfusionMatrixDisplayPlotOptions.md#xticks_rotation)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L576)

___

### cmap

• `Optional` **cmap**: `string`

Colormap recognized by matplotlib.

**`Default Value`**

`'viridis'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L559)

___

### colorbar

• `Optional` **colorbar**: `boolean`

Whether or not to add a colorbar to the plot.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L583)

___

### im\_kw

• `Optional` **im\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L588)

___

### include\_values

• `Optional` **include\_values**: `boolean`

Includes values in confusion matrix.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L552)

___

### text\_kw

• `Optional` **text\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L593)

___

### values\_format

• `Optional` **values\_format**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L571)

___

### xticks\_rotation

• `Optional` **xticks\_rotation**: `number` \| ``"vertical"`` \| ``"horizontal"``

Rotation of xtick labels.

**`Default Value`**

`'horizontal'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L566)
