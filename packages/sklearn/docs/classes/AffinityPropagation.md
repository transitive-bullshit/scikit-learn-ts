[sklearn](../readme.md) / [Exports](../modules.md) / AffinityPropagation

# Class: AffinityPropagation

Perform Affinity Propagation Clustering of data.

Read more in the [User Guide](../clustering.html#affinity-propagation).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html

## Table of contents

### Constructors

- [constructor](AffinityPropagation.md#constructor)

### Properties

- [\_isDisposed](AffinityPropagation.md#_isdisposed)
- [\_isInitialized](AffinityPropagation.md#_isinitialized)
- [\_py](AffinityPropagation.md#_py)
- [id](AffinityPropagation.md#id)
- [opts](AffinityPropagation.md#opts)

### Accessors

- [affinity\_matrix\_](AffinityPropagation.md#affinity_matrix_)
- [cluster\_centers\_](AffinityPropagation.md#cluster_centers_)
- [cluster\_centers\_indices\_](AffinityPropagation.md#cluster_centers_indices_)
- [feature\_names\_in\_](AffinityPropagation.md#feature_names_in_)
- [labels\_](AffinityPropagation.md#labels_)
- [n\_features\_in\_](AffinityPropagation.md#n_features_in_)
- [n\_iter\_](AffinityPropagation.md#n_iter_)
- [py](AffinityPropagation.md#py)

### Methods

- [dispose](AffinityPropagation.md#dispose)
- [fit](AffinityPropagation.md#fit)
- [fit\_predict](AffinityPropagation.md#fit_predict)
- [init](AffinityPropagation.md#init)
- [predict](AffinityPropagation.md#predict)

## Constructors

### constructor

• **new AffinityPropagation**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AffinityPropagationOptions`](../interfaces/AffinityPropagationOptions.md) |

#### Defined in

[generated/cluster/AffinityPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/AffinityPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/AffinityPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/AffinityPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/AffinityPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/AffinityPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L17)

## Accessors

### affinity\_matrix\_

• `get` **affinity_matrix_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Stores the affinity matrix used in `fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L285)

___

### cluster\_centers\_

• `get` **cluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Cluster centers (if affinity != `precomputed`).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L231)

___

### cluster\_centers\_indices\_

• `get` **cluster_centers_indices_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of cluster centers.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L204)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L366)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L258)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L339)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations taken to converge.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L312)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/AffinityPropagation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/AffinityPropagation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the clustering from features, or affinity matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AffinityPropagationFitOptions`](../interfaces/AffinityPropagationFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L110)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit clustering from features/affinity matrix; return cluster labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AffinityPropagationFitPredictOptions`](../interfaces/AffinityPropagationFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L140)

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

[generated/cluster/AffinityPropagation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the closest cluster each sample in X belongs to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AffinityPropagationPredictOptions`](../interfaces/AffinityPropagationPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AffinityPropagation.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L174)
