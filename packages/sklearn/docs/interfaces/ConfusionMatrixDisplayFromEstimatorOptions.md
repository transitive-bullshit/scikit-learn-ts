[sklearn](../readme.md) / [Exports](../modules.md) / ConfusionMatrixDisplayFromEstimatorOptions

# Interface: ConfusionMatrixDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](ConfusionMatrixDisplayFromEstimatorOptions.md#x)
- [ax](ConfusionMatrixDisplayFromEstimatorOptions.md#ax)
- [cmap](ConfusionMatrixDisplayFromEstimatorOptions.md#cmap)
- [colorbar](ConfusionMatrixDisplayFromEstimatorOptions.md#colorbar)
- [display\_labels](ConfusionMatrixDisplayFromEstimatorOptions.md#display_labels)
- [estimator](ConfusionMatrixDisplayFromEstimatorOptions.md#estimator)
- [im\_kw](ConfusionMatrixDisplayFromEstimatorOptions.md#im_kw)
- [include\_values](ConfusionMatrixDisplayFromEstimatorOptions.md#include_values)
- [labels](ConfusionMatrixDisplayFromEstimatorOptions.md#labels)
- [normalize](ConfusionMatrixDisplayFromEstimatorOptions.md#normalize)
- [sample\_weight](ConfusionMatrixDisplayFromEstimatorOptions.md#sample_weight)
- [text\_kw](ConfusionMatrixDisplayFromEstimatorOptions.md#text_kw)
- [values\_format](ConfusionMatrixDisplayFromEstimatorOptions.md#values_format)
- [xticks\_rotation](ConfusionMatrixDisplayFromEstimatorOptions.md#xticks_rotation)
- [y](ConfusionMatrixDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input values.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L390)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L446)

___

### cmap

• `Optional` **cmap**: `string`

Colormap recognized by matplotlib.

**`Default Value`**

`'viridis'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L441)

___

### colorbar

• `Optional` **colorbar**: `boolean`

Whether or not to add a colorbar to the plot.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L453)

___

### display\_labels

• `Optional` **display\_labels**: [`ArrayLike`](../modules.md#arraylike)

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L415)

___

### estimator

• `Optional` **estimator**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L385)

___

### im\_kw

• `Optional` **im\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L458)

___

### include\_values

• `Optional` **include\_values**: `boolean`

Includes values in confusion matrix.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L422)

___

### labels

• `Optional` **labels**: [`ArrayLike`](../modules.md#arraylike)

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L400)

___

### normalize

• `Optional` **normalize**: ``"all"`` \| ``"true"`` \| ``"pred"``

Either to normalize the counts display in the matrix:

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L410)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L405)

___

### text\_kw

• `Optional` **text\_kw**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L463)

___

### values\_format

• `Optional` **values\_format**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L434)

___

### xticks\_rotation

• `Optional` **xticks\_rotation**: `number` \| ``"vertical"`` \| ``"horizontal"``

Rotation of xtick labels.

**`Default Value`**

`'horizontal'`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L429)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L395)
