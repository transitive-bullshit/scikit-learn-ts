**sklearn** • **Docs**

***

K-Means clustering.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)

## Constructors

### new KMeans()

> **new KMeans**(`opts`?): [`KMeans`](KMeans.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"lloyd"` \| `"elkan"`

K-means algorithm to use. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n\_samples, n\_clusters)`.

**Default Value**

`'lloyd'`

• **opts.copy\_x?**: `boolean`

When pre-computing distances it is more numerically accurate to center the data first. If copy\_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy\_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy\_x is `false`.

**Default Value**

`true`

• **opts.init?**: `ArrayLike`[] \| `"k-means++"` \| `"random"`

Method for initialization:

**Default Value**

`'k-means++'`

• **opts.max\_iter?**: `number`

Maximum number of iterations of the k-means algorithm for a single run.

**Default Value**

`300`

• **opts.n\_clusters?**: `number`

The number of clusters to form as well as the number of centroids to generate.

For an example of how to choose an optimal value for `n\_clusters` refer to Selecting the number of clusters with silhouette analysis on KMeans clustering.

**Default Value**

`8`

• **opts.n\_init?**: `number` \| `"auto"`

Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of `n\_init` consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see Clustering sparse data with k-means).

When `n\_init='auto'`, the number of runs depends on the value of init: 10 if using `init='random'` or `init` is a callable; 1 if using `init='k-means++'` or `init` is an array-like.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See Glossary.

• **opts.tol?**: `number`

Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.

**Default Value**

`0.0001`

• **opts.verbose?**: `number`

Verbosity mode.

**Default Value**

`0`

#### Returns

[`KMeans`](KMeans.md)

#### Defined in

[generated/cluster/KMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/KMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/KMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/KMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/KMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/KMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L17)

## Accessors

### cluster\_centers\_

#### Get Signature

> **get** **cluster\_centers\_**(): `Promise`\<`ArrayLike`[]\>

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/KMeans.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L575)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/KMeans.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L690)

***

### inertia\_

#### Get Signature

> **get** **inertia\_**(): `Promise`\<`number`\>

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L622)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Labels of each point

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/KMeans.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L600)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:667](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L667)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L645)

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

[generated/cluster/KMeans.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L93)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/KMeans.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L144)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute k-means clustering.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample\_weight` is not used during initialization if `init` is a callable or a user provided array.

• **opts.X?**: `ArrayLike`

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L161)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: `ArrayLike`

New data to transform.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/KMeans.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L205)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: `ArrayLike`

New data to transform.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/KMeans.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L249)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L293)

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

[generated/cluster/KMeans.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L327)

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

[generated/cluster/KMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L106)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

New data to predict.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/KMeans.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L361)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Opposite of the value of X on the K-means objective.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: `ArrayLike`

New data.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L393)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L439)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L473)

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

[generated/cluster/KMeans.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L509)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

New data to transform.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/KMeans.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/KMeans.ts#L543)
