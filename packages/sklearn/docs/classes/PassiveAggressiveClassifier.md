[sklearn](../readme.md) / [Exports](../modules.md) / PassiveAggressiveClassifier

# Class: PassiveAggressiveClassifier

Passive Aggressive Classifier.

Read more in the [User Guide](../linear_model.html#passive-aggressive).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveClassifier.html

## Table of contents

### Constructors

- [constructor](PassiveAggressiveClassifier.md#constructor)

### Properties

- [\_isDisposed](PassiveAggressiveClassifier.md#_isdisposed)
- [\_isInitialized](PassiveAggressiveClassifier.md#_isinitialized)
- [\_py](PassiveAggressiveClassifier.md#_py)
- [id](PassiveAggressiveClassifier.md#id)
- [opts](PassiveAggressiveClassifier.md#opts)

### Accessors

- [classes\_](PassiveAggressiveClassifier.md#classes_)
- [coef\_](PassiveAggressiveClassifier.md#coef_)
- [feature\_names\_in\_](PassiveAggressiveClassifier.md#feature_names_in_)
- [intercept\_](PassiveAggressiveClassifier.md#intercept_)
- [loss\_function\_](PassiveAggressiveClassifier.md#loss_function_)
- [n\_features\_in\_](PassiveAggressiveClassifier.md#n_features_in_)
- [n\_iter\_](PassiveAggressiveClassifier.md#n_iter_)
- [py](PassiveAggressiveClassifier.md#py)
- [t\_](PassiveAggressiveClassifier.md#t_)

### Methods

- [decision\_function](PassiveAggressiveClassifier.md#decision_function)
- [densify](PassiveAggressiveClassifier.md#densify)
- [dispose](PassiveAggressiveClassifier.md#dispose)
- [fit](PassiveAggressiveClassifier.md#fit)
- [init](PassiveAggressiveClassifier.md#init)
- [partial\_fit](PassiveAggressiveClassifier.md#partial_fit)
- [predict](PassiveAggressiveClassifier.md#predict)
- [score](PassiveAggressiveClassifier.md#score)
- [sparsify](PassiveAggressiveClassifier.md#sparsify)

## Constructors

### constructor

• **new PassiveAggressiveClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PassiveAggressiveClassifierOptions`](../interfaces/PassiveAggressiveClassifierOptions.md) |

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The unique classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L512)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Weights assigned to the features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L377)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L458)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L404)

___

### loss\_function\_

• `get` **loss_function_**(): `Promise`<`any`\>

Loss function used by the algorithm.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L566)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L431)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L485)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L32)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L539)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierDecisionFunctionOptions`](../interfaces/PassiveAggressiveClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L122)

___

### densify

▸ **densify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierDensifyOptions`](../interfaces/PassiveAggressiveClassifierDensifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L159)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model with Passive Aggressive algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierFitOptions`](../interfaces/PassiveAggressiveClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L189)

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

[generated/linear_model/PassiveAggressiveClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Fit linear model with Passive Aggressive algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierPartialFitOptions`](../interfaces/PassiveAggressiveClassifierPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L229)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierPredictOptions`](../interfaces/PassiveAggressiveClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L268)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierScoreOptions`](../interfaces/PassiveAggressiveClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L305)

___

### sparsify

▸ **sparsify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierSparsifyOptions`](../interfaces/PassiveAggressiveClassifierSparsifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L345)
