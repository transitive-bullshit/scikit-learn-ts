[sklearn](../readme.md) / [Exports](../modules.md) / MLPClassifier

# Class: MLPClassifier

Multi-layer Perceptron classifier.

This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html

## Table of contents

### Constructors

- [constructor](MLPClassifier.md#constructor)

### Properties

- [\_isDisposed](MLPClassifier.md#_isdisposed)
- [\_isInitialized](MLPClassifier.md#_isinitialized)
- [\_py](MLPClassifier.md#_py)
- [id](MLPClassifier.md#id)
- [opts](MLPClassifier.md#opts)

### Accessors

- [best\_loss\_](MLPClassifier.md#best_loss_)
- [best\_validation\_score\_](MLPClassifier.md#best_validation_score_)
- [classes\_](MLPClassifier.md#classes_)
- [coefs\_](MLPClassifier.md#coefs_)
- [feature\_names\_in\_](MLPClassifier.md#feature_names_in_)
- [intercepts\_](MLPClassifier.md#intercepts_)
- [loss\_](MLPClassifier.md#loss_)
- [loss\_curve\_](MLPClassifier.md#loss_curve_)
- [n\_features\_in\_](MLPClassifier.md#n_features_in_)
- [n\_iter\_](MLPClassifier.md#n_iter_)
- [n\_layers\_](MLPClassifier.md#n_layers_)
- [n\_outputs\_](MLPClassifier.md#n_outputs_)
- [out\_activation\_](MLPClassifier.md#out_activation_)
- [py](MLPClassifier.md#py)
- [t\_](MLPClassifier.md#t_)
- [validation\_scores\_](MLPClassifier.md#validation_scores_)

### Methods

- [dispose](MLPClassifier.md#dispose)
- [fit](MLPClassifier.md#fit)
- [init](MLPClassifier.md#init)
- [partial\_fit](MLPClassifier.md#partial_fit)
- [predict](MLPClassifier.md#predict)
- [predict\_log\_proba](MLPClassifier.md#predict_log_proba)
- [predict\_proba](MLPClassifier.md#predict_proba)
- [score](MLPClassifier.md#score)

## Constructors

### constructor

• **new MLPClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MLPClassifierOptions`](../interfaces/MLPClassifierOptions.md) |

#### Defined in

[generated/neural_network/MLPClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neural_network/MLPClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neural_network/MLPClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neural_network/MLPClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neural_network/MLPClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neural_network/MLPClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L17)

## Accessors

### best\_loss\_

• `get` **best_loss_**(): `Promise`<`number`\>

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set ot `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L362)

___

### best\_validation\_score\_

• `get` **best_validation_score_**(): `Promise`<`number`\>

The best validation score (i.e. accuracy score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L437)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels for each output.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L314)

___

### coefs\_

• `get` **coefs_**(): `Promise`<`any`[]\>

The ith element in the list represents the weight matrix corresponding to layer i.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L485)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L558)

___

### intercepts\_

• `get` **intercepts_**(): `Promise`<`any`[]\>

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L508)

___

### loss\_

• `get` **loss_**(): `Promise`<`number`\>

The current loss computed with the loss function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L339)

___

### loss\_curve\_

• `get` **loss_curve_**(): `Promise`<`any`[]\>

The ith element in the list represents the loss at the ith iteration.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L387)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L533)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The number of iterations the solver has run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L583)

___

### n\_layers\_

• `get` **n_layers_**(): `Promise`<`number`\>

Number of layers.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L606)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

Number of outputs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L631)

___

### out\_activation\_

• `get` **out_activation_**(): `Promise`<`string`\>

Name of the output activation function.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L656)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neural_network/MLPClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neural_network/MLPClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L32)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

The number of training samples seen by the solver during fitting.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L462)

___

### validation\_scores\_

• `get` **validation_scores_**(): `Promise`<`any`[]\>

The score at each iteration on a held-out validation set. The score reported is the accuracy score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L412)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data matrix X and target(s) y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierFitOptions`](../interfaces/MLPClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L128)

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

[generated/neural_network/MLPClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Update the model with a single iteration over the given data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierPartialFitOptions`](../interfaces/MLPClassifierPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L158)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the multi-layer perceptron classifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierPredictOptions`](../interfaces/MLPClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L190)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the log of probability estimates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierPredictLogProbaOptions`](../interfaces/MLPClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L218)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Probability estimates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierPredictProbaOptions`](../interfaces/MLPClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L250)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MLPClassifierScoreOptions`](../interfaces/MLPClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/MLPClassifier.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L282)
