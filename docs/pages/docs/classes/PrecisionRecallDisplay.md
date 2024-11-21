# Class: PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

## Constructors

### new PrecisionRecallDisplay()

> **new PrecisionRecallDisplay**(`opts`?): [`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

**Parameters**

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

`opts.average_precision`?

</td>
<td>

`number`

</td>
<td>

Average precision. If `undefined`, the average precision is not shown.

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

Name of estimator. If `undefined`, then the estimator name is not shown.

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

The class considered as the positive class. If `undefined`, the class will not be shown in the legend.

</td>
</tr>
<tr>
<td>

`opts.precision`?

</td>
<td>

`ArrayLike`

</td>
<td>

Precision values.

</td>
</tr>
<tr>
<td>

`opts.prevalence_pos_label`?

</td>
<td>

`number`

</td>
<td>

The prevalence of the positive label. It is used for plotting the chance level line. If `undefined`, the chance level line will not be plotted even if `plot_chance_level` is set to `true` when plotting.

</td>
</tr>
<tr>
<td>

`opts.recall`?

</td>
<td>

`ArrayLike`

</td>
<td>

Recall values.

</td>
</tr>
</tbody>
</table>

**Returns** [`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19) |

## Accessors

### ax\_

**Get Signature**

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with precision recall curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

***

### chance\_level\_

**Get Signature**

> **get** **chance\_level\_**(): `Promise`\<`any`\>

The chance level line. It is `undefined` if the chance level is not plotted.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L400)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L454)

***

### line\_

**Get Signature**

> **get** **line\_**(): `Promise`\<`any`\>

Precision recall curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L373)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

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

**Returns** `void`

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L60)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L116)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given an estimator and some data.

**Parameters**

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

`opts.chance_level_kw`?

</td>
<td>

`any`

</td>
<td>

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

</td>
</tr>
<tr>
<td>

`opts.drop_intermediate`?

</td>
<td>

`boolean`

</td>
<td>

Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

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

Keyword arguments to be passed to matplotlib’s `plot`.

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

Name for labeling curve. If `undefined`, no name is used.

</td>
</tr>
<tr>
<td>

`opts.plot_chance_level`?

</td>
<td>

`boolean`

</td>
<td>

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

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

The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes_\[1\]` is considered as the positive class.

</td>
</tr>
<tr>
<td>

`opts.response_method`?

</td>
<td>

`"auto"` \| `"predict_proba"` \| `"decision_function"`

</td>
<td>

Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) is tried next.

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

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

`ArrayLike`

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

`ArrayLike`

</td>
<td>

Target values.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L133)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given binary class predictions.

**Parameters**

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

`opts.chance_level_kw`?

</td>
<td>

`any`

</td>
<td>

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

</td>
</tr>
<tr>
<td>

`opts.drop_intermediate`?

</td>
<td>

`boolean`

</td>
<td>

Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

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

Keyword arguments to be passed to matplotlib’s `plot`.

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

Name for labeling curve. If `undefined`, name will be set to `"Classifier"`.

</td>
</tr>
<tr>
<td>

`opts.plot_chance_level`?

</td>
<td>

`boolean`

</td>
<td>

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

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

The class considered as the positive class when computing the precision and recall metrics.

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

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

`ArrayLike`

</td>
<td>

Estimated probabilities or output of decision function.

</td>
</tr>
<tr>
<td>

`opts.y_true`?

</td>
<td>

`ArrayLike`

</td>
<td>

True binary labels.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L230)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

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

**Returns** `Promise`\<`void`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L73)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

**Parameters**

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

`opts.chance_level_kw`?

</td>
<td>

`any`

</td>
<td>

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

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

Keyword arguments to be passed to matplotlib’s `plot`.

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

Name of precision recall curve for labeling. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown.

</td>
</tr>
<tr>
<td>

`opts.plot_chance_level`?

</td>
<td>

`boolean`

</td>
<td>

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/PrecisionRecallDisplay.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L317)
