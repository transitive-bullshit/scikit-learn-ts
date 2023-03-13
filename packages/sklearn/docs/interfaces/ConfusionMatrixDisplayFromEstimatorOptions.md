# ConfusionMatrixDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input values.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L390)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L446)

### cmap?

> `string`

Colormap recognized by matplotlib.

#### Default Value

`'viridis'`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L441)

### colorbar?

> `boolean`

Whether or not to add a colorbar to the plot.

#### Default Value

`true`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L453)

### display\_labels?

> [`ArrayLike`](../types/ArrayLike.md)

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L415)

### estimator?

> `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L385)

### im\_kw?

> `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L458)

### include\_values?

> `boolean`

Includes values in confusion matrix.

#### Default Value

`true`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L422)

### labels?

> [`ArrayLike`](../types/ArrayLike.md)

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L400)

### normalize?

> `"all"` \| `"true"` \| `"pred"`

Either to normalize the counts display in the matrix:

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L410)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L405)

### text\_kw?

> `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L463)

### values\_format?

> `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L434)

### xticks\_rotation?

> `number` \| `"vertical"` \| `"horizontal"`

Rotation of xtick labels.

#### Default Value

`'horizontal'`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L429)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L395)
