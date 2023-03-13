# CalibrationDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input values.

Defined in:  [generated/calibration/CalibrationDisplay.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L364)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/calibration/CalibrationDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L405)

### estimator?

> `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict\_proba](../../glossary.html#term-predict_proba) method.

Defined in:  [generated/calibration/CalibrationDisplay.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L359)

### kwargs?

> `any`

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Defined in:  [generated/calibration/CalibrationDisplay.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L410)

### n\_bins?

> `number`

Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

#### Default Value

`5`

Defined in:  [generated/calibration/CalibrationDisplay.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L376)

### name?

> `string`

Name for labeling curve. If `undefined`, the name of the estimator is used.

Defined in:  [generated/calibration/CalibrationDisplay.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L393)

### pos\_label?

> `string` \| `number`

The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class.

Defined in:  [generated/calibration/CalibrationDisplay.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L388)

### ref\_line?

> `boolean`

If `true`, plots a reference line representing a perfectly calibrated classifier.

#### Default Value

`true`

Defined in:  [generated/calibration/CalibrationDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L400)

### strategy?

> `"uniform"` \| `"quantile"`

Strategy used to define the widths of the bins.

#### Default Value

`'uniform'`

Defined in:  [generated/calibration/CalibrationDisplay.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L383)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Binary target values.

Defined in:  [generated/calibration/CalibrationDisplay.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L369)
