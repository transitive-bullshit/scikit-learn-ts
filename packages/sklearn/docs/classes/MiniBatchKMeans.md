[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchKMeans

# Class: MiniBatchKMeans

Mini-Batch K-Means clustering.

Read more in the [User Guide](../clustering.html#mini-batch-kmeans).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html

## Table of contents

### Constructors

- [constructor](MiniBatchKMeans.md#constructor)

### Properties

- [\_isDisposed](MiniBatchKMeans.md#_isdisposed)
- [\_isInitialized](MiniBatchKMeans.md#_isinitialized)
- [\_py](MiniBatchKMeans.md#_py)
- [id](MiniBatchKMeans.md#id)
- [opts](MiniBatchKMeans.md#opts)

### Accessors

- [cluster\_centers\_](MiniBatchKMeans.md#cluster_centers_)
- [feature\_names\_in\_](MiniBatchKMeans.md#feature_names_in_)
- [inertia\_](MiniBatchKMeans.md#inertia_)
- [labels\_](MiniBatchKMeans.md#labels_)
- [n\_features\_in\_](MiniBatchKMeans.md#n_features_in_)
- [n\_iter\_](MiniBatchKMeans.md#n_iter_)
- [n\_steps\_](MiniBatchKMeans.md#n_steps_)
- [py](MiniBatchKMeans.md#py)

### Methods

- [dispose](MiniBatchKMeans.md#dispose)
- [fit](MiniBatchKMeans.md#fit)
- [fit\_predict](MiniBatchKMeans.md#fit_predict)
- [fit\_transform](MiniBatchKMeans.md#fit_transform)
- [get\_feature\_names\_out](MiniBatchKMeans.md#get_feature_names_out)
- [init](MiniBatchKMeans.md#init)
- [partial\_fit](MiniBatchKMeans.md#partial_fit)
- [predict](MiniBatchKMeans.md#predict)
- [score](MiniBatchKMeans.md#score)
- [set\_output](MiniBatchKMeans.md#set_output)
- [transform](MiniBatchKMeans.md#transform)

## Constructors

### constructor

• **new MiniBatchKMeans**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchKMeansOptions`](../interfaces/MiniBatchKMeansOptions.md) |

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L17)

## Accessors

### cluster\_centers\_

• `get` **cluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coordinates of cluster centers.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L405)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L555)

___

### inertia\_

• `get` **inertia_**(): `Promise`<`number`\>

The value of the inertia criterion associated with the chosen partition if compute\_labels is set to `true`. If compute\_labels is set to `false`, it’s an approximation of the inertia based on an exponentially weighted average of the batch inertiae. The inertia is defined as the sum of square distances of samples to their cluster center, weighted by the sample weights if provided.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L455)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point (if compute\_labels is set to `true`).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L430)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L530)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations over the full dataset.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L480)

___

### n\_steps\_

• `get` **n_steps_**(): `Promise`<`number`\>

Number of minibatches processed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L505)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the centroids on X by chunking it into mini-batches.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitOptions`](../interfaces/MiniBatchKMeansFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L112)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitPredictOptions`](../interfaces/MiniBatchKMeansFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L146)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitTransformOptions`](../interfaces/MiniBatchKMeansFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L180)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansGetFeatureNamesOutOptions`](../interfaces/MiniBatchKMeansGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L216)

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

[generated/cluster/MiniBatchKMeans.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Update k means estimate on a single mini-batch X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansPartialFitOptions`](../interfaces/MiniBatchKMeansPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L249)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansPredictOptions`](../interfaces/MiniBatchKMeansPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L283)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Opposite of the value of X on the K-means objective.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansScoreOptions`](../interfaces/MiniBatchKMeansScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L313)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansSetOutputOptions`](../interfaces/MiniBatchKMeansSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L347)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansTransformOptions`](../interfaces/MiniBatchKMeansTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L377)
