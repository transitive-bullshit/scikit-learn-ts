**sklearn** • **Docs**

***

An ensemble of totally random trees.

An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

The dimensionality of the resulting representation is `n\_out <= n\_estimators \* max\_leaf\_nodes`. If `max\_leaf\_nodes \== None`, the number of leaf nodes is at most `n\_estimators \* 2 \*\* max\_depth`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html)

## Constructors

### new RandomTreesEmbedding()

> **new RandomTreesEmbedding**(`opts`?): [`RandomTreesEmbedding`](RandomTreesEmbedding.md)

#### Parameters

• **opts?**

• **opts.max\_depth?**: `number`

The maximum depth of each tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

**Default Value**

`5`

• **opts.max\_leaf\_nodes?**: `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

• **opts.min\_impurity\_decrease?**: `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

**Default Value**

`0`

• **opts.min\_samples\_leaf?**: `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

**Default Value**

`1`

• **opts.min\_samples\_split?**: `number`

The minimum number of samples required to split an internal node:

**Default Value**

`2`

• **opts.min\_weight\_fraction\_leaf?**: `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

**Default Value**

`0`

• **opts.n\_estimators?**: `number`

Number of trees in the forest.

**Default Value**

`100`

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit"), [`transform`](#sklearn.ensemble.RandomTreesEmbedding.transform "sklearn.ensemble.RandomTreesEmbedding.transform"), [`decision\_path`](#sklearn.ensemble.RandomTreesEmbedding.decision_path "sklearn.ensemble.RandomTreesEmbedding.decision_path") and [`apply`](#sklearn.ensemble.RandomTreesEmbedding.apply "sklearn.ensemble.RandomTreesEmbedding.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.random\_state?**: `number`

Controls the generation of the random `y` used to fit the trees and the draw of the splits for each feature at the trees’ nodes. See Glossary for details.

• **opts.sparse\_output?**: `boolean`

Whether or not to return a sparse CSR matrix, as default behavior, or to return a dense array compatible with dense pipeline operators.

**Default Value**

`true`

• **opts.verbose?**: `number`

Controls the verbosity when fitting and predicting.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See Glossary and Fitting additional trees for details.

**Default Value**

`false`

#### Returns

[`RandomTreesEmbedding`](RandomTreesEmbedding.md)

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L21)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L533)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L560)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L614)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L587)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

The number of outputs when `fit` is performed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L641)

***

### one\_hot\_encoder\_

#### Get Signature

> **get** **one\_hot\_encoder\_**(): `Promise`\<`any`\>

One-hot encoder used to create the sparse embedding.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L668)

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

[generated/ensemble/RandomTreesEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L112)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L185)

***

### decision\_path()

> **decision\_path**(`opts`): `Promise`\<`any`[]\>

Return the decision path in the forest.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L219)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L168)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit estimator.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: `ArrayLike`

The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L255)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit estimator and transform dataset.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: `ArrayLike`

Input data used to build forests. Use `dtype=np.float32` for maximum efficiency.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L299)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit").

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L345)

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

[generated/ensemble/RandomTreesEmbedding.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L383)

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

[generated/ensemble/RandomTreesEmbedding.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L125)

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

[generated/ensemble/RandomTreesEmbedding.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L423)

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

[generated/ensemble/RandomTreesEmbedding.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L461)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`[]\>

Transform dataset.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data to be transformed. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csr\_matrix` for maximum efficiency.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L497)
