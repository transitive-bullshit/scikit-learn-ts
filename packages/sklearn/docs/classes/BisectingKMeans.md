[sklearn](../readme.md) / [Exports](../modules.md) / BisectingKMeans

# Class: BisectingKMeans

Bisecting K-Means clustering.

Read more in the [User Guide](../clustering.html#bisect-k-means).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.BisectingKMeans.html

## Table of contents

### Constructors

- [constructor](BisectingKMeans.md#constructor)

### Properties

- [\_isDisposed](BisectingKMeans.md#_isdisposed)
- [\_isInitialized](BisectingKMeans.md#_isinitialized)
- [\_py](BisectingKMeans.md#_py)
- [id](BisectingKMeans.md#id)
- [opts](BisectingKMeans.md#opts)

### Accessors

- [cluster\_centers\_](BisectingKMeans.md#cluster_centers_)
- [feature\_names\_in\_](BisectingKMeans.md#feature_names_in_)
- [inertia\_](BisectingKMeans.md#inertia_)
- [labels\_](BisectingKMeans.md#labels_)
- [n\_features\_in\_](BisectingKMeans.md#n_features_in_)
- [py](BisectingKMeans.md#py)

### Methods

- [dispose](BisectingKMeans.md#dispose)
- [fit](BisectingKMeans.md#fit)
- [fit\_predict](BisectingKMeans.md#fit_predict)
- [fit\_transform](BisectingKMeans.md#fit_transform)
- [get\_feature\_names\_out](BisectingKMeans.md#get_feature_names_out)
- [init](BisectingKMeans.md#init)
- [predict](BisectingKMeans.md#predict)
- [score](BisectingKMeans.md#score)
- [set\_output](BisectingKMeans.md#set_output)
- [transform](BisectingKMeans.md#transform)

## Constructors

### constructor

• **new BisectingKMeans**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BisectingKMeansOptions`](../interfaces/BisectingKMeansOptions.md) |

#### Defined in

[generated/cluster/BisectingKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/BisectingKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/BisectingKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/BisectingKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/BisectingKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/BisectingKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L17)

## Accessors

### cluster\_centers\_

• `get` **cluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L367)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L467)

___

### inertia\_

• `get` **inertia_**(): `Promise`<`number`\>

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L417)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L392)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L442)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/BisectingKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/BisectingKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute bisecting k-means clustering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitOptions`](../interfaces/BisectingKMeansFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L106)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitPredictOptions`](../interfaces/BisectingKMeansFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L140)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitTransformOptions`](../interfaces/BisectingKMeansFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L174)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansGetFeatureNamesOutOptions`](../interfaces/BisectingKMeansGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L210)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict which cluster each sample in X belongs to.

Prediction is made by going down the hierarchical tree in searching of closest leaf cluster.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansPredictOptions`](../interfaces/BisectingKMeansPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L247)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Opposite of the value of X on the K-means objective.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansScoreOptions`](../interfaces/BisectingKMeansScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L275)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansSetOutputOptions`](../interfaces/BisectingKMeansSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L309)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansTransformOptions`](../interfaces/BisectingKMeansTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/BisectingKMeans.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L339)
