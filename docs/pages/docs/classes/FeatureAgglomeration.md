# FeatureAgglomeration

Agglomerate features.

Recursively merges pair of clusters of features.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureAgglomeration(opts?: object): FeatureAgglomeration;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.affinity?` | `string` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix (instead of a similarity matrix) is needed as input for the fit method.  `Default Value`  `'euclidean'` |
| `opts.compute_distances?` | `boolean` | Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.  `Default Value`  `false` |
| `opts.compute_full_tree?` | `boolean` \| `"auto"` | Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of features. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance\_threshold` is not `undefined`. By default `compute\_full\_tree` is “auto”, which is equivalent to `true` when `distance\_threshold` is not `undefined` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `false`.  `Default Value`  `'auto'` |
| `opts.connectivity?` | `ArrayLike` | Connectivity matrix. Defines for each feature the neighboring features following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured. |
| `opts.distance_threshold?` | `number` | The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n\_clusters` must be `undefined` and `compute\_full\_tree` must be `true`. |
| `opts.linkage?` | `"ward"` \| `"complete"` \| `"average"` \| `"single"` | Which linkage criterion to use. The linkage criterion determines which distance to use between sets of features. The algorithm will merge the pairs of cluster that minimize this criterion.  `Default Value`  `'ward'` |
| `opts.memory?` | `string` | Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory. |
| `opts.metric?` | `string` | Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If set to `undefined` then “euclidean” is used. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method. |
| `opts.n_clusters?` | `number` | The number of clusters to find. It must be `undefined` if `distance\_threshold` is not `undefined`.  `Default Value`  `2` |
| `opts.pooling_func?` | `any` | This combines the values of agglomerated features into a single value, and should accept an array of shape \[M, N\] and the keyword argument `axis=1`, and reduce it to an array of size \[M\]. |

### Returns

[`FeatureAgglomeration`](FeatureAgglomeration.md)

Defined in:  [generated/cluster/FeatureAgglomeration.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L19)

## Accessors

### children\_

The children of each non-leaf node. Values less than `n\_features` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_features` is a non-leaf node and has children `children\_\[i \- n\_features\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_features + i`.

#### Signature

```ts
children_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L583)

### distances\_

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Signature

```ts
distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L610)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L556)

### labels\_

Cluster labels for each feature.

#### Signature

```ts
labels_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L448)

### n\_clusters\_

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Signature

```ts
n_clusters_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L421)

### n\_connected\_components\_

The estimated number of connected components in the graph.

#### Signature

```ts
n_connected_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L502)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L529)

### n\_leaves\_

Number of leaves in the hierarchical tree.

#### Signature

```ts
n_leaves_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L475)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L90)

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

Defined in: [generated/cluster/FeatureAgglomeration.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L94)

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

Defined in:  [generated/cluster/FeatureAgglomeration.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L157)

### fit()

Fit the hierarchical clustering on the data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L174)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L216)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.FeatureAgglomeration.fit "sklearn.cluster.FeatureAgglomeration.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L269)

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

Defined in:  [generated/cluster/FeatureAgglomeration.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L103)

### inverse\_transform()

Inverse the transformation and return a vector of size `n\_features`.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.Xred?` | `ArrayLike`[] | The values to be assigned to each cluster of samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L307)

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

Defined in:  [generated/cluster/FeatureAgglomeration.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L347)

### transform()

Transform a new matrix using the built clustering.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | A M by N array of M observations in N dimensions or a length M array of M one-dimensional observations. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L384)
