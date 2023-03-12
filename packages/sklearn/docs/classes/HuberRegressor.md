# HuberRegressor

L2-regularized linear regression model that is robust to outliers.

The Huber Regressor optimizes the squared loss for the samples where `|(y \- Xw \- c) / sigma| < epsilon` and the absolute loss for the samples where `|(y \- Xw \- c) / sigma| > epsilon`, where the model coefficients `w`, the intercept `c` and the scale `sigma` are parameters to be optimized. The parameter sigma makes sure that if y is scaled up or down by a certain factor, one does not need to rescale epsilon to achieve the same robustness. Note that this does not take into account the fact that the different features of X may be of different scales.

The Huber loss function has the advantage of not being heavily influenced by the outliers while not completely ignoring their effect.

Read more in the [User Guide](../linear_model.html#huber-regression)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.HuberRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new HuberRegressor(opts?: HuberRegressorOptions): HuberRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HuberRegressorOptions`](../interfaces/HuberRegressorOptions.md) |

### Returns

[`HuberRegressor`](HuberRegressor.md)

Defined in:  [generated/linear\_model/HuberRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/HuberRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/HuberRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/HuberRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/HuberRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/HuberRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L21)

## Accessors

### coef\_

Features got by optimizing the L2-regularized Huber loss.

#### Signature

```ts
coef_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L200)

Defined in:  [generated/linear\_model/HuberRegressor.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L200)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L296)

Defined in:  [generated/linear\_model/HuberRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L296)

### intercept\_

Bias.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L223)

Defined in:  [generated/linear\_model/HuberRegressor.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L223)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L271)

Defined in:  [generated/linear\_model/HuberRegressor.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L271)

### n\_iter\_

Number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` has run for.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L321)

Defined in:  [generated/linear\_model/HuberRegressor.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L321)

### outliers\_

A boolean mask which is set to `true` where the samples are identified as outliers.

#### Signature

```ts
outliers_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L346)

Defined in:  [generated/linear\_model/HuberRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L346)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/HuberRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L32)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L36)

Defined in:  [generated/linear\_model/HuberRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L32) [generated/linear\_model/HuberRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L36)

### scale\_

The value by which `|y \- Xw \- c|` is scaled down.

#### Signature

```ts
scale_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L248)

Defined in:  [generated/linear\_model/HuberRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L248)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L91)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: HuberRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorFitOptions`](../interfaces/HuberRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L108)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L45)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: HuberRegressorPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorPredictOptions`](../interfaces/HuberRegressorPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L138)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: HuberRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorScoreOptions`](../interfaces/HuberRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L168)
