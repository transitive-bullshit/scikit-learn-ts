# AdaBoostClassifier

An AdaBoost classifier.

An AdaBoost \[1\] classifier is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly classified instances are adjusted such that subsequent classifiers focus more on difficult cases.

This class implements the algorithm known as AdaBoost-SAMME \[2\].

Read more in the [User Guide](../ensemble.html#adaboost).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new AdaBoostClassifier(opts?: AdaBoostClassifierOptions): AdaBoostClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AdaBoostClassifierOptions`](../interfaces/AdaBoostClassifierOptions.md) |

### Returns

[`AdaBoostClassifier`](AdaBoostClassifier.md)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L21)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L530)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L530)

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L476)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L476)

### estimator\_errors\_

Classification error for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_errors_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L611)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L611)

### estimator\_weights\_

Weights for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L584)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L584)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L503)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L503)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L665)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L665)

### n\_classes\_

The number of classes.

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L557)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L557)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L638)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L638)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L32)

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

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L36)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L32) [generated/ensemble/AdaBoostClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L36)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: AdaBoostClassifierDecisionFunctionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierDecisionFunctionOptions`](../interfaces/AdaBoostClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L112)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L95)

### fit()

Build a boosted classifier/regressor from the training set (X, y).

#### Signature

```ts
fit(opts: AdaBoostClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierFitOptions`](../interfaces/AdaBoostClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L147)

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

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L45)

### predict()

Predict classes for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

#### Signature

```ts
predict(opts: AdaBoostClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictOptions`](../interfaces/AdaBoostClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L183)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the weighted mean predicted class log-probabilities of the classifiers in the ensemble.

#### Signature

```ts
predict_log_proba(opts: AdaBoostClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictLogProbaOptions`](../interfaces/AdaBoostClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L215)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

#### Signature

```ts
predict_proba(opts: AdaBoostClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictProbaOptions`](../interfaces/AdaBoostClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L252)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: AdaBoostClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierScoreOptions`](../interfaces/AdaBoostClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L288)

### staged\_decision\_function()

Compute decision function of `X` for each boosting iteration.

This method allows monitoring (i.e. determine error on testing set) after each boosting iteration.

#### Signature

```ts
staged_decision_function(opts: AdaBoostClassifierStagedDecisionFunctionOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedDecisionFunctionOptions`](../interfaces/AdaBoostClassifierStagedDecisionFunctionOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L324)

### staged\_predict()

Return staged predictions for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Signature

```ts
staged_predict(opts: AdaBoostClassifierStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedPredictOptions`](../interfaces/AdaBoostClassifierStagedPredictOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L363)

### staged\_predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

This generator method yields the ensemble predicted class probabilities after each iteration of boosting and therefore allows monitoring, such as to determine the predicted class probabilities on a test set after each boost.

#### Signature

```ts
staged_predict_proba(opts: AdaBoostClassifierStagedPredictProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedPredictProbaOptions`](../interfaces/AdaBoostClassifierStagedPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L401)

### staged\_score()

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Signature

```ts
staged_score(opts: AdaBoostClassifierStagedScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedScoreOptions`](../interfaces/AdaBoostClassifierStagedScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L438)
