# ShrunkCovariance

Covariance estimator with shrinkage.

Read more in the [User Guide](../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.ShrunkCovariance.html)

## Constructors

## constructor()

### Signature

```ts
new ShrunkCovariance(opts?: ShrunkCovarianceOptions): ShrunkCovariance;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ShrunkCovarianceOptions`](../interfaces/ShrunkCovarianceOptions.md) |

### Returns

[`ShrunkCovariance`](ShrunkCovariance.md)

Defined in:  [generated/covariance/ShrunkCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/ShrunkCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/ShrunkCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/ShrunkCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/ShrunkCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/ShrunkCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L17)

## Accessors

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L265)

Defined in:  [generated/covariance/ShrunkCovariance.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L265)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L373)

Defined in:  [generated/covariance/ShrunkCovariance.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L373)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L292)

Defined in:  [generated/covariance/ShrunkCovariance.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L292)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L346)

Defined in:  [generated/covariance/ShrunkCovariance.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L346)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L319)

Defined in:  [generated/covariance/ShrunkCovariance.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L319)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/ShrunkCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L28)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L32)

Defined in:  [generated/covariance/ShrunkCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L28) [generated/covariance/ShrunkCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L32)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L85)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: ShrunkCovarianceErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceErrorNormOptions`](../interfaces/ShrunkCovarianceErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L102)

### fit()

Fit the shrunk covariance model to X.

#### Signature

```ts
fit(opts: ShrunkCovarianceFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceFitOptions`](../interfaces/ShrunkCovarianceFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L136)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: ShrunkCovarianceGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceGetPrecisionOptions`](../interfaces/ShrunkCovarianceGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L166)

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

Defined in:  [generated/covariance/ShrunkCovariance.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L41)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: ShrunkCovarianceMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceMahalanobisOptions`](../interfaces/ShrunkCovarianceMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L199)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: ShrunkCovarianceScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceScoreOptions`](../interfaces/ShrunkCovarianceScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/ShrunkCovariance.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L233)
