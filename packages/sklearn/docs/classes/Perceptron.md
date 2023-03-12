[sklearn](../readme.md) / [Exports](../modules.md) / Perceptron

# Class: Perceptron

Linear perceptron classifier.

Read more in the [User Guide](../linear_model.html#perceptron).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html

## Table of contents

### Constructors

- [constructor](Perceptron.md#constructor)

### Properties

- [\_isDisposed](Perceptron.md#_isdisposed)
- [\_isInitialized](Perceptron.md#_isinitialized)
- [\_py](Perceptron.md#_py)
- [id](Perceptron.md#id)
- [opts](Perceptron.md#opts)

### Accessors

- [classes\_](Perceptron.md#classes_)
- [coef\_](Perceptron.md#coef_)
- [feature\_names\_in\_](Perceptron.md#feature_names_in_)
- [intercept\_](Perceptron.md#intercept_)
- [loss\_function\_](Perceptron.md#loss_function_)
- [n\_features\_in\_](Perceptron.md#n_features_in_)
- [n\_iter\_](Perceptron.md#n_iter_)
- [py](Perceptron.md#py)
- [t\_](Perceptron.md#t_)

### Methods

- [decision\_function](Perceptron.md#decision_function)
- [densify](Perceptron.md#densify)
- [dispose](Perceptron.md#dispose)
- [fit](Perceptron.md#fit)
- [init](Perceptron.md#init)
- [partial\_fit](Perceptron.md#partial_fit)
- [predict](Perceptron.md#predict)
- [score](Perceptron.md#score)
- [sparsify](Perceptron.md#sparsify)

## Constructors

### constructor

• **new Perceptron**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PerceptronOptions`](../interfaces/PerceptronOptions.md) |

#### Defined in

[generated/linear_model/Perceptron.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/Perceptron.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/Perceptron.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/Perceptron.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/Perceptron.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/Perceptron.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The unique classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Perceptron.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L340)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Weights assigned to the features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/linear_model/Perceptron.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L363)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Perceptron.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L459)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/Perceptron.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L386)

___

### loss\_function\_

• `get` **loss_function_**(): `Promise`<`any`\>

The function that determines the loss, or difference between the output of the algorithm and the target values.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Perceptron.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L409)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Perceptron.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L434)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Perceptron.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L484)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/Perceptron.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/Perceptron.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L32)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Perceptron.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L507)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronDecisionFunctionOptions`](../interfaces/PerceptronDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Perceptron.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L120)

___

### densify

▸ **densify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronDensifyOptions`](../interfaces/PerceptronDensifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Perceptron.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L152)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/Perceptron.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L101)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model with Stochastic Gradient Descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronFitOptions`](../interfaces/PerceptronFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Perceptron.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L178)

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

[generated/linear_model/Perceptron.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronPartialFitOptions`](../interfaces/PerceptronPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Perceptron.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L216)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronPredictOptions`](../interfaces/PerceptronPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Perceptron.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L248)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronScoreOptions`](../interfaces/PerceptronScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Perceptron.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L278)

___

### sparsify

▸ **sparsify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PerceptronSparsifyOptions`](../interfaces/PerceptronSparsifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Perceptron.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L314)
