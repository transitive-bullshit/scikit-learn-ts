# KNeighborsTransformer

Transform X into a (weighted) graph of k nearest neighbors.

The transformed data is a sparse graph as returned by kneighbors\_graph.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new KNeighborsTransformer(opts?: object): KNeighborsTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors:  `Default Value`  `'auto'` |
| `opts.leaf_size?` | `number` | Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.metric?` | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.  If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.  Distance matrices are not supported.  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.mode?` | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.  `Default Value`  `'distance'` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. If `\-1`, then the number of jobs is set to the number of CPU cores. |
| `opts.n_neighbors?` | `number` | Number of neighbors for each sample in the transformed sparse graph. For compatibility reasons, as each sample is considered as its own neighbor, one extra neighbor will be computed when mode == ‘distance’. In this case, the sparse graph contains (n\_neighbors + 1) neighbors.  `Default Value`  `5` |
| `opts.p?` | `number` | Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |

### Returns

[`KNeighborsTransformer`](KNeighborsTransformer.md)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L149)

### fit()

Fit the k-nearest neighbors transformer from the training dataset.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L166)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training set. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L208)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.neighbors.KNeighborsTransformer.fit "sklearn.neighbors.KNeighborsTransformer.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L253)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L99)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |
| `opts.n_neighbors?` | `number` | Number of neighbors required for each sample. The default is the value passed to the constructor. |
| `opts.return_distance?` | `boolean` | Whether or not to return the distances.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L293)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features). |
| `opts.mode?` | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.  `Default Value`  `'connectivity'` |
| `opts.n_neighbors?` | `number` | Number of neighbors for each sample. The default is the value passed to the constructor. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L344)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L398)

### transform()

Compute the (weighted) graph of Neighbors for points in X.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Sample data. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L435)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/KNeighborsTransformer.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L472)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/KNeighborsTransformer.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L499)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/KNeighborsTransformer.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L553)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KNeighborsTransformer.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L526)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KNeighborsTransformer.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L580)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L86)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/neighbors/KNeighborsTransformer.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L90)
