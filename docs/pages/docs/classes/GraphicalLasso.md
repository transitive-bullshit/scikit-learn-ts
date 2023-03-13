# GraphicalLasso

Sparse inverse covariance estimation with an l1-penalized estimator.

Read more in the User Guide.

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
| `opts.enet_tol?` | `number` | The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.max_iter?` | `number` | The maximum number of iterations.  `Default Value`  `100` |
| `opts.mode?` | `"cd"` \| `"lars"` | The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.  `Default Value`  `'cd'` |
| `opts.tol?` | `number` | The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].  `Default Value`  `0.0001` |
| `opts.verbose?` | `boolean` | If verbose is `true`, the objective function and dual gap are plotted at each iteration.  `Default Value`  `false` |

### Returns

[`GraphicalLasso`](GraphicalLasso.md)

Defined in:  [generated/covariance/GraphicalLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L23)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L136)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L153)

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
| `opts.X?` | `ArrayLike`[] | Data from which to compute the covariance estimate. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L211)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L249)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L90)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L283)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L318)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/GraphicalLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/GraphicalLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L17)

## Accessors

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/GraphicalLasso.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L383)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/GraphicalLasso.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L483)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/GraphicalLasso.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L358)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/GraphicalLasso.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L458)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/GraphicalLasso.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L433)

### precision\_

Estimated pseudo inverse matrix.

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/GraphicalLasso.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L408)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L77)

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

Defined in: [generated/covariance/GraphicalLasso.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L81)
