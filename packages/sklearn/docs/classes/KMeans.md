[sklearn](../readme.md) / [Exports](../modules.md) / KMeans

# Class: KMeans

K-Means clustering.

Read more in the [User Guide](../clustering.html#k-means).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html

## Table of contents

### Constructors

- [constructor](KMeans.md#constructor)

### Properties

- [\_isDisposed](KMeans.md#_isdisposed)
- [\_isInitialized](KMeans.md#_isinitialized)
- [\_py](KMeans.md#_py)
- [id](KMeans.md#id)
- [opts](KMeans.md#opts)

### Accessors

- [cluster\_centers\_](KMeans.md#cluster_centers_)
- [feature\_names\_in\_](KMeans.md#feature_names_in_)
- [inertia\_](KMeans.md#inertia_)
- [labels\_](KMeans.md#labels_)
- [n\_features\_in\_](KMeans.md#n_features_in_)
- [n\_iter\_](KMeans.md#n_iter_)
- [py](KMeans.md#py)

### Methods

- [dispose](KMeans.md#dispose)
- [fit](KMeans.md#fit)
- [fit\_predict](KMeans.md#fit_predict)
- [fit\_transform](KMeans.md#fit_transform)
- [get\_feature\_names\_out](KMeans.md#get_feature_names_out)
- [init](KMeans.md#init)
- [predict](KMeans.md#predict)
- [score](KMeans.md#score)
- [set\_output](KMeans.md#set_output)
- [transform](KMeans.md#transform)

## Constructors

### constructor

• **new KMeans**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KMeansOptions`](../interfaces/KMeansOptions.md) |

#### Defined in

[generated/cluster/KMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/KMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/KMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/KMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/KMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/KMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L17)

## Accessors

### cluster\_centers\_

• `get` **cluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/KMeans.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L361)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/KMeans.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L476)

___

### inertia\_

• `get` **inertia_**(): `Promise`<`number`\>

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L408)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/KMeans.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L386)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L453)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L431)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/KMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/KMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/KMeans.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L88)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute k-means clustering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansFitOptions`](../interfaces/KMeansFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L105)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansFitPredictOptions`](../interfaces/KMeansFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/KMeans.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L139)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansFitTransformOptions`](../interfaces/KMeansFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/KMeans.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L173)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansGetFeatureNamesOutOptions`](../interfaces/KMeansGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L207)

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

[generated/cluster/KMeans.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansPredictOptions`](../interfaces/KMeansPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/KMeans.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L239)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Opposite of the value of X on the K-means objective.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansScoreOptions`](../interfaces/KMeansScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/KMeans.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L269)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansSetOutputOptions`](../interfaces/KMeansSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/KMeans.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L303)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KMeansTransformOptions`](../interfaces/KMeansTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/KMeans.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L333)
