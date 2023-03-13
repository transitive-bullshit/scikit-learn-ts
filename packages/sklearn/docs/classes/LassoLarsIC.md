# LassoLarsIC

Lasso model fit with Lars using BIC or AIC for model selection.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsIC.html)

## Constructors

## constructor()

### Signature

```ts
new LassoLarsIC(opts?: LassoLarsICOptions): LassoLarsIC;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsICOptions`](../interfaces/LassoLarsICOptions.md) |

### Returns

[`LassoLarsIC`](LassoLarsIC.md)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L17)

## Accessors

### alpha\_

the alpha parameter chosen by the information criterion

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L248)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L248)

### alphas\_

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If a list, it will be of length `n\_targets`.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L271)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L271)

### coef\_

parameter vector (w in the formulation formula)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L200)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L200)

### criterion\_

The value of the information criteria (‘aic’, ‘bic’) across all alphas. The alpha which has the smallest information criterion is chosen, as specified in [\[1\]](#rde9cc43d0d41-1).

#### Signature

```ts
criterion_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L317)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L317)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L392)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L392)

### intercept\_

independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L223)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L223)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L367)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L367)

### n\_iter\_

number of iterations run by lars\_path to find the grid of alphas.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L294)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L294)

### noise\_variance\_

The estimated noise variance from the data used to compute the criterion.

#### Signature

```ts
noise_variance_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L342)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L342)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LassoLarsIC.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L28)

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

Defined in:  [generated/linear\_model/LassoLarsIC.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L32)

Defined in:  [generated/linear\_model/LassoLarsIC.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L28) [generated/linear\_model/LassoLarsIC.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L32)

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

Defined in:  [generated/linear\_model/LassoLarsIC.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L91)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: LassoLarsICFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICFitOptions`](../interfaces/LassoLarsICFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L108)

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

Defined in:  [generated/linear\_model/LassoLarsIC.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L41)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: LassoLarsICPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICPredictOptions`](../interfaces/LassoLarsICPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L140)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: LassoLarsICScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICScoreOptions`](../interfaces/LassoLarsICScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLarsIC.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L168)
