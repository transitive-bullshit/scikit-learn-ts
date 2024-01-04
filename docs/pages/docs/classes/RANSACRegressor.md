# RANSACRegressor

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new RANSACRegressor(opts?: object): RANSACRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | Base estimator object which implements the following methods: |
| `opts.is_data_valid?` | `any` | This function is called with the randomly selected data before the model is fitted to it: `is\_data\_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. |
| `opts.is_model_valid?` | `any` | This function is called with the estimated model and the randomly selected data: `is\_model\_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is\_data\_valid`. `is\_model\_valid` should therefore only be used if the estimated model is needed for making the rejection decision. |
| `opts.loss?` | `string` | String inputs, ‘absolute\_error’ and ‘squared\_error’ are supported which find the absolute error and squared error per sample respectively.  If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.  If the loss on a sample is greater than the `residual\_threshold`, then this sample is classified as an outlier.  `Default Value`  `'absolute_error'` |
| `opts.max_skips?` | `number` | Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is\_data\_valid` or invalid models defined by `is\_model\_valid`. |
| `opts.max_trials?` | `number` | Maximum number of iterations for random sample selection.  `Default Value`  `100` |
| `opts.min_samples?` | `number` | Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min\_samples >= 1`, treated as a relative number `ceil(min\_samples \* X.shape\[0\])` for `min\_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") estimator is assumed and `min\_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is used, the user must provide a value. |
| `opts.random_state?` | `number` | The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.residual_threshold?` | `number` | Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers. |
| `opts.stop_n_inliers?` | `number` | Stop iteration if at least this number of inliers are found. |
| `opts.stop_probability?` | `number` | RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations):  `Default Value`  `0.99` |
| `opts.stop_score?` | `number` | Stop iteration if score is greater equal than this threshold. |

### Returns

[`RANSACRegressor`](RANSACRegressor.md)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L171)

### fit()

Fit estimator using RANSAC algorithm.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.sample_weight?` | `ArrayLike` | Individual weights for each sample raises error if sample\_weight is passed and estimator fit method does not support it. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L188)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L237)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L113)

### predict()

Predict using the estimated model.

This is a wrapper for `estimator\_.predict(X)`.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | Input data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L274)

### score()

Return the score of the prediction.

This is a wrapper for `estimator\_.score(X, y)`.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | Training data. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L309)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L353)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19)

## Accessors

### estimator\_

Best fitted model (copy of the `estimator` object).

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L388)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L563)

### inlier\_mask\_

Boolean mask of inliers classified as `true`.

#### Signature

```ts
inlier_mask_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L438)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L538)

### n\_skips\_invalid\_data\_

Number of iterations skipped due to invalid data defined by `is\_data\_valid`.

#### Signature

```ts
n_skips_invalid_data_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L488)

### n\_skips\_invalid\_model\_

Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.

#### Signature

```ts
n_skips_invalid_model_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L513)

### n\_skips\_no\_inliers\_

Number of iterations skipped due to finding zero inliers.

#### Signature

```ts
n_skips_no_inliers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L463)

### n\_trials\_

Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.

#### Signature

```ts
n_trials_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L413)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L100)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/linear\_model/RANSACRegressor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L104)
