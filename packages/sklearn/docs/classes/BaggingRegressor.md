# BaggingRegressor

A Bagging regressor.

A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#r4d113ba76fc0-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#r4d113ba76fc0-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#r4d113ba76fc0-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#r4d113ba76fc0-4).

Read more in the [User Guide](../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new BaggingRegressor(opts?: BaggingRegressorOptions): BaggingRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BaggingRegressorOptions`](../interfaces/BaggingRegressorOptions.md) |

### Returns

[`BaggingRegressor`](BaggingRegressor.md)

Defined in:  [generated/ensemble/BaggingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/BaggingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/BaggingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/BaggingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L21)

## Accessors

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L222)

Defined in:  [generated/ensemble/BaggingRegressor.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L222)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L303)

Defined in:  [generated/ensemble/BaggingRegressor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L303)

### estimators\_features\_

The subset of drawn features for each base estimator.

#### Signature

```ts
estimators_features_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L330)

Defined in:  [generated/ensemble/BaggingRegressor.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L330)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L276)

Defined in:  [generated/ensemble/BaggingRegressor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L276)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L249)

Defined in:  [generated/ensemble/BaggingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L249)

### oob\_prediction\_

Prediction computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_prediction\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_prediction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L384)

Defined in:  [generated/ensemble/BaggingRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L384)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L357)

Defined in:  [generated/ensemble/BaggingRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L357)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/BaggingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L32)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L36)

Defined in:  [generated/ensemble/BaggingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L32) [generated/ensemble/BaggingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L36)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L103)

### fit()

Build a Bagging ensemble of estimators from the training set (X, y).

#### Signature

```ts
fit(opts: BaggingRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorFitOptions`](../interfaces/BaggingRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L120)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L45)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Signature

```ts
predict(opts: BaggingRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorPredictOptions`](../interfaces/BaggingRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L156)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: BaggingRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorScoreOptions`](../interfaces/BaggingRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L188)
