[**sklearn**](../README.md) • **Docs**

***

Precision Recall visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

## Constructors

### new PrecisionRecallDisplay()

> **new PrecisionRecallDisplay**(`opts`?): [`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

#### Parameters

• **opts?**

• **opts.average\_precision?**: `number`

Average precision. If `undefined`, the average precision is not shown.

• **opts.estimator\_name?**: `string`

Name of estimator. If `undefined`, then the estimator name is not shown.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The class considered as the positive class. If `undefined`, the class will not be shown in the legend.

• **opts.precision?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Precision values.

• **opts.prevalence\_pos\_label?**: `number`

The prevalence of the positive label. It is used for plotting the chance level line. If `undefined`, the chance level line will not be plotted even if `plot\_chance\_level` is set to `true` when plotting.

• **opts.recall?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Recall values.

#### Returns

[`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with precision recall curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

***

### chance\_level\_

#### Get Signature

> **get** **chance\_level\_**(): `Promise`\<`any`\>

The chance level line. It is `undefined` if the chance level is not plotted.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L400)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L454)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Precision recall curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L373)

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

[generated/metrics/PrecisionRecallDisplay.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L60)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L116)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given an estimator and some data.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.chance\_level\_kw?**: `any`

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

• **opts.drop\_intermediate?**: `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

**Default Value**

`false`

• **opts.estimator?**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

• **opts.kwargs?**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

• **opts.name?**: `string`

Name for labeling curve. If `undefined`, no name is used.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

**Default Value**

`false`

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

• **opts.response\_method?**: `"auto"` \| `"predict_proba"` \| `"decision_function"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

**Default Value**

`'auto'`

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Input values.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L133)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot precision-recall curve given binary class predictions.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.chance\_level\_kw?**: `any`

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

• **opts.drop\_intermediate?**: `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

**Default Value**

`false`

• **opts.kwargs?**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

• **opts.name?**: `string`

Name for labeling curve. If `undefined`, name will be set to `"Classifier"`.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

**Default Value**

`false`

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The class considered as the positive class when computing the precision and recall metrics.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.y\_pred?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Estimated probabilities or output of decision function.

• **opts.y\_true?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True binary labels.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L230)

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

[generated/metrics/PrecisionRecallDisplay.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L73)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.chance\_level\_kw?**: `any`

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

• **opts.kwargs?**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

• **opts.name?**: `string`

Name of precision recall curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

**Default Value**

`false`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L317)
