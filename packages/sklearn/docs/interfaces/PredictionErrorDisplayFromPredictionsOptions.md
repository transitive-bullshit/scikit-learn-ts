# PredictionErrorDisplayFromPredictionsOptions

## Properties

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L463)

### kind?

> `"actual_vs_predicted"` \| `"residual_vs_predicted"`

The type of plot to draw:

#### Default Value

`'residual_vs_predicted'`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L446)

### line\_kwargs?

> `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L473)

### random\_state?

> `number`

Controls the randomness when `subsample` is not `undefined`. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L458)

### scatter\_kwargs?

> `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L468)

### subsample?

> `number`

Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.

#### Default Value

`1`

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L453)

### y\_pred?

> [`ArrayLike`](../types/ArrayLike.md)

Predicted target values.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L439)

### y\_true?

> [`ArrayLike`](../types/ArrayLike.md)

True target values.

Defined in:  [generated/metrics/PredictionErrorDisplay.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L434)
