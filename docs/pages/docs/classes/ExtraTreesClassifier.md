# ExtraTreesClassifier

An extra-trees classifier.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the [User Guide](../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreesClassifier(opts?: ExtraTreesClassifierOptions): ExtraTreesClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreesClassifierOptions`](../interfaces/ExtraTreesClassifierOptions.md) |

### Returns

[`ExtraTreesClassifier`](ExtraTreesClassifier.md)

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L19)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L421)

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L367)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L394)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L502)

### n\_classes\_

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

#### Signature

```ts
n_classes_(): Promise<number | any[]>;
```

#### Returns

`Promise`\<`number` \| `any`[]\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L448)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L475)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L529)

### oob\_decision\_function\_

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_decision_function_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L583)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L556)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L30)

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

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L34)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: ExtraTreesClassifierApplyOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierApplyOptions`](../interfaces/ExtraTreesClassifierApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L128)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: ExtraTreesClassifierDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierDecisionPathOptions`](../interfaces/ExtraTreesClassifierDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L158)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L111)

### fit()

Build a forest of trees from the training set (X, y).

#### Signature

```ts
fit(opts: ExtraTreesClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierFitOptions`](../interfaces/ExtraTreesClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L192)

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

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L43)

### predict()

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Signature

```ts
predict(opts: ExtraTreesClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictOptions`](../interfaces/ExtraTreesClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L228)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Signature

```ts
predict_log_proba(opts: ExtraTreesClassifierPredictLogProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictLogProbaOptions`](../interfaces/ExtraTreesClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L260)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: ExtraTreesClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictProbaOptions`](../interfaces/ExtraTreesClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L297)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: ExtraTreesClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierScoreOptions`](../interfaces/ExtraTreesClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L333)
