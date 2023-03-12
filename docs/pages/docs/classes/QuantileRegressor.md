# QuantileRegressor

Linear regression model that predicts conditional quantiles.

The linear [`QuantileRegressor`](#sklearn.linear_model.QuantileRegressor "sklearn.linear_model.QuantileRegressor") optimizes the pinball loss for a desired `quantile` and is robust to outliers.

This model uses an L1 regularization like [`Lasso`](sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso "sklearn.linear_model.Lasso").

Read more in the [User Guide](../linear_model.html#quantile-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new QuantileRegressor(opts?: QuantileRegressorOptions): QuantileRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`QuantileRegressorOptions`](../interfaces/QuantileRegressorOptions.md) |

### Returns

[`QuantileRegressor`](QuantileRegressor.md)

Defined in:  [generated/linear\_model/QuantileRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L21)

## Accessors

### coef\_

Estimated coefficients for the features.

#### Signature

```ts
coef_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L208)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L289)

### intercept\_

The intercept of the model, aka bias term.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L235)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L262)

### n\_iter\_

The actual number of iterations performed by the solver.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L316)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L32)

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

Defined in: [generated/linear\_model/QuantileRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L36)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L91)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: QuantileRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorFitOptions`](../interfaces/QuantileRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L108)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L45)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: QuantileRegressorPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorPredictOptions`](../interfaces/QuantileRegressorPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L142)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: QuantileRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorScoreOptions`](../interfaces/QuantileRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L174)
