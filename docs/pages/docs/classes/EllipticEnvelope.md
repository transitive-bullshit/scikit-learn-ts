# EllipticEnvelope

An object for detecting outliers in a Gaussian distributed dataset.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html)

## Constructors

## constructor()

### Signature

```ts
new EllipticEnvelope(opts?: object): EllipticEnvelope;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.assume_centered?` | `boolean` | If `true`, the support of robust location and covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.  `Default Value`  `false` |
| `opts.contamination?` | `number` | The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Range is (0, 0.5\].  `Default Value`  `0.1` |
| `opts.random_state?` | `number` | Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.store_precision?` | `boolean` | Specify if the estimated precision is stored.  `Default Value`  `true` |
| `opts.support_fraction?` | `number` | The proportion of points to be included in the support of the raw MCD estimate. If `undefined`, the minimum value of support\_fraction will be used within the algorithm: `\[n\_sample + n\_features + 1\] / 2`. Range is (0, 1). |

### Returns

[`EllipticEnvelope`](EllipticEnvelope.md)

Defined in:  [generated/covariance/EllipticEnvelope.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L23)

## Methods

### correct\_covariance()

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#rbb2ba44703ed-rvd).

#### Signature

```ts
correct_covariance(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.data?` | `ArrayLike`[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L139)

### decision\_function()

Compute the decision function of the given observations.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L177)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L120)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.comp_cov?` | `ArrayLike`[] | The covariance to compare with. |
| `opts.norm?` | `"frobenius"` \| `"spectral"` | The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.  `Default Value`  `'frobenius'` |
| `opts.scaling?` | `boolean` | If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.  `Default Value`  `true` |
| `opts.squared?` | `boolean` | Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.  `Default Value`  `true` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L214)

### fit()

Fit the EllipticEnvelope model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L274)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L316)

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

Defined in:  [generated/covariance/EllipticEnvelope.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L358)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.precision_?` | `ArrayLike`[] | The precision matrix associated to the current covariance object. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L395)

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

Defined in:  [generated/covariance/EllipticEnvelope.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L72)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L433)

### predict()

Predict labels (1 inlier, -1 outlier) of X according to fitted model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L468)

### reweight\_covariance()

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#rd2c89e63f1c9-rvdriessen).

#### Signature

```ts
reweight_covariance(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.data?` | `ArrayLike`[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L505)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L545)

### score\_samples()

Compute the negative Mahalanobis distances.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L594)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L635)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/EllipticEnvelope.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/EllipticEnvelope.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/EllipticEnvelope.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/EllipticEnvelope.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/EllipticEnvelope.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L17)

## Accessors

### covariance\_

Estimated robust covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L700)

### dist\_

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.EllipticEnvelope.fit "sklearn.covariance.EllipticEnvelope.fit") is called) observations.

#### Signature

```ts
dist_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:889](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L889)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:943](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L943)

### location\_

Estimated robust location.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L673)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:916](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L916)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. The offset depends on the contamination parameter and is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L781)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L727)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/EllipticEnvelope.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L59)

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

Defined in: [generated/covariance/EllipticEnvelope.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L63)

### raw\_covariance\_

The raw robust estimated covariance before correction and re-weighting.

#### Signature

```ts
raw_covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L835)

### raw\_location\_

The raw robust estimated location before correction and re-weighting.

#### Signature

```ts
raw_location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L808)

### raw\_support\_

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

#### Signature

```ts
raw_support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L862)

### support\_

A mask of the observations that have been used to compute the robust estimates of location and shape.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L754)
