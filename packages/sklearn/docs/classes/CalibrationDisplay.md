# Class: CalibrationDisplay

Calibration curve (also known as reliability diagram) visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

For an example on how to use the visualization, see [Probability Calibration curves](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html)

## Constructors

### new CalibrationDisplay()

> **new CalibrationDisplay**(`opts`?): [`CalibrationDisplay`](CalibrationDisplay.md)

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

`opts.pos_label`?

</td>
<td>

`string` \| `number` \| `boolean`

</td>
<td>

The positive class when computing the calibration curve. By default, `pos_label` is set to `estimators.classes_\[1\]` when using `from_estimator` and set to 1 when using `from_predictions`.

</td>
</tr>
<tr>
<td>

`opts.prob_pred`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The mean predicted probability in each bin.

</td>
</tr>
<tr>
<td>

`opts.prob_true`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The proportion of samples whose class is the positive class (fraction of positives), in each bin.

</td>
</tr>
<tr>
<td>

`opts.y_prob`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Probability estimates for the positive class, for each sample.

</td>
</tr>
</tbody>
</table>

#### Returns

[`CalibrationDisplay`](CalibrationDisplay.md)

#### Defined in

[generated/calibration/CalibrationDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/calibration/CalibrationDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/calibration/CalibrationDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/calibration/CalibrationDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L23) |
| `id` | `string` | `undefined` | [generated/calibration/CalibrationDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L20) |
| `opts` | `any` | `undefined` | [generated/calibration/CalibrationDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L21) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with calibration curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L391)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L418)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Calibration curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L364)

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

[generated/calibration/CalibrationDisplay.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L57)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L113)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot calibration curve using a binary classifier and data.

A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

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

Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) method.

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

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

</td>
</tr>
<tr>
<td>

`opts.n_bins`?

</td>
<td>

`number`

</td>
<td>

Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

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

Name for labeling curve. If `undefined`, the name of the estimator is used.

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

The positive class when computing the calibration curve. By default, `estimators.classes_\[1\]` is considered as the positive class.

</td>
</tr>
<tr>
<td>

`opts.ref_line`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, plots a reference line representing a perfectly calibrated classifier.

</td>
</tr>
<tr>
<td>

`opts.strategy`?

</td>
<td>

`"uniform"` \| `"quantile"`

</td>
<td>

Strategy used to define the widths of the bins.

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

Binary target values.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L136)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot calibration curve using true labels and predicted probabilities.

Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

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

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

</td>
</tr>
<tr>
<td>

`opts.n_bins`?

</td>
<td>

`number`

</td>
<td>

Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

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

Name for labeling curve.

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

The positive class when computing the calibration curve. By default `pos_label` is set to 1.

</td>
</tr>
<tr>
<td>

`opts.ref_line`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, plots a reference line representing a perfectly calibrated classifier.

</td>
</tr>
<tr>
<td>

`opts.strategy`?

</td>
<td>

`"uniform"` \| `"quantile"`

</td>
<td>

Strategy used to define the widths of the bins.

</td>
</tr>
<tr>
<td>

`opts.y_prob`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The predicted probabilities of the positive class.

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

[generated/calibration/CalibrationDisplay.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L229)

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

[generated/calibration/CalibrationDisplay.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L70)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

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

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

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

Name for labeling curve. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown.

</td>
</tr>
<tr>
<td>

`opts.ref_line`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, plots a reference line representing a perfectly calibrated classifier.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L313)
