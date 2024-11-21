# Class: ConfusionMatrixDisplay

Confusion Matrix visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html)

## Constructors

### new ConfusionMatrixDisplay()

> **new ConfusionMatrixDisplay**(`opts`?): [`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

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

`opts.confusion_matrix`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Confusion matrix.

</td>
</tr>
<tr>
<td>

`opts.display_labels`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Display labels for plot. If `undefined`, display labels are set from 0 to `n_classes \- 1`.

</td>
</tr>
</tbody>
</table>

#### Returns

[`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/ConfusionMatrixDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/ConfusionMatrixDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/ConfusionMatrixDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/ConfusionMatrixDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/ConfusionMatrixDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L19) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L471)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L498)

***

### im\_

#### Get Signature

> **get** **im\_**(): `Promise`\<`any`\>

Image representing the confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L417)

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

[generated/metrics/ConfusionMatrixDisplay.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L40)

***

### text\_

#### Get Signature

> **get** **text\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Array of matplotlib axes. `undefined` if `include_values` is false.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L444)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L96)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot Confusion Matrix given an estimator and some data.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#confusion-matrix).

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

`opts.cmap`?

</td>
<td>

`string`

</td>
<td>

Colormap recognized by matplotlib.

</td>
</tr>
<tr>
<td>

`opts.colorbar`?

</td>
<td>

`boolean`

</td>
<td>

Whether or not to add a colorbar to the plot.

</td>
</tr>
<tr>
<td>

`opts.display_labels`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y_true` and `y_pred` will be used.

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

`opts.im_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

</td>
</tr>
<tr>
<td>

`opts.include_values`?

</td>
<td>

`boolean`

</td>
<td>

Includes values in confusion matrix.

</td>
</tr>
<tr>
<td>

`opts.labels`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y_true` or `y_pred` are used in sorted order.

</td>
</tr>
<tr>
<td>

`opts.normalize`?

</td>
<td>

`"all"` \| `"true"` \| `"pred"`

</td>
<td>

Either to normalize the counts display in the matrix:

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

`opts.text_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.text` call.

</td>
</tr>
<tr>
<td>

`opts.values_format`?

</td>
<td>

`string`

</td>
<td>

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

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

`opts.xticks_rotation`?

</td>
<td>

`number` \| `"vertical"` \| `"horizontal"`

</td>
<td>

Rotation of xtick labels.

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

[generated/metrics/ConfusionMatrixDisplay.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L115)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot Confusion Matrix given true and predicted labels.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#confusion-matrix).

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

`opts.cmap`?

</td>
<td>

`string`

</td>
<td>

Colormap recognized by matplotlib.

</td>
</tr>
<tr>
<td>

`opts.colorbar`?

</td>
<td>

`boolean`

</td>
<td>

Whether or not to add a colorbar to the plot.

</td>
</tr>
<tr>
<td>

`opts.display_labels`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y_true` and `y_pred` will be used.

</td>
</tr>
<tr>
<td>

`opts.im_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

</td>
</tr>
<tr>
<td>

`opts.include_values`?

</td>
<td>

`boolean`

</td>
<td>

Includes values in confusion matrix.

</td>
</tr>
<tr>
<td>

`opts.labels`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y_true` or `y_pred` are used in sorted order.

</td>
</tr>
<tr>
<td>

`opts.normalize`?

</td>
<td>

`"all"` \| `"true"` \| `"pred"`

</td>
<td>

Either to normalize the counts display in the matrix:

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

`opts.text_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.text` call.

</td>
</tr>
<tr>
<td>

`opts.values_format`?

</td>
<td>

`string`

</td>
<td>

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

</td>
</tr>
<tr>
<td>

`opts.xticks_rotation`?

</td>
<td>

`number` \| `"vertical"` \| `"horizontal"`

</td>
<td>

Rotation of xtick labels.

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

The predicted labels given by the method `predict` of an classifier.

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

[generated/metrics/ConfusionMatrixDisplay.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L231)

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

[generated/metrics/ConfusionMatrixDisplay.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L53)

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

`opts.cmap`?

</td>
<td>

`string`

</td>
<td>

Colormap recognized by matplotlib.

</td>
</tr>
<tr>
<td>

`opts.colorbar`?

</td>
<td>

`boolean`

</td>
<td>

Whether or not to add a colorbar to the plot.

</td>
</tr>
<tr>
<td>

`opts.im_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

</td>
</tr>
<tr>
<td>

`opts.include_values`?

</td>
<td>

`boolean`

</td>
<td>

Includes values in confusion matrix.

</td>
</tr>
<tr>
<td>

`opts.text_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to `matplotlib.pyplot.text` call.

</td>
</tr>
<tr>
<td>

`opts.values_format`?

</td>
<td>

`string`

</td>
<td>

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

</td>
</tr>
<tr>
<td>

`opts.xticks_rotation`?

</td>
<td>

`number` \| `"vertical"` \| `"horizontal"`

</td>
<td>

Rotation of xtick labels.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L340)
