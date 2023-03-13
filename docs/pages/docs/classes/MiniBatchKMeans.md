# MiniBatchKMeans

Mini-Batch K-Means clustering.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchKMeans(opts?: object): MiniBatchKMeans;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.batch_size?` | `number` | Size of the mini batches. For faster computations, you can set the `batch\_size` greater than 256 \* number of cores to enable parallelism on all cores.  `Default Value`  `1024` |
| `opts.compute_labels?` | `boolean` | Compute label assignment and inertia for the complete dataset once the minibatch optimization has converged in fit.  `Default Value`  `true` |
| `opts.init?` | `ArrayLike`[] \| `"k-means++"` \| `"random"` | Method for initialization:  ‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.  ‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.  If an array is passed, it should be of shape (n\_clusters, n\_features) and gives the initial centers.  If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.  `Default Value`  `'k-means++'` |
| `opts.init_size?` | `number` | Number of samples to randomly sample for speeding up the initialization (sometimes at the expense of accuracy): the only algorithm is initialized by running a batch KMeans on a random subset of the data. This needs to be larger than n\_clusters.  If `undefined`, the heuristic is `init\_size \= 3 \* batch\_size` if `3 \* batch\_size < n\_clusters`, else `init\_size \= 3 \* n\_clusters`. |
| `opts.max_iter?` | `number` | Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.  `Default Value`  `100` |
| `opts.max_no_improvement?` | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed inertia.  To disable convergence detection based on inertia, set max\_no\_improvement to `undefined`.  `Default Value`  `10` |
| `opts.n_clusters?` | `number` | The number of clusters to form as well as the number of centroids to generate.  `Default Value`  `8` |
| `opts.n_init?` | `number` \| `"auto"` | Number of random initializations that are tried. In contrast to KMeans, the algorithm is only run once, using the best of the `n\_init` initializations as measured by inertia. Several runs are recommended for sparse high-dimensional problems (see Clustering sparse data with k-means).  When `n\_init='auto'`, the number of runs depends on the value of init: 3 if using `init='random'`, 1 if using `init='k-means++'`.  `Default Value`  `3` |
| `opts.random_state?` | `number` | Determines random number generation for centroid initialization and random reassignment. Use an int to make the randomness deterministic. See Glossary. |
| `opts.reassignment_ratio?` | `number` | Control the fraction of the maximum number of counts for a center to be reassigned. A higher value means that low count centers are more easily reassigned, which means that the model will take longer to converge, but should converge in a better clustering. However, too high a value may cause convergence issues, especially with a small batch size.  `Default Value`  `0.01` |
| `opts.tol?` | `number` | Control early stopping based on the relative center changes as measured by a smoothed, variance-normalized of the mean center squared position changes. This early stopping heuristics is closer to the one used for the batch variant of the algorithms but induces a slight computational and memory overhead over the inertia heuristic.  To disable convergence detection based on normalized center change, set tol to 0.0 (default).  `Default Value`  `0` |
| `opts.verbose?` | `number` | Verbosity mode.  `Default Value`  `0` |

### Returns

[`MiniBatchKMeans`](MiniBatchKMeans.md)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L23)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L191)

### fit()

Compute the centroids on X by chunking it into mini-batches.

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L208)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L257)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L306)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.MiniBatchKMeans.fit "sklearn.cluster.MiniBatchKMeans.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L355)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L137)

### partial\_fit()

Update k means estimate on a single mini-batch X.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L391)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L440)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L480)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L529)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L564)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L597)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:747](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L747)

### inertia\_

The value of the inertia criterion associated with the chosen partition if compute\_labels is set to `true`. If compute\_labels is set to `false`, it’s an approximation of the inertia based on an exponentially weighted average of the batch inertiae. The inertia is defined as the sum of square distances of samples to their cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L647)

### labels\_

Labels of each point (if compute\_labels is set to `true`).

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L622)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L722)

### n\_iter\_

Number of iterations over the full dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L672)

### n\_steps\_

Number of minibatches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MiniBatchKMeans.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L697)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L124)

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

Defined in: [generated/cluster/MiniBatchKMeans.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L128)
