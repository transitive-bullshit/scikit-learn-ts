[sklearn](../readme.md) / [Exports](../modules.md) / FeatureAgglomeration

# Class: FeatureAgglomeration

Agglomerate features.

Recursively merges pair of clusters of features.

Read more in the [User Guide](../clustering.html#hierarchical-clustering).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html

## Table of contents

### Constructors

- [constructor](FeatureAgglomeration.md#constructor)

### Properties

- [\_isDisposed](FeatureAgglomeration.md#_isdisposed)
- [\_isInitialized](FeatureAgglomeration.md#_isinitialized)
- [\_py](FeatureAgglomeration.md#_py)
- [id](FeatureAgglomeration.md#id)
- [opts](FeatureAgglomeration.md#opts)

### Accessors

- [children\_](FeatureAgglomeration.md#children_)
- [distances\_](FeatureAgglomeration.md#distances_)
- [feature\_names\_in\_](FeatureAgglomeration.md#feature_names_in_)
- [labels\_](FeatureAgglomeration.md#labels_)
- [n\_clusters\_](FeatureAgglomeration.md#n_clusters_)
- [n\_connected\_components\_](FeatureAgglomeration.md#n_connected_components_)
- [n\_features\_in\_](FeatureAgglomeration.md#n_features_in_)
- [n\_leaves\_](FeatureAgglomeration.md#n_leaves_)
- [py](FeatureAgglomeration.md#py)

### Methods

- [dispose](FeatureAgglomeration.md#dispose)
- [fit](FeatureAgglomeration.md#fit)
- [fit\_transform](FeatureAgglomeration.md#fit_transform)
- [get\_feature\_names\_out](FeatureAgglomeration.md#get_feature_names_out)
- [init](FeatureAgglomeration.md#init)
- [inverse\_transform](FeatureAgglomeration.md#inverse_transform)
- [set\_output](FeatureAgglomeration.md#set_output)
- [transform](FeatureAgglomeration.md#transform)

## Constructors

### constructor

• **new FeatureAgglomeration**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FeatureAgglomerationOptions`](../interfaces/FeatureAgglomerationOptions.md) |

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L19)

## Accessors

### children\_

• `get` **children_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The children of each non-leaf node. Values less than `n\_features` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_features` is a non-leaf node and has children `children\_\[i \- n\_features\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_features + i`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L486)

___

### distances\_

• `get` **distances_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L513)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L459)

___

### labels\_

• `get` **labels_**(): `Promise`<`any`\>

Cluster labels for each feature.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L351)

___

### n\_clusters\_

• `get` **n_clusters_**(): `Promise`<`number`\>

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L324)

___

### n\_connected\_components\_

• `get` **n_connected_components_**(): `Promise`<`number`\>

The estimated number of connected components in the graph.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L405)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L432)

___

### n\_leaves\_

• `get` **n_leaves_**(): `Promise`<`number`\>

Number of leaves in the hierarchical tree.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L378)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the hierarchical clustering on the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationFitOptions`](../interfaces/FeatureAgglomerationFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L114)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationFitTransformOptions`](../interfaces/FeatureAgglomerationFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L146)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationGetFeatureNamesOutOptions`](../interfaces/FeatureAgglomerationGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L186)

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

[generated/cluster/FeatureAgglomeration.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Inverse the transformation and return a vector of size `n\_features`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationInverseTransformOptions`](../interfaces/FeatureAgglomerationInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L221)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationSetOutputOptions`](../interfaces/FeatureAgglomerationSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L258)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform a new matrix using the built clustering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureAgglomerationTransformOptions`](../interfaces/FeatureAgglomerationTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L290)
