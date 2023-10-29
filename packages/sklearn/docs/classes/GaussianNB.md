# GaussianNB

Gaussian Naive Bayes (GaussianNB).

Can perform online updates to model parameters via [`partial\_fit`](#sklearn.naive_bayes.GaussianNB.partial_fit "sklearn.naive_bayes.GaussianNB.partial_fit"). For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianNB(opts?: object): GaussianNB;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.priors?` | [`ArrayLike`](../types/ArrayLike.md) | Prior probabilities of the classes. If specified, the priors are not adjusted according to the data. |
| `opts.var_smoothing?` | `number` | Portion of the largest variance of all features that is added to variances for calculation stability.  `Default Value`  `1e-9` |

### Returns

[`GaussianNB`](GaussianNB.md)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L23)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L95)

### fit()

Fit Gaussian Naive Bayes according to X, y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L112)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L161)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L53)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance and numerical stability overhead, hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | List of all the classes that can possibly appear in the y vector.  Must be provided at the first call to partial\_fit, can be omitted in subsequent calls. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L202)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L260)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L295)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L330)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L363)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L398)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L449)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.classes?` | `string` \| `boolean` | Metadata routing for `classes` parameter in `partial\_fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L486)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L530)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L19)

### id

> `string`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L16)

### opts

> `any`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L17)

## Accessors

### class\_count\_

number of training samples observed in each class.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L563)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L563)

### class\_prior\_

probability of each class.

#### Signature

```ts
class_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L588)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L588)

### classes\_

class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L613)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L613)

### epsilon\_

absolute additive value to variances.

#### Signature

```ts
epsilon_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L636)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L636)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L684)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L684)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:659](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L659)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:659](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L659)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L40)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L44)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L40) [generated/naive\_bayes/GaussianNB.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L44)

### theta\_

mean of each feature per class.

#### Signature

```ts
theta_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L732)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L732)

### var\_

Variance of each feature per class.

#### Signature

```ts
var_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L709)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L709)
