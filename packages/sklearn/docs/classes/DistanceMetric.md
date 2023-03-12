[sklearn](../readme.md) / [Exports](../modules.md) / DistanceMetric

# Class: DistanceMetric

DistanceMetric class

This class provides a uniform interface to fast distance metric functions. The various metrics can be accessed via the [`get\_metric`](#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") class method and the metric string identifier (see below).

Examples

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html

## Table of contents

### Constructors

- [constructor](DistanceMetric.md#constructor)

### Properties

- [\_isDisposed](DistanceMetric.md#_isdisposed)
- [\_isInitialized](DistanceMetric.md#_isinitialized)
- [\_py](DistanceMetric.md#_py)
- [id](DistanceMetric.md#id)
- [opts](DistanceMetric.md#opts)

### Accessors

- [py](DistanceMetric.md#py)

### Methods

- [dispose](DistanceMetric.md#dispose)
- [dist\_to\_rdist](DistanceMetric.md#dist_to_rdist)
- [get\_metric](DistanceMetric.md#get_metric)
- [init](DistanceMetric.md#init)
- [pairwise](DistanceMetric.md#pairwise)
- [rdist\_to\_dist](DistanceMetric.md#rdist_to_dist)

## Constructors

### constructor

• **new DistanceMetric**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DistanceMetricOptions`](../interfaces/DistanceMetricOptions.md) |

#### Defined in

[generated/metrics/DistanceMetric.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/DistanceMetric.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/DistanceMetric.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/DistanceMetric.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/metrics/DistanceMetric.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/metrics/DistanceMetric.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/metrics/DistanceMetric.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/metrics/DistanceMetric.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L83)

___

### dist\_to\_rdist

▸ **dist_to_rdist**(`opts`): `Promise`<`any`\>

Convert the true distance to the rank-preserving surrogate distance.

The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DistanceMetricDistToRdistOptions`](../interfaces/DistanceMetricDistToRdistOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L102)

___

### get\_metric

▸ **get_metric**(`opts`): `Promise`<`any`\>

Get the given distance metric from the string identifier.

See the docstring of DistanceMetric for a list of available metrics.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DistanceMetricGetMetricOptions`](../interfaces/DistanceMetricGetMetricOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L132)

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

[generated/metrics/DistanceMetric.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L43)

___

### pairwise

▸ **pairwise**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute the pairwise distances between X and Y

This is a convenience routine for the sake of testing. For many metrics, the utilities in scipy.spatial.distance.cdist and scipy.spatial.distance.pdist will be faster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DistanceMetricPairwiseOptions`](../interfaces/DistanceMetricPairwiseOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/metrics/DistanceMetric.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L162)

___

### rdist\_to\_dist

▸ **rdist_to_dist**(`opts`): `Promise`<`any`\>

Convert the rank-preserving surrogate distance to the distance.

The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DistanceMetricRdistToDistOptions`](../interfaces/DistanceMetricRdistToDistOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L194)
