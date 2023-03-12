# RandomForestClassifier

A random forest classifier.

A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

Read more in the [User Guide](../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new RandomForestClassifier(opts?: RandomForestClassifierOptions): RandomForestClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomForestClassifierOptions`](../interfaces/RandomForestClassifierOptions.md) |

### Returns

[`RandomForestClassifier`](RandomForestClassifier.md)

Defined in:  [generated/ensemble/RandomForestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L19)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L425)

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L371)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L398)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L506)

### n\_classes\_

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

#### Signature

```ts
n_classes_(): Promise<number | any[]>;
```

#### Returns

`Promise`\<`number` \| `any`[]\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L452)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L479)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L533)

### oob\_decision\_function\_

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_decision_function_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L587)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/RandomForestClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L560)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L30)

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

Defined in: [generated/ensemble/RandomForestClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L34)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: RandomForestClassifierApplyOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierApplyOptions`](../interfaces/RandomForestClassifierApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L128)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: RandomForestClassifierDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierDecisionPathOptions`](../interfaces/RandomForestClassifierDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L158)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L111)

### fit()

Build a forest of trees from the training set (X, y).

#### Signature

```ts
fit(opts: RandomForestClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierFitOptions`](../interfaces/RandomForestClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L193)

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

Defined in:  [generated/ensemble/RandomForestClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L43)

### predict()

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Signature

```ts
predict(opts: RandomForestClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictOptions`](../interfaces/RandomForestClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L229)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Signature

```ts
predict_log_proba(opts: RandomForestClassifierPredictLogProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictLogProbaOptions`](../interfaces/RandomForestClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L263)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: RandomForestClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictProbaOptions`](../interfaces/RandomForestClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L300)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: RandomForestClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierScoreOptions`](../interfaces/RandomForestClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestClassifier.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L337)
