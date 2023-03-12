[sklearn](../readme.md) / [Exports](../modules.md) / SGDRegressor

# Class: SGDRegressor

Linear model fitted by minimizing a regularized empirical loss with SGD.

SGD stands for Stochastic Gradient Descent: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

This implementation works with data represented as dense numpy arrays of floating point values for the features.

Read more in the [User Guide](../sgd.html#sgd).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html

## Table of contents

### Constructors

- [constructor](SGDRegressor.md#constructor)

### Properties

- [\_isDisposed](SGDRegressor.md#_isdisposed)
- [\_isInitialized](SGDRegressor.md#_isinitialized)
- [\_py](SGDRegressor.md#_py)
- [id](SGDRegressor.md#id)
- [opts](SGDRegressor.md#opts)

### Accessors

- [coef\_](SGDRegressor.md#coef_)
- [feature\_names\_in\_](SGDRegressor.md#feature_names_in_)
- [intercept\_](SGDRegressor.md#intercept_)
- [n\_features\_in\_](SGDRegressor.md#n_features_in_)
- [n\_iter\_](SGDRegressor.md#n_iter_)
- [py](SGDRegressor.md#py)
- [t\_](SGDRegressor.md#t_)

### Methods

- [densify](SGDRegressor.md#densify)
- [dispose](SGDRegressor.md#dispose)
- [fit](SGDRegressor.md#fit)
- [init](SGDRegressor.md#init)
- [partial\_fit](SGDRegressor.md#partial_fit)
- [predict](SGDRegressor.md#predict)
- [score](SGDRegressor.md#score)
- [sparsify](SGDRegressor.md#sparsify)

## Constructors

### constructor

• **new SGDRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SGDRegressorOptions`](../interfaces/SGDRegressorOptions.md) |

#### Defined in

[generated/linear_model/SGDRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/SGDRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/SGDRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/SGDRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/SGDRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/SGDRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L23)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Weights assigned to the features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L312)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L431)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The intercept term.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L335)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L406)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations before reaching the stopping criterion.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L360)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/SGDRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/SGDRegressor.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L38)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L383)

## Methods

### densify

▸ **densify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorDensifyOptions`](../interfaces/SGDRegressorDensifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L126)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L107)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model with Stochastic Gradient Descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorFitOptions`](../interfaces/SGDRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L152)

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

[generated/linear_model/SGDRegressor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L47)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence and early stopping should be handled by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorPartialFitOptions`](../interfaces/SGDRegressorPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L190)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorPredictOptions`](../interfaces/SGDRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L220)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorScoreOptions`](../interfaces/SGDRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L250)

___

### sparsify

▸ **sparsify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorSparsifyOptions`](../interfaces/SGDRegressorSparsifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDRegressor.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L286)
