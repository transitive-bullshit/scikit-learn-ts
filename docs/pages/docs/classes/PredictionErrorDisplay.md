**sklearn** • **Docs**

***

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from\_estimator`](#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html)

## Constructors

### new PredictionErrorDisplay()

> **new PredictionErrorDisplay**(`opts`?): [`PredictionErrorDisplay`](PredictionErrorDisplay.md)

#### Parameters

• **opts?**

• **opts.y\_pred?**: `ArrayLike`

Prediction values.

• **opts.y\_true?**: `ArrayLike`

True values.

#### Returns

[`PredictionErrorDisplay`](PredictionErrorDisplay.md)

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L21)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with the different matplotlib axis.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L408)

***

### errors\_lines\_

#### Get Signature

> **get** **errors\_lines\_**(): `Promise`\<`any`\>

Residual lines. If `with\_errors=False`, then it is set to `undefined`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L354)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the scatter and lines.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L435)

***

### line\_

#### Get Signature

> **get** **line\_**(): `Promise`\<`any`\>

Optimal line representing `y\_true \== y\_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L327)

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

[generated/metrics/PredictionErrorDisplay.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L42)

***

### scatter\_

#### Get Signature

> **get** **scatter\_**(): `Promise`\<`any`\>

Scatter data points.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L381)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L98)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot the prediction error given a regressor and some data.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.estimator?**: `any`

Fitted regressor or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a regressor.

• **opts.kind?**: `"actual_vs_predicted"` \| `"residual_vs_predicted"`

The type of plot to draw:

**Default Value**

`'residual_vs_predicted'`

• **opts.line\_kwargs?**: `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

• **opts.random\_state?**: `number`

Controls the randomness when `subsample` is not `undefined`. See Glossary for details.

• **opts.scatter\_kwargs?**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

• **opts.subsample?**: `number`

Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, 1000 samples or less will be displayed.

**Default Value**

`1`

• **opts.X?**: `ArrayLike`

Input values.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L117)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot the prediction error given the true and predicted targets.

For general information regarding `scikit-learn` visualization tools, read more in the Visualization Guide. For details regarding interpreting these plots, refer to the Model Evaluation Guide.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.kind?**: `"actual_vs_predicted"` \| `"residual_vs_predicted"`

The type of plot to draw:

**Default Value**

`'residual_vs_predicted'`

• **opts.line\_kwargs?**: `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

• **opts.random\_state?**: `number`

Controls the randomness when `subsample` is not `undefined`. See Glossary for details.

• **opts.scatter\_kwargs?**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

• **opts.subsample?**: `number`

Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `undefined`, no subsampling will be applied. by default, 1000 samples or less will be displayed.

**Default Value**

`1`

• **opts.y\_pred?**: `ArrayLike`

Predicted target values.

• **opts.y\_true?**: `ArrayLike`

True target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L199)

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

[generated/metrics/PredictionErrorDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L55)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.kind?**: `"actual_vs_predicted"` \| `"residual_vs_predicted"`

The type of plot to draw:

**Default Value**

`'residual_vs_predicted'`

• **opts.line\_kwargs?**: `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

• **opts.scatter\_kwargs?**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L276)
