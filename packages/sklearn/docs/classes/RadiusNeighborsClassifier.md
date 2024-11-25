# Class: RadiusNeighborsClassifier

Classifier implementing a vote among neighbors within a given radius.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html)

## Constructors

### new RadiusNeighborsClassifier()

> **new RadiusNeighborsClassifier**(`opts`?): [`RadiusNeighborsClassifier`](RadiusNeighborsClassifier.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors: |
| `opts.leaf_size`? | `number` | Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem. |
| `opts.metric`? | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance_metrics`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values. If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors. If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. |
| `opts.metric_params`? | `any` | Additional keyword arguments for the metric function. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.outlier_label`? | `"most_frequent"` | Label for outlier samples (samples with no neighbors in given radius). |
| `opts.p`? | `number` | Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used. This parameter is expected to be positive. |
| `opts.radius`? | `number` | Range of parameter space to use by default for [`radius_neighbors`](https://scikit-learn.org/stable/modules/generated/#sklearn.neighbors.RadiusNeighborsClassifier.radius_neighbors "sklearn.neighbors.RadiusNeighborsClassifier.radius_neighbors") queries. |
| `opts.weights`? | `"uniform"` \| `"distance"` | Weight function used in prediction. Possible values: |

#### Returns

[`RadiusNeighborsClassifier`](RadiusNeighborsClassifier.md)

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neighbors/RadiusNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neighbors/RadiusNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neighbors/RadiusNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L19) |
| `id` | `string` | `undefined` | [generated/neighbors/RadiusNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neighbors/RadiusNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L17) |

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Class labels known to the classifier.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L515)

***

### effective\_metric\_

#### Get Signature

> **get** **effective\_metric\_**(): `Promise`\<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L542)

***

### effective\_metric\_params\_

#### Get Signature

> **get** **effective\_metric\_params\_**(): `Promise`\<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric_params` parameter, but may also contain the `p` parameter value if the `effective_metric_` attribute is set to ‘minkowski’.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L569)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L623)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L596)

***

### n\_samples\_fit\_

#### Get Signature

> **get** **n\_samples\_fit\_**(): `Promise`\<`number`\>

Number of samples in the fitted data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L650)

***

### outlier\_label\_

#### Get Signature

> **get** **outlier\_label\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

Label which is given for outlier samples (samples with no neighbors on given radius).

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L677)

***

### outputs\_2d\_

#### Get Signature

> **get** **outputs\_2d\_**(): `Promise`\<`boolean`\>

False when `y`’s shape is (n_samples, ) or (n_samples, 1) during fit otherwise `true`.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L704)

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

[generated/neighbors/RadiusNeighborsClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L89)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L145)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the radius neighbors classifier from the training dataset.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training data. |
| `opts.y`? | `any` | Target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L162)

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

[generated/neighbors/RadiusNeighborsClassifier.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L203)

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

[generated/neighbors/RadiusNeighborsClassifier.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L102)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict the class labels for the provided data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Test samples. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L239)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Return probability estimates for the test data X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Test samples. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L275)

***

### radius\_neighbors()

> **radius\_neighbors**(`opts`): `Promise`\<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.radius`? | `number` | Limiting distance of neighbors to return. The default is the value passed to the constructor. |
| `opts.return_distance`? | `boolean` | Whether or not to return the distances. |
| `opts.sort_results`? | `boolean` | If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return_distance=False`, setting `sort_results=True` will result in an error. |
| `opts.X`? | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L315)

***

### radius\_neighbors\_graph()

> **radius\_neighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.mode`? | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class. |
| `opts.radius`? | `number` | Radius of neighborhoods. The default is the value passed to the constructor. |
| `opts.sort_results`? | `boolean` | If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L372)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test samples. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L429)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L479)
