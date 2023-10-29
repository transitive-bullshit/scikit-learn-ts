# GraphicalLassoCV

Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html)

## Constructors

## constructor()

### Signature

```ts
new GraphicalLassoCV(opts?: object): GraphicalLassoCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alphas?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | If an integer is given, it fixes the number of points on the grids of alpha to be used. If a list is given, it gives the grid to be used. See the notes in the class docstring for more details. Range is \[1, inf) for an integer. Range is (0, inf\] for an array-like of floats.  `Default Value`  `4` |
| `opts.assume_centered?` | `boolean` | If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.  `Default Value`  `false` |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.enet_tol?` | `number` | The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.eps?` | `number` | The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Default is `np.finfo(np.float64).eps`. |
| `opts.max_iter?` | `number` | Maximum number of iterations.  `Default Value`  `100` |
| `opts.mode?` | `"cd"` \| `"lars"` | The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where number of features is greater than number of samples. Elsewhere prefer cd which is more numerically stable.  `Default Value`  `'cd'` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.n_refinements?` | `number` | The number of times the grid is refined. Not used if explicit values of alphas are passed. Range is \[1, inf).  `Default Value`  `4` |
| `opts.tol?` | `number` | The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.verbose?` | `boolean` | If verbose is `true`, the objective function and duality gap are printed at each iteration.  `Default Value`  `false` |

### Returns

[`GraphicalLassoCV`](GraphicalLassoCV.md)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L25)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L166)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L183)

### fit()

Fit the GraphicalLasso covariance model to X.

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L243)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L285)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L322)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L114)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L360)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L397)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L443)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L21)

### id

> `string`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L18)

### opts

> `any`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L19)

## Accessors

### alpha\_

Penalization parameter selected.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L588)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L588)

### costs\_

The list of values of the objective function and the dual gap at each iteration. Returned only if return\_costs is `true`.

#### Signature

```ts
costs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L561)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L561)

### covariance\_

Estimated covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L507)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L507)

### cv\_results\_

A dict with keys:

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L615)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L615)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L696)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L696)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L480)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L480)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L669)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L669)

### n\_iter\_

Number of iterations run for the optimal alpha.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L642)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L642)

### precision\_

Estimated precision matrix (inverse covariance).

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L534)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L534)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L101)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L105)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L101) [generated/covariance/GraphicalLassoCV.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L105)
