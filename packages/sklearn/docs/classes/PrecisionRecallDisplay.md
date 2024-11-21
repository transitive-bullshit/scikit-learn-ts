# Class: PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

## Constructors

### new PrecisionRecallDisplay()

> **new PrecisionRecallDisplay**(`opts`?): [`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.average_precision`? | `number` | Average precision. If `undefined`, the average precision is not shown. |
| `opts.estimator_name`? | `string` | Name of estimator. If `undefined`, then the estimator name is not shown. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The class considered as the positive class. If `undefined`, the class will not be shown in the legend. |
| `opts.precision`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Precision values. |
| `opts.prevalence_pos_label`? | `number` | The prevalence of the positive label. It is used for plotting the chance level line. If `undefined`, the chance level line will not be plotted even if `plot_chance_level` is set to `true` when plotting. |
| `opts.recall`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Recall values. |

#### Returns

[`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with precision recall curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

***

### chance\_level\_

#### Get Signature

> **get** **chance\_level\_**(): `Promise`\<`any`\>

The chance level line. It is `undefined` if the chance level is not plotted.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L400)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L454)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Precision recall curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L373)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L60)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L116)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given an estimator and some data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.chance_level_kw`? | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.drop_intermediate`? | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves. |
| `opts.estimator`? | `any` | Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name`? | `string` | Name for labeling curve. If `undefined`, no name is used. |
| `opts.plot_chance_level`? | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes_\[1\]` is considered as the positive class. |
| `opts.response_method`? | `"auto"` \| `"predict_proba"` \| `"decision_function"` | Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) is tried next. |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Input values. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L133)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given binary class predictions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.chance_level_kw`? | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.drop_intermediate`? | `boolean` | Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name`? | `string` | Name for labeling curve. If `undefined`, name will be set to `"Classifier"`. |
| `opts.plot_chance_level`? | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The class considered as the positive class when computing the precision and recall metrics. |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.y_pred`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Estimated probabilities or output of decision function. |
| `opts.y_true`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True binary labels. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L230)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L73)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.chance_level_kw`? | `any` | Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to matplotlib’s `plot`. |
| `opts.name`? | `string` | Name of precision recall curve for labeling. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown. |
| `opts.plot_chance_level`? | `boolean` | Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L317)
