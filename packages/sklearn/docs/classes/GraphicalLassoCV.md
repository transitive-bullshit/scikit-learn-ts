# GraphicalLassoCV

Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html)

## Constructors

## constructor()

### Signature

```ts
new GraphicalLassoCV(opts?: GraphicalLassoCVOptions): GraphicalLassoCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GraphicalLassoCVOptions`](../interfaces/GraphicalLassoCVOptions.md) |

### Returns

[`GraphicalLassoCV`](GraphicalLassoCV.md)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L21)

### id

> `string`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L18)

### opts

> `any`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L19)

## Accessors

### alpha\_

Penalization parameter selected.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L356)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L356)

### covariance\_

Estimated covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L302)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L302)

### cv\_results\_

A dict with keys:

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L383)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L383)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L464)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L464)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L275)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L275)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L437)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L437)

### n\_iter\_

Number of iterations run for the optimal alpha.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L410)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L410)

### precision\_

Estimated precision matrix (inverse covariance).

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L329)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L329)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/GraphicalLassoCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L30)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L34)

Defined in:  [generated/covariance/GraphicalLassoCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L30) [generated/covariance/GraphicalLassoCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L34)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L95)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: GraphicalLassoCVErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVErrorNormOptions`](../interfaces/GraphicalLassoCVErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L112)

### fit()

Fit the GraphicalLasso covariance model to X.

#### Signature

```ts
fit(opts: GraphicalLassoCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVFitOptions`](../interfaces/GraphicalLassoCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L146)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: GraphicalLassoCVGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVGetPrecisionOptions`](../interfaces/GraphicalLassoCVGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L176)

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

Defined in:  [generated/covariance/GraphicalLassoCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L43)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: GraphicalLassoCVMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVMahalanobisOptions`](../interfaces/GraphicalLassoCVMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L209)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: GraphicalLassoCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVScoreOptions`](../interfaces/GraphicalLassoCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLassoCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L243)
