# BernoulliNB

Naive Bayes classifier for multivariate Bernoulli models.

Like MultinomialNB, this classifier is suitable for discrete data. The difference is that while MultinomialNB works with occurrence counts, BernoulliNB is designed for binary/boolean features.

Read more in the [User Guide](../naive_bayes.html#bernoulli-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.BernoulliNB.html)

## Constructors

## constructor()

### Signature

```ts
new BernoulliNB(opts?: BernoulliNBOptions): BernoulliNB;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BernoulliNBOptions`](../interfaces/BernoulliNBOptions.md) |

### Returns

[`BernoulliNB`](BernoulliNB.md)

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L19)

## Accessors

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L337)

### class\_log\_prior\_

Log probability of each class (smoothed).

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L362)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L387)

### feature\_count\_

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_count_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L410)

### feature\_log\_prob\_

Empirical log probability of features given a class, P(x\_i|y).

#### Signature

```ts
feature_log_prob_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L435)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L485)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L460)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L30)

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

Defined in: [generated/naive\_bayes/BernoulliNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L34)

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

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L89)

### fit()

Fit Naive Bayes classifier according to X, y.

#### Signature

```ts
fit(opts: BernoulliNBFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBFitOptions`](../interfaces/BernoulliNBFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L106)

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

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L43)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: BernoulliNBPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPartialFitOptions`](../interfaces/BernoulliNBPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L144)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: BernoulliNBPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictOptions`](../interfaces/BernoulliNBPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L180)

### predict\_joint\_log\_proba()

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Signature

```ts
predict_joint_log_proba(opts: BernoulliNBPredictJointLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictJointLogProbaOptions`](../interfaces/BernoulliNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L210)

### predict\_log\_proba()

Return log-probability estimates for the test vector X.

#### Signature

```ts
predict_log_proba(opts: BernoulliNBPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictLogProbaOptions`](../interfaces/BernoulliNBPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L243)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: BernoulliNBPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictProbaOptions`](../interfaces/BernoulliNBPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L273)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: BernoulliNBScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBScoreOptions`](../interfaces/BernoulliNBScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L305)
