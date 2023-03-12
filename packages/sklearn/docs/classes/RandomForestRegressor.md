# RandomForestRegressor

A random forest regressor.

A random forest is a meta estimator that fits a number of classifying decision trees on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

Read more in the [User Guide](../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new RandomForestRegressor(opts?: RandomForestRegressorOptions): RandomForestRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomForestRegressorOptions`](../interfaces/RandomForestRegressorOptions.md) |

### Returns

[`RandomForestRegressor`](RandomForestRegressor.md)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L19)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L293)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L293)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L320)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L320)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L374)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L374)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L347)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L347)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L401)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L401)

### oob\_prediction\_

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_prediction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L455)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L455)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L428)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L428)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L30)

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

Defined in:  [generated/ensemble/RandomForestRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L34)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L30) [generated/ensemble/RandomForestRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L34)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: RandomForestRegressorApplyOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorApplyOptions`](../interfaces/RandomForestRegressorApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L126)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: RandomForestRegressorDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorDecisionPathOptions`](../interfaces/RandomForestRegressorDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L156)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L109)

### fit()

Build a forest of trees from the training set (X, y).

#### Signature

```ts
fit(opts: RandomForestRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorFitOptions`](../interfaces/RandomForestRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L191)

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

Defined in:  [generated/ensemble/RandomForestRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L43)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the trees in the forest.

#### Signature

```ts
predict(opts: RandomForestRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorPredictOptions`](../interfaces/RandomForestRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L227)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: RandomForestRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorScoreOptions`](../interfaces/RandomForestRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L259)
