[**sklearn**](../README.md) • **Docs**

***

Uniform interface for fast distance metric functions.

The `DistanceMetric` class provides a convenient way to compute pairwise distances between samples. It supports various distance metrics, such as Euclidean distance, Manhattan distance, and more.

The `pairwise` method can be used to compute pairwise distances between samples in the input arrays. It returns a distance matrix representing the distances between all pairs of samples.

The [`get\_metric`](#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") method allows you to retrieve a specific metric using its string identifier.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)

## Constructors

### new DistanceMetric()

> **new DistanceMetric**(`opts`?): [`DistanceMetric`](DistanceMetric.md)

#### Parameters

• **opts?**

• **opts.dtype?**: `any`

The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.

• **opts.kwargs?**: `any`

Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.

• **opts.metric?**: `string`

The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.

#### Returns

[`DistanceMetric`](DistanceMetric.md)

#### Defined in

[generated/metrics/DistanceMetric.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/DistanceMetric.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/DistanceMetric.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/DistanceMetric.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/DistanceMetric.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/DistanceMetric.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L23)

## Accessors

### metric\_obj

#### Get Signature

> **get** **metric\_obj**(): `Promise`\<`any`\>

An instance of the requested distance metric class.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L162)

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

[generated/metrics/DistanceMetric.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L49)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L101)

***

### get\_metric()

> **get\_metric**(`opts`): `Promise`\<`any`\>

Get the given distance metric from the string identifier.

See the docstring of DistanceMetric for a list of available metrics.

#### Parameters

• **opts**

• **opts.dtype?**: `any`

The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.

• **opts.kwargs?**: `any`

Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.

• **opts.metric?**: `string`

The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L120)

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

[generated/metrics/DistanceMetric.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L62)
