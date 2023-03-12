[sklearn](../readme.md) / [Exports](../modules.md) / LabelPropagation

# Class: LabelPropagation

Label Propagation classifier.

Read more in the [User Guide](../semi_supervised.html#label-propagation).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html

## Table of contents

### Constructors

- [constructor](LabelPropagation.md#constructor)

### Properties

- [\_isDisposed](LabelPropagation.md#_isdisposed)
- [\_isInitialized](LabelPropagation.md#_isinitialized)
- [\_py](LabelPropagation.md#_py)
- [id](LabelPropagation.md#id)
- [opts](LabelPropagation.md#opts)

### Accessors

- [X\_](LabelPropagation.md#x_)
- [classes\_](LabelPropagation.md#classes_)
- [feature\_names\_in\_](LabelPropagation.md#feature_names_in_)
- [label\_distributions\_](LabelPropagation.md#label_distributions_)
- [n\_features\_in\_](LabelPropagation.md#n_features_in_)
- [n\_iter\_](LabelPropagation.md#n_iter_)
- [py](LabelPropagation.md#py)
- [transduction\_](LabelPropagation.md#transduction_)

### Methods

- [dispose](LabelPropagation.md#dispose)
- [fit](LabelPropagation.md#fit)
- [init](LabelPropagation.md#init)
- [predict](LabelPropagation.md#predict)
- [predict\_proba](LabelPropagation.md#predict_proba)
- [score](LabelPropagation.md#score)

## Constructors

### constructor

• **new LabelPropagation**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelPropagationOptions`](../interfaces/LabelPropagationOptions.md) |

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L17)

## Accessors

### X\_

• `get` **X_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Input array.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L238)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The distinct labels used in classifying instances.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L263)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L371)

___

### label\_distributions\_

• `get` **label_distributions_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Categorical distribution for each item.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L290)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L344)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L398)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L32)

___

### transduction\_

• `get` **transduction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Label assigned to each item during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L317)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a semi-supervised label propagation model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationFitOptions`](../interfaces/LabelPropagationFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L104)

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

[generated/semi_supervised/LabelPropagation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform inductive inference across the model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationPredictOptions`](../interfaces/LabelPropagationPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L136)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationPredictProbaOptions`](../interfaces/LabelPropagationPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L168)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationScoreOptions`](../interfaces/LabelPropagationScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L204)
