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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator_name`? | `string` | Name of estimator. If `undefined`, the estimator name is not shown. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The positive class when computing the calibration curve. By default, `pos_label` is set to `estimators.classes_\[1\]` when using `from_estimator` and set to 1 when using `from_predictions`. |
| `opts.prob_pred`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The mean predicted probability in each bin. |
| `opts.prob_true`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The proportion of samples whose class is the positive class (fraction of positives), in each bin. |
| `opts.y_prob`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Probability estimates for the positive class, for each sample. |

#### Returns

[`CalibrationDisplay`](CalibrationDisplay.md)

#### Defined in

[generated/calibration/CalibrationDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/calibration/CalibrationDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/calibration/CalibrationDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/calibration/CalibrationDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L23) |
| `id` | `string` | `undefined` | [generated/calibration/CalibrationDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L20) |
| `opts` | `any` | `undefined` | [generated/calibration/CalibrationDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L21) |

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with calibration curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L391)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L418)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Calibration curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L364)

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

[generated/calibration/CalibrationDisplay.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L57)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L113)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot calibration curve using a binary classifier and data.

A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator`? | `any` | Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) method. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)"). |
| `opts.n_bins`? | `number` | Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data. |
| `opts.name`? | `string` | Name for labeling curve. If `undefined`, the name of the estimator is used. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The positive class when computing the calibration curve. By default, `estimators.classes_\[1\]` is considered as the positive class. |
| `opts.ref_line`? | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier. |
| `opts.strategy`? | `"uniform"` \| `"quantile"` | Strategy used to define the widths of the bins. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Input values. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Binary target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L136)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot calibration curve using true labels and predicted probabilities.

Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)"). |
| `opts.n_bins`? | `number` | Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data. |
| `opts.name`? | `string` | Name for labeling curve. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The positive class when computing the calibration curve. By default `pos_label` is set to 1. |
| `opts.ref_line`? | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier. |
| `opts.strategy`? | `"uniform"` \| `"quantile"` | Strategy used to define the widths of the bins. |
| `opts.y_prob`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The predicted probabilities of the positive class. |
| `opts.y_true`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True labels. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L229)

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

[generated/calibration/CalibrationDisplay.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L70)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs`? | `any` | Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)"). |
| `opts.name`? | `string` | Name for labeling curve. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown. |
| `opts.ref_line`? | `boolean` | If `true`, plots a reference line representing a perfectly calibrated classifier. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/calibration/CalibrationDisplay.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L313)
