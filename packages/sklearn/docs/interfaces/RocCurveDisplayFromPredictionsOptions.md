# RocCurveDisplayFromPredictionsOptions

## Properties

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/RocCurveDisplay.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L421)

### drop\_intermediate?

> `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

#### Default Value

`true`

Defined in:  [generated/metrics/RocCurveDisplay.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L406)

### kwargs?

> `any`

Additional keywords arguments passed to matplotlib `plot` function.

Defined in:  [generated/metrics/RocCurveDisplay.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L426)

### name?

> `string`

Name of ROC curve for labeling. If `undefined`, name will be set to `"Classifier"`.

Defined in:  [generated/metrics/RocCurveDisplay.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L416)

### pos\_label?

> `string` \| `number`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

Defined in:  [generated/metrics/RocCurveDisplay.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L411)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/RocCurveDisplay.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L399)

### y\_pred?

> [`ArrayLike`](../types/ArrayLike.md)

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by “decision\_function” on some classifiers).

Defined in:  [generated/metrics/RocCurveDisplay.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L394)

### y\_true?

> [`ArrayLike`](../types/ArrayLike.md)

True labels.

Defined in:  [generated/metrics/RocCurveDisplay.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L389)
