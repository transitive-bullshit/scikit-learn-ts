# Class: DetCurveDisplay

DET curve visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

## Constructors

### new DetCurveDisplay()

> **new DetCurveDisplay**(`opts`?): [`DetCurveDisplay`](DetCurveDisplay.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator_name`? | `string` | Name of estimator. If `undefined`, the estimator name is not shown. |
| `opts.fnr`? | `ArrayLike` | False negative rate. |
| `opts.fpr`? | `ArrayLike` | False positive rate. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The label of the positive class. |

**Returns** [`DetCurveDisplay`](DetCurveDisplay.md)

**Defined in** [generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19) |

## Accessors

### ax\_

**Get Signature**

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with DET Curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L326)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L349)

***

### line\_

**Get Signature**

> **get** **line\_**(): `Promise`\<`any`\>

DET Curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L303)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/metrics/DetCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L50)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L102)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot DET curve given an estimator and data.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.estimator`? | `any` | Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. |
| `opts.kwargs`? | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name`? | `string` | Name of DET curve for labeling. If `undefined`, use the name of the estimator. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The label of the positive class. When `pos_label=None`, if `y_true` is in {-1, 1} or {0, 1}, `pos_label` is set to 1, otherwise an error will be raised. |
| `opts.response_method`? | `"decision_function"` \| `"auto’} default=’auto"` | Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) is tried next. |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike` | Input values. |
| `opts.y`? | `ArrayLike` | Target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L121)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot the DET curve given the true and predicted labels.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs`? | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name`? | `string` | Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`. |
| `opts.pos_label`? | `string` \| `number` \| `boolean` | The label of the positive class. When `pos_label=None`, if `y_true` is in {-1, 1} or {0, 1}, `pos_label` is set to 1, otherwise an error will be raised. |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.y_pred`? | `ArrayLike` | Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision_function` on some classifiers). |
| `opts.y_true`? | `ArrayLike` | True labels. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L197)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L63)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.kwargs`? | `any` | Additional keywords arguments passed to matplotlib `plot` function. |
| `opts.name`? | `string` | Name of DET curve for labeling. If `undefined`, use `estimator_name` if it is not `undefined`, otherwise no labeling is shown. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/metrics/DetCurveDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L261)
