# EmpiricalCovariance

Maximum likelihood covariance estimator.

Read more in the [User Guide](../covariance.html#covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EmpiricalCovariance.html)

## Constructors

## constructor()

### Signature

```ts
new EmpiricalCovariance(opts?: EmpiricalCovarianceOptions): EmpiricalCovariance;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`EmpiricalCovarianceOptions`](../interfaces/EmpiricalCovarianceOptions.md) |

### Returns

[`EmpiricalCovariance`](EmpiricalCovariance.md)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L17)

## Accessors

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L299)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L299)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L380)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L380)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L272)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L272)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L353)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L353)

### precision\_

Estimated pseudo-inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L326)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L326)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/EmpiricalCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L28)

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

Defined in:  [generated/covariance/EmpiricalCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L32)

Defined in:  [generated/covariance/EmpiricalCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L28) [generated/covariance/EmpiricalCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L32)

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

Defined in:  [generated/covariance/EmpiricalCovariance.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L85)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: EmpiricalCovarianceErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceErrorNormOptions`](../interfaces/EmpiricalCovarianceErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L102)

### fit()

Fit the maximum likelihood covariance estimator to X.

#### Signature

```ts
fit(opts: EmpiricalCovarianceFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceFitOptions`](../interfaces/EmpiricalCovarianceFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L139)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: EmpiricalCovarianceGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceGetPrecisionOptions`](../interfaces/EmpiricalCovarianceGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L169)

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

Defined in:  [generated/covariance/EmpiricalCovariance.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L41)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: EmpiricalCovarianceMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceMahalanobisOptions`](../interfaces/EmpiricalCovarianceMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L204)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: EmpiricalCovarianceScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceScoreOptions`](../interfaces/EmpiricalCovarianceScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EmpiricalCovariance.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L240)
