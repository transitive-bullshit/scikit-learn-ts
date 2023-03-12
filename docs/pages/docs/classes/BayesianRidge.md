# BayesianRidge

Bayesian ridge regression.

Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

Read more in the [User Guide](../linear_model.html#bayesian-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html)

## Constructors

## constructor()

### Signature

```ts
new BayesianRidge(opts?: BayesianRidgeOptions): BayesianRidge;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BayesianRidgeOptions`](../interfaces/BayesianRidgeOptions.md) |

### Returns

[`BayesianRidge`](BayesianRidge.md)

Defined in:  [generated/linear\_model/BayesianRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/BayesianRidge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/BayesianRidge.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/BayesianRidge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L19)

## Accessors

### X\_offset\_

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Signature

```ts
X_offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/BayesianRidge.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L373)

### X\_scale\_

Set to np.ones(n\_features).

#### Signature

```ts
X_scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/BayesianRidge.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L398)

### alpha\_

Estimated precision of the noise.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L258)

### coef\_

Coefficients of the regression model (mean of distribution)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/BayesianRidge.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L210)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/BayesianRidge.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L448)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L233)

### lambda\_

Estimated precision of the weights.

#### Signature

```ts
lambda_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L281)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L423)

### n\_iter\_

The actual number of iterations to reach the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L350)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/BayesianRidge.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L30)

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

Defined in: [generated/linear\_model/BayesianRidge.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L34)

### scores\_

If computed\_score is `true`, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/BayesianRidge.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L327)

### sigma\_

Estimated variance-covariance matrix of the weights

#### Signature

```ts
sigma_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/linear\_model/BayesianRidge.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L304)

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

Defined in:  [generated/linear\_model/BayesianRidge.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L95)

### fit()

Fit the model.

#### Signature

```ts
fit(opts: BayesianRidgeFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgeFitOptions`](../interfaces/BayesianRidgeFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/BayesianRidge.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L112)

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

Defined in:  [generated/linear\_model/BayesianRidge.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L43)

### predict()

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

#### Signature

```ts
predict(opts: BayesianRidgePredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgePredictOptions`](../interfaces/BayesianRidgePredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/BayesianRidge.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L146)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: BayesianRidgeScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgeScoreOptions`](../interfaces/BayesianRidgeScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/BayesianRidge.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L178)
