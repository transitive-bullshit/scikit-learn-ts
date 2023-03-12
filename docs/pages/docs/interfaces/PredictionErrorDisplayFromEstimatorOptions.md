# PredictionErrorDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input values.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L388)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L417)

### estimator?

> `any`

Fitted regressor or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a regressor.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L383)

### kind?

> `"actual_vs_predicted"` \| `"residual_vs_predicted"`

The type of plot to draw:

#### Default Value

`'residual_vs_predicted'`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L400)

### line\_kwargs?

> `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L427)

### random\_state?

> `number`

Controls the randomness when `subsample` is not `undefined`. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L412)

### scatter\_kwargs?

> `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L422)

### subsample?

> `number`

Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.

#### Default Value

`1`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L407)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L393)
