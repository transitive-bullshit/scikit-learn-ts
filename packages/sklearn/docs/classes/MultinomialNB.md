[sklearn](../readme.md) / [Exports](../modules.md) / MultinomialNB

# Class: MultinomialNB

Naive Bayes classifier for multinomial models.

The multinomial Naive Bayes classifier is suitable for classification with discrete features (e.g., word counts for text classification). The multinomial distribution normally requires integer feature counts. However, in practice, fractional counts such as tf-idf may also work.

Read more in the [User Guide](../naive_bayes.html#multinomial-naive-bayes).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html

## Table of contents

### Constructors

- [constructor](MultinomialNB.md#constructor)

### Properties

- [\_isDisposed](MultinomialNB.md#_isdisposed)
- [\_isInitialized](MultinomialNB.md#_isinitialized)
- [\_py](MultinomialNB.md#_py)
- [id](MultinomialNB.md#id)
- [opts](MultinomialNB.md#opts)

### Accessors

- [class\_count\_](MultinomialNB.md#class_count_)
- [class\_log\_prior\_](MultinomialNB.md#class_log_prior_)
- [classes\_](MultinomialNB.md#classes_)
- [feature\_count\_](MultinomialNB.md#feature_count_)
- [feature\_log\_prob\_](MultinomialNB.md#feature_log_prob_)
- [feature\_names\_in\_](MultinomialNB.md#feature_names_in_)
- [n\_features\_in\_](MultinomialNB.md#n_features_in_)
- [py](MultinomialNB.md#py)

### Methods

- [dispose](MultinomialNB.md#dispose)
- [fit](MultinomialNB.md#fit)
- [init](MultinomialNB.md#init)
- [partial\_fit](MultinomialNB.md#partial_fit)
- [predict](MultinomialNB.md#predict)
- [predict\_joint\_log\_proba](MultinomialNB.md#predict_joint_log_proba)
- [predict\_log\_proba](MultinomialNB.md#predict_log_proba)
- [predict\_proba](MultinomialNB.md#predict_proba)
- [score](MultinomialNB.md#score)

## Constructors

### constructor

• **new MultinomialNB**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultinomialNBOptions`](../interfaces/MultinomialNBOptions.md) |

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L19)

## Accessors

### class\_count\_

• `get` **class_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L339)

___

### class\_log\_prior\_

• `get` **class_log_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Smoothed empirical log probability for each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L364)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels known to the classifier

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L389)

___

### feature\_count\_

• `get` **feature_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L414)

___

### feature\_log\_prob\_

• `get` **feature_log_prob_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Empirical log probability of features given a class, `P(x\_i|y)`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L439)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L489)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L464)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBFitOptions`](../interfaces/MultinomialNBFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L106)

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

[generated/naive_bayes/MultinomialNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L43)

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
| `opts` | [`MultinomialNBPartialFitOptions`](../interfaces/MultinomialNBPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L144)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBPredictOptions`](../interfaces/MultinomialNBPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L180)

___

### predict\_joint\_log\_proba

▸ **predict_joint_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBPredictJointLogProbaOptions`](../interfaces/MultinomialNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L210)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBPredictLogProbaOptions`](../interfaces/MultinomialNBPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L243)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBPredictProbaOptions`](../interfaces/MultinomialNBPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L275)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultinomialNBScoreOptions`](../interfaces/MultinomialNBScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L307)
