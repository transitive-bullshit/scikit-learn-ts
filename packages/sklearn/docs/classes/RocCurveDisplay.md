[**sklearn**](../README.md) • **Docs**

***

ROC Curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)

## Constructors

### new RocCurveDisplay()

> **new RocCurveDisplay**(`opts`?): [`RocCurveDisplay`](RocCurveDisplay.md)

#### Parameters

• **opts?**

• **opts.estimator\_name?**: `string`

Name of estimator. If `undefined`, the estimator name is not shown.

• **opts.fpr?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

False positive rate.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

• **opts.roc\_auc?**: `number`

Area under ROC curve. If `undefined`, the roc\_auc score is not shown.

• **opts.tpr?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True positive rate.

#### Returns

[`RocCurveDisplay`](RocCurveDisplay.md)

#### Defined in

[generated/metrics/RocCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L19)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with ROC Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L406)

***

### chance\_level\_

#### Get Signature

> **get** **chance\_level\_**(): `Promise`\<`any`\>

The chance level line. It is `undefined` if the chance level is not plotted.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L381)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L429)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

ROC Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L358)

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

[generated/metrics/RocCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L55)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L107)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Create a ROC Curve display from an estimator.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.chance\_level\_kw?**: `any`

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

• **opts.drop\_intermediate?**: `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

**Default Value**

`true`

• **opts.estimator?**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

• **opts.kwargs?**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

• **opts.name?**: `string`

Name of ROC Curve for labeling. If `undefined`, use the name of the estimator.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level.

**Default Value**

`false`

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

• **opts.response\_method?**: `"decision_function"` \| `"auto’} default=’auto"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Input values.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L124)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot ROC curve given the true and predicted values.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.chance\_level\_kw?**: `any`

Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.

• **opts.drop\_intermediate?**: `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

**Default Value**

`true`

• **opts.kwargs?**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

• **opts.name?**: `string`

Name of ROC curve for labeling. If `undefined`, name will be set to `"Classifier"`.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level.

**Default Value**

`false`

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.y\_pred?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by “decision\_function” on some classifiers).

• **opts.y\_true?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L219)

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

[generated/metrics/RocCurveDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L68)

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

Name of ROC Curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown.

• **opts.plot\_chance\_level?**: `boolean`

Whether to plot the chance level.

**Default Value**

`false`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/RocCurveDisplay.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L304)
