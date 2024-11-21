[**sklearn**](../README.md) • **Docs**

***

DET curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

## Constructors

### new DetCurveDisplay()

> **new DetCurveDisplay**(`opts`?): [`DetCurveDisplay`](DetCurveDisplay.md)

#### Parameters

• **opts?**

• **opts.estimator\_name?**: `string`

Name of estimator. If `undefined`, the estimator name is not shown.

• **opts.fnr?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

False negative rate.

• **opts.fpr?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

False positive rate.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The label of the positive class.

#### Returns

[`DetCurveDisplay`](DetCurveDisplay.md)

#### Defined in

[generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with DET Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L326)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L349)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

DET Curve.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L303)

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

[generated/metrics/DetCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L50)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L102)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot DET curve given an estimator and data.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.estimator?**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

• **opts.kwargs?**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

• **opts.name?**: `string`

Name of DET curve for labeling. If `undefined`, use the name of the estimator.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

• **opts.response\_method?**: `"decision_function"` \| `"auto’} default=’auto"`

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Input values.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L121)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot the DET curve given the true and predicted labels.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.kwargs?**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

• **opts.name?**: `string`

Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.y\_pred?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision\_function` on some classifiers).

• **opts.y\_true?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L197)

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

[generated/metrics/DetCurveDisplay.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L63)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.kwargs?**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

• **opts.name?**: `string`

Name of DET curve for labeling. If `undefined`, use `estimator\_name` if it is not `undefined`, otherwise no labeling is shown.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DetCurveDisplay.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L261)
