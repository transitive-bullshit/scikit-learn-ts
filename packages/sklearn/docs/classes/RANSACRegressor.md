[**sklearn**](../README.md) • **Docs**

***

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](../linear_model.html#ransac-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)

## Constructors

### new RANSACRegressor()

> **new RANSACRegressor**(`opts`?): [`RANSACRegressor`](RANSACRegressor.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

Base estimator object which implements the following methods:

• **opts.is\_data\_valid?**: `any`

This function is called with the randomly selected data before the model is fitted to it: `is\_data\_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped.

• **opts.is\_model\_valid?**: `any`

This function is called with the estimated model and the randomly selected data: `is\_model\_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is\_data\_valid`. `is\_model\_valid` should therefore only be used if the estimated model is needed for making the rejection decision.

• **opts.loss?**: `string`

String inputs, ‘absolute\_error’ and ‘squared\_error’ are supported which find the absolute error and squared error per sample respectively.

If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.

If the loss on a sample is greater than the `residual\_threshold`, then this sample is classified as an outlier.

**Default Value**

`'absolute_error'`

• **opts.max\_skips?**: `number`

Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is\_data\_valid` or invalid models defined by `is\_model\_valid`.

• **opts.max\_trials?**: `number`

Maximum number of iterations for random sample selection.

**Default Value**

`100`

• **opts.min\_samples?**: `number`

Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min\_samples >= 1`, treated as a relative number `ceil(min\_samples \* X.shape\[0\])` for `min\_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") estimator is assumed and `min\_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is used, the user must provide a value.

• **opts.random\_state?**: `number`

The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.residual\_threshold?**: `number`

Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers.

• **opts.stop\_n\_inliers?**: `number`

Stop iteration if at least this number of inliers are found.

• **opts.stop\_probability?**: `number`

RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations):

**Default Value**

`0.99`

• **opts.stop\_score?**: `number`

Stop iteration if score is greater equal than this threshold.

#### Returns

[`RANSACRegressor`](RANSACRegressor.md)

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

Best fitted model (copy of the `estimator` object).

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L373)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L548)

***

### inlier\_mask\_

#### Get Signature

> **get** **inlier\_mask\_**(): `Promise`\<`any`\>

Boolean mask of inliers classified as `true`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L423)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L523)

***

### n\_skips\_invalid\_data\_

#### Get Signature

> **get** **n\_skips\_invalid\_data\_**(): `Promise`\<`number`\>

Number of iterations skipped due to invalid data defined by `is\_data\_valid`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L473)

***

### n\_skips\_invalid\_model\_

#### Get Signature

> **get** **n\_skips\_invalid\_model\_**(): `Promise`\<`number`\>

Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L498)

***

### n\_skips\_no\_inliers\_

#### Get Signature

> **get** **n\_skips\_no\_inliers\_**(): `Promise`\<`number`\>

Number of iterations skipped due to finding zero inliers.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L448)

***

### n\_trials\_

#### Get Signature

> **get** **n\_trials\_**(): `Promise`\<`number`\>

Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L398)

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

[generated/linear\_model/RANSACRegressor.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L100)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L152)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit estimator using RANSAC algorithm.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters routed to the `fit` method of the sub-estimator via the metadata routing API.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Individual weights for each sample raises error if sample\_weight is passed and estimator fit method does not support it.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L169)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L218)

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

[generated/linear\_model/RANSACRegressor.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L113)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the estimated model.

This is a wrapper for `estimator\_.predict(X)`.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters routed to the `predict` method of the sub-estimator via the metadata routing API.

• **opts.X?**: `any`[]

Input data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L254)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the score of the prediction.

This is a wrapper for `estimator\_.score(X, y)`.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters routed to the `score` method of the sub-estimator via the metadata routing API.

• **opts.X?**: `any`[]

Training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L293)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RANSACRegressor.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L339)
