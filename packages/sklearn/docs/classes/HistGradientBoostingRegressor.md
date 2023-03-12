# HistGradientBoostingRegressor

Histogram-based Gradient Boosting Regression Tree.

This estimator is much faster than [`GradientBoostingRegressor`](sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new HistGradientBoostingRegressor(opts?: HistGradientBoostingRegressorOptions): HistGradientBoostingRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HistGradientBoostingRegressorOptions`](../interfaces/HistGradientBoostingRegressorOptions.md) |

### Returns

[`HistGradientBoostingRegressor`](HistGradientBoostingRegressor.md)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L25)

### id

> `string`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L22)

### opts

> `any`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L23)

## Accessors

### do\_early\_stopping\_

Indicates whether early stopping is used during training.

#### Signature

```ts
do_early_stopping_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L292)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L292)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L454)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L454)

### is\_categorical\_

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Signature

```ts
is_categorical_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L400)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L400)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L427)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L427)

### n\_trees\_per\_iteration\_

The number of tree that are built at each iteration. For regressors, this is always 1.

#### Signature

```ts
n_trees_per_iteration_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L319)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L319)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L36)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L40)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L36) [generated/ensemble/HistGradientBoostingRegressor.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L40)

### train\_score\_

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L346)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L346)

### validation\_score\_

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Signature

```ts
validation_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L373)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L373)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L127)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: HistGradientBoostingRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorFitOptions`](../interfaces/HistGradientBoostingRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L144)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L49)

### predict()

Predict values for X.

#### Signature

```ts
predict(opts: HistGradientBoostingRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorPredictOptions`](../interfaces/HistGradientBoostingRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L180)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: HistGradientBoostingRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorScoreOptions`](../interfaces/HistGradientBoostingRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L216)

### staged\_predict()

Predict regression target for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: HistGradientBoostingRegressorStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorStagedPredictOptions`](../interfaces/HistGradientBoostingRegressorStagedPredictOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L257)
