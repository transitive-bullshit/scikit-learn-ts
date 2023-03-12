# LedoitWolf

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the [User Guide](../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html)

## Constructors

## constructor()

### Signature

```ts
new LedoitWolf(opts?: LedoitWolfOptions): LedoitWolf;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LedoitWolfOptions`](../interfaces/LedoitWolfOptions.md) |

### Returns

[`LedoitWolf`](LedoitWolf.md)

Defined in:  [generated/covariance/LedoitWolf.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/LedoitWolf.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/LedoitWolf.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/LedoitWolf.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L21)

### id

> `string`

Defined in:  [generated/covariance/LedoitWolf.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L18)

### opts

> `any`

Defined in:  [generated/covariance/LedoitWolf.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L19)

## Accessors

### covariance\_

Estimated covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/covariance/LedoitWolf.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L250)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/LedoitWolf.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L369)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/LedoitWolf.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L275)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/LedoitWolf.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L344)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/covariance/LedoitWolf.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L298)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/LedoitWolf.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L30)

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

Defined in: [generated/covariance/LedoitWolf.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L34)

### shrinkage\_

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

#### Signature

```ts
shrinkage_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/LedoitWolf.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L321)

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

Defined in:  [generated/covariance/LedoitWolf.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L85)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: LedoitWolfErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfErrorNormOptions`](../interfaces/LedoitWolfErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/LedoitWolf.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L102)

### fit()

Fit the Ledoit-Wolf shrunk covariance model to X.

#### Signature

```ts
fit(opts: LedoitWolfFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfFitOptions`](../interfaces/LedoitWolfFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/LedoitWolf.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L134)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: LedoitWolfGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfGetPrecisionOptions`](../interfaces/LedoitWolfGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/LedoitWolf.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L162)

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

Defined in:  [generated/covariance/LedoitWolf.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L43)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: LedoitWolfMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfMahalanobisOptions`](../interfaces/LedoitWolfMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/LedoitWolf.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L190)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: LedoitWolfScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfScoreOptions`](../interfaces/LedoitWolfScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/LedoitWolf.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L220)
