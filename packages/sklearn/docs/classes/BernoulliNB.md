[sklearn](../readme.md) / [Exports](../modules.md) / BernoulliNB

# Class: BernoulliNB

Naive Bayes classifier for multivariate Bernoulli models.

Like MultinomialNB, this classifier is suitable for discrete data. The difference is that while MultinomialNB works with occurrence counts, BernoulliNB is designed for binary/boolean features.

Read more in the [User Guide](../naive_bayes.html#bernoulli-naive-bayes).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.BernoulliNB.html

## Table of contents

### Constructors

- [constructor](BernoulliNB.md#constructor)

### Properties

- [\_isDisposed](BernoulliNB.md#_isdisposed)
- [\_isInitialized](BernoulliNB.md#_isinitialized)
- [\_py](BernoulliNB.md#_py)
- [id](BernoulliNB.md#id)
- [opts](BernoulliNB.md#opts)

### Accessors

- [class\_count\_](BernoulliNB.md#class_count_)
- [class\_log\_prior\_](BernoulliNB.md#class_log_prior_)
- [classes\_](BernoulliNB.md#classes_)
- [feature\_count\_](BernoulliNB.md#feature_count_)
- [feature\_log\_prob\_](BernoulliNB.md#feature_log_prob_)
- [feature\_names\_in\_](BernoulliNB.md#feature_names_in_)
- [n\_features\_in\_](BernoulliNB.md#n_features_in_)
- [py](BernoulliNB.md#py)

### Methods

- [dispose](BernoulliNB.md#dispose)
- [fit](BernoulliNB.md#fit)
- [init](BernoulliNB.md#init)
- [partial\_fit](BernoulliNB.md#partial_fit)
- [predict](BernoulliNB.md#predict)
- [predict\_joint\_log\_proba](BernoulliNB.md#predict_joint_log_proba)
- [predict\_log\_proba](BernoulliNB.md#predict_log_proba)
- [predict\_proba](BernoulliNB.md#predict_proba)
- [score](BernoulliNB.md#score)

## Constructors

### constructor

• **new BernoulliNB**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BernoulliNBOptions`](../interfaces/BernoulliNBOptions.md) |

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L19)

## Accessors

### class\_count\_

• `get` **class_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L337)

___

### class\_log\_prior\_

• `get` **class_log_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Log probability of each class (smoothed).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L362)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels known to the classifier

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L387)

___

### feature\_count\_

• `get` **feature_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L410)

___

### feature\_log\_prob\_

• `get` **feature_log_prob_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Empirical log probability of features given a class, P(x\_i|y).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L435)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L485)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L460)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBFitOptions`](../interfaces/BernoulliNBFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L106)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L43)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPartialFitOptions`](../interfaces/BernoulliNBPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L144)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictOptions`](../interfaces/BernoulliNBPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L180)

___

### predict\_joint\_log\_proba

▸ **predict_joint_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictJointLogProbaOptions`](../interfaces/BernoulliNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L210)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictLogProbaOptions`](../interfaces/BernoulliNBPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L243)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBPredictProbaOptions`](../interfaces/BernoulliNBPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L273)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliNBScoreOptions`](../interfaces/BernoulliNBScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/BernoulliNB.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L305)
