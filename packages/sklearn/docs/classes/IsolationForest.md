[**sklearn**](../README.md) • **Docs**

***

Isolation Forest Algorithm.

Return the anomaly score of each sample using the IsolationForest algorithm

The IsolationForest ‘isolates’ observations by randomly selecting a feature and then randomly selecting a split value between the maximum and minimum values of the selected feature.

Since recursive partitioning can be represented by a tree structure, the number of splittings required to isolate a sample is equivalent to the path length from the root node to the terminating node.

This path length, averaged over a forest of such random trees, is a measure of normality and our decision function.

Random partitioning produces noticeably shorter paths for anomalies. Hence, when a forest of random trees collectively produce shorter path lengths for particular samples, they are highly likely to be anomalies.

Read more in the [User Guide](../outlier_detection.html#isolation-forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html)

## Constructors

### new IsolationForest()

> **new IsolationForest**(`opts`?): [`IsolationForest`](IsolationForest.md)

#### Parameters

• **opts?**

• **opts.bootstrap?**: `boolean`

If `true`, individual trees are fit on random subsets of the training data sampled with replacement. If `false`, sampling without replacement is performed.

**Default Value**

`false`

• **opts.contamination?**: `number` \| `"auto"`

The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Used when fitting to define the threshold on the scores of the samples.

**Default Value**

`'auto'`

• **opts.max\_features?**: `number`

The number of features to draw from X to train each base estimator.

**Default Value**

`1`

• **opts.max\_samples?**: `number` \| `"auto"`

If int, then draw `max\_samples` samples.

**Default Value**

`'auto'`

• **opts.n\_estimators?**: `number`

The number of base estimators in the ensemble.

**Default Value**

`100`

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.IsolationForest.fit "sklearn.ensemble.IsolationForest.fit") and [`predict`](#sklearn.ensemble.IsolationForest.predict "sklearn.ensemble.IsolationForest.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.random\_state?**: `number`

Controls the pseudo-randomness of the selection of the feature and split values for each branching step and each tree in the forest.

Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.verbose?**: `number`

Controls the verbosity of the tree building process.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`IsolationForest`](IsolationForest.md)

#### Defined in

[generated/ensemble/IsolationForest.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L33)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/IsolationForest.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L31)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/IsolationForest.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L30)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/IsolationForest.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L29)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/IsolationForest.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L26)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/IsolationForest.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L27)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L434)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L459)

***

### estimators\_features\_

#### Get Signature

> **get** **estimators\_features\_**(): `Promise`\<`any`\>

The subset of drawn features for each base estimator.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L484)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L584)

***

### max\_samples\_

#### Get Signature

> **get** **max\_samples\_**(): `Promise`\<`number`\>

The actual number of samples.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L509)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L559)

***

### offset\_

#### Get Signature

> **get** **offset\_**(): `Promise`\<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. `offset\_` is defined as follows. When the contamination parameter is set to “auto”, the offset is equal to -0.5 as the scores of inliers are close to 0 and the scores of outliers are close to -1. When a contamination parameter different than “auto” is provided, the offset is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L534)

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

[generated/ensemble/IsolationForest.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L99)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Average anomaly score of X of the base classifiers.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L172)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L151)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit estimator.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L206)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

• **opts**

• **opts.kwargs?**: `any`

Arguments to be passed to `fit`.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L250)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L294)

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

[generated/ensemble/IsolationForest.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L112)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict if a particular sample is an outlier or not.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L328)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Opposite of the anomaly score defined in the original paper.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L364)

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

[generated/ensemble/IsolationForest.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L400)
