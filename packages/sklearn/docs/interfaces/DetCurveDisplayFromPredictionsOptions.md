# DetCurveDisplayFromPredictionsOptions

## Properties

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/DetCurveDisplay.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L394)

### kwargs?

> `any`

Additional keywords arguments passed to matplotlib `plot` function.

Defined in:  [generated/metrics/DetCurveDisplay.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L399)

### name?

> `string`

Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`.

Defined in:  [generated/metrics/DetCurveDisplay.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L389)

### pos\_label?

> `string` \| `number`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

Defined in:  [generated/metrics/DetCurveDisplay.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L384)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/DetCurveDisplay.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L379)

### y\_pred?

> [`ArrayLike`](../types/ArrayLike.md)

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision\_function` on some classifiers).

Defined in:  [generated/metrics/DetCurveDisplay.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L374)

### y\_true?

> [`ArrayLike`](../types/ArrayLike.md)

True labels.

Defined in:  [generated/metrics/DetCurveDisplay.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L369)
