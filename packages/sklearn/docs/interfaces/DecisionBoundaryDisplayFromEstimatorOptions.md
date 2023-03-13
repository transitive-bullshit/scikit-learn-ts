# DecisionBoundaryDisplayFromEstimatorOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input data that should be only 2-dimensional.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L306)

### ax?

> `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L349)

### eps?

> `number`

Extends the minimum and maximum values of X for evaluating the response function.

#### Default Value

`1`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L320)

### estimator?

> `any`

Trained estimator used to plot the decision boundary.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L301)

### grid\_resolution?

> `number`

Number of grid points to use for plotting decision boundary. Higher values will make the plot look nicer but be slower to render.

#### Default Value

`100`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L313)

### kwargs?

> `any`

Additional keyword arguments to be passed to the `plot\_method`.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L354)

### plot\_method?

> `"contourf"` \| `"contour"` \| `"pcolormesh"`

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.7.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.7.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.7.1)").

#### Default Value

`'contourf'`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L327)

### response\_method?

> `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba), [decision\_function](../../glossary.html#term-decision_function), [predict](../../glossary.html#term-predict) as the target response. If set to ‘auto’, the response method is tried in the following order: [decision\_function](../../glossary.html#term-decision_function), [predict\_proba](../../glossary.html#term-predict_proba), [predict](../../glossary.html#term-predict). For multiclass problems, [predict](../../glossary.html#term-predict) is selected when `response\_method="auto"`.

#### Default Value

`'auto'`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L334)

### xlabel?

> `string`

The label used for the x-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L339)

### ylabel?

> `string`

The label used for the y-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L344)
