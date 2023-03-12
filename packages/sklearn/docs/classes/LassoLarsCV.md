# LassoLarsCV

Cross-validated Lasso, using the LARS algorithm.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsCV.html)

## Constructors

## constructor()

### Signature

```ts
new LassoLarsCV(opts?: LassoLarsCVOptions): LassoLarsCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsCVOptions`](../interfaces/LassoLarsCVOptions.md) |

### Returns

[`LassoLarsCV`](LassoLarsCV.md)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L19)

## Accessors

### active\_

Indices of active variables at the end of the path.

#### Signature

```ts
active_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L390)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L390)

### alpha\_

the estimated regularization parameter alpha

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L273)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L273)

### alphas\_

the different values of alpha along the path

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L296)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L296)

### coef\_

parameter vector (w in the formulation formula)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L200)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L200)

### coef\_path\_

the varying values of the coefficients along the path

#### Signature

```ts
coef_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L248)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L248)

### cv\_alphas\_

all the values of alpha along the path for the different folds

#### Signature

```ts
cv_alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L319)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L319)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L438)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L438)

### intercept\_

independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L223)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L223)

### mse\_path\_

the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)

#### Signature

```ts
mse_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L344)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L344)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L413)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L413)

### n\_iter\_

the number of iterations run by Lars with the optimal alpha.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L367)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L367)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L30)

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

Defined in:  [generated/linear\_model/LassoLarsCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L34)

Defined in:  [generated/linear\_model/LassoLarsCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L30) [generated/linear\_model/LassoLarsCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L34)

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

Defined in:  [generated/linear\_model/LassoLarsCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L93)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: LassoLarsCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVFitOptions`](../interfaces/LassoLarsCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L110)

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

Defined in:  [generated/linear\_model/LassoLarsCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L43)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: LassoLarsCVPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVPredictOptions`](../interfaces/LassoLarsCVPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L140)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: LassoLarsCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVScoreOptions`](../interfaces/LassoLarsCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsCV.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L168)
