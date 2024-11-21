**sklearn** • **Docs**

***

Implements the BIRCH clustering algorithm.

It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html)

## Constructors

### new Birch()

> **new Birch**(`opts`?): [`Birch`](Birch.md)

#### Parameters

• **opts?**

• **opts.branching\_factor?**: `number`

Maximum number of CF subclusters in each node. If a new samples enters such that the number of subclusters exceed the branching\_factor then that node is split into two nodes with the subclusters redistributed in each. The parent subcluster of that node is removed and two new subclusters are added as parents of the 2 split nodes.

**Default Value**

`50`

• **opts.compute\_labels?**: `boolean`

Whether or not to compute labels for each fit.

**Default Value**

`true`

• **opts.copy?**: `boolean`

Whether or not to make a copy of the given data. If set to `false`, the initial data will be overwritten.

**Default Value**

`true`

• **opts.n\_clusters?**: `number`

Number of clusters after the final clustering step, which treats the subclusters from the leaves as new samples.

**Default Value**

`3`

• **opts.threshold?**: `number`

The radius of the subcluster obtained by merging a new sample and the closest subcluster should be lesser than the threshold. Otherwise a new subcluster is started. Setting this value to be very low promotes splitting and vice-versa.

**Default Value**

`0.5`

#### Returns

[`Birch`](Birch.md)

#### Defined in

[generated/cluster/Birch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/Birch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/Birch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/Birch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/Birch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/Birch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L19)

## Accessors

### dummy\_leaf\_

#### Get Signature

> **get** **dummy\_leaf\_**(): `Promise`\<`any`\>

Start pointer to all the leaves.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/Birch.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L485)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/Birch.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L603)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Array of labels assigned to the input data. if partial\_fit is used instead of fit, they are assigned to the last batch of data.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/Birch.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L558)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/Birch.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L580)

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

[generated/cluster/Birch.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L65)

***

### root\_

#### Get Signature

> **get** **root\_**(): `Promise`\<`any`\>

Root of the CFTree.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/Birch.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L463)

***

### subcluster\_centers\_

#### Get Signature

> **get** **subcluster\_centers\_**(): `Promise`\<`ArrayLike`\>

Centroids of all subclusters read directly from the leaves.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/Birch.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L508)

***

### subcluster\_labels\_

#### Get Signature

> **get** **subcluster\_labels\_**(): `Promise`\<`ArrayLike`\>

Labels assigned to the centroids of the subclusters after they are clustered globally.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/Birch.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L533)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/Birch.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L116)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a CF Tree for the input data.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/Birch.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L133)

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

[generated/cluster/Birch.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L170)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/cluster/Birch.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L214)

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

[generated/cluster/Birch.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L258)

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

[generated/cluster/Birch.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L292)

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

[generated/cluster/Birch.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L78)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online learning. Prevents rebuilding of CFTree from scratch.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data. If X is not provided, only the global clustering step is done.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/Birch.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L324)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict data using the `centroids\_` of subclusters.

Avoid computation of the row norms of X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/Birch.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L363)

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

[generated/cluster/Birch.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L397)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X into subcluster centroids dimension.

Each dimension represents the distance from the sample point to each cluster centroid.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/Birch.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/cluster/Birch.ts#L431)
