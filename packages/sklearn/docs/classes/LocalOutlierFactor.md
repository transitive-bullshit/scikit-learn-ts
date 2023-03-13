# LocalOutlierFactor

Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html)

## Constructors

## constructor()

### Signature

```ts
new LocalOutlierFactor(opts?: object): LocalOutlierFactor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors:  `Default Value`  `'auto'` |
| `opts.contamination?` | `number` \| `"auto"` | The amount of contamination of the data set, i.e. the proportion of outliers in the data set. When fitting this is used to define the threshold on the scores of the samples.  `Default Value`  `'auto'` |
| `opts.leaf_size?` | `number` | Leaf is size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.metric?` | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.  If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.  If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors?` | `number` | Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries. If n\_neighbors is larger than the number of samples provided, all samples will be used.  `Default Value`  `20` |
| `opts.novelty?` | `boolean` | By default, LocalOutlierFactor is only meant to be used for outlier detection (novelty=`false`). Set novelty to `true` if you want to use LocalOutlierFactor for novelty detection. In this case be aware that you should only use predict, decision\_function and score\_samples on new unseen data and not on the training set; and note that the results obtained this way may differ from the standard LOF results.  `Default Value`  `false` |
| `opts.p?` | `number` | Parameter for the Minkowski metric from `sklearn.metrics.pairwise.pairwise\_distances`. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |

### Returns

[`LocalOutlierFactor`](LocalOutlierFactor.md)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L17)

## Accessors

### effective\_metric\_

The effective metric used for the distance computation.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L565)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L565)

### effective\_metric\_params\_

The effective additional keyword arguments for the metric function.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L592)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L592)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L646)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L646)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L619)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L619)

### n\_neighbors\_

The actual number of neighbors used for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries.

#### Signature

```ts
n_neighbors_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L511)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L511)

### n\_samples\_fit\_

It is the number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L673)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L673)

### negative\_outlier\_factor\_

The opposite LOF of the training samples. The higher, the more normal. Inliers tend to have a LOF score close to 1 (`negative\_outlier\_factor\_` close to -1), while outliers tend to have a larger LOF score.

The local outlier factor (LOF) of a sample captures its supposed ‘degree of abnormality’. It is the average of the ratio of the local reachability density of a sample and those of its k-nearest neighbors.

#### Signature

```ts
negative_outlier_factor_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L484)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L484)

### offset\_

Offset used to obtain binary labels from the raw scores. Observations having a negative\_outlier\_factor smaller than `offset\_` are detected as abnormal. The offset is set to -1.5 (inliers score around -1), except when a contamination parameter different than “auto” is provided. In that case, the offset is defined in such a way we obtain the expected number of outliers in training.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L538)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L538)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L91)

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

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L95)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L91) [generated/neighbors/LocalOutlierFactor.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L95)

## Methods

### decision\_function()

Shifted opposite of the Local Outlier Factor of X.

Bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The shift offset allows a zero threshold for being an outlier. The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L179)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L158)

### fit()

Fit the local outlier factor detector from the training dataset.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L217)

### fit\_predict()

Fit the model to the training set X and return the labels.

**Not available for novelty detection (when novelty is set to `true`).** Label is 1 for an inlier and -1 for an outlier according to the LOF score and the contamination parameter.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L259)

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

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L104)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L303)

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

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L352)

### predict()

Predict the labels (1 inlier, -1 outlier) of X according to LOF.

**Only available for novelty detection (when novelty is set to `true`).** This method allows to generalize prediction to *new observations* (not in the training set). Note that the result of `clf.fit(X)` then `clf.predict(X)` with `novelty=True` may differ from the result obtained by `clf.fit\_predict(X)` with `novelty=False`.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L406)

### score\_samples()

Opposite of the Local Outlier Factor of X.

It is the opposite as bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point. Because of this, the scores obtained via `score\_samples` may differ from the standard LOF scores. The standard LOF scores for the training data is available via the `negative\_outlier\_factor\_` attribute.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L445)
