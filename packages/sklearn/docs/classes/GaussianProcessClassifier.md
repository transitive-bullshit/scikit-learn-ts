[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessClassifier

# Class: GaussianProcessClassifier

Gaussian process classification (GPC) based on Laplace approximation.

The implementation is based on Algorithm 3.1, 3.2, and 5.1 from [\[RW2006\]](#r2da648a61a73-rw2006).

Internally, the Laplace approximation is used for approximating the non-Gaussian posterior by a Gaussian.

Currently, the implementation is restricted to using the logistic link function. For multi-class classification, several binary one-versus rest classifiers are fitted. Note that this class thus does not implement a true multi-class Laplace approximation.

Read more in the [User Guide](../gaussian_process.html#gaussian-process).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html

## Table of contents

### Constructors

- [constructor](GaussianProcessClassifier.md#constructor)

### Properties

- [\_isDisposed](GaussianProcessClassifier.md#_isdisposed)
- [\_isInitialized](GaussianProcessClassifier.md#_isinitialized)
- [\_py](GaussianProcessClassifier.md#_py)
- [id](GaussianProcessClassifier.md#id)
- [opts](GaussianProcessClassifier.md#opts)

### Accessors

- [base\_estimator\_](GaussianProcessClassifier.md#base_estimator_)
- [classes\_](GaussianProcessClassifier.md#classes_)
- [feature\_names\_in\_](GaussianProcessClassifier.md#feature_names_in_)
- [log\_marginal\_likelihood\_value\_](GaussianProcessClassifier.md#log_marginal_likelihood_value_)
- [n\_classes\_](GaussianProcessClassifier.md#n_classes_)
- [n\_features\_in\_](GaussianProcessClassifier.md#n_features_in_)
- [py](GaussianProcessClassifier.md#py)

### Methods

- [dispose](GaussianProcessClassifier.md#dispose)
- [fit](GaussianProcessClassifier.md#fit)
- [init](GaussianProcessClassifier.md#init)
- [log\_marginal\_likelihood](GaussianProcessClassifier.md#log_marginal_likelihood)
- [predict](GaussianProcessClassifier.md#predict)
- [predict\_proba](GaussianProcessClassifier.md#predict_proba)
- [score](GaussianProcessClassifier.md#score)

## Constructors

### constructor

• **new GaussianProcessClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianProcessClassifierOptions`](../interfaces/GaussianProcessClassifierOptions.md) |

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L23)

## Accessors

### base\_estimator\_

• `get` **base_estimator_**(): `Promise`<`any`\>

The estimator instance that defines the likelihood function using the observed data.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L298)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Unique class labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L352)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L433)

___

### log\_marginal\_likelihood\_value\_

• `get` **log_marginal_likelihood_value_**(): `Promise`<`number`\>

The log-marginal-likelihood of `self.kernel\_.theta`

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L325)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

The number of classes in the training data

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L379)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L406)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Gaussian process classification model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierFitOptions`](../interfaces/GaussianProcessClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L120)

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

[generated/gaussian_process/GaussianProcessClassifier.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L47)

___

### log\_marginal\_likelihood

▸ **log_marginal_likelihood**(`opts`): `Promise`<`number`\>

Return log-marginal likelihood of theta for training data.

In the case of multi-class classification, the mean log-marginal likelihood of the one-versus-rest classifiers are returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierLogMarginalLikelihoodOptions`](../interfaces/GaussianProcessClassifierLogMarginalLikelihoodOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L154)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierPredictOptions`](../interfaces/GaussianProcessClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L191)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vector X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierPredictProbaOptions`](../interfaces/GaussianProcessClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L225)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierScoreOptions`](../interfaces/GaussianProcessClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L262)
