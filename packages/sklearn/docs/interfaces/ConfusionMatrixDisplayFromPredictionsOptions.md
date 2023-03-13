# ConfusionMatrixDisplayFromPredictionsOptions

## Properties

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L526)

### cmap?

> `string`

Colormap recognized by matplotlib.

#### Default Value

`'viridis'`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L521)

### colorbar?

> `boolean`

Whether or not to add a colorbar to the plot.

#### Default Value

`true`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L533)

### display\_labels?

> [`ArrayLike`](../types/ArrayLike.md)

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L495)

### im\_kw?

> `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L538)

### include\_values?

> `boolean`

Includes values in confusion matrix.

#### Default Value

`true`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L502)

### labels?

> [`ArrayLike`](../types/ArrayLike.md)

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L480)

### normalize?

> `"all"` \| `"true"` \| `"pred"`

Either to normalize the counts display in the matrix:

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L490)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L485)

### text\_kw?

> `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L543)

### values\_format?

> `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L514)

### xticks\_rotation?

> `number` \| `"vertical"` \| `"horizontal"`

Rotation of xtick labels.

#### Default Value

`'horizontal'`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L509)

### y\_pred?

> [`ArrayLike`](../types/ArrayLike.md)

The predicted labels given by the method `predict` of an classifier.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L475)

### y\_true?

> [`ArrayLike`](../types/ArrayLike.md)

True labels.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L470)
