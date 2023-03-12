[sklearn](../readme.md) / [Exports](../modules.md) / ConfusionMatrixDisplayFromPredictionsOptions

# Interface: ConfusionMatrixDisplayFromPredictionsOptions

## Table of contents

### Properties

- [ax](ConfusionMatrixDisplayFromPredictionsOptions.md#ax)
- [cmap](ConfusionMatrixDisplayFromPredictionsOptions.md#cmap)
- [colorbar](ConfusionMatrixDisplayFromPredictionsOptions.md#colorbar)
- [display\_labels](ConfusionMatrixDisplayFromPredictionsOptions.md#display_labels)
- [im\_kw](ConfusionMatrixDisplayFromPredictionsOptions.md#im_kw)
- [include\_values](ConfusionMatrixDisplayFromPredictionsOptions.md#include_values)
- [labels](ConfusionMatrixDisplayFromPredictionsOptions.md#labels)
- [normalize](ConfusionMatrixDisplayFromPredictionsOptions.md#normalize)
- [sample\_weight](ConfusionMatrixDisplayFromPredictionsOptions.md#sample_weight)
- [text\_kw](ConfusionMatrixDisplayFromPredictionsOptions.md#text_kw)
- [values\_format](ConfusionMatrixDisplayFromPredictionsOptions.md#values_format)
- [xticks\_rotation](ConfusionMatrixDisplayFromPredictionsOptions.md#xticks_rotation)
- [y\_pred](ConfusionMatrixDisplayFromPredictionsOptions.md#y_pred)
- [y\_true](ConfusionMatrixDisplayFromPredictionsOptions.md#y_true)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L526)

___

### cmap

• `Optional` **cmap**: `string`

Colormap recognized by matplotlib.

**`Default Value`**

`'viridis'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L521)

___

### colorbar

• `Optional` **colorbar**: `boolean`

Whether or not to add a colorbar to the plot.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L533)

___

### display\_labels

• `Optional` **display\_labels**: [`ArrayLike`](../modules.md#arraylike)

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L495)

___

### im\_kw

• `Optional` **im\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L538)

___

### include\_values

• `Optional` **include\_values**: `boolean`

Includes values in confusion matrix.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L502)

___

### labels

• `Optional` **labels**: [`ArrayLike`](../modules.md#arraylike)

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L480)

___

### normalize

• `Optional` **normalize**: ``"all"`` \| ``"true"`` \| ``"pred"``

Either to normalize the counts display in the matrix:

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L490)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L485)

___

### text\_kw

• `Optional` **text\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L543)

___

### values\_format

• `Optional` **values\_format**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L514)

___

### xticks\_rotation

• `Optional` **xticks\_rotation**: `number` \| ``"vertical"`` \| ``"horizontal"``

Rotation of xtick labels.

**`Default Value`**

`'horizontal'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L509)

___

### y\_pred

• `Optional` **y\_pred**: [`ArrayLike`](../modules.md#arraylike)

The predicted labels given by the method `predict` of an classifier.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L475)

___

### y\_true

• `Optional` **y\_true**: [`ArrayLike`](../modules.md#arraylike)

True labels.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L470)
