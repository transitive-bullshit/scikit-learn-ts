**sklearn** • **Docs**

***

Decisions boundary visualization.

It is recommended to use [`from\_estimator`](#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)

## Constructors

### new DecisionBoundaryDisplay()

> **new DecisionBoundaryDisplay**(`opts`?): [`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

#### Parameters

• **opts?**

• **opts.response?**: `ArrayLike`[]

Values of the response function.

• **opts.xlabel?**: `string`

Default label to place on x axis.

• **opts.xx0?**: `ArrayLike`[]

First output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v2.1)").

• **opts.xx1?**: `ArrayLike`[]

Second output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v2.1)").

• **opts.ylabel?**: `string`

Default label to place on y axis.

#### Returns

[`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L19)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with decision boundary.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L307)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the decision boundary.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L334)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L55)

***

### surface\_

#### Get Signature

> **get** **surface\_**(): `Promise`\<`any`\>

If `plot\_method` is ‘contour’ or ‘contourf’, `surface\_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.9.2)"). If `plot\_method` is ‘pcolormesh’, `surface\_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.9.2)").

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L280)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L111)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot decision boundary given an estimator.

Read more in the User Guide.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.class\_of\_interest?**: `string` \| `number` \| `boolean`

The class considered when plotting the decision. If `undefined`, `estimator.classes\_\[1\]` is considered as the positive class for binary classifiers. Must have an explicit value for multiclass classifiers when `response\_method` is ‘predict\_proba’ or ‘decision\_function’.

• **opts.eps?**: `number`

Extends the minimum and maximum values of X for evaluating the response function.

**Default Value**

`1`

• **opts.estimator?**: `any`

Trained estimator used to plot the decision boundary.

• **opts.grid\_resolution?**: `number`

Number of grid points to use for plotting decision boundary. Higher values will make the plot look nicer but be slower to render.

**Default Value**

`100`

• **opts.kwargs?**: `any`

Additional keyword arguments to be passed to the `plot\_method`.

• **opts.plot\_method?**: `"contourf"` \| `"contour"` \| `"pcolormesh"`

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.9.2)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.9.2)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.9.2)").

**Default Value**

`'contourf'`

• **opts.response\_method?**: `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"`

Specifies whether to use predict\_proba, decision\_function, predict as the target response. If set to ‘auto’, the response method is tried in the following order: decision\_function, predict\_proba, predict. For multiclass problems, predict is selected when `response\_method="auto"`.

**Default Value**

`'auto'`

• **opts.X?**: `ArrayLike`

Input data that should be only 2-dimensional.

• **opts.xlabel?**: `string`

The label used for the x-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

• **opts.ylabel?**: `string`

The label used for the y-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L130)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L68)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.kwargs?**: `any`

Additional keyword arguments to be passed to the `plot\_method`.

• **opts.plot\_method?**: `"contourf"` \| `"contour"` \| `"pcolormesh"`

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.9.2)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.9.2)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.9.2)").

**Default Value**

`'contourf'`

• **opts.xlabel?**: `string`

Overwrite the x-axis label.

• **opts.ylabel?**: `string`

Overwrite the y-axis label.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L224)
