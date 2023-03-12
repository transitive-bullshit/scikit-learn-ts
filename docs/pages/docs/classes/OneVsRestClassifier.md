# OneVsRestClassifier

One-vs-the-rest (OvR) multiclass strategy.

Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n\_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

Read more in the [User Guide](../multiclass.html#ovr-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OneVsRestClassifier(opts?: OneVsRestClassifierOptions): OneVsRestClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneVsRestClassifierOptions`](../interfaces/OneVsRestClassifierOptions.md) |

### Returns

[`OneVsRestClassifier`](OneVsRestClassifier.md)

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L21)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L350)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L323)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L431)

### label\_binarizer\_

Object used to transform multiclass labels to binary labels and vice-versa.

#### Signature

```ts
label_binarizer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L377)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L404)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L32)

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

Defined in: [generated/multiclass/OneVsRestClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L36)

## Methods

### decision\_function()

Decision function for the OneVsRestClassifier.

Return the distance of each sample from the decision boundary for each class. This can only be used with estimators which implement the `decision\_function` method.

#### Signature

```ts
decision_function(opts: OneVsRestClassifierDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierDecisionFunctionOptions`](../interfaces/OneVsRestClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L110)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L91)

### fit()

Fit underlying estimators.

#### Signature

```ts
fit(opts: OneVsRestClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierFitOptions`](../interfaces/OneVsRestClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L145)

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

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L45)

### partial\_fit()

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration.

#### Signature

```ts
partial_fit(opts: OneVsRestClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPartialFitOptions`](../interfaces/OneVsRestClassifierPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L179)

### predict()

Predict multi-class targets using underlying estimators.

#### Signature

```ts
predict(opts: OneVsRestClassifierPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPredictOptions`](../interfaces/OneVsRestClassifierPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L215)

### predict\_proba()

Probability estimates.

The returned estimates for all classes are ordered by label of classes.

Note that in the multilabel case, each sample can have any number of labels. This returns the marginal probability that the given sample has the label in question. For example, it is entirely consistent that two labels both have a 90% probability of applying to a given sample.

In the single label multiclass case, the rows of the returned matrix sum to 1.

#### Signature

```ts
predict_proba(opts: OneVsRestClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPredictProbaOptions`](../interfaces/OneVsRestClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L253)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: OneVsRestClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierScoreOptions`](../interfaces/OneVsRestClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L289)
