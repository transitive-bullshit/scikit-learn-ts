[sklearn](../readme.md) / [Exports](../modules.md) / ComplementNB

# Class: ComplementNB

The Complement Naive Bayes classifier described in Rennie et al. (2003).

The Complement Naive Bayes classifier was designed to correct the “severe assumptions” made by the standard Multinomial Naive Bayes classifier. It is particularly suited for imbalanced data sets.

Read more in the [User Guide](../naive_bayes.html#complement-naive-bayes).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.ComplementNB.html

## Table of contents

### Constructors

- [constructor](ComplementNB.md#constructor)

### Properties

- [\_isDisposed](ComplementNB.md#_isdisposed)
- [\_isInitialized](ComplementNB.md#_isinitialized)
- [\_py](ComplementNB.md#_py)
- [id](ComplementNB.md#id)
- [opts](ComplementNB.md#opts)

### Accessors

- [class\_count\_](ComplementNB.md#class_count_)
- [class\_log\_prior\_](ComplementNB.md#class_log_prior_)
- [classes\_](ComplementNB.md#classes_)
- [feature\_all\_](ComplementNB.md#feature_all_)
- [feature\_count\_](ComplementNB.md#feature_count_)
- [feature\_log\_prob\_](ComplementNB.md#feature_log_prob_)
- [feature\_names\_in\_](ComplementNB.md#feature_names_in_)
- [n\_features\_in\_](ComplementNB.md#n_features_in_)
- [py](ComplementNB.md#py)

### Methods

- [dispose](ComplementNB.md#dispose)
- [fit](ComplementNB.md#fit)
- [init](ComplementNB.md#init)
- [partial\_fit](ComplementNB.md#partial_fit)
- [predict](ComplementNB.md#predict)
- [predict\_joint\_log\_proba](ComplementNB.md#predict_joint_log_proba)
- [predict\_log\_proba](ComplementNB.md#predict_log_proba)
- [predict\_proba](ComplementNB.md#predict_proba)
- [score](ComplementNB.md#score)

## Constructors

### constructor

• **new ComplementNB**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ComplementNBOptions`](../interfaces/ComplementNBOptions.md) |

#### Defined in

[generated/naive_bayes/ComplementNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L19)

## Accessors

### class\_count\_

• `get` **class_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L339)

___

### class\_log\_prior\_

• `get` **class_log_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Smoothed empirical log probability for each class. Only used in edge case with a single class in the training set.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L364)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels known to the classifier

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L389)

___

### feature\_all\_

• `get` **feature_all_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of samples encountered for each feature during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L412)

___

### feature\_count\_

• `get` **feature_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L437)

___

### feature\_log\_prob\_

• `get` **feature_log_prob_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Empirical weights for class complements.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L462)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L512)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L487)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBFitOptions`](../interfaces/ComplementNBFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L106)

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

[generated/naive_bayes/ComplementNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L43)

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
| `opts` | [`ComplementNBPartialFitOptions`](../interfaces/ComplementNBPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L144)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictOptions`](../interfaces/ComplementNBPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L180)

___

### predict\_joint\_log\_proba

▸ **predict_joint_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictJointLogProbaOptions`](../interfaces/ComplementNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L210)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictLogProbaOptions`](../interfaces/ComplementNBPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L243)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBPredictProbaOptions`](../interfaces/ComplementNBPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L275)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ComplementNBScoreOptions`](../interfaces/ComplementNBScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/ComplementNB.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L307)
