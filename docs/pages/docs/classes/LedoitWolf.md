# LedoitWolf

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html)

## Constructors

## constructor()

### Signature

```ts
new LedoitWolf(opts?: object): LedoitWolf;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.assume_centered?` | `boolean` | If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.  `Default Value`  `false` |
| `opts.block_size?` | `number` | Size of blocks into which the covariance matrix will be split during its Ledoit-Wolf estimation. This is purely a memory optimization and does not affect results.  `Default Value`  `1000` |
| `opts.store_precision?` | `boolean` | Specify if the estimated precision is stored.  `Default Value`  `true` |

### Returns

[`LedoitWolf`](LedoitWolf.md)

Defined in:  [generated/covariance/LedoitWolf.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L25)

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

Defined in:  [generated/covariance/LedoitWolf.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L106)

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

Defined in:  [generated/covariance/LedoitWolf.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L123)

### fit()

Fit the Ledoit-Wolf shrunk covariance model to X.

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

Defined in:  [generated/covariance/LedoitWolf.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L181)

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

Defined in:  [generated/covariance/LedoitWolf.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L219)

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

Defined in:  [generated/covariance/LedoitWolf.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L64)

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

Defined in:  [generated/covariance/LedoitWolf.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L252)

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

Defined in:  [generated/covariance/LedoitWolf.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L287)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/LedoitWolf.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/LedoitWolf.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/LedoitWolf.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L21)

### id

> `string`

Defined in:  [generated/covariance/LedoitWolf.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L18)

### opts

> `any`

Defined in:  [generated/covariance/LedoitWolf.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L19)

## Accessors

### covariance\_

Estimated covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/LedoitWolf.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L327)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/LedoitWolf.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L446)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/LedoitWolf.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L352)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/LedoitWolf.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L421)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/LedoitWolf.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L375)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/LedoitWolf.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L51)

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

Defined in: [generated/covariance/LedoitWolf.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L55)

### shrinkage\_

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

#### Signature

```ts
shrinkage_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/LedoitWolf.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L398)
