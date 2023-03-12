# GradientBoostingClassifier

Gradient Boosting for classification.

This algorithm builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage `n\_classes\_` regression trees are fit on the negative gradient of the loss function, e.g. binary or multiclass log loss. Binary classification is a special case where only a single regression tree is induced.

[`sklearn.ensemble.HistGradientBoostingClassifier`](sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier "sklearn.ensemble.HistGradientBoostingClassifier") is a much faster variant of this algorithm for intermediate datasets (`n\_samples >= 10\_000`).

Read more in the [User Guide](../ensemble.html#gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new GradientBoostingClassifier(opts?: GradientBoostingClassifierOptions): GradientBoostingClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GradientBoostingClassifierOptions`](../interfaces/GradientBoostingClassifierOptions.md) |

### Returns

[`GradientBoostingClassifier`](GradientBoostingClassifier.md)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L21)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L658)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L658)

### estimators\_

The collection of fitted sub-estimators. `loss\_.K` is 1 for binary classification, otherwise n\_classes.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L631)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L631)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L712)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L712)

### init\_

The estimator that provides the initial predictions. Set via the `init` argument or `loss.init\_estimator`.

#### Signature

```ts
init_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L604)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L604)

### loss\_

The concrete `LossFunction` object.

#### Signature

```ts
loss_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L577)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L577)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L766)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L766)

### n\_classes\_

The number of classes.

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L739)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L739)

### n\_estimators\_

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

#### Signature

```ts
n_estimators_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L496)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L496)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L685)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L685)

### oob\_improvement\_

The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`

#### Signature

```ts
oob_improvement_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L523)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L523)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L32)

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

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L36)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L32) [generated/ensemble/GradientBoostingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L36)

### train\_score\_

The i-th score `train\_score\_\[i\]` is the deviance (= loss) of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the deviance on the training data.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L550)

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L550)

## Methods

### apply()

Apply trees in the ensemble to X, return leaf indices.

#### Signature

```ts
apply(opts: GradientBoostingClassifierApplyOptions): Promise<ArrayLike[][]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierApplyOptions`](../interfaces/GradientBoostingClassifierApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L136)

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: GradientBoostingClassifierDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierDecisionFunctionOptions`](../interfaces/GradientBoostingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L170)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L119)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: GradientBoostingClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierFitOptions`](../interfaces/GradientBoostingClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L205)

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

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L45)

### predict()

Predict class for X.

#### Signature

```ts
predict(opts: GradientBoostingClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictOptions`](../interfaces/GradientBoostingClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L243)

### predict\_log\_proba()

Predict class log-probabilities for X.

#### Signature

```ts
predict_log_proba(opts: GradientBoostingClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictLogProbaOptions`](../interfaces/GradientBoostingClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L277)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: GradientBoostingClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictProbaOptions`](../interfaces/GradientBoostingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L312)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: GradientBoostingClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierScoreOptions`](../interfaces/GradientBoostingClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L349)

### staged\_decision\_function()

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_decision_function(opts: GradientBoostingClassifierStagedDecisionFunctionOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedDecisionFunctionOptions`](../interfaces/GradientBoostingClassifierStagedDecisionFunctionOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L387)

### staged\_predict()

Predict class at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: GradientBoostingClassifierStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedPredictOptions`](../interfaces/GradientBoostingClassifierStagedPredictOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L424)

### staged\_predict\_proba()

Predict class probabilities at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict_proba(opts: GradientBoostingClassifierStagedPredictProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedPredictProbaOptions`](../interfaces/GradientBoostingClassifierStagedPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L461)
