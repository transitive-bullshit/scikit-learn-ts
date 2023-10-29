# ShrunkCovariance

Covariance estimator with shrinkage.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.ShrunkCovariance.html)

## Constructors

## constructor()

### Signature

```ts
new ShrunkCovariance(opts?: object): ShrunkCovariance;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.assume_centered?` | `boolean` | If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data will be centered before computation.  `Default Value`  `false` |
| `opts.shrinkage?` | `number` | Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].  `Default Value`  `0.1` |
| `opts.store_precision?` | `boolean` | Specify if the estimated precision is stored.  `Default Value`  `true` |

### Returns

[`ShrunkCovariance`](ShrunkCovariance.md)

Defined in:  [generated/covariance/ShrunkCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L23)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L106)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L123)

### fit()

Fit the shrunk covariance model to X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L183)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L225)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L262)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L62)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L300)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X_test?` | `ArrayLike`[] | Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering). |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L337)

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
| `opts.X_test?` | `string` \| `boolean` | Metadata routing for `X\_test` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L383)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/ShrunkCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/ShrunkCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/ShrunkCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/ShrunkCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/ShrunkCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L17)

## Accessors

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/ShrunkCovariance.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L420)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/ShrunkCovariance.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L528)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/ShrunkCovariance.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L447)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/ShrunkCovariance.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L501)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/ShrunkCovariance.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L474)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/ShrunkCovariance.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L49)

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

Defined in: [generated/covariance/ShrunkCovariance.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L53)
