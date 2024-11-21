# Class: DecisionBoundaryDisplay

Decisions boundary visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)

## Constructors

### new DecisionBoundaryDisplay()

> **new DecisionBoundaryDisplay**(`opts`?): [`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.response`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Values of the response function.

</td>
</tr>
<tr>
<td>

`opts.xlabel`?

</td>
<td>

`string`

</td>
<td>

Default label to place on x axis.

</td>
</tr>
<tr>
<td>

`opts.xx0`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

First output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v2.1)").

</td>
</tr>
<tr>
<td>

`opts.xx1`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Second output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v2.1)").

</td>
</tr>
<tr>
<td>

`opts.ylabel`?

</td>
<td>

`string`

</td>
<td>

Default label to place on y axis.

</td>
</tr>
</tbody>
</table>

#### Returns

[`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/inspection/DecisionBoundaryDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/inspection/DecisionBoundaryDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/inspection/DecisionBoundaryDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/inspection/DecisionBoundaryDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/inspection/DecisionBoundaryDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L19) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with decision boundary.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L307)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the decision boundary.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L334)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L55)

***

### surface\_

#### Get Signature

> **get** **surface\_**(): `Promise`\<`any`\>

If `plot_method` is ‘contour’ or ‘contourf’, `surface_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.9.2)"). If `plot_method` is ‘pcolormesh’, `surface_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.9.2)").

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L280)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L111)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot decision boundary given an estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.ax`?

</td>
<td>

`any`

</td>
<td>

Axes object to plot on. If `undefined`, a new figure and axes is created.

</td>
</tr>
<tr>
<td>

`opts.class_of_interest`?

</td>
<td>

`string` \| `number` \| `boolean`

</td>
<td>

The class considered when plotting the decision. If `undefined`, `estimator.classes_\[1\]` is considered as the positive class for binary classifiers. Must have an explicit value for multiclass classifiers when `response_method` is ‘predict_proba’ or ‘decision_function’.

</td>
</tr>
<tr>
<td>

`opts.eps`?

</td>
<td>

`number`

</td>
<td>

Extends the minimum and maximum values of X for evaluating the response function.

</td>
</tr>
<tr>
<td>

`opts.estimator`?

</td>
<td>

`any`

</td>
<td>

Trained estimator used to plot the decision boundary.

</td>
</tr>
<tr>
<td>

`opts.grid_resolution`?

</td>
<td>

`number`

</td>
<td>

Number of grid points to use for plotting decision boundary. Higher values will make the plot look nicer but be slower to render.

</td>
</tr>
<tr>
<td>

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments to be passed to the `plot_method`.

</td>
</tr>
<tr>
<td>

`opts.plot_method`?

</td>
<td>

`"contourf"` \| `"contour"` \| `"pcolormesh"`

</td>
<td>

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.9.2)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.9.2)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.9.2)").

</td>
</tr>
<tr>
<td>

`opts.response_method`?

</td>
<td>

`"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"`

</td>
<td>

Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba), [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function), [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict) as the target response. If set to ‘auto’, the response method is tried in the following order: [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function), [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba), [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict). For multiclass problems, [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict) is selected when `response_method="auto"`.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Input data that should be only 2-dimensional.

</td>
</tr>
<tr>
<td>

`opts.xlabel`?

</td>
<td>

`string`

</td>
<td>

The label used for the x-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

</td>
</tr>
<tr>
<td>

`opts.ylabel`?

</td>
<td>

`string`

</td>
<td>

The label used for the y-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L130)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L68)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.ax`?

</td>
<td>

`any`

</td>
<td>

Axes object to plot on. If `undefined`, a new figure and axes is created.

</td>
</tr>
<tr>
<td>

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments to be passed to the `plot_method`.

</td>
</tr>
<tr>
<td>

`opts.plot_method`?

</td>
<td>

`"contourf"` \| `"contour"` \| `"pcolormesh"`

</td>
<td>

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.9.2)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.9.2)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.9.2)").

</td>
</tr>
<tr>
<td>

`opts.xlabel`?

</td>
<td>

`string`

</td>
<td>

Overwrite the x-axis label.

</td>
</tr>
<tr>
<td>

`opts.ylabel`?

</td>
<td>

`string`

</td>
<td>

Overwrite the y-axis label.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L224)
