# BernoulliNB

Naive Bayes classifier for multivariate Bernoulli models.

Like MultinomialNB, this classifier is suitable for discrete data. The difference is that while MultinomialNB works with occurrence counts, BernoulliNB is designed for binary/boolean features.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.BernoulliNB.html)

## Constructors

## constructor()

### Signature

```ts
new BernoulliNB(opts?: object): BernoulliNB;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` \| `ArrayLike` | Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).  `Default Value`  `1` |
| `opts.binarize?` | `number` | Threshold for binarizing (mapping to booleans) of sample features. If `undefined`, input is presumed to already consist of binary vectors.  `Default Value`  `0` |
| `opts.class_prior?` | `ArrayLike` | Prior probabilities of the classes. If specified, the priors are not adjusted according to the data. |
| `opts.fit_prior?` | `boolean` | Whether to learn class prior probabilities or not. If false, a uniform prior will be used.  `Default Value`  `true` |
| `opts.force_alpha?` | `boolean` | If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.  `Default Value`  `false` |

### Returns

[`BernoulliNB`](BernoulliNB.md)

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L25)

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

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L122)

### fit()

Fit Naive Bayes classifier according to X, y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `ArrayLike` | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L139)

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

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L76)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.classes?` | `ArrayLike` | List of all the classes that can possibly appear in the y vector.  Must be provided at the first call to partial\_fit, can be omitted in subsequent calls. |
| `opts.sample_weight?` | `ArrayLike` | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L192)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L250)

### predict\_joint\_log\_proba()

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Signature

```ts
predict_joint_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L285)

### predict\_log\_proba()

Return log-probability estimates for the test vector X.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L321)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L354)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L389)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L19)

## Accessors

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L436)

### class\_log\_prior\_

Log probability of each class (smoothed).

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L461)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L486)

### feature\_count\_

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_count_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L509)

### feature\_log\_prob\_

Empirical log probability of features given a class, P(x\_i|y).

#### Signature

```ts
feature_log_prob_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L534)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L584)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/BernoulliNB.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L559)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/BernoulliNB.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L63)

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

Defined in: [generated/naive\_bayes/BernoulliNB.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L67)
