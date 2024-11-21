# Class: BisectingKMeans

Bisecting K-Means clustering.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#bisect-k-means).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.BisectingKMeans.html)

## Constructors

### new BisectingKMeans()

> **new BisectingKMeans**(`opts`?): [`BisectingKMeans`](BisectingKMeans.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"lloyd"` \| `"elkan"` | Inner K-means algorithm used in bisection. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n_samples, n_clusters)`. |
| `opts.bisecting_strategy`? | `"biggest_inertia"` \| `"largest_cluster"` | Defines how bisection should be performed: |
| `opts.copy_x`? | `boolean` | When pre-computing distances it is more numerically accurate to center the data first. If copy_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy_x is `false`. |
| `opts.init`? | `"k-means++"` \| `"random"` | Method for initialization: ‘k-means++’ : selects initial cluster centers for k-mean clustering in a smart way to speed up convergence. See section Notes in k_init for more details. ‘random’: choose `n_clusters` observations (rows) at random from data for the initial centroids. If a callable is passed, it should take arguments X, n_clusters and a random state and return an initialization. |
| `opts.max_iter`? | `number` | Maximum number of iterations of the inner k-means algorithm at each bisection. |
| `opts.n_clusters`? | `number` | The number of clusters to form as well as the number of centroids to generate. |
| `opts.n_init`? | `number` | Number of time the inner k-means algorithm will be run with different centroid seeds in each bisection. That will result producing for each bisection best output of n_init consecutive runs in terms of inertia. |
| `opts.random_state`? | `number` | Determines random number generation for centroid initialization in inner K-Means. Use an int to make the randomness deterministic. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.tol`? | `number` | Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence. Used in inner k-means algorithm at each bisection to pick best possible clusters. |
| `opts.verbose`? | `number` | Verbosity mode. |

**Returns** [`BisectingKMeans`](BisectingKMeans.md)

**Defined in** [generated/cluster/BisectingKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/BisectingKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/BisectingKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/BisectingKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L19) |
| `id` | `string` | `undefined` | [generated/cluster/BisectingKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L16) |
| `opts` | `any` | `undefined` | [generated/cluster/BisectingKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L17) |

## Accessors

### cluster\_centers\_

**Get Signature**

> **get** **cluster\_centers\_**(): `Promise`\<`ArrayLike`[]\>

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max_iter`), these will not be consistent with `labels_`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/BisectingKMeans.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L595)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L695)

***

### inertia\_

**Get Signature**

> **get** **inertia\_**(): `Promise`\<`number`\>

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L645)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Labels of each point.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L620)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L670)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/cluster/BisectingKMeans.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L102)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L154)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute bisecting k-means clustering.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample_weight` is not used during initialization if `init` is a callable. |
| `opts.X`? | `ArrayLike` | Training instances to cluster. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L171)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.X`? | `ArrayLike` | New data to transform. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L215)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.X`? | `ArrayLike` | New data to transform. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/BisectingKMeans.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L259)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L303)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L339)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L115)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict which cluster each sample in X belongs to.

Prediction is made by going down the hierarchical tree in searching of closest leaf cluster.

In the vector quantization literature, `cluster_centers_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | New data to predict. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L377)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Opposite of the value of X on the K-means objective.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.X`? | `ArrayLike` | New data. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L409)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L455)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L491)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/BisectingKMeans.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L527)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | New data to transform. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/BisectingKMeans.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L563)
