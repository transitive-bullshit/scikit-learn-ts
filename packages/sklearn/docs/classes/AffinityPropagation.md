[**sklearn**](../README.md) • **Docs**

***

Perform Affinity Propagation Clustering of data.

Read more in the [User Guide](../clustering.html#affinity-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html)

## Constructors

### new AffinityPropagation()

> **new AffinityPropagation**(`opts`?): [`AffinityPropagation`](AffinityPropagation.md)

#### Parameters

• **opts?**

• **opts.affinity?**: `"euclidean"` \| `"precomputed"`

Which affinity to use. At the moment ‘precomputed’ and `euclidean` are supported. ‘euclidean’ uses the negative squared euclidean distance between points.

**Default Value**

`'euclidean'`

• **opts.convergence\_iter?**: `number`

Number of iterations with no change in the number of estimated clusters that stops the convergence.

**Default Value**

`15`

• **opts.copy?**: `boolean`

Make a copy of input data.

**Default Value**

`true`

• **opts.damping?**: `number`

Damping factor in the range `\[0.5, 1.0)` is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).

**Default Value**

`0.5`

• **opts.max\_iter?**: `number`

Maximum number of iterations.

**Default Value**

`200`

• **opts.preference?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Preferences for each point - points with larger values of preferences are more likely to be chosen as exemplars. The number of exemplars, ie of clusters, is influenced by the input preferences value. If the preferences are not passed as arguments, they will be set to the median of the input similarities.

• **opts.random\_state?**: `number`

Pseudo-random number generator to control the starting state. Use an int for reproducible results across function calls. See the [Glossary](../../glossary.html#term-random_state).

• **opts.verbose?**: `boolean`

Whether to be verbose.

**Default Value**

`false`

#### Returns

[`AffinityPropagation`](AffinityPropagation.md)

#### Defined in

[generated/cluster/AffinityPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/AffinityPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/AffinityPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/AffinityPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/AffinityPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/AffinityPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L17)

## Accessors

### affinity\_matrix\_

#### Get Signature

> **get** **affinity\_matrix\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Stores the affinity matrix used in `fit`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L386)

***

### cluster\_centers\_

#### Get Signature

> **get** **cluster\_centers\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Cluster centers (if affinity != `precomputed`).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L332)

***

### cluster\_centers\_indices\_

#### Get Signature

> **get** **cluster\_centers\_indices\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Indices of cluster centers.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L305)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L467)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Labels of each point.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L359)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L440)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations taken to converge.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L413)

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

[generated/cluster/AffinityPropagation.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L80)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the clustering from features, or affinity matrix.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L153)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Fit clustering from features/affinity matrix; return cluster labels.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L192)

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

[generated/cluster/AffinityPropagation.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L235)

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

[generated/cluster/AffinityPropagation.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L93)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict the closest cluster each sample in X belongs to.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data to predict. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L271)
