[sklearn](../readme.md) / [Exports](../modules.md) / Birch

# Class: Birch

Implements the BIRCH clustering algorithm.

It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

Read more in the [User Guide](../clustering.html#birch).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html

## Table of contents

### Constructors

- [constructor](Birch.md#constructor)

### Properties

- [\_isDisposed](Birch.md#_isdisposed)
- [\_isInitialized](Birch.md#_isinitialized)
- [\_py](Birch.md#_py)
- [id](Birch.md#id)
- [opts](Birch.md#opts)

### Accessors

- [dummy\_leaf\_](Birch.md#dummy_leaf_)
- [feature\_names\_in\_](Birch.md#feature_names_in_)
- [labels\_](Birch.md#labels_)
- [n\_features\_in\_](Birch.md#n_features_in_)
- [py](Birch.md#py)
- [root\_](Birch.md#root_)
- [subcluster\_centers\_](Birch.md#subcluster_centers_)
- [subcluster\_labels\_](Birch.md#subcluster_labels_)

### Methods

- [dispose](Birch.md#dispose)
- [fit](Birch.md#fit)
- [fit\_predict](Birch.md#fit_predict)
- [fit\_transform](Birch.md#fit_transform)
- [get\_feature\_names\_out](Birch.md#get_feature_names_out)
- [init](Birch.md#init)
- [partial\_fit](Birch.md#partial_fit)
- [predict](Birch.md#predict)
- [set\_output](Birch.md#set_output)
- [transform](Birch.md#transform)

## Constructors

### constructor

• **new Birch**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BirchOptions`](../interfaces/BirchOptions.md) |

#### Defined in

[generated/cluster/Birch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/Birch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/Birch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/Birch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/Birch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/Birch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L19)

## Accessors

### dummy\_leaf\_

• `get` **dummy_leaf_**(): `Promise`<`any`\>

Start pointer to all the leaves.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L369)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L487)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Array of labels assigned to the input data. if partial\_fit is used instead of fit, they are assigned to the last batch of data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L442)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/Birch.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L464)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/Birch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/Birch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L34)

___

### root\_

• `get` **root_**(): `Promise`<`any`\>

Root of the CFTree.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L347)

___

### subcluster\_centers\_

• `get` **subcluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Centroids of all subclusters read directly from the leaves.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L392)

___

### subcluster\_labels\_

• `get` **subcluster_labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels assigned to the centroids of the subclusters after they are clustered globally.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L417)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/Birch.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L88)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a CF Tree for the input data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitOptions`](../interfaces/BirchFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L105)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform clustering on `X` and returns cluster labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitPredictOptions`](../interfaces/BirchFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L133)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitTransformOptions`](../interfaces/BirchFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/cluster/Birch.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L163)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchGetFeatureNamesOutOptions`](../interfaces/BirchGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L197)

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

[generated/cluster/Birch.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L43)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Online learning. Prevents rebuilding of CFTree from scratch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchPartialFitOptions`](../interfaces/BirchPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L227)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict data using the `centroids\_` of subclusters.

Avoid computation of the row norms of X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchPredictOptions`](../interfaces/BirchPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L257)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchSetOutputOptions`](../interfaces/BirchSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/Birch.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L287)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X into subcluster centroids dimension.

Each dimension represents the distance from the sample point to each cluster centroid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchTransformOptions`](../interfaces/BirchTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/Birch.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/Birch.ts#L317)
