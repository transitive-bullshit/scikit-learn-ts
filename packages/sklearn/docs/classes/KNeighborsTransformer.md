[**sklearn**](../README.md) • **Docs**

***

Transform X into a (weighted) graph of k nearest neighbors.

The transformed data is a sparse graph as returned by kneighbors\_graph.

Read more in the [User Guide](../neighbors.html#neighbors-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html)

## Constructors

### new KNeighborsTransformer()

> **new KNeighborsTransformer**(`opts`?): [`KNeighborsTransformer`](KNeighborsTransformer.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

**Default Value**

`'auto'`

• **opts.leaf\_size?**: `number`

Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

**Default Value**

`30`

• **opts.metric?**: `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

Distance matrices are not supported.

**Default Value**

`'minkowski'`

• **opts.metric\_params?**: `any`

Additional keyword arguments for the metric function.

• **opts.mode?**: `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.

**Default Value**

`'distance'`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run for neighbors search. If `\-1`, then the number of jobs is set to the number of CPU cores.

• **opts.n\_neighbors?**: `number`

Number of neighbors for each sample in the transformed sparse graph. For compatibility reasons, as each sample is considered as its own neighbor, one extra neighbor will be computed when mode == ‘distance’. In this case, the sparse graph contains (n\_neighbors + 1) neighbors.

**Default Value**

`5`

• **opts.p?**: `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used. This parameter is expected to be positive.

**Default Value**

`2`

#### Returns

[`KNeighborsTransformer`](KNeighborsTransformer.md)

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

#### Get Signature

> **get** **effective\_metric\_**(): `Promise`\<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L489)

***

### effective\_metric\_params\_

#### Get Signature

> **get** **effective\_metric\_params\_**(): `Promise`\<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L516)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L570)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L543)

***

### n\_samples\_fit\_

#### Get Signature

> **get** **n\_samples\_fit\_**(): `Promise`\<`number`\>

Number of samples in the fitted data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L597)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L86)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L142)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the k-nearest neighbors transformer from the training dataset.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L159)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training set.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L200)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L243)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L281)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L99)

***

### kneighbors()

> **kneighbors**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

• **opts**

• **opts.n\_neighbors?**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

• **opts.return\_distance?**: `boolean`

Whether or not to return the distances.

**Default Value**

`true`

• **opts.X?**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L319)

***

### kneighbors\_graph()

> **kneighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

• **opts**

• **opts.mode?**: `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**Default Value**

`'connectivity'`

• **opts.n\_neighbors?**: `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

• **opts.X?**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L367)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L417)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Sample data.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L453)
