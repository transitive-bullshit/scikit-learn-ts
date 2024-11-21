[**sklearn**](../README.md) • **Docs**

***

Mini-Batch K-Means clustering.

Read more in the [User Guide](../clustering.html#mini-batch-kmeans).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html)

## Constructors

### new MiniBatchKMeans()

> **new MiniBatchKMeans**(`opts`?): [`MiniBatchKMeans`](MiniBatchKMeans.md)

#### Parameters

• **opts?**

• **opts.batch\_size?**: `number`

Size of the mini batches. For faster computations, you can set the `batch\_size` greater than 256 \* number of cores to enable parallelism on all cores.

**Default Value**

`1024`

• **opts.compute\_labels?**: `boolean`

Compute label assignment and inertia for the complete dataset once the minibatch optimization has converged in fit.

**Default Value**

`true`

• **opts.init?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[] \| `"k-means++"` \| `"random"`

Method for initialization:

‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.

‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.

If an array is passed, it should be of shape (n\_clusters, n\_features) and gives the initial centers.

If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.

**Default Value**

`'k-means++'`

• **opts.init\_size?**: `number`

Number of samples to randomly sample for speeding up the initialization (sometimes at the expense of accuracy): the only algorithm is initialized by running a batch KMeans on a random subset of the data. This needs to be larger than n\_clusters.

If `undefined`, the heuristic is `init\_size \= 3 \* batch\_size` if `3 \* batch\_size < n\_clusters`, else `init\_size \= 3 \* n\_clusters`.

• **opts.max\_iter?**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.

**Default Value**

`100`

• **opts.max\_no\_improvement?**: `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed inertia.

To disable convergence detection based on inertia, set max\_no\_improvement to `undefined`.

**Default Value**

`10`

• **opts.n\_clusters?**: `number`

The number of clusters to form as well as the number of centroids to generate.

**Default Value**

`8`

• **opts.n\_init?**: `number` \| `"auto"`

Number of random initializations that are tried. In contrast to KMeans, the algorithm is only run once, using the best of the `n\_init` initializations as measured by inertia. Several runs are recommended for sparse high-dimensional problems (see [Clustering sparse data with k-means](../../auto_examples/text/plot_document_clustering.html#kmeans-sparse-high-dim)).

When `n\_init='auto'`, the number of runs depends on the value of init: 3 if using `init='random'` or `init` is a callable; 1 if using `init='k-means++'` or `init` is an array-like.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Determines random number generation for centroid initialization and random reassignment. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

• **opts.reassignment\_ratio?**: `number`

Control the fraction of the maximum number of counts for a center to be reassigned. A higher value means that low count centers are more easily reassigned, which means that the model will take longer to converge, but should converge in a better clustering. However, too high a value may cause convergence issues, especially with a small batch size.

**Default Value**

`0.01`

• **opts.tol?**: `number`

Control early stopping based on the relative center changes as measured by a smoothed, variance-normalized of the mean center squared position changes. This early stopping heuristics is closer to the one used for the batch variant of the algorithms but induces a slight computational and memory overhead over the inertia heuristic.

To disable convergence detection based on normalized center change, set tol to 0.0 (default).

**Default Value**

`0`

• **opts.verbose?**: `number`

Verbosity mode.

**Default Value**

`0`

#### Returns

[`MiniBatchKMeans`](MiniBatchKMeans.md)

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L17)

## Accessors

### cluster\_centers\_

#### Get Signature

> **get** **cluster\_centers\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Coordinates of cluster centers.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L695)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:845](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L845)

***

### inertia\_

#### Get Signature

> **get** **inertia\_**(): `Promise`\<`number`\>

The value of the inertia criterion associated with the chosen partition if compute\_labels is set to `true`. If compute\_labels is set to `false`, it’s an approximation of the inertia based on an exponentially weighted average of the batch inertiae. The inertia is defined as the sum of square distances of samples to their cluster center, weighted by the sample weights if provided.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L745)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Labels of each point (if compute\_labels is set to `true`).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:720](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L720)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L820)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations over the full dataset.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:770](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L770)

***

### n\_steps\_

#### Get Signature

> **get** **n\_steps\_**(): `Promise`\<`number`\>

Number of minibatches processed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L795)

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

[generated/cluster/MiniBatchKMeans.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L124)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L176)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the centroids on X by chunking it into mini-batches.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample\_weight` is not used during initialization if `init` is a callable or a user provided array.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L193)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data to transform.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L237)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data to transform.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L281)

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

[generated/cluster/MiniBatchKMeans.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L325)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L361)

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

[generated/cluster/MiniBatchKMeans.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L137)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update k means estimate on a single mini-batch X.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample\_weight` is not used during initialization if `init` is a callable or a user provided array.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L395)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data to predict.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L439)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Opposite of the value of X on the K-means objective.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L471)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L517)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L553)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L589)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L627)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data to transform.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L663)
