# RidgeCV

Ridge regression with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

By default, it performs efficient Leave-One-Out Cross-Validation.

Read more in the [User Guide](../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html)

## Constructors

## constructor()

### Signature

```ts
new RidgeCV(opts?: RidgeCVOptions): RidgeCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeCVOptions`](../interfaces/RidgeCVOptions.md) |

### Returns

[`RidgeCV`](RidgeCV.md)

Defined in:  [generated/linear\_model/RidgeCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RidgeCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/RidgeCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/RidgeCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L21)

## Accessors

### alpha\_

Estimated regularization parameter, or, if `alpha\_per\_target=True`, the estimated regularization parameter for each target.

#### Signature

```ts
alpha_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L267)

Defined in:  [generated/linear\_model/RidgeCV.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L267)

### best\_score\_

Score of base estimator with best alpha, or, if `alpha\_per\_target=True`, a score for each target.

#### Signature

```ts
best_score_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L289)

Defined in:  [generated/linear\_model/RidgeCV.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L289)

### coef\_

Weight vector(s).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L222)

Defined in:  [generated/linear\_model/RidgeCV.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L222)

### cv\_values\_

Cross-validation values for each alpha (only available if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

#### Signature

```ts
cv_values_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/RidgeCV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L199)

Defined in:  [generated/linear\_model/RidgeCV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L199)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L337)

Defined in:  [generated/linear\_model/RidgeCV.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L337)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L244)

Defined in:  [generated/linear\_model/RidgeCV.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L244)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L312)

Defined in:  [generated/linear\_model/RidgeCV.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L312)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RidgeCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L32)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L36)

Defined in:  [generated/linear\_model/RidgeCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L32) [generated/linear\_model/RidgeCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L36)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L90)

### fit()

Fit Ridge regression model with cv.

#### Signature

```ts
fit(opts: RidgeCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVFitOptions`](../interfaces/RidgeCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L107)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L45)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: RidgeCVPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVPredictOptions`](../interfaces/RidgeCVPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L139)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: RidgeCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVScoreOptions`](../interfaces/RidgeCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L167)
