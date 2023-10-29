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
| `opts.init?` | `ArrayLike`[] \| `"k-means++"` \| `"random"` | Method for initialization:  `Default Value`  `'k-means++'` |
| `opts.max_iter?` | `number` | Maximum number of iterations of the k-means algorithm for a single run.  `Default Value`  `300` |
| `opts.n_clusters?` | `number` | The number of clusters to form as well as the number of centroids to generate.  `Default Value`  `8` |
| `opts.n_init?` | `number` \| `"auto"` | Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of `n\_init` consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see Clustering sparse data with k-means).  When `n\_init='auto'`, the number of runs depends on the value of init: 10 if using `init='random'` or `init` is a callable; 1 if using `init='k-means++'` or `init` is an array-like.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See Glossary. |
| `opts.tol?` | `number` | Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Verbosity mode.  `Default Value`  `0` |

### Returns

[`KMeans`](KMeans.md)

Defined in:  [generated/cluster/KMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L23)

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

Defined in:  [generated/cluster/KMeans.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L153)

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
| `opts.sample_weight?` | `ArrayLike` | The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample\_weight` is not used during initialization if `init` is a callable or a user provided array. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L170)

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

Defined in:  [generated/cluster/KMeans.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L219)

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

Defined in:  [generated/cluster/KMeans.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L268)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L317)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L352)

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

Defined in:  [generated/cluster/KMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L106)

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

Defined in:  [generated/cluster/KMeans.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L387)

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

Defined in:  [generated/cluster/KMeans.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L427)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L478)

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

Defined in:  [generated/cluster/KMeans.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L513)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_predict_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L550)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/KMeans.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L587)

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

Defined in:  [generated/cluster/KMeans.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L622)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/KMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/KMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/KMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/KMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/KMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/KMeans.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L655)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/KMeans.ts:770](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L770)

### inertia\_

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:702](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L702)

### labels\_

Labels of each point

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/KMeans.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L680)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:747](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L747)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/KMeans.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L725)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/KMeans.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L93)

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

Defined in: [generated/cluster/KMeans.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/KMeans.ts#L97)
