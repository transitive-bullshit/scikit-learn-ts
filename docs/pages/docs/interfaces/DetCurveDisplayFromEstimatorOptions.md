# DetCurveDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input values.

Defined in:  [generated/metrics/DetCurveDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L327)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/DetCurveDisplay.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L357)

### estimator?

> `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

Defined in:  [generated/metrics/DetCurveDisplay.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L322)

### kwargs?

> `any`

Additional keywords arguments passed to matplotlib `plot` function.

Defined in:  [generated/metrics/DetCurveDisplay.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L362)

### name?

> `string`

Name of DET curve for labeling. If `undefined`, use the name of the estimator.

Defined in:  [generated/metrics/DetCurveDisplay.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L352)

### pos\_label?

> `string` \| `number`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

Defined in:  [generated/metrics/DetCurveDisplay.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L347)

### response\_method?

> `"decision_function"` \| `"auto’} default=’auto"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

Defined in:  [generated/metrics/DetCurveDisplay.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L342)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights.

Defined in:  [generated/metrics/DetCurveDisplay.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L337)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/metrics/DetCurveDisplay.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L332)
