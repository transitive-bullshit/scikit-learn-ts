# GraphicalLasso

Sparse inverse covariance estimation with an l1-penalized estimator.

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html)

## Constructors

## constructor()

### Signature

```ts
new GraphicalLasso(opts?: object): GraphicalLasso;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].  `Default Value`  `0.01` |
| `opts.assume_centered?` | `boolean` | If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.  `Default Value`  `false` |
| `opts.covariance?` | `"precomputed"` | If covariance is “precomputed”, the input data in `fit` is assumed to be the covariance matrix. If `undefined`, the empirical covariance is estimated from the data `X`. |
| `opts.enet_tol?` | `number` | The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.eps?` | `number` | The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Default is `np.finfo(np.float64).eps`. |
| `opts.max_iter?` | `number` | The maximum number of iterations.  `Default Value`  `100` |
| `opts.mode?` | `"cd"` \| `"lars"` | The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.  `Default Value`  `'cd'` |
| `opts.tol?` | `number` | The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.verbose?` | `boolean` | If verbose is `true`, the objective function and dual gap are plotted at each iteration.  `Default Value`  `false` |

### Returns

[`GraphicalLasso`](GraphicalLasso.md)

Defined in:  [generated/covariance/GraphicalLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L23)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L148)

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
| `opts.comp_cov?` | [`ArrayLike`](../types/ArrayLike.md)[] | The covariance to compare with. |
| `opts.norm?` | `"frobenius"` \| `"spectral"` | The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.  `Default Value`  `'frobenius'` |
| `opts.scaling?` | `boolean` | If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.  `Default Value`  `true` |
| `opts.squared?` | `boolean` | Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.  `Default Value`  `true` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L165)

### fit()

Fit the GraphicalLasso model to X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Data from which to compute the covariance estimate. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L223)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/covariance/GraphicalLasso.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L263)

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
| `opts.precision_?` | [`ArrayLike`](../types/ArrayLike.md)[] | The precision matrix associated to the current covariance object. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L298)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L100)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L332)

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
| `opts.X_test?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering). |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L367)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/covariance/GraphicalLasso.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L411)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/GraphicalLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/GraphicalLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L17)

## Accessors

### costs\_

The list of values of the objective function and the dual gap at each iteration. Returned only if return\_costs is `true`.

#### Signature

```ts
costs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L546)

Defined in:  [generated/covariance/GraphicalLasso.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L546)

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLasso.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L471)

Defined in:  [generated/covariance/GraphicalLasso.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L471)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L594)

Defined in:  [generated/covariance/GraphicalLasso.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L594)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L446)

Defined in:  [generated/covariance/GraphicalLasso.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L446)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L569)

Defined in:  [generated/covariance/GraphicalLasso.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L569)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L521)

Defined in:  [generated/covariance/GraphicalLasso.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L521)

### precision\_

Estimated pseudo inverse matrix.

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLasso.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L496)

Defined in:  [generated/covariance/GraphicalLasso.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L496)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L87)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L91)

Defined in:  [generated/covariance/GraphicalLasso.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L87) [generated/covariance/GraphicalLasso.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L91)
