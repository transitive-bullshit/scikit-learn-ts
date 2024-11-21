**sklearn** • **Docs**

***

Spectral biclustering (Kluger, 2003).

Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html)

## Constructors

### new SpectralBiclustering()

> **new SpectralBiclustering**(`opts`?): [`SpectralBiclustering`](SpectralBiclustering.md)

#### Parameters

• **opts?**

• **opts.init?**: `ArrayLike`[] \| `"k-means++"` \| `"random"`

Method for initialization of k-means algorithm; defaults to ‘k-means++’.

**Default Value**

`'k-means++'`

• **opts.method?**: `"bistochastic"` \| `"scale"` \| `"log"`

Method of normalizing and converting singular vectors into biclusters. May be one of ‘scale’, ‘bistochastic’, or ‘log’. The authors recommend using ‘log’. If the data is sparse, however, log normalization will not work, which is why the default is ‘bistochastic’.

**Default Value**

`'bistochastic'`

• **opts.mini\_batch?**: `boolean`

Whether to use mini-batch k-means, which is faster but may get different results.

**Default Value**

`false`

• **opts.n\_best?**: `number`

Number of best singular vectors to which to project the data for clustering.

**Default Value**

`3`

• **opts.n\_clusters?**: `number`

The number of row and column clusters in the checkerboard structure.

**Default Value**

`3`

• **opts.n\_components?**: `number`

Number of singular vectors to check.

**Default Value**

`6`

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

Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, uses [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, uses `scipy.sparse.linalg.svds`, which is more accurate, but possibly slower in some cases.

**Default Value**

`'randomized'`

#### Returns

[`SpectralBiclustering`](SpectralBiclustering.md)

#### Defined in

[generated/cluster/SpectralBiclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L19)

## Accessors

### column\_labels\_

#### Get Signature

> **get** **column\_labels\_**(): `Promise`\<`ArrayLike`\>

Column partition labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L444)

***

### columns\_

#### Get Signature

> **get** **columns\_**(): `Promise`\<`ArrayLike`[]\>

Results of the clustering, like `rows`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L390)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L498)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L471)

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

[generated/cluster/SpectralBiclustering.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L98)

***

### row\_labels\_

#### Get Signature

> **get** **row\_labels\_**(): `Promise`\<`ArrayLike`\>

Row partition labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L417)

***

### rows\_

#### Get Signature

> **get** **rows\_**(): `Promise`\<`ArrayLike`[]\>

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L363)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L154)

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

[generated/cluster/SpectralBiclustering.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L171)

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

[generated/cluster/SpectralBiclustering.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L212)

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

[generated/cluster/SpectralBiclustering.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L250)

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

[generated/cluster/SpectralBiclustering.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L286)

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

[generated/cluster/SpectralBiclustering.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L322)

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

[generated/cluster/SpectralBiclustering.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L111)
