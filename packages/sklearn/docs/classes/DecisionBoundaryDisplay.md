# DecisionBoundaryDisplay

Decisions boundary visualization.

It is recommended to use [`from\_estimator`](#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new DecisionBoundaryDisplay(opts?: object): DecisionBoundaryDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.response?` | [`ArrayLike`](../types/ArrayLike.md)[] | Values of the response function. |
| `opts.xlabel?` | `string` | Default label to place on x axis. |
| `opts.xx0?` | [`ArrayLike`](../types/ArrayLike.md)[] | First output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v1.24)"). |
| `opts.xx1?` | [`ArrayLike`](../types/ArrayLike.md)[] | Second output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v1.24)"). |
| `opts.ylabel?` | `string` | Default label to place on y axis. |

### Returns

[`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L19)

## Accessors

### ax\_

Axes with confusion matrix.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L326)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L326)

### figure\_

Figure containing the confusion matrix.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L353)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L353)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L55)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L59)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L55) [generated/inspection/DecisionBoundaryDisplay.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L59)

### surface\_

If `plot\_method` is ‘contour’ or ‘contourf’, `surface\_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.7.1)"). If `plot\_method` is ‘pcolormesh’, `surface\_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.7.1)").

#### Signature

```ts
surface_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L299)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L299)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L118)

### from\_estimator()

Plot decision boundary given an estimator.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_estimator(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data that should be only 2-dimensional. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.eps?` | `number` | Extends the minimum and maximum values of X for evaluating the response function.  `Default Value`  `1` |
| `opts.estimator?` | `any` | Trained estimator used to plot the decision boundary. |
| `opts.grid_resolution?` | `number` | Number of grid points to use for plotting decision boundary. Higher values will make the plot look nicer but be slower to render.  `Default Value`  `100` |
| `opts.kwargs?` | `any` | Additional keyword arguments to be passed to the `plot\_method`. |
| `opts.plot_method?` | `"contourf"` \| `"contour"` \| `"pcolormesh"` | Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.7.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.7.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.7.1)").  `Default Value`  `'contourf'` |
| `opts.response_method?` | `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"` | Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba), [decision\_function](../../glossary.html#term-decision_function), [predict](../../glossary.html#term-predict) as the target response. If set to ‘auto’, the response method is tried in the following order: [decision\_function](../../glossary.html#term-decision_function), [predict\_proba](../../glossary.html#term-predict_proba), [predict](../../glossary.html#term-predict). For multiclass problems, [predict](../../glossary.html#term-predict) is selected when `response\_method="auto"`.  `Default Value`  `'auto'` |
| `opts.xlabel?` | `string` | The label used for the x-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used. |
| `opts.ylabel?` | `string` | The label used for the y-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L137)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L68)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs?` | `any` | Additional keyword arguments to be passed to the `plot\_method`. |
| `opts.plot_method?` | `"contourf"` \| `"contour"` \| `"pcolormesh"` | Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.7.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.7.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.7.1)").  `Default Value`  `'contourf'` |
| `opts.xlabel?` | `string` | Overwrite the x-axis label. |
| `opts.ylabel?` | `string` | Overwrite the y-axis label. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L238)
