# RANSACRegressor

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](../linear_model.html#ransac-regression).

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
| `opts.base_estimator?` | `any` | Use `estimator` instead.  `Default Value`  `'deprecated'` |
| `opts.estimator?` | `any` | Base estimator object which implements the following methods: |
| `opts.is_data_valid?` | `any` | This function is called with the randomly selected data before the model is fitted to it: `is\_data\_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. |
| `opts.is_model_valid?` | `any` | This function is called with the estimated model and the randomly selected data: `is\_model\_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is\_data\_valid`. `is\_model\_valid` should therefore only be used if the estimated model is needed for making the rejection decision. |
| `opts.loss?` | `string` | String inputs, ‘absolute\_error’ and ‘squared\_error’ are supported which find the absolute error and squared error per sample respectively.  If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.  If the loss on a sample is greater than the `residual\_threshold`, then this sample is classified as an outlier.  `Default Value`  `'absolute_error'` |
| `opts.max_skips?` | `number` | Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is\_data\_valid` or invalid models defined by `is\_model\_valid`. |
| `opts.max_trials?` | `number` | Maximum number of iterations for random sample selection.  `Default Value`  `100` |
| `opts.min_samples?` | `number` | Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min\_samples >= 1`, treated as a relative number `ceil(min\_samples \* X.shape\[0\])` for `min\_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a `sklearn.linear\_model.LinearRegression()` estimator is assumed and `min\_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than `linear\_model.LinearRegression` is used, the user must provide a value. |
| `opts.random_state?` | `number` | The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.residual_threshold?` | `number` | Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers. |
| `opts.stop_n_inliers?` | `number` | Stop iteration if at least this number of inliers are found. |
| `opts.stop_probability?` | `number` | RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations):  `Default Value`  `0.99` |
| `opts.stop_score?` | `number` | Stop iteration if score is greater equal than this threshold. |

### Returns

[`RANSACRegressor`](RANSACRegressor.md)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L178)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Individual weights for each sample raises error if sample\_weight is passed and estimator fit method does not support it. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L195)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L120)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L244)

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
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L279)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19)

## Accessors

### estimator\_

Best fitted model (copy of the `estimator` object).

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L319)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L319)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L494)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L494)

### inlier\_mask\_

Boolean mask of inliers classified as `true`.

#### Signature

```ts
inlier_mask_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L369)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L369)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L469)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L469)

### n\_skips\_invalid\_data\_

Number of iterations skipped due to invalid data defined by `is\_data\_valid`.

#### Signature

```ts
n_skips_invalid_data_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L419)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L419)

### n\_skips\_invalid\_model\_

Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.

#### Signature

```ts
n_skips_invalid_model_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L444)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L444)

### n\_skips\_no\_inliers\_

Number of iterations skipped due to finding zero inliers.

#### Signature

```ts
n_skips_no_inliers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L394)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L394)

### n\_trials\_

Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.

#### Signature

```ts
n_trials_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L344)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L344)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L107)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L111)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L107) [generated/linear\_model/RANSACRegressor.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L111)
