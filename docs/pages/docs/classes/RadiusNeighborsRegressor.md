**sklearn** • **Docs**

***

Regression based on neighbors within a fixed radius.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsRegressor.html)

## Constructors

### new RadiusNeighborsRegressor()

> **new RadiusNeighborsRegressor**(`opts`?): [`RadiusNeighborsRegressor`](RadiusNeighborsRegressor.md)

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

If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a sparse graph, in which case only “nonzero” elements may be considered neighbors.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

**Default Value**

`'minkowski'`

• **opts.metric\_params?**: `any`

Additional keyword arguments for the metric function.

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.p?**: `number`

Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**Default Value**

`2`

• **opts.radius?**: `number`

Range of parameter space to use by default for [`radius\_neighbors`](#sklearn.neighbors.RadiusNeighborsRegressor.radius_neighbors "sklearn.neighbors.RadiusNeighborsRegressor.radius_neighbors") queries.

**Default Value**

`1`

• **opts.weights?**: `"uniform"` \| `"distance"`

Weight function used in prediction. Possible values:

**Default Value**

`'uniform'`

#### Returns

[`RadiusNeighborsRegressor`](RadiusNeighborsRegressor.md)

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

#### Get Signature

> **get** **effective\_metric\_**(): `Promise`\<`string`\>

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L476)

***

### effective\_metric\_params\_

#### Get Signature

> **get** **effective\_metric\_params\_**(): `Promise`\<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L503)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L557)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L530)

***

### n\_samples\_fit\_

#### Get Signature

> **get** **n\_samples\_fit\_**(): `Promise`\<`number`\>

Number of samples in the fitted data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L584)

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

[generated/neighbors/RadiusNeighborsRegressor.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L86)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L142)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the radius neighbors regressor from the training dataset.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `any`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L159)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L200)

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

[generated/neighbors/RadiusNeighborsRegressor.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L99)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the target for the provided data.

#### Parameters

• **opts**

• **opts.X?**: `any`

Test samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L236)

***

### radius\_neighbors()

> **radius\_neighbors**(`opts`): `Promise`\<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

• **opts**

• **opts.radius?**: `number`

Limiting distance of neighbors to return. The default is the value passed to the constructor.

• **opts.return\_distance?**: `boolean`

Whether or not to return the distances.

**Default Value**

`true`

• **opts.sort\_results?**: `boolean`

If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

**Default Value**

`false`

• **opts.X?**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L276)

***

### radius\_neighbors\_graph()

> **radius\_neighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

• **opts**

• **opts.mode?**: `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**Default Value**

`'connectivity'`

• **opts.radius?**: `number`

Radius of neighborhoods. The default is the value passed to the constructor.

• **opts.sort\_results?**: `boolean`

If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.

**Default Value**

`false`

• **opts.X?**: `ArrayLike`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L333)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: `ArrayLike`

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L390)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsRegressor.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L440)
