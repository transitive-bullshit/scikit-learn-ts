# OneVsOneClassifier

One-vs-one multiclass strategy.

This strategy consists in fitting one classifier per class pair. At prediction time, the class which received the most votes is selected. Since it requires to fit `n\_classes \* (n\_classes \- 1) / 2` classifiers, this method is usually slower than one-vs-the-rest, due to its O(n\_classes^2) complexity. However, this method may be advantageous for algorithms such as kernel algorithms which don’t scale well with `n\_samples`. This is because each individual learning problem only involves a small subset of the data whereas, with one-vs-the-rest, the complete dataset is used `n\_classes` times.

Read more in the [User Guide](../multiclass.html#ovo-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OneVsOneClassifier(opts?: OneVsOneClassifierOptions): OneVsOneClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneVsOneClassifierOptions`](../interfaces/OneVsOneClassifierOptions.md) |

### Returns

[`OneVsOneClassifier`](OneVsOneClassifier.md)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L19)

## Accessors

### classes\_

Array containing labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L306)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L306)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L279)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L279)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L387)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L387)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L360)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L360)

### pairwise\_indices\_

Indices of samples used when training the estimators. `undefined` when `estimator`’s `pairwise` tag is `false`.

#### Signature

```ts
pairwise_indices_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L333)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L333)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L30)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L34)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L30) [generated/multiclass/OneVsOneClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L34)

## Methods

### decision\_function()

Decision function for the OneVsOneClassifier.

The decision values for the samples are computed by adding the normalized sum of pair-wise classification confidence levels to the votes in order to disambiguate between the decision values when the votes for all the classes are equal leading to a tie.

#### Signature

```ts
decision_function(opts: OneVsOneClassifierDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierDecisionFunctionOptions`](../interfaces/OneVsOneClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L106)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L87)

### fit()

Fit underlying estimators.

#### Signature

```ts
fit(opts: OneVsOneClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierFitOptions`](../interfaces/OneVsOneClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L141)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L43)

### partial\_fit()

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration, where the first call should have an array of all target variables.

#### Signature

```ts
partial_fit(opts: OneVsOneClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierPartialFitOptions`](../interfaces/OneVsOneClassifierPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L175)

### predict()

Estimate the best class label for each sample in X.

This is implemented as `argmax(decision\_function(X), axis=1)` which will return the label of the class with most votes by estimators predicting the outcome of a decision for each possible class pair.

#### Signature

```ts
predict(opts: OneVsOneClassifierPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierPredictOptions`](../interfaces/OneVsOneClassifierPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L213)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: OneVsOneClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierScoreOptions`](../interfaces/OneVsOneClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L245)
