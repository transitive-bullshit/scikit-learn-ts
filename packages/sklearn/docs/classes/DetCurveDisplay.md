# Class: DetCurveDisplay

DET curve visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

## Constructors

### new DetCurveDisplay()

> **new DetCurveDisplay**(`opts`?): [`DetCurveDisplay`](DetCurveDisplay.md)

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

`opts.estimator_name`?

</td>
<td>

`string`

</td>
<td>

Name of estimator. If `undefined`, the estimator name is not shown.

</td>
</tr>
<tr>
<td>

`opts.fnr`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

False negative rate.

</td>
</tr>
<tr>
<td>

`opts.fpr`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

False positive rate.

</td>
</tr>
<tr>
<td>

`opts.pos_label`?

</td>
<td>

`string` \| `number` \| `boolean`

</td>
<td>

The label of the positive class.

</td>
</tr>
</tbody>
</table>

#### Returns

[`DetCurveDisplay`](DetCurveDisplay.md)

#### Defined in

[generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with DET Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L326)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L349)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

DET Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L303)

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

[generated/metrics/DetCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L50)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L102)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot DET curve given an estimator and data.

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

`opts.estimator`?

</td>
<td>

`any`

</td>
<td>

Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

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

Additional keywords arguments passed to matplotlib `plot` function.

</td>
</tr>
<tr>
<td>

`opts.name`?

</td>
<td>

`string`

</td>
<td>

Name of DET curve for labeling. If `undefined`, use the name of the estimator.

</td>
</tr>
<tr>
<td>

`opts.pos_label`?

</td>
<td>

`string` \| `number` \| `boolean`

</td>
<td>

The label of the positive class. When `pos_label=None`, if `y_true` is in {-1, 1} or {0, 1}, `pos_label` is set to 1, otherwise an error will be raised.

</td>
</tr>
<tr>
<td>

`opts.response_method`?

</td>
<td>

`"decision_function"` \| `"auto’} default=’auto"`

</td>
<td>

Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) is tried next.

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Sample weights.

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

Input values.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target values.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L121)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot the DET curve given the true and predicted labels.

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

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Additional keywords arguments passed to matplotlib `plot` function.

</td>
</tr>
<tr>
<td>

`opts.name`?

</td>
<td>

`string`

</td>
<td>

Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`.

</td>
</tr>
<tr>
<td>

`opts.pos_label`?

</td>
<td>

`string` \| `number` \| `boolean`

</td>
<td>

The label of the positive class. When `pos_label=None`, if `y_true` is in {-1, 1} or {0, 1}, `pos_label` is set to 1, otherwise an error will be raised.

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Sample weights.

</td>
</tr>
<tr>
<td>

`opts.y_pred`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision_function` on some classifiers).

</td>
</tr>
<tr>
<td>

`opts.y_true`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

True labels.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L197)

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

[generated/metrics/DetCurveDisplay.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L63)

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

Additional keywords arguments passed to matplotlib `plot` function.

</td>
</tr>
<tr>
<td>

`opts.name`?

</td>
<td>

`string`

</td>
<td>

Name of DET curve for labeling. If `undefined`, use `estimator_name` if it is not `undefined`, otherwise no labeling is shown.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L261)
