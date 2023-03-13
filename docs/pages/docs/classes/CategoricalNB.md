# CategoricalNB

Naive Bayes classifier for categorical features.

The categorical Naive Bayes classifier is suitable for classification with discrete features that are categorically distributed. The categories of each feature are drawn from a categorical distribution.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.CategoricalNB.html)

## Constructors

## constructor()

### Signature

```ts
new CategoricalNB(opts?: CategoricalNBOptions): CategoricalNB;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `CategoricalNBOptions` |

### Returns

[`CategoricalNB`](CategoricalNB.md)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L19)

## Accessors

### category\_count\_

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the number of samples encountered for each class and category of the specific feature.

#### Signature

```ts
category_count_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L339)

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L364)

### class\_log\_prior\_

Smoothed empirical log probability for each class.

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L389)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L414)

### feature\_log\_prob\_

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the empirical log probability of categories given the respective feature and class, `P(x\_i|y)`.

#### Signature

```ts
feature_log_prob_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L439)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L489)

### n\_categories\_

Number of categories for each feature. This value is inferred from the data or set by the minimum number of categories.

#### Signature

```ts
n_categories_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L514)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/CategoricalNB.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L464)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L30)

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

Defined in: [generated/naive\_bayes/CategoricalNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L34)

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

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L89)

### fit()

Fit Naive Bayes classifier according to X, y.

#### Signature

```ts
fit(opts: CategoricalNBFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L106)

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

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L43)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: CategoricalNBPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L144)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: CategoricalNBPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L180)

### predict\_joint\_log\_proba()

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Signature

```ts
predict_joint_log_proba(opts: CategoricalNBPredictJointLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBPredictJointLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L210)

### predict\_log\_proba()

Return log-probability estimates for the test vector X.

#### Signature

```ts
predict_log_proba(opts: CategoricalNBPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBPredictLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L243)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: CategoricalNBPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBPredictProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L275)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: CategoricalNBScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CategoricalNBScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L307)
