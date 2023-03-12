[sklearn](../readme.md) / [Exports](../modules.md) / MLPRegressor

# Class: MLPRegressor

Multi-layer Perceptron regressor.

This model optimizes the squared error using LBFGS or stochastic gradient descent.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html

## Table of contents

### Constructors

- [constructor](MLPRegressor.md#constructor)

### Properties

- [\_isDisposed](MLPRegressor.md#_isdisposed)
- [\_isInitialized](MLPRegressor.md#_isinitialized)
- [\_py](MLPRegressor.md#_py)
- [id](MLPRegressor.md#id)
- [opts](MLPRegressor.md#opts)

### Accessors

- [best\_loss\_](MLPRegressor.md#best_loss_)
- [best\_validation\_score\_](MLPRegressor.md#best_validation_score_)
- [coefs\_](MLPRegressor.md#coefs_)
- [feature\_names\_in\_](MLPRegressor.md#feature_names_in_)
- [intercepts\_](MLPRegressor.md#intercepts_)
- [loss\_](MLPRegressor.md#loss_)
- [loss\_curve\_](MLPRegressor.md#loss_curve_)
- [n\_features\_in\_](MLPRegressor.md#n_features_in_)
- [n\_iter\_](MLPRegressor.md#n_iter_)
- [n\_layers\_](MLPRegressor.md#n_layers_)
- [n\_outputs\_](MLPRegressor.md#n_outputs_)
- [out\_activation\_](MLPRegressor.md#out_activation_)
- [py](MLPRegressor.md#py)
- [t\_](MLPRegressor.md#t_)
- [validation\_scores\_](MLPRegressor.md#validation_scores_)

### Methods

- [dispose](MLPRegressor.md#dispose)
- [fit](MLPRegressor.md#fit)
- [init](MLPRegressor.md#init)
- [partial\_fit](MLPRegressor.md#partial_fit)
- [predict](MLPRegressor.md#predict)
- [score](MLPRegressor.md#score)

## Constructors

### constructor

• **new MLPRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MLPRegressorOptions`](../interfaces/MLPRegressorOptions.md) |

#### Defined in

[generated/neural_network/MLPRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neural_network/MLPRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neural_network/MLPRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neural_network/MLPRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neural_network/MLPRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neural_network/MLPRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L17)

## Accessors

### best\_loss\_

• `get` **best_loss_**(): `Promise`<`number`\>

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set to `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead. Only accessible when solver=’sgd’ or ‘adam’.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L273)

___

### best\_validation\_score\_

• `get` **best_validation_score_**(): `Promise`<`number`\>

The best validation score (i.e. R2 score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L348)

___

### coefs\_

• `get` **coefs_**(): `Promise`<`any`[]\>

The ith element in the list represents the weight matrix corresponding to layer i.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L396)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L469)

___

### intercepts\_

• `get` **intercepts_**(): `Promise`<`any`[]\>

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L419)

___

### loss\_

• `get` **loss_**(): `Promise`<`number`\>

The current loss computed with the loss function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L250)

___

### loss\_curve\_

• `get` **loss_curve_**(): `Promise`<`any`[]\>

Loss value evaluated at the end of each training step. The ith element in the list represents the loss at the ith iteration. Only accessible when solver=’sgd’ or ‘adam’.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L298)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L444)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The number of iterations the solver has run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L494)

___

### n\_layers\_

• `get` **n_layers_**(): `Promise`<`number`\>

Number of layers.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L517)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

Number of outputs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L542)

___

### out\_activation\_

• `get` **out_activation_**(): `Promise`<`string`\>

Name of the output activation function.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L567)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neural_network/MLPRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neural_network/MLPRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L32)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

The number of training samples seen by the solver during fitting. Mathematically equals `n\_iters \* X.shape\[0\]`, it means `time\_step` and it is used by optimizer’s learning rate scheduler.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L373)

___

### validation\_scores\_

• `get` **validation_scores_**(): `Promise`<`any`[]\>

The score at each iteration on a held-out validation set. The score reported is the R2 score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L323)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data matrix X and target(s) y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPRegressorFitOptions`](../interfaces/MLPRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L128)

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

[generated/neural_network/MLPRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Update the model with a single iteration over the given data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPRegressorPartialFitOptions`](../interfaces/MLPRegressorPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L158)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict using the multi-layer perceptron model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPRegressorPredictOptions`](../interfaces/MLPRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L188)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPRegressorScoreOptions`](../interfaces/MLPRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L218)
