# Class: FeatureAgglomeration

Agglomerate features.

Recursively merges pair of clusters of features.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#hierarchical-clustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html)

## Constructors

### new FeatureAgglomeration()

> **new FeatureAgglomeration**(`opts`?): [`FeatureAgglomeration`](FeatureAgglomeration.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.compute_distances`? | `boolean` | Computes distances between clusters even if `distance_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead. |
| `opts.compute_full_tree`? | `boolean` \| `"auto"` | Stop early the construction of the tree at `n_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of features. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance_threshold` is not `undefined`. By default `compute_full_tree` is “auto”, which is equivalent to `true` when `distance_threshold` is not `undefined` or that `n_clusters` is inferior to the maximum between 100 or `0.02 \* n_samples`. Otherwise, “auto” is equivalent to `false`. |
| `opts.connectivity`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Connectivity matrix. Defines for each feature the neighboring features following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured. |
| `opts.distance_threshold`? | `number` | The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n_clusters` must be `undefined` and `compute_full_tree` must be `true`. |
| `opts.linkage`? | `"ward"` \| `"complete"` \| `"average"` \| `"single"` | Which linkage criterion to use. The linkage criterion determines which distance to use between sets of features. The algorithm will merge the pairs of cluster that minimize this criterion. |
| `opts.memory`? | `string` | Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory. |
| `opts.metric`? | `string` | Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method. |
| `opts.n_clusters`? | `number` | The number of clusters to find. It must be `undefined` if `distance_threshold` is not `undefined`. |
| `opts.pooling_func`? | `any` | This combines the values of agglomerated features into a single value, and should accept an array of shape \[M, N\] and the keyword argument `axis=1`, and reduce it to an array of size \[M\]. |

#### Returns

[`FeatureAgglomeration`](FeatureAgglomeration.md)

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/FeatureAgglomeration.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/FeatureAgglomeration.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/FeatureAgglomeration.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L21) |
| `id` | `string` | `undefined` | [generated/cluster/FeatureAgglomeration.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L18) |
| `opts` | `any` | `undefined` | [generated/cluster/FeatureAgglomeration.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L19) |

## Accessors

### children\_

#### Get Signature

> **get** **children\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The children of each non-leaf node. Values less than `n_features` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n_features` is a non-leaf node and has children `children_\[i \- n_features\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n_features + i`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L598)

***

### distances\_

#### Get Signature

> **get** **distances\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Distances between nodes in the corresponding place in `children_`. Only computed if `distance_threshold` is used or `compute_distances` is set to `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L625)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L571)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<`any`\>

Cluster labels for each feature.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L463)

***

### n\_clusters\_

#### Get Signature

> **get** **n\_clusters\_**(): `Promise`\<`number`\>

The number of clusters found by the algorithm. If `distance_threshold=None`, it will be equal to the given `n_clusters`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L436)

***

### n\_connected\_components\_

#### Get Signature

> **get** **n\_connected\_components\_**(): `Promise`\<`number`\>

The estimated number of connected components in the graph.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L517)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L544)

***

### n\_leaves\_

#### Get Signature

> **get** **n\_leaves\_**(): `Promise`\<`number`\>

Number of leaves in the hierarchical tree.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L490)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L85)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L141)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the hierarchical clustering on the data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The data. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L158)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Input samples. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L199)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L247)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L285)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L98)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Inverse the transformation and return a vector of size `n_features`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The values to be assigned to each cluster of samples. |
| `opts.Xt`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The values to be assigned to each cluster of samples. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L321)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L364)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform a new matrix using the built clustering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | A M by N array of M observations in N dimensions or a length M array of M one-dimensional observations. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/FeatureAgglomeration.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L400)
