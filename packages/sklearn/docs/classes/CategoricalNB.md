[sklearn](../readme.md) / [Exports](../modules.md) / CategoricalNB

# Class: CategoricalNB

Naive Bayes classifier for categorical features.

The categorical Naive Bayes classifier is suitable for classification with discrete features that are categorically distributed. The categories of each feature are drawn from a categorical distribution.

Read more in the [User Guide](../naive_bayes.html#categorical-naive-bayes).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.CategoricalNB.html

## Table of contents

### Constructors

- [constructor](CategoricalNB.md#constructor)

### Properties

- [\_isDisposed](CategoricalNB.md#_isdisposed)
- [\_isInitialized](CategoricalNB.md#_isinitialized)
- [\_py](CategoricalNB.md#_py)
- [id](CategoricalNB.md#id)
- [opts](CategoricalNB.md#opts)

### Accessors

- [category\_count\_](CategoricalNB.md#category_count_)
- [class\_count\_](CategoricalNB.md#class_count_)
- [class\_log\_prior\_](CategoricalNB.md#class_log_prior_)
- [classes\_](CategoricalNB.md#classes_)
- [feature\_log\_prob\_](CategoricalNB.md#feature_log_prob_)
- [feature\_names\_in\_](CategoricalNB.md#feature_names_in_)
- [n\_categories\_](CategoricalNB.md#n_categories_)
- [n\_features\_in\_](CategoricalNB.md#n_features_in_)
- [py](CategoricalNB.md#py)

### Methods

- [dispose](CategoricalNB.md#dispose)
- [fit](CategoricalNB.md#fit)
- [init](CategoricalNB.md#init)
- [partial\_fit](CategoricalNB.md#partial_fit)
- [predict](CategoricalNB.md#predict)
- [predict\_joint\_log\_proba](CategoricalNB.md#predict_joint_log_proba)
- [predict\_log\_proba](CategoricalNB.md#predict_log_proba)
- [predict\_proba](CategoricalNB.md#predict_proba)
- [score](CategoricalNB.md#score)

## Constructors

### constructor

• **new CategoricalNB**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CategoricalNBOptions`](../interfaces/CategoricalNBOptions.md) |

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L19)

## Accessors

### category\_count\_

• `get` **category_count_**(): `Promise`<`any`[]\>

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the number of samples encountered for each class and category of the specific feature.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L339)

___

### class\_count\_

• `get` **class_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L364)

___

### class\_log\_prior\_

• `get` **class_log_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Smoothed empirical log probability for each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L389)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels known to the classifier

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L414)

___

### feature\_log\_prob\_

• `get` **feature_log_prob_**(): `Promise`<`any`[]\>

Holds arrays of shape (n\_classes, n\_categories of respective feature) for each feature. Each array provides the empirical log probability of categories given the respective feature and class, `P(x\_i|y)`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L439)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L489)

___

### n\_categories\_

• `get` **n_categories_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of categories for each feature. This value is inferred from the data or set by the minimum number of categories.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L514)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L464)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBFitOptions`](../interfaces/CategoricalNBFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L106)

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

[generated/naive_bayes/CategoricalNB.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L43)

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
| `opts` | [`CategoricalNBPartialFitOptions`](../interfaces/CategoricalNBPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L144)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBPredictOptions`](../interfaces/CategoricalNBPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L180)

___

### predict\_joint\_log\_proba

▸ **predict_joint_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBPredictJointLogProbaOptions`](../interfaces/CategoricalNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L210)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBPredictLogProbaOptions`](../interfaces/CategoricalNBPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L243)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBPredictProbaOptions`](../interfaces/CategoricalNBPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L275)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CategoricalNBScoreOptions`](../interfaces/CategoricalNBScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L307)
