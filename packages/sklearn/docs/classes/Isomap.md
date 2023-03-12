[sklearn](../readme.md) / [Exports](../modules.md) / Isomap

# Class: Isomap

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the [User Guide](../manifold.html#isomap).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html

## Table of contents

### Constructors

- [constructor](Isomap.md#constructor)

### Properties

- [\_isDisposed](Isomap.md#_isdisposed)
- [\_isInitialized](Isomap.md#_isinitialized)
- [\_py](Isomap.md#_py)
- [id](Isomap.md#id)
- [opts](Isomap.md#opts)

### Accessors

- [dist\_matrix\_](Isomap.md#dist_matrix_)
- [embedding\_](Isomap.md#embedding_)
- [feature\_names\_in\_](Isomap.md#feature_names_in_)
- [kernel\_pca\_](Isomap.md#kernel_pca_)
- [n\_features\_in\_](Isomap.md#n_features_in_)
- [nbrs\_](Isomap.md#nbrs_)
- [py](Isomap.md#py)

### Methods

- [dispose](Isomap.md#dispose)
- [fit](Isomap.md#fit)
- [fit\_transform](Isomap.md#fit_transform)
- [get\_feature\_names\_out](Isomap.md#get_feature_names_out)
- [init](Isomap.md#init)
- [reconstruction\_error](Isomap.md#reconstruction_error)
- [set\_output](Isomap.md#set_output)
- [transform](Isomap.md#transform)

## Constructors

### constructor

• **new Isomap**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IsomapOptions`](../interfaces/IsomapOptions.md) |

#### Defined in

[generated/manifold/Isomap.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/Isomap.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/Isomap.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/Isomap.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/manifold/Isomap.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/manifold/Isomap.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L19)

## Accessors

### dist\_matrix\_

• `get` **dist_matrix_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Stores the geodesic distance matrix of training data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/Isomap.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L356)

___

### embedding\_

• `get` **embedding_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Stores the embedding vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/Isomap.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L288)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/Isomap.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L402)

___

### kernel\_pca\_

• `get` **kernel_pca_**(): `Promise`<`any`\>

[`KernelPCA`](sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L311)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/Isomap.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L379)

___

### nbrs\_

• `get` **nbrs_**(): `Promise`<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L334)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/manifold/Isomap.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/manifold/Isomap.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/manifold/Isomap.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the embedding vectors for data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapFitOptions`](../interfaces/IsomapFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L111)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit the model from data in X and transform X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapFitTransformOptions`](../interfaces/IsomapFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/Isomap.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L139)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapGetFeatureNamesOutOptions`](../interfaces/IsomapGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L169)

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

[generated/manifold/Isomap.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L43)

___

### reconstruction\_error

▸ **reconstruction_error**(`opts`): `Promise`<`any`\>

Compute the reconstruction error for the embedding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapReconstructionErrorOptions`](../interfaces/IsomapReconstructionErrorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L199)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapSetOutputOptions`](../interfaces/IsomapSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L232)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X.

This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n\_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsomapTransformOptions`](../interfaces/IsomapTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/Isomap.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L262)
