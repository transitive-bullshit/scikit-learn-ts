# KNeighborsRegressor

Regression based on k-nearest neighbors.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new KNeighborsRegressor(opts?: object): KNeighborsRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors:  `Default Value`  `'auto'` |
| `opts.leaf_size?` | `number` | Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.metric?` | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.  If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a sparse graph, in which case only “nonzero” elements may be considered neighbors.  If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. Doesn’t affect [`fit`](#sklearn.neighbors.KNeighborsRegressor.fit "sklearn.neighbors.KNeighborsRegressor.fit") method. |
| `opts.n_neighbors?` | `number` | Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.KNeighborsRegressor.kneighbors "sklearn.neighbors.KNeighborsRegressor.kneighbors") queries.  `Default Value`  `5` |
| `opts.p?` | `number` | Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |
| `opts.weights?` | `"uniform"` \| `"distance"` | Weight function used in prediction. Possible values:  `Default Value`  `'uniform'` |

### Returns

[`KNeighborsRegressor`](KNeighborsRegressor.md)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L25)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L149)

### fit()

Fit the k-nearest neighbors regressor from the training dataset.

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L166)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L99)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L210)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L261)

### predict()

Predict the target for the provided data.

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L313)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L350)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/KNeighborsRegressor.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L399)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/KNeighborsRegressor.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L426)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/KNeighborsRegressor.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L480)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KNeighborsRegressor.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L453)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KNeighborsRegressor.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L507)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L86)

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

Defined in: [generated/neighbors/KNeighborsRegressor.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L90)
