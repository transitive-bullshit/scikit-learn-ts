# Class: RocCurveDisplay

ROC Curve visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)

## Constructors

### new RocCurveDisplay()

> **new RocCurveDisplay**(`opts`?): [`RocCurveDisplay`](RocCurveDisplay.md)

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

`opts.fpr`?

</td>
<td>

`ArrayLike`

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

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes_\[1\]` is considered as the positive class.

</td>
</tr>
<tr>
<td>

`opts.roc_auc`?

</td>
<td>

`number`

</td>
<td>

Area under ROC curve. If `undefined`, the roc_auc score is not shown.

</td>
</tr>
<tr>
<td>

`opts.tpr`?

</td>
<td>

`ArrayLike`

</td>
<td>

True positive rate.

</td>
</tr>
</tbody>
</table>

**Returns** [`RocCurveDisplay`](RocCurveDisplay.md)

**Defined in** [generated/metrics/RocCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/RocCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/RocCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/RocCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/RocCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/RocCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L19) |

## Accessors

### ax\_

**Get Signature**

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with ROC Curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L406)

***

### chance\_level\_

**Get Signature**

> **get** **chance\_level\_**(): `Promise`\<`any`\>

The chance level line. It is `undefined` if the chance level is not plotted.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L381)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L429)

***

### line\_

**Get Signature**

> **get** **line\_**(): `Promise`\<`any`\>

ROC Curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L358)

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

**Defined in** [generated/metrics/RocCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L55)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L107)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Create a ROC Curve display from an estimator.

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

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

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

Name of ROC Curve for labeling. If `undefined`, use the name of the estimator.

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

Whether to plot the chance level.

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

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes_\[1\]` is considered as the positive class.

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

**Defined in** [generated/metrics/RocCurveDisplay.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L124)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot ROC curve given the true and predicted values.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

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

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

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

Name of ROC curve for labeling. If `undefined`, name will be set to `"Classifier"`.

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

Whether to plot the chance level.

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

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by “decision_function” on some classifiers).

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

True labels.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L219)

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

**Defined in** [generated/metrics/RocCurveDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L68)

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

Name of ROC Curve for labeling. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown.

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

Whether to plot the chance level.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/RocCurveDisplay.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L304)
