**sklearn** • **Docs**

***

Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html)

## Constructors

### new LocalOutlierFactor()

> **new LocalOutlierFactor**(`opts`?): [`LocalOutlierFactor`](LocalOutlierFactor.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

**Default Value**

`'auto'`

• **opts.contamination?**: `number` \| `"auto"`

The amount of contamination of the data set, i.e. the proportion of outliers in the data set. When fitting this is used to define the threshold on the scores of the samples.

**Default Value**

`'auto'`

• **opts.leaf\_size?**: `number`

Leaf is size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

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

• **opts.n\_neighbors?**: `number`

Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries. If n\_neighbors is larger than the number of samples provided, all samples will be used.

**Default Value**

`20`

• **opts.novelty?**: `boolean`

By default, LocalOutlierFactor is only meant to be used for outlier detection (novelty=`false`). Set novelty to `true` if you want to use LocalOutlierFactor for novelty detection. In this case be aware that you should only use predict, decision\_function and score\_samples on new unseen data and not on the training set; and note that the results obtained this way may differ from the standard LOF results.

**Default Value**

`false`

• **opts.p?**: `number`

Parameter for the Minkowski metric from [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**Default Value**

`2`

#### Returns

[`LocalOutlierFactor`](LocalOutlierFactor.md)

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L17)

## Accessors

### effective\_metric\_

#### Get Signature

> **get** **effective\_metric\_**(): `Promise`\<`string`\>

The effective metric used for the distance computation.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L579)

***

### effective\_metric\_params\_

#### Get Signature

> **get** **effective\_metric\_params\_**(): `Promise`\<`any`\>

The effective additional keyword arguments for the metric function.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L606)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L660)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L633)

***

### n\_neighbors\_

#### Get Signature

> **get** **n\_neighbors\_**(): `Promise`\<`number`\>

The actual number of neighbors used for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L525)

***

### n\_samples\_fit\_

#### Get Signature

> **get** **n\_samples\_fit\_**(): `Promise`\<`number`\>

It is the number of samples in the fitted data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L687)

***

### negative\_outlier\_factor\_

#### Get Signature

> **get** **negative\_outlier\_factor\_**(): `Promise`\<`ArrayLike`\>

The opposite LOF of the training samples. The higher, the more normal. Inliers tend to have a LOF score close to 1 (`negative\_outlier\_factor\_` close to -1), while outliers tend to have a larger LOF score.

The local outlier factor (LOF) of a sample captures its supposed ‘degree of abnormality’. It is the average of the ratio of the local reachability density of a sample and those of its k-nearest neighbors.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L498)

***

### offset\_

#### Get Signature

> **get** **offset\_**(): `Promise`\<`number`\>

Offset used to obtain binary labels from the raw scores. Observations having a negative\_outlier\_factor smaller than `offset\_` are detected as abnormal. The offset is set to -1.5 (inliers score around -1), except when a contamination parameter different than “auto” is provided. In that case, the offset is defined in such a way we obtain the expected number of outliers in training.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L552)

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

[generated/neighbors/LocalOutlierFactor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L91)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Shifted opposite of the Local Outlier Factor of X.

Bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The shift offset allows a zero threshold for being an outlier. The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L168)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L147)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the local outlier factor detector from the training dataset.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L204)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Fit the model to the training set X and return the labels.

**Not available for novelty detection (when novelty is set to `true`).** Label is 1 for an inlier and -1 for an outlier according to the LOF score and the contamination parameter.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L245)

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

[generated/neighbors/LocalOutlierFactor.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L288)

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

[generated/neighbors/LocalOutlierFactor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L104)

***

### kneighbors()

> **kneighbors**(`opts`): `Promise`\<`ArrayLike`[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

• **opts**

• **opts.n\_neighbors?**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

• **opts.return\_distance?**: `boolean`

Whether or not to return the distances.

**Default Value**

`true`

• **opts.X?**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L326)

***

### kneighbors\_graph()

> **kneighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

• **opts**

• **opts.mode?**: `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**Default Value**

`'connectivity'`

• **opts.n\_neighbors?**: `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

• **opts.X?**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L372)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the labels (1 inlier, -1 outlier) of X according to LOF.

**Only available for novelty detection (when novelty is set to `true`).** This method allows to generalize prediction to *new observations* (not in the training set). Note that the result of `clf.fit(X)` then `clf.predict(X)` with `novelty=True` may differ from the result obtained by `clf.fit\_predict(X)` with `novelty=False`.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L422)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Opposite of the Local Outlier Factor of X.

It is the opposite as bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point. Because of this, the scores obtained via `score\_samples` may differ from the standard LOF scores. The standard LOF scores for the training data is available via the `negative\_outlier\_factor\_` attribute.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L460)
