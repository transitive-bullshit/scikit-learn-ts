# PrecisionRecallDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input values.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L353)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L385)

### estimator?

> `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L348)

### kwargs?

> `any`

Keyword arguments to be passed to matplotlib’s `plot`.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L390)

### name?

> `string`

Name for labeling curve. If `undefined`, no name is used.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L380)

### pos\_label?

> `string` \| `number`

The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L368)

### response\_method?

> `"auto"` \| `"predict_proba"` \| `"decision_function"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

#### Default Value

`'auto'`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L375)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L363)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L358)
