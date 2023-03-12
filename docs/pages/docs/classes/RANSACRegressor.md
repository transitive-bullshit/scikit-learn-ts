# RANSACRegressor

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](../linear_model.html#ransac-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new RANSACRegressor(opts?: RANSACRegressorOptions): RANSACRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RANSACRegressorOptions`](../interfaces/RANSACRegressorOptions.md) |

### Returns

[`RANSACRegressor`](RANSACRegressor.md)

Defined in:  [generated/linear\_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19)

## Accessors

### estimator\_

Best fitted model (copy of the `estimator` object).

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L212)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L387)

### inlier\_mask\_

Boolean mask of inliers classified as `true`.

#### Signature

```ts
inlier_mask_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L262)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L362)

### n\_skips\_invalid\_data\_

Number of iterations skipped due to invalid data defined by `is\_data\_valid`.

#### Signature

```ts
n_skips_invalid_data_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L312)

### n\_skips\_invalid\_model\_

Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.

#### Signature

```ts
n_skips_invalid_model_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L337)

### n\_skips\_no\_inliers\_

Number of iterations skipped due to finding zero inliers.

#### Signature

```ts
n_skips_no_inliers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L287)

### n\_trials\_

Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.

#### Signature

```ts
n_trials_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RANSACRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L237)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L30)

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

Defined in: [generated/linear\_model/RANSACRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L34)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L101)

### fit()

Fit estimator using RANSAC algorithm.

#### Signature

```ts
fit(opts: RANSACRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorFitOptions`](../interfaces/RANSACRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L118)

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

Defined in:  [generated/linear\_model/RANSACRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L43)

### predict()

Predict using the estimated model.

This is a wrapper for `estimator\_.predict(X)`.

#### Signature

```ts
predict(opts: RANSACRegressorPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorPredictOptions`](../interfaces/RANSACRegressorPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L152)

### score()

Return the score of the prediction.

This is a wrapper for `estimator\_.score(X, y)`.

#### Signature

```ts
score(opts: RANSACRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorScoreOptions`](../interfaces/RANSACRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RANSACRegressor.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L182)
