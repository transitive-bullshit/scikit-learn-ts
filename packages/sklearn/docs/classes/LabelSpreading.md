[sklearn](../readme.md) / [Exports](../modules.md) / LabelSpreading

# Class: LabelSpreading

LabelSpreading model for semi-supervised learning.

This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

Read more in the [User Guide](../semi_supervised.html#label-propagation).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html

## Table of contents

### Constructors

- [constructor](LabelSpreading.md#constructor)

### Properties

- [\_isDisposed](LabelSpreading.md#_isdisposed)
- [\_isInitialized](LabelSpreading.md#_isinitialized)
- [\_py](LabelSpreading.md#_py)
- [id](LabelSpreading.md#id)
- [opts](LabelSpreading.md#opts)

### Accessors

- [X\_](LabelSpreading.md#x_)
- [classes\_](LabelSpreading.md#classes_)
- [feature\_names\_in\_](LabelSpreading.md#feature_names_in_)
- [label\_distributions\_](LabelSpreading.md#label_distributions_)
- [n\_features\_in\_](LabelSpreading.md#n_features_in_)
- [n\_iter\_](LabelSpreading.md#n_iter_)
- [py](LabelSpreading.md#py)
- [transduction\_](LabelSpreading.md#transduction_)

### Methods

- [dispose](LabelSpreading.md#dispose)
- [fit](LabelSpreading.md#fit)
- [init](LabelSpreading.md#init)
- [predict](LabelSpreading.md#predict)
- [predict\_proba](LabelSpreading.md#predict_proba)
- [score](LabelSpreading.md#score)

## Constructors

### constructor

• **new LabelSpreading**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelSpreadingOptions`](../interfaces/LabelSpreadingOptions.md) |

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L19)

## Accessors

### X\_

• `get` **X_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Input array.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L232)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The distinct labels used in classifying instances.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L255)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L355)

___

### label\_distributions\_

• `get` **label_distributions_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Categorical distribution for each item.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L280)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L330)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L380)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L34)

___

### transduction\_

• `get` **transduction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Label assigned to each item during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L305)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a semi-supervised label propagation model to X.

The input samples (labeled and unlabeled) are provided by matrix X, and target labels are provided by matrix y. We conventionally apply the label -1 to unlabeled samples in matrix y in a semi-supervised classification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingFitOptions`](../interfaces/LabelSpreadingFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L108)

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

[generated/semi_supervised/LabelSpreading.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform inductive inference across the model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingPredictOptions`](../interfaces/LabelSpreadingPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L138)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingPredictProbaOptions`](../interfaces/LabelSpreadingPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L168)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingScoreOptions`](../interfaces/LabelSpreadingScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L200)
