**sklearn** • **Docs**

***

Mean shift clustering using a flat kernel.

Mean shift clustering aims to discover “blobs” in a smooth density of samples. It is a centroid-based algorithm, which works by updating candidates for centroids to be the mean of the points within a given region. These candidates are then filtered in a post-processing stage to eliminate near-duplicates to form the final set of centroids.

Seeding is performed using a binning technique for scalability.

For an example of how to use MeanShift clustering, refer to: A demo of the mean-shift clustering algorithm.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html)

## Constructors

### new MeanShift()

> **new MeanShift**(`opts`?): [`MeanShift`](MeanShift.md)

#### Parameters

• **opts?**

• **opts.bandwidth?**: `number`

Bandwidth used in the flat kernel.

If not given, the bandwidth is estimated using sklearn.cluster.estimate\_bandwidth; see the documentation for that function for hints on scalability (see also the Notes, below).

• **opts.bin\_seeding?**: `boolean`

If true, initial kernel locations are not locations of all points, but rather the location of the discretized version of points, where points are binned onto a grid whose coarseness corresponds to the bandwidth. Setting this option to `true` will speed up the algorithm because fewer seeds will be initialized. The default value is `false`. Ignored if seeds argument is not `undefined`.

**Default Value**

`false`

• **opts.cluster\_all?**: `boolean`

If true, then all points are clustered, even those orphans that are not within any kernel. Orphans are assigned to the nearest kernel. If false, then orphans are given cluster label -1.

**Default Value**

`true`

• **opts.max\_iter?**: `number`

Maximum number of iterations, per seed point before the clustering operation terminates (for that seed point), if has not converged yet.

**Default Value**

`300`

• **opts.min\_bin\_freq?**: `number`

To speed up the algorithm, accept only those bins with at least min\_bin\_freq points as seeds.

**Default Value**

`1`

• **opts.n\_jobs?**: `number`

The number of jobs to use for the computation. The following tasks benefit from the parallelization:

• **opts.seeds?**: `ArrayLike`[]

Seeds used to initialize kernels. If not set, the seeds are calculated by clustering.get\_bin\_seeds with bandwidth as the grid size and default values for other parameters.

#### Returns

[`MeanShift`](MeanShift.md)

#### Defined in

[generated/cluster/MeanShift.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/MeanShift.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/MeanShift.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/MeanShift.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/MeanShift.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/MeanShift.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L23)

## Accessors

### cluster\_centers\_

#### Get Signature

> **get** **cluster\_centers\_**(): `Promise`\<`ArrayLike`[]\>

Coordinates of cluster centers.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/MeanShift.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L294)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/MeanShift.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L390)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Labels of each point.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/MeanShift.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L319)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MeanShift.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L365)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Maximum number of iterations performed on each seed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/MeanShift.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L342)

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

[generated/cluster/MeanShift.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L79)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/MeanShift.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L130)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform clustering.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Samples to cluster.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/MeanShift.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L147)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform clustering on `X` and returns cluster labels.

#### Parameters

• **opts**

• **opts.kwargs?**: `any`

Arguments to be passed to `fit`.

• **opts.X?**: `ArrayLike`[]

Input data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/MeanShift.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L184)

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

[generated/cluster/MeanShift.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L228)

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

[generated/cluster/MeanShift.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L92)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the closest cluster each sample in X belongs to.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

New data to predict.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/MeanShift.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/MeanShift.ts#L262)
