# BisectingKMeans

Bisecting K-Means clustering.

Read more in the [User Guide](../clustering.html#bisect-k-means).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.BisectingKMeans.html)

## Constructors

## constructor()

### Signature

```ts
new BisectingKMeans(opts?: object): BisectingKMeans;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"lloyd"` \| `"elkan"` | Inner K-means algorithm used in bisection. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n\_samples, n\_clusters)`.  `Default Value`  `'lloyd'` |
| `opts.bisecting_strategy?` | `"biggest_inertia"` \| `"largest_cluster"` | Defines how bisection should be performed:  `Default Value`  `'biggest_inertia'` |
| `opts.copy_x?` | `boolean` | When pre-computing distances it is more numerically accurate to center the data first. If copy\_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy\_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy\_x is `false`.  `Default Value`  `true` |
| `opts.init?` | `"k-means++"` \| `"random"` | Method for initialization:  ‘k-means++’ : selects initial cluster centers for k-mean clustering in a smart way to speed up convergence. See section Notes in k\_init for more details.  ‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.  If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.  `Default Value`  `'random'` |
| `opts.max_iter?` | `number` | Maximum number of iterations of the inner k-means algorithm at each bisection.  `Default Value`  `300` |
| `opts.n_clusters?` | `number` | The number of clusters to form as well as the number of centroids to generate.  `Default Value`  `8` |
| `opts.n_init?` | `number` | Number of time the inner k-means algorithm will be run with different centroid seeds in each bisection. That will result producing for each bisection best output of n\_init consecutive runs in terms of inertia.  `Default Value`  `1` |
| `opts.random_state?` | `number` | Determines random number generation for centroid initialization in inner K-Means. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state). |
| `opts.tol?` | `number` | Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence. Used in inner k-means algorithm at each bisection to pick best possible clusters.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Verbosity mode.  `Default Value`  `0` |

### Returns

[`BisectingKMeans`](BisectingKMeans.md)

Defined in:  [generated/cluster/BisectingKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L23)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L163)

### fit()

Compute bisecting k-means clustering.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training instances to cluster. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L180)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data to transform. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L229)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data to transform. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L278)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.BisectingKMeans.fit "sklearn.cluster.BisectingKMeans.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L327)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L115)

### predict()

Predict which cluster each sample in X belongs to.

Prediction is made by going down the hierarchical tree in searching of closest leaf cluster.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data to predict. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L367)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L400)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

Defined in:  [generated/cluster/BisectingKMeans.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L449)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data to transform. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L484)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/BisectingKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/BisectingKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/BisectingKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/BisectingKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/BisectingKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L517)

Defined in:  [generated/cluster/BisectingKMeans.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L517)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L617)

Defined in:  [generated/cluster/BisectingKMeans.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L617)

### inertia\_

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L567)

Defined in:  [generated/cluster/BisectingKMeans.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L567)

### labels\_

Labels of each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L542)

Defined in:  [generated/cluster/BisectingKMeans.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L542)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L592)

Defined in:  [generated/cluster/BisectingKMeans.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L592)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/BisectingKMeans.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L102)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L106)

Defined in:  [generated/cluster/BisectingKMeans.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L102) [generated/cluster/BisectingKMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L106)
