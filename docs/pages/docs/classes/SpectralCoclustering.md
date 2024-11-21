**sklearn** • **Docs**

***

Spectral Co-Clustering algorithm (Dhillon, 2001).

Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

Supports sparse matrices, as long as they are nonnegative.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html)

## Constructors

### new SpectralCoclustering()

> **new SpectralCoclustering**(`opts`?): [`SpectralCoclustering`](SpectralCoclustering.md)

#### Parameters

• **opts?**

• **opts.init?**: `ArrayLike`[]

Method for initialization of k-means algorithm; defaults to ‘k-means++’.

**Default Value**

`'k-means++'`

• **opts.mini\_batch?**: `boolean`

Whether to use mini-batch k-means, which is faster but may get different results.

**Default Value**

`false`

• **opts.n\_clusters?**: `number`

The number of biclusters to find.

**Default Value**

`3`

• **opts.n\_init?**: `number`

Number of random initializations that are tried with the k-means algorithm.

If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.

**Default Value**

`10`

• **opts.n\_svd\_vecs?**: `number`

Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized`.

• **opts.random\_state?**: `number`

Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See Glossary.

• **opts.svd\_method?**: `"randomized"` \| `"arpack"`

Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, use [`sklearn.utils.extmath.randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, use [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.14.1)"), which is more accurate, but possibly slower in some cases.

**Default Value**

`'randomized'`

#### Returns

[`SpectralCoclustering`](SpectralCoclustering.md)

#### Defined in

[generated/cluster/SpectralCoclustering.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L23)

## Accessors

### column\_labels\_

#### Get Signature

> **get** **column\_labels\_**(): `Promise`\<`ArrayLike`\>

The bicluster label of each column.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L427)

***

### columns\_

#### Get Signature

> **get** **columns\_**(): `Promise`\<`ArrayLike`[]\>

Results of the clustering, like `rows`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L373)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L481)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L454)

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

[generated/cluster/SpectralCoclustering.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L81)

***

### row\_labels\_

#### Get Signature

> **get** **row\_labels\_**(): `Promise`\<`ArrayLike`\>

The bicluster label of each row.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L400)

***

### rows\_

#### Get Signature

> **get** **rows\_**(): `Promise`\<`ArrayLike`[]\>

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L346)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L137)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Create a biclustering for X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L154)

***

### get\_indices()

> **get\_indices**(`opts`): `Promise`\<`ArrayLike`\>

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Parameters

• **opts**

• **opts.i?**: `number`

The index of the cluster.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L195)

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

[generated/cluster/SpectralCoclustering.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L233)

***

### get\_shape()

> **get\_shape**(`opts`): `Promise`\<`number`\>

Shape of the `i`’th bicluster.

#### Parameters

• **opts**

• **opts.i?**: `number`

The index of the cluster.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L269)

***

### get\_submatrix()

> **get\_submatrix**(`opts`): `Promise`\<`ArrayLike`[]\>

Return the submatrix corresponding to bicluster `i`.

#### Parameters

• **opts**

• **opts.data?**: `ArrayLike`[]

The data.

• **opts.i?**: `number`

The index of the cluster.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L305)

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

[generated/cluster/SpectralCoclustering.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L94)
