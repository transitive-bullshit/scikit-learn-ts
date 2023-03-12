[sklearn](../readme.md) / [Exports](../modules.md) / DummyClassifier

# Class: DummyClassifier

DummyClassifier makes predictions that ignore the input features.

This classifier serves as a simple baseline to compare against other more complex classifiers.

The specific behavior of the baseline is selected with the `strategy` parameter.

All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random\_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

Read more in the [User Guide](../model_evaluation.html#dummy-estimators).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html

## Table of contents

### Constructors

- [constructor](DummyClassifier.md#constructor)

### Properties

- [\_isDisposed](DummyClassifier.md#_isdisposed)
- [\_isInitialized](DummyClassifier.md#_isinitialized)
- [\_py](DummyClassifier.md#_py)
- [id](DummyClassifier.md#id)
- [opts](DummyClassifier.md#opts)

### Accessors

- [class\_prior\_](DummyClassifier.md#class_prior_)
- [classes\_](DummyClassifier.md#classes_)
- [n\_classes\_](DummyClassifier.md#n_classes_)
- [n\_outputs\_](DummyClassifier.md#n_outputs_)
- [py](DummyClassifier.md#py)
- [sparse\_output\_](DummyClassifier.md#sparse_output_)

### Methods

- [dispose](DummyClassifier.md#dispose)
- [fit](DummyClassifier.md#fit)
- [init](DummyClassifier.md#init)
- [predict](DummyClassifier.md#predict)
- [predict\_log\_proba](DummyClassifier.md#predict_log_proba)
- [predict\_proba](DummyClassifier.md#predict_proba)
- [score](DummyClassifier.md#score)

## Constructors

### constructor

• **new DummyClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DummyClassifierOptions`](../interfaces/DummyClassifierOptions.md) |

#### Defined in

[generated/dummy/DummyClassifier.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/dummy/DummyClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/dummy/DummyClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/dummy/DummyClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L25)

## Accessors

### class\_prior\_

• `get` **class_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Frequency of each class observed in `y`. For multioutput classification problems, this is computed independently for each output.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/dummy/DummyClassifier.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L316)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Unique class labels observed in `y`. For multi-output classification problems, this attribute is a list of arrays as each output has an independent set of possible classes.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/dummy/DummyClassifier.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L266)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

Number of label for each output.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L291)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

Number of outputs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L341)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/dummy/DummyClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/dummy/DummyClassifier.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L40)

___

### sparse\_output\_

• `get` **sparse_output_**(): `Promise`<`boolean`\>

True if the array returned from predict is to be in sparse CSC format. Is automatically set to `true` if the input `y` is passed in sparse format.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L366)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the baseline classifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyClassifierFitOptions`](../interfaces/DummyClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L110)

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

[generated/dummy/DummyClassifier.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L49)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyClassifierPredictOptions`](../interfaces/DummyClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/dummy/DummyClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L142)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return log probability estimates for the test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyClassifierPredictLogProbaOptions`](../interfaces/DummyClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/dummy/DummyClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L170)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return probability estimates for the test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyClassifierPredictProbaOptions`](../interfaces/DummyClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/dummy/DummyClassifier.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L202)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyClassifierScoreOptions`](../interfaces/DummyClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L234)
