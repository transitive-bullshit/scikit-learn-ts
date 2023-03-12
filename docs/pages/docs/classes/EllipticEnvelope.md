# EllipticEnvelope

An object for detecting outliers in a Gaussian distributed dataset.

Read more in the [User Guide](../outlier_detection.html#outlier-detection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html)

## Constructors

## constructor()

### Signature

```ts
new EllipticEnvelope(opts?: EllipticEnvelopeOptions): EllipticEnvelope;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`EllipticEnvelopeOptions`](../interfaces/EllipticEnvelopeOptions.md) |

### Returns

[`EllipticEnvelope`](EllipticEnvelope.md)

Defined in:  [generated/covariance/EllipticEnvelope.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/EllipticEnvelope.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/EllipticEnvelope.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/EllipticEnvelope.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/EllipticEnvelope.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/EllipticEnvelope.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L17)

## Accessors

### covariance\_

Estimated robust covariance matrix.

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L502)

### dist\_

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.EllipticEnvelope.fit "sklearn.covariance.EllipticEnvelope.fit") is called) observations.

#### Signature

```ts
dist_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L691)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L745)

### location\_

Estimated robust location.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L475)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L718)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. The offset depends on the contamination parameter and is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/covariance/EllipticEnvelope.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L583)

### precision\_

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L529)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/EllipticEnvelope.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L28)

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

Defined in: [generated/covariance/EllipticEnvelope.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L32)

### raw\_covariance\_

The raw robust estimated covariance before correction and re-weighting.

#### Signature

```ts
raw_covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/covariance/EllipticEnvelope.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L637)

### raw\_location\_

The raw robust estimated location before correction and re-weighting.

#### Signature

```ts
raw_location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L610)

### raw\_support\_

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

#### Signature

```ts
raw_support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L664)

### support\_

A mask of the observations that have been used to compute the robust estimates of location and shape.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/covariance/EllipticEnvelope.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L556)

## Methods

### correct\_covariance()

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#rbb2ba44703ed-rvd).

#### Signature

```ts
correct_covariance(opts: EllipticEnvelopeCorrectCovarianceOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeCorrectCovarianceOptions`](../interfaces/EllipticEnvelopeCorrectCovarianceOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L108)

### decision\_function()

Compute the decision function of the given observations.

#### Signature

```ts
decision_function(opts: EllipticEnvelopeDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeDecisionFunctionOptions`](../interfaces/EllipticEnvelopeDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L143)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L89)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: EllipticEnvelopeErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeErrorNormOptions`](../interfaces/EllipticEnvelopeErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L177)

### fit()

Fit the EllipticEnvelope model.

#### Signature

```ts
fit(opts: EllipticEnvelopeFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeFitOptions`](../interfaces/EllipticEnvelopeFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L211)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: EllipticEnvelopeFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeFitPredictOptions`](../interfaces/EllipticEnvelopeFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L243)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: EllipticEnvelopeGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeGetPrecisionOptions`](../interfaces/EllipticEnvelopeGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L273)

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

Defined in:  [generated/covariance/EllipticEnvelope.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L41)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: EllipticEnvelopeMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeMahalanobisOptions`](../interfaces/EllipticEnvelopeMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L306)

### predict()

Predict labels (1 inlier, -1 outlier) of X according to fitted model.

#### Signature

```ts
predict(opts: EllipticEnvelopePredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopePredictOptions`](../interfaces/EllipticEnvelopePredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L338)

### reweight\_covariance()

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#rd2c89e63f1c9-rvdriessen).

#### Signature

```ts
reweight_covariance(opts: EllipticEnvelopeReweightCovarianceOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeReweightCovarianceOptions`](../interfaces/EllipticEnvelopeReweightCovarianceOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L370)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: EllipticEnvelopeScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeScoreOptions`](../interfaces/EllipticEnvelopeScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L407)

### score\_samples()

Compute the negative Mahalanobis distances.

#### Signature

```ts
score_samples(opts: EllipticEnvelopeScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeScoreSamplesOptions`](../interfaces/EllipticEnvelopeScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/EllipticEnvelope.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L441)
