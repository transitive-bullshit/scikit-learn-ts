# RadiusNeighborsClassifier

Classifier implementing a vote among neighbors within a given radius.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new RadiusNeighborsClassifier(opts?: object): RadiusNeighborsClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors:  `Default Value`  `'auto'` |
| `opts.leaf_size?` | `number` | Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.metric?` | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.  If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a sparse graph, in which case only “nonzero” elements may be considered neighbors.  If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.outlier_label?` | `"most_frequent"` | Label for outlier samples (samples with no neighbors in given radius). |
| `opts.p?` | `number` | Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |
| `opts.radius?` | `number` | Range of parameter space to use by default for [`radius\_neighbors`](#sklearn.neighbors.RadiusNeighborsClassifier.radius_neighbors "sklearn.neighbors.RadiusNeighborsClassifier.radius_neighbors") queries.  `Default Value`  `1` |
| `opts.weights?` | `"uniform"` \| `"distance"` | Weight function used in prediction. Possible values:  `Default Value`  `'uniform'` |

### Returns

[`RadiusNeighborsClassifier`](RadiusNeighborsClassifier.md)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L17)

## Accessors

### classes\_

Class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L466)

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L493)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L520)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L574)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L547)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L601)

### outlier\_label\_

Label which is given for outlier samples (samples with no neighbors on given radius).

#### Signature

```ts
outlier_label_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L628)

### outputs\_2d\_

False when `y`’s shape is (n\_samples, ) or (n\_samples, 1) during fit otherwise `true`.

#### Signature

```ts
outputs_2d_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L655)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L89)

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

Defined in: [generated/neighbors/RadiusNeighborsClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L93)

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

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L154)

### fit()

Fit the radius neighbors classifier from the training dataset.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.y?` | `any` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L171)

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

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L102)

### predict()

Predict the class labels for the provided data.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Test samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L213)

### predict\_proba()

Return probability estimates for the test data X.

#### Signature

```ts
predict_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Test samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L250)

### radius\_neighbors()

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Signature

```ts
radius_neighbors(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |
| `opts.radius?` | `number` | Limiting distance of neighbors to return. The default is the value passed to the constructor. |
| `opts.return_distance?` | `boolean` | Whether or not to return the distances.  `Default Value`  `true` |
| `opts.sort_results?` | `boolean` | If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L292)

### radius\_neighbors\_graph()

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Signature

```ts
radius_neighbors_graph(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |
| `opts.mode?` | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.  `Default Value`  `'connectivity'` |
| `opts.radius?` | `number` | Radius of neighborhoods. The default is the value passed to the constructor. |
| `opts.sort_results?` | `boolean` | If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L352)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L415)
