# ComplementNB

The Complement Naive Bayes classifier described in Rennie et al. (2003).

The Complement Naive Bayes classifier was designed to correct the “severe assumptions” made by the standard Multinomial Naive Bayes classifier. It is particularly suited for imbalanced data sets.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.ComplementNB.html)

## Constructors

## constructor()

### Signature

```ts
new ComplementNB(opts?: object): ComplementNB;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` \| `ArrayLike` | Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).  `Default Value`  `1` |
| `opts.class_prior?` | `ArrayLike` | Prior probabilities of the classes. Not used. |
| `opts.fit_prior?` | `boolean` | Only used in edge case with a single class in the training set.  `Default Value`  `true` |
| `opts.force_alpha?` | `boolean` | If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.  `Default Value`  `false` |
| `opts.norm?` | `boolean` | Whether or not a second normalization of the weights is performed. The default behavior mirrors the implementations found in Mahout and Weka, which do not follow the full algorithm described in Table 9 of the paper.  `Default Value`  `false` |

### Returns

[`ComplementNB`](ComplementNB.md)

Defined in:  [generated/naive\_bayes/ComplementNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L25)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L122)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L139)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L76)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L192)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L250)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L285)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L321)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L356)

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

Defined in:  [generated/naive\_bayes/ComplementNB.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L391)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L19)

## Accessors

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L438)

### class\_log\_prior\_

Smoothed empirical log probability for each class. Only used in edge case with a single class in the training set.

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L463)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L488)

### feature\_all\_

Number of samples encountered for each feature during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_all_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L511)

### feature\_count\_

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
feature_count_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L536)

### feature\_log\_prob\_

Empirical weights for class complements.

#### Signature

```ts
feature_log_prob_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L561)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L611)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/ComplementNB.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L586)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/ComplementNB.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L63)

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

Defined in: [generated/naive\_bayes/ComplementNB.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L67)
