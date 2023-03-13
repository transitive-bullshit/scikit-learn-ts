# CategoricalNB

Naive Bayes classifier for categorical features.

The categorical Naive Bayes classifier is suitable for classification with discrete features that are categorically distributed. The categories of each feature are drawn from a categorical distribution.

Read more in the [User Guide](../naive_bayes.html#categorical-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.CategoricalNB.html)

## Constructors

## constructor()

### Signature

```ts
new CategoricalNB(opts?: object): CategoricalNB;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).  `Default Value`  `1` |
| `opts.class_prior?` | [`ArrayLike`](../types/ArrayLike.md) | Prior probabilities of the classes. If specified, the priors are not adjusted according to the data. |
| `opts.fit_prior?` | `boolean` | Whether to learn class prior probabilities or not. If false, a uniform prior will be used.  `Default Value`  `true` |
| `opts.force_alpha?` | `boolean` | If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.  `Default Value`  `false` |
| `opts.min_categories?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | Minimum number of categories per feature. |

### Returns

[`CategoricalNB`](CategoricalNB.md)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L21)

### id

> `string`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L18)

### opts

> `any`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L19)

## Accessors

### category\_count\_

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the number of samples encountered for each class and category of the specific feature.

#### Signature

```ts
category_count_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L436)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L436)

### class\_count\_

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L461)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L461)

### class\_log\_prior\_

Smoothed empirical log probability for each class.

#### Signature

```ts
class_log_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L486)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L486)

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L511)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L511)

### feature\_log\_prob\_

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the empirical log probability of categories given the respective feature and class, `P(x\_i|y)`.

#### Signature

```ts
feature_log_prob_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L536)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L536)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L586)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L586)

### n\_categories\_

Number of categories for each feature. This value is inferred from the data or set by the minimum number of categories.

#### Signature

```ts
n_categories_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L611)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L611)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L561)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L561)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L61)

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

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L65)

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L61) [generated/naive\_bayes/CategoricalNB.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L65)

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

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L120)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L137)

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

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L74)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder. |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | List of all the classes that can possibly appear in the y vector.  Must be provided at the first call to partial\_fit, can be omitted in subsequent calls. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L190)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L248)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L283)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L319)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L354)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/CategoricalNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L389)
