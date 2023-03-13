# HistGradientBoostingClassifier

Histogram-based Gradient Boosting Classification Tree.

This estimator is much faster than [`GradientBoostingClassifier`](sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier "sklearn.ensemble.GradientBoostingClassifier") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new HistGradientBoostingClassifier(opts?: HistGradientBoostingClassifierOptions): HistGradientBoostingClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `HistGradientBoostingClassifierOptions` |

### Returns

[`HistGradientBoostingClassifier`](HistGradientBoostingClassifier.md)

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L23)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L438)

### do\_early\_stopping\_

Indicates whether early stopping is used during training.

#### Signature

```ts
do_early_stopping_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L465)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L627)

### is\_categorical\_

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Signature

```ts
is_categorical_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L573)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L600)

### n\_trees\_per\_iteration\_

The number of tree that are built at each iteration. This is equal to 1 for binary classification, and to `n\_classes` for multiclass classification.

#### Signature

```ts
n_trees_per_iteration_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L492)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L36)

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

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L40)

### train\_score\_

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L519)

### validation\_score\_

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Signature

```ts
validation_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L546)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: HistGradientBoostingClassifierDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierDecisionFunctionOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L146)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L129)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: HistGradientBoostingClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L181)

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

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L49)

### predict()

Predict classes for X.

#### Signature

```ts
predict(opts: HistGradientBoostingClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L217)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: HistGradientBoostingClassifierPredictProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierPredictProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L251)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: HistGradientBoostingClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L288)

### staged\_decision\_function()

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_decision_function(opts: HistGradientBoostingClassifierStagedDecisionFunctionOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierStagedDecisionFunctionOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L329)

### staged\_predict()

Predict classes at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: HistGradientBoostingClassifierStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierStagedPredictOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L366)

### staged\_predict\_proba()

Predict class probabilities at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict_proba(opts: HistGradientBoostingClassifierStagedPredictProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HistGradientBoostingClassifierStagedPredictProbaOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L403)
