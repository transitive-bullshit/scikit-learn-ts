# GradientBoostingRegressor

Gradient Boosting for regression.

This estimator builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage a regression tree is fit on the negative gradient of the given loss function.

[`sklearn.ensemble.HistGradientBoostingRegressor`](sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor "sklearn.ensemble.HistGradientBoostingRegressor") is a much faster variant of this algorithm for intermediate datasets (`n\_samples >= 10\_000`).

Read more in the [User Guide](../ensemble.html#gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new GradientBoostingRegressor(opts?: GradientBoostingRegressorOptions): GradientBoostingRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GradientBoostingRegressorOptions`](../interfaces/GradientBoostingRegressorOptions.md) |

### Returns

[`GradientBoostingRegressor`](GradientBoostingRegressor.md)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L21)

## Accessors

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L423)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L423)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L504)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L504)

### init\_

The estimator that provides the initial predictions. Set via the `init` argument or `loss.init\_estimator`.

#### Signature

```ts
init_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L396)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L396)

### loss\_

The concrete `LossFunction` object.

#### Signature

```ts
loss_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L369)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L369)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L531)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L531)

### n\_estimators\_

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

#### Signature

```ts
n_estimators_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L450)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L450)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L477)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L477)

### oob\_improvement\_

The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`

#### Signature

```ts
oob_improvement_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L315)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L315)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L32)

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

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L36)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L32) [generated/ensemble/GradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L36)

### train\_score\_

The i-th score `train\_score\_\[i\]` is the deviance (= loss) of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the deviance on the training data.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L342)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L342)

## Methods

### apply()

Apply trees in the ensemble to X, return leaf indices.

#### Signature

```ts
apply(opts: GradientBoostingRegressorApplyOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorApplyOptions`](../interfaces/GradientBoostingRegressorApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L136)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L119)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: GradientBoostingRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorFitOptions`](../interfaces/GradientBoostingRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L170)

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

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L45)

### predict()

Predict regression target for X.

#### Signature

```ts
predict(opts: GradientBoostingRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorPredictOptions`](../interfaces/GradientBoostingRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L206)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: GradientBoostingRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorScoreOptions`](../interfaces/GradientBoostingRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L242)

### staged\_predict()

Predict regression target at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: GradientBoostingRegressorStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorStagedPredictOptions`](../interfaces/GradientBoostingRegressorStagedPredictOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L280)
