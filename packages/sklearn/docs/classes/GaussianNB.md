[sklearn](../readme.md) / [Exports](../modules.md) / GaussianNB

# Class: GaussianNB

Gaussian Naive Bayes (GaussianNB).

Can perform online updates to model parameters via [`partial\_fit`](#sklearn.naive_bayes.GaussianNB.partial_fit "sklearn.naive_bayes.GaussianNB.partial_fit"). For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html

## Table of contents

### Constructors

- [constructor](GaussianNB.md#constructor)

### Properties

- [\_isDisposed](GaussianNB.md#_isdisposed)
- [\_isInitialized](GaussianNB.md#_isinitialized)
- [\_py](GaussianNB.md#_py)
- [id](GaussianNB.md#id)
- [opts](GaussianNB.md#opts)

### Accessors

- [class\_count\_](GaussianNB.md#class_count_)
- [class\_prior\_](GaussianNB.md#class_prior_)
- [classes\_](GaussianNB.md#classes_)
- [epsilon\_](GaussianNB.md#epsilon_)
- [feature\_names\_in\_](GaussianNB.md#feature_names_in_)
- [n\_features\_in\_](GaussianNB.md#n_features_in_)
- [py](GaussianNB.md#py)
- [theta\_](GaussianNB.md#theta_)
- [var\_](GaussianNB.md#var_)

### Methods

- [dispose](GaussianNB.md#dispose)
- [fit](GaussianNB.md#fit)
- [init](GaussianNB.md#init)
- [partial\_fit](GaussianNB.md#partial_fit)
- [predict](GaussianNB.md#predict)
- [predict\_joint\_log\_proba](GaussianNB.md#predict_joint_log_proba)
- [predict\_log\_proba](GaussianNB.md#predict_log_proba)
- [predict\_proba](GaussianNB.md#predict_proba)
- [score](GaussianNB.md#score)

## Constructors

### constructor

• **new GaussianNB**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianNBOptions`](../interfaces/GaussianNBOptions.md) |

#### Defined in

[generated/naive_bayes/GaussianNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L17)

## Accessors

### class\_count\_

• `get` **class_count_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

number of training samples observed in each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L330)

___

### class\_prior\_

• `get` **class_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

probability of each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L355)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

class labels known to the classifier.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L380)

___

### epsilon\_

• `get` **epsilon_**(): `Promise`<`number`\>

absolute additive value to variances.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L403)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L451)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L426)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L32)

___

### theta\_

• `get` **theta_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

mean of each feature per class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L499)

___

### var\_

• `get` **var_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Variance of each feature per class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L476)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Gaussian Naive Bayes according to X, y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBFitOptions`](../interfaces/GaussianNBFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L100)

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

[generated/naive_bayes/GaussianNB.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance and numerical stability overhead, hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBPartialFitOptions`](../interfaces/GaussianNBPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L138)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBPredictOptions`](../interfaces/GaussianNBPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L174)

___

### predict\_joint\_log\_proba

▸ **predict_joint_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBPredictJointLogProbaOptions`](../interfaces/GaussianNBPredictJointLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L204)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBPredictLogProbaOptions`](../interfaces/GaussianNBPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L236)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBPredictProbaOptions`](../interfaces/GaussianNBPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L266)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianNBScoreOptions`](../interfaces/GaussianNBScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/naive_bayes/GaussianNB.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L298)
