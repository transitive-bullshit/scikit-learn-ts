# Class: RANSACRegressor

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ransac-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)

## Constructors

### new RANSACRegressor()

> **new RANSACRegressor**(`opts`?): [`RANSACRegressor`](RANSACRegressor.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator`? | `any` | Base estimator object which implements the following methods: |
| `opts.is_data_valid`? | `any` | This function is called with the randomly selected data before the model is fitted to it: `is_data_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. |
| `opts.is_model_valid`? | `any` | This function is called with the estimated model and the randomly selected data: `is_model_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is_data_valid`. `is_model_valid` should therefore only be used if the estimated model is needed for making the rejection decision. |
| `opts.loss`? | `string` | String inputs, ‘absolute_error’ and ‘squared_error’ are supported which find the absolute error and squared error per sample respectively. If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`. If the loss on a sample is greater than the `residual_threshold`, then this sample is classified as an outlier. |
| `opts.max_skips`? | `number` | Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is_data_valid` or invalid models defined by `is_model_valid`. |
| `opts.max_trials`? | `number` | Maximum number of iterations for random sample selection. |
| `opts.min_samples`? | `number` | Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min_samples >= 1`, treated as a relative number `ceil(min_samples \* X.shape\[0\])` for `min_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") estimator is assumed and `min_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is used, the user must provide a value. |
| `opts.random_state`? | `number` | The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.residual_threshold`? | `number` | Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers. |
| `opts.stop_n_inliers`? | `number` | Stop iteration if at least this number of inliers are found. |
| `opts.stop_probability`? | `number` | RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations): |
| `opts.stop_score`? | `number` | Stop iteration if score is greater equal than this threshold. |

**Returns** [`RANSACRegressor`](RANSACRegressor.md)

**Defined in** [generated/linear\_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21) |
| `id` | `string` | `undefined` | [generated/linear\_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18) |
| `opts` | `any` | `undefined` | [generated/linear\_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19) |

## Accessors

### estimator\_

**Get Signature**

> **get** **estimator\_**(): `Promise`\<`any`\>

Best fitted model (copy of the `estimator` object).

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L373)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L548)

***

### inlier\_mask\_

**Get Signature**

> **get** **inlier\_mask\_**(): `Promise`\<`any`\>

Boolean mask of inliers classified as `true`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L423)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L523)

***

### n\_skips\_invalid\_data\_

**Get Signature**

> **get** **n\_skips\_invalid\_data\_**(): `Promise`\<`number`\>

Number of iterations skipped due to invalid data defined by `is_data_valid`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L473)

***

### n\_skips\_invalid\_model\_

**Get Signature**

> **get** **n\_skips\_invalid\_model\_**(): `Promise`\<`number`\>

Number of iterations skipped due to an invalid model defined by `is_model_valid`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L498)

***

### n\_skips\_no\_inliers\_

**Get Signature**

> **get** **n\_skips\_no\_inliers\_**(): `Promise`\<`number`\>

Number of iterations skipped due to finding zero inliers.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L448)

***

### n\_trials\_

**Get Signature**

> **get** **n\_trials\_**(): `Promise`\<`number`\>

Number of random selection trials until one of the stop criteria is met. It is always `<= max_trials`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L398)

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

**Defined in** [generated/linear\_model/RANSACRegressor.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L100)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L152)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit estimator using RANSAC algorithm.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters routed to the `fit` method of the sub-estimator via the metadata routing API. |
| `opts.sample_weight`? | `ArrayLike` | Individual weights for each sample raises error if sample_weight is passed and estimator fit method does not support it. |
| `opts.X`? | `ArrayLike` | Training data. |
| `opts.y`? | `ArrayLike` | Target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L169)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L218)

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

**Defined in** [generated/linear\_model/RANSACRegressor.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L113)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the estimated model.

This is a wrapper for `estimator_.predict(X)`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters routed to the `predict` method of the sub-estimator via the metadata routing API. |
| `opts.X`? | `any`[] | Input data. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L254)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the score of the prediction.

This is a wrapper for `estimator_.score(X, y)`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters routed to the `score` method of the sub-estimator via the metadata routing API. |
| `opts.X`? | `any`[] | Training data. |
| `opts.y`? | `ArrayLike` | Target values. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L293)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/RANSACRegressor.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L339)
