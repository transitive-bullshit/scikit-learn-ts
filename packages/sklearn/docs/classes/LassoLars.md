# LassoLars

Lasso model fit with Least Angle Regression a.k.a. Lars.

It is a Linear Model trained with an L1 prior as regularizer.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLars.html)

## Constructors

## constructor()

### Signature

```ts
new LassoLars(opts?: LassoLarsOptions): LassoLars;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsOptions`](../interfaces/LassoLarsOptions.md) |

### Returns

[`LassoLars`](LassoLars.md)

Defined in:  [generated/linear\_model/LassoLars.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLars.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLars.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LassoLars.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/LassoLars.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/LassoLars.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L19)

## Accessors

### active\_

Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.

#### Signature

```ts
active_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLars.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L226)

Defined in:  [generated/linear\_model/LassoLars.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L226)

### alphas\_

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLars.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L203)

Defined in:  [generated/linear\_model/LassoLars.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L203)

### coef\_

Parameter vector (w in the formulation formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLars.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L272)

Defined in:  [generated/linear\_model/LassoLars.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L272)

### coef\_path\_

If a list is passed it’s expected to be one of n\_targets such arrays. The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
coef_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LassoLars.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L249)

Defined in:  [generated/linear\_model/LassoLars.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L249)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLars.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L366)

Defined in:  [generated/linear\_model/LassoLars.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L366)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLars.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L295)

Defined in:  [generated/linear\_model/LassoLars.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L295)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLars.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L341)

Defined in:  [generated/linear\_model/LassoLars.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L341)

### n\_iter\_

The number of iterations taken by lars\_path to find the grid of alphas for each target.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LassoLars.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L318)

Defined in:  [generated/linear\_model/LassoLars.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L318)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LassoLars.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L30)

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

Defined in:  [generated/linear\_model/LassoLars.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L34)

Defined in:  [generated/linear\_model/LassoLars.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L30) [generated/linear\_model/LassoLars.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L34)

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

Defined in:  [generated/linear\_model/LassoLars.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L94)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: LassoLarsFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsFitOptions`](../interfaces/LassoLarsFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLars.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L111)

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

Defined in:  [generated/linear\_model/LassoLars.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L43)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: LassoLarsPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsPredictOptions`](../interfaces/LassoLarsPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLars.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L143)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: LassoLarsScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsScoreOptions`](../interfaces/LassoLarsScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LassoLars.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoLars.ts#L171)
