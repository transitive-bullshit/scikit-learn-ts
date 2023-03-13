# SelfTrainingClassifier

Self-training classifier.

This [metaestimator](../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

The classifier will continue iterating until either max\_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

Read more in the [User Guide](../semi_supervised.html#self-training).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new SelfTrainingClassifier(opts?: SelfTrainingClassifierOptions): SelfTrainingClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelfTrainingClassifierOptions`](../interfaces/SelfTrainingClassifierOptions.md) |

### Returns

[`SelfTrainingClassifier`](SelfTrainingClassifier.md)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L21)

## Accessors

### base\_estimator\_

The fitted estimator.

#### Signature

```ts
base_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L311)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L311)

### classes\_

Class labels for each output. (Taken from the trained `base\_estimator\_`).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L338)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L338)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L446)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L446)

### labeled\_iter\_

The iteration in which each sample was labeled. When a sample has iteration 0, the sample was already labeled in the original dataset. When a sample has iteration -1, the sample was not labeled in any iteration.

#### Signature

```ts
labeled_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L392)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L392)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L419)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L419)

### n\_iter\_

The number of rounds of self-training, that is the number of times the base estimator is fitted on relabeled variants of the training set.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L473)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L473)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L32)

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

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L36)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L32) [generated/semi\_supervised/SelfTrainingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L36)

### termination\_condition\_

The reason that fitting was stopped.

#### Signature

```ts
termination_condition_(): Promise<"max_iter" | "no_change" | "all_labeled">;
```

#### Returns

`Promise`\<`"max_iter"` \| `"no_change"` \| `"all_labeled"`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L500)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L500)

### transduction\_

The labels used for the final fit of the classifier, including pseudo-labels added during fit.

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L365)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L365)

## Methods

### decision\_function()

Call decision function of the `base\_estimator`.

#### Signature

```ts
decision_function(opts: SelfTrainingClassifierDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierDecisionFunctionOptions`](../interfaces/SelfTrainingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L110)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L93)

### fit()

Fit self-training classifier using `X`, `y` as training data.

#### Signature

```ts
fit(opts: SelfTrainingClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierFitOptions`](../interfaces/SelfTrainingClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L145)

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

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L45)

### predict()

Predict the classes of `X`.

#### Signature

```ts
predict(opts: SelfTrainingClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictOptions`](../interfaces/SelfTrainingClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L177)

### predict\_log\_proba()

Predict log probability for each possible outcome.

#### Signature

```ts
predict_log_proba(opts: SelfTrainingClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictLogProbaOptions`](../interfaces/SelfTrainingClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L209)

### predict\_proba()

Predict probability for each possible outcome.

#### Signature

```ts
predict_proba(opts: SelfTrainingClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictProbaOptions`](../interfaces/SelfTrainingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L244)

### score()

Call score on the `base\_estimator`.

#### Signature

```ts
score(opts: SelfTrainingClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierScoreOptions`](../interfaces/SelfTrainingClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L279)
