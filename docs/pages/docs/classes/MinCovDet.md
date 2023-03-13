# MinCovDet

Minimum Covariance Determinant (MCD): robust estimator of covariance.

The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html)

## Constructors

## constructor()

### Signature

```ts
new MinCovDet(opts?: MinCovDetOptions): MinCovDet;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MinCovDetOptions` |

### Returns

[`MinCovDet`](MinCovDet.md)

Defined in:  [generated/covariance/MinCovDet.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/MinCovDet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/MinCovDet.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/MinCovDet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L21)

### id

> `string`

Defined in:  [generated/covariance/MinCovDet.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L18)

### opts

> `any`

Defined in:  [generated/covariance/MinCovDet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L19)

## Accessors

### covariance\_

Estimated robust covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/MinCovDet.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L413)

### dist\_

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.MinCovDet.fit "sklearn.covariance.MinCovDet.fit") is called) observations.

#### Signature

```ts
dist_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L482)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L530)

### location\_

Estimated robust location.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L390)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/MinCovDet.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L505)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/MinCovDet.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L436)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/MinCovDet.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L30)

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

Defined in: [generated/covariance/MinCovDet.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L34)

### raw\_covariance\_

The raw robust estimated covariance before correction and re-weighting.

#### Signature

```ts
raw_covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/covariance/MinCovDet.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L340)

### raw\_location\_

The raw robust estimated location before correction and re-weighting.

#### Signature

```ts
raw_location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L315)

### raw\_support\_

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

#### Signature

```ts
raw_support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L365)

### support\_

A mask of the observations that have been used to compute the robust estimates of location and shape.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/covariance/MinCovDet.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L459)

## Methods

### correct\_covariance()

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#r491365aeaa84-rvd).

#### Signature

```ts
correct_covariance(opts: MinCovDetCorrectCovarianceOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetCorrectCovarianceOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/covariance/MinCovDet.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L105)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/covariance/MinCovDet.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L86)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: MinCovDetErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetErrorNormOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/MinCovDet.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L135)

### fit()

Fit a Minimum Covariance Determinant with the FastMCD algorithm.

#### Signature

```ts
fit(opts: MinCovDetFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/MinCovDet.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L167)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: MinCovDetGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetGetPrecisionOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/MinCovDet.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L195)

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

Defined in:  [generated/covariance/MinCovDet.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L43)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: MinCovDetMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetMahalanobisOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/MinCovDet.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L223)

### reweight\_covariance()

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#r9465bad4668c-rvdriessen).

#### Signature

```ts
reweight_covariance(opts: MinCovDetReweightCovarianceOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetReweightCovarianceOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/covariance/MinCovDet.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L253)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: MinCovDetScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MinCovDetScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/MinCovDet.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/MinCovDet.ts#L285)
