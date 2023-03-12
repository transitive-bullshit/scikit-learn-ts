[sklearn](../readme.md) / [Exports](../modules.md) / LocallyLinearEmbedding

# Class: LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the [User Guide](../manifold.html#locally-linear-embedding).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html

## Table of contents

### Constructors

- [constructor](LocallyLinearEmbedding.md#constructor)

### Properties

- [\_isDisposed](LocallyLinearEmbedding.md#_isdisposed)
- [\_isInitialized](LocallyLinearEmbedding.md#_isinitialized)
- [\_py](LocallyLinearEmbedding.md#_py)
- [id](LocallyLinearEmbedding.md#id)
- [opts](LocallyLinearEmbedding.md#opts)

### Accessors

- [embedding\_](LocallyLinearEmbedding.md#embedding_)
- [feature\_names\_in\_](LocallyLinearEmbedding.md#feature_names_in_)
- [n\_features\_in\_](LocallyLinearEmbedding.md#n_features_in_)
- [nbrs\_](LocallyLinearEmbedding.md#nbrs_)
- [py](LocallyLinearEmbedding.md#py)
- [reconstruction\_error\_](LocallyLinearEmbedding.md#reconstruction_error_)

### Methods

- [dispose](LocallyLinearEmbedding.md#dispose)
- [fit](LocallyLinearEmbedding.md#fit)
- [fit\_transform](LocallyLinearEmbedding.md#fit_transform)
- [get\_feature\_names\_out](LocallyLinearEmbedding.md#get_feature_names_out)
- [init](LocallyLinearEmbedding.md#init)
- [set\_output](LocallyLinearEmbedding.md#set_output)
- [transform](LocallyLinearEmbedding.md#transform)

## Constructors

### constructor

• **new LocallyLinearEmbedding**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LocallyLinearEmbeddingOptions`](../interfaces/LocallyLinearEmbeddingOptions.md) |

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17)

## Accessors

### embedding\_

• `get` **embedding_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Stores the embedding vectors

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L286)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L367)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L340)

___

### nbrs\_

• `get` **nbrs_**(): `Promise`<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L394)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L32)

___

### reconstruction\_error\_

• `get` **reconstruction_error_**(): `Promise`<`number`\>

Reconstruction error associated with `embedding\_`

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L313)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the embedding vectors for data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocallyLinearEmbeddingFitOptions`](../interfaces/LocallyLinearEmbeddingFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L116)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the embedding vectors for data X and transform X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocallyLinearEmbeddingFitTransformOptions`](../interfaces/LocallyLinearEmbeddingFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L146)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocallyLinearEmbeddingGetFeatureNamesOutOptions`](../interfaces/LocallyLinearEmbeddingGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L183)

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

[generated/manifold/LocallyLinearEmbedding.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L41)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocallyLinearEmbeddingSetOutputOptions`](../interfaces/LocallyLinearEmbeddingSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L220)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform new points into embedding space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocallyLinearEmbeddingTransformOptions`](../interfaces/LocallyLinearEmbeddingTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L252)
