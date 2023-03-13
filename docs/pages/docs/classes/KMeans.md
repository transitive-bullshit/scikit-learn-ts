# KMeans

K-Means clustering.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)

## Constructors

## constructor()

### Signature

```ts
new KMeans(opts?: object): KMeans;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"lloyd"` \| `"elkan"` \| `"full"` | K-means algorithm to use. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n\_samples, n\_clusters)`.  `"auto"` and `"full"` are deprecated and they will be removed in Scikit-Learn 1.3. They are both aliases for `"lloyd"`.  `Default Value`  `'lloyd'` |
| `opts.copy_x?` | `boolean` | When pre-computing distances it is more numerically accurate to center the data first. If copy\_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy\_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy\_x is `false`.  `Default Value`  `true` |
| `opts.init?` | `ArrayLike`[] \| `"k-means++"` \| `"random"` | Method for initialization:  ‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.  ‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.  If an array is passed, it should be of shape (n\_clusters, n\_features) and gives the initial centers.  If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.  `Default Value`  `'k-means++'` |
| `opts.max_iter?` | `number` | Maximum number of iterations of the k-means algorithm for a single run.  `Default Value`  `300` |
| `opts.n_clusters?` | `number` | The number of clusters to form as well as the number of centroids to generate.  `Default Value`  `8` |
| `opts.n_init?` | `number` \| `"auto"` | Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of `n\_init` consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see Clustering sparse data with k-means).  When `n\_init='auto'`, the number of runs depends on the value of init: 10 if using `init='random'`, 1 if using `init='k-means++'`.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See Glossary. |
| `opts.tol?` | `number` | Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Verbosity mode.  `Default Value`  `0` |

### Returns

[`KMeans`](KMeans.md)

Defined in:  [generated/cluster/KMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/KMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/KMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/KMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/KMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/KMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/KMeans.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L517)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/KMeans.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L632)

### inertia\_

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L564)

### labels\_

Labels of each point

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/KMeans.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L542)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L609)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L587)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/KMeans.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L101)

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

Defined in: [generated/cluster/KMeans.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L105)

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

Defined in:  [generated/cluster/KMeans.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L161)

### fit()

Compute k-means clustering.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format. |
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L178)

### fit\_predict()

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data to transform. |
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/KMeans.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L227)

### fit\_transform()

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data to transform. |
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/KMeans.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L276)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.KMeans.fit "sklearn.cluster.KMeans.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L325)

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

Defined in:  [generated/cluster/KMeans.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L114)

### predict()

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data to predict. |
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/KMeans.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L360)

### score()

Opposite of the value of X on the K-means objective.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data. |
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/KMeans.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L400)

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

Defined in:  [generated/cluster/KMeans.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L449)

### transform()

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data to transform. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/KMeans.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/KMeans.ts#L484)
