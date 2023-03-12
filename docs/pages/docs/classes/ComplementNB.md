# ComplementNB

The Complement Naive Bayes classifier described in Rennie et al. (2003).

The Complement Naive Bayes classifier was designed to correct the “severe assumptions” made by the standard Multinomial Naive Bayes classifier. It is particularly suited for imbalanced data sets.

Read more in the [User Guide](../naive_bayes.html#complement-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.ComplementNB.html)

## Constructors

## constructor()

### Signature

```ts
new ComplementNB(opts?: ComplementNBOptions): ComplementNB;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ComplementNBOptions`](../interfaces/ComplementNBOptions.md) |

### Returns

[`ComplementNB`](ComplementNB.md)

Defined in:  [generated/naive\_bayes/ComplementNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L19)

## Accessors

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L339)

### class\_log\_prior\_

Smoothed empirical log probability for each class. Only used in edge case with a single class in the training set.

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L364)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L389)

### feature\_all\_

Number of samples encountered for each feature during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_all_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L412)

### feature\_count\_

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_count_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L437)

### feature\_log\_prob\_

Empirical weights for class complements.

#### Signature

```ts
feature_log_prob_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L462)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L512)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L487)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L30)

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

Defined in: [generated/naive\_bayes/ComplementNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L34)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L89)

### fit()

Fit Naive Bayes classifier according to X, y.

#### Signature

```ts
fit(opts: ComplementNBFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBFitOptions`](../interfaces/ComplementNBFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L106)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L43)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: ComplementNBPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPartialFitOptions`](../interfaces/ComplementNBPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L144)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: ComplementNBPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictOptions`](../interfaces/ComplementNBPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L180)

### predict\_joint\_log\_proba()

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Signature

```ts
predict_joint_log_proba(opts: ComplementNBPredictJointLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictJointLogProbaOptions`](../interfaces/ComplementNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L210)

### predict\_log\_proba()

Return log-probability estimates for the test vector X.

#### Signature

```ts
predict_log_proba(opts: ComplementNBPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictLogProbaOptions`](../interfaces/ComplementNBPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L243)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: ComplementNBPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictProbaOptions`](../interfaces/ComplementNBPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L275)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: ComplementNBScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBScoreOptions`](../interfaces/ComplementNBScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/ComplementNB.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L307)
