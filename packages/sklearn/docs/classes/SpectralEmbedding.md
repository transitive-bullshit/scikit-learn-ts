[sklearn](../readme.md) / [Exports](../modules.md) / SpectralEmbedding

# Class: SpectralEmbedding

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the [User Guide](../manifold.html#spectral-embedding).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html

## Table of contents

### Constructors

- [constructor](SpectralEmbedding.md#constructor)

### Properties

- [\_isDisposed](SpectralEmbedding.md#_isdisposed)
- [\_isInitialized](SpectralEmbedding.md#_isinitialized)
- [\_py](SpectralEmbedding.md#_py)
- [id](SpectralEmbedding.md#id)
- [opts](SpectralEmbedding.md#opts)

### Accessors

- [affinity\_matrix\_](SpectralEmbedding.md#affinity_matrix_)
- [embedding\_](SpectralEmbedding.md#embedding_)
- [feature\_names\_in\_](SpectralEmbedding.md#feature_names_in_)
- [n\_features\_in\_](SpectralEmbedding.md#n_features_in_)
- [n\_neighbors\_](SpectralEmbedding.md#n_neighbors_)
- [py](SpectralEmbedding.md#py)

### Methods

- [dispose](SpectralEmbedding.md#dispose)
- [fit](SpectralEmbedding.md#fit)
- [fit\_transform](SpectralEmbedding.md#fit_transform)
- [init](SpectralEmbedding.md#init)

## Constructors

### constructor

• **new SpectralEmbedding**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralEmbeddingOptions`](../interfaces/SpectralEmbeddingOptions.md) |

#### Defined in

[generated/manifold/SpectralEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L21)

## Accessors

### affinity\_matrix\_

• `get` **affinity_matrix_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Affinity\_matrix constructed from samples or precomputed.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L203)

___

### embedding\_

• `get` **embedding_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Spectral embedding of the training matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L176)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L257)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L230)

___

### n\_neighbors\_

• `get` **n_neighbors_**(): `Promise`<`number`\>

Number of nearest neighbors effectively used.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L284)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralEmbeddingFitOptions`](../interfaces/SpectralEmbeddingFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L112)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the model from data in X and transform X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralEmbeddingFitTransformOptions`](../interfaces/SpectralEmbeddingFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L142)

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

[generated/manifold/SpectralEmbedding.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L45)
