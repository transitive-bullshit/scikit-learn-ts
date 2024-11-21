# Class: DistanceMetric

Uniform interface for fast distance metric functions.

The `DistanceMetric` class provides a convenient way to compute pairwise distances between samples. It supports various distance metrics, such as Euclidean distance, Manhattan distance, and more.

The `pairwise` method can be used to compute pairwise distances between samples in the input arrays. It returns a distance matrix representing the distances between all pairs of samples.

The [`get_metric`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") method allows you to retrieve a specific metric using its string identifier.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)

## Constructors

### new DistanceMetric()

> **new DistanceMetric**(`opts`?): [`DistanceMetric`](DistanceMetric.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.dtype`?

</td>
<td>

`any`

</td>
<td>

The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.

</td>
</tr>
<tr>
<td>

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.

</td>
</tr>
<tr>
<td>

`opts.metric`?

</td>
<td>

`string`

</td>
<td>

The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.

</td>
</tr>
</tbody>
</table>

#### Returns

[`DistanceMetric`](DistanceMetric.md)

#### Defined in

[generated/metrics/DistanceMetric.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/metrics/DistanceMetric.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/metrics/DistanceMetric.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/metrics/DistanceMetric.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L25) |
| `id` | `string` | `undefined` | [generated/metrics/DistanceMetric.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L22) |
| `opts` | `any` | `undefined` | [generated/metrics/DistanceMetric.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L23) |

## Accessors

### metric\_obj

#### Get Signature

> **get** **metric\_obj**(): `Promise`\<`any`\>

An instance of the requested distance metric class.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L162)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/metrics/DistanceMetric.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L49)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L101)

***

### get\_metric()

> **get\_metric**(`opts`): `Promise`\<`any`\>

Get the given distance metric from the string identifier.

See the docstring of DistanceMetric for a list of available metrics.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.dtype`?

</td>
<td>

`any`

</td>
<td>

The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.

</td>
</tr>
<tr>
<td>

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.

</td>
</tr>
<tr>
<td>

`opts.metric`?

</td>
<td>

`string`

</td>
<td>

The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L120)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/DistanceMetric.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L62)
