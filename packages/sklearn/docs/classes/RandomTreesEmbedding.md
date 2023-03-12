[sklearn](../readme.md) / [Exports](../modules.md) / RandomTreesEmbedding

# Class: RandomTreesEmbedding

An ensemble of totally random trees.

An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

The dimensionality of the resulting representation is `n\_out <= n\_estimators \* max\_leaf\_nodes`. If `max\_leaf\_nodes \== None`, the number of leaf nodes is at most `n\_estimators \* 2 \*\* max\_depth`.

Read more in the [User Guide](../ensemble.html#random-trees-embedding).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html

## Table of contents

### Constructors

- [constructor](RandomTreesEmbedding.md#constructor)

### Properties

- [\_isDisposed](RandomTreesEmbedding.md#_isdisposed)
- [\_isInitialized](RandomTreesEmbedding.md#_isinitialized)
- [\_py](RandomTreesEmbedding.md#_py)
- [id](RandomTreesEmbedding.md#id)
- [opts](RandomTreesEmbedding.md#opts)

### Accessors

- [estimator\_](RandomTreesEmbedding.md#estimator_)
- [estimators\_](RandomTreesEmbedding.md#estimators_)
- [feature\_names\_in\_](RandomTreesEmbedding.md#feature_names_in_)
- [n\_features\_in\_](RandomTreesEmbedding.md#n_features_in_)
- [n\_outputs\_](RandomTreesEmbedding.md#n_outputs_)
- [one\_hot\_encoder\_](RandomTreesEmbedding.md#one_hot_encoder_)
- [py](RandomTreesEmbedding.md#py)

### Methods

- [apply](RandomTreesEmbedding.md#apply)
- [decision\_path](RandomTreesEmbedding.md#decision_path)
- [dispose](RandomTreesEmbedding.md#dispose)
- [fit](RandomTreesEmbedding.md#fit)
- [fit\_transform](RandomTreesEmbedding.md#fit_transform)
- [get\_feature\_names\_out](RandomTreesEmbedding.md#get_feature_names_out)
- [init](RandomTreesEmbedding.md#init)
- [set\_output](RandomTreesEmbedding.md#set_output)
- [transform](RandomTreesEmbedding.md#transform)

## Constructors

### constructor

• **new RandomTreesEmbedding**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomTreesEmbeddingOptions`](../interfaces/RandomTreesEmbeddingOptions.md) |

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L21)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L361)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L388)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L442)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L415)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L469)

___

### one\_hot\_encoder\_

• `get` **one_hot_encoder_**(): `Promise`<`any`\>

One-hot encoder used to create the sparse embedding.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L496)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L36)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingApplyOptions`](../interfaces/RandomTreesEmbeddingApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L122)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingDecisionPathOptions`](../interfaces/RandomTreesEmbeddingDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L152)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L105)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingFitOptions`](../interfaces/RandomTreesEmbeddingFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L186)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit estimator and transform dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingFitTransformOptions`](../interfaces/RandomTreesEmbeddingFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L220)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingGetFeatureNamesOutOptions`](../interfaces/RandomTreesEmbeddingGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L258)

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

[generated/ensemble/RandomTreesEmbedding.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L45)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingSetOutputOptions`](../interfaces/RandomTreesEmbeddingSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L295)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingTransformOptions`](../interfaces/RandomTreesEmbeddingTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L327)
