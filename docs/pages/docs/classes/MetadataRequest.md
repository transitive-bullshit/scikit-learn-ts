# Class: MetadataRequest

Contains the metadata request info of a consumer.

Instances of `MethodMetadataRequest` are used in this class for each available method under `metadatarequest.{method}`.

Consumer-only classes such as simple estimators return a serialized version of this class as the output of `get_metadata_routing()`.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html)

## Constructors

### new MetadataRequest()

> **new MetadataRequest**(`opts`?): [`MetadataRequest`](MetadataRequest.md)

**Parameters**

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

`opts.owner`?

</td>
<td>

`string`

</td>
<td>

The name of the object to which these requests belong.

</td>
</tr>
</tbody>
</table>

**Returns** [`MetadataRequest`](MetadataRequest.md)

**Defined in** [generated/utils/metadata\_routing/MetadataRequest.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/utils/metadata\_routing/MetadataRequest.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/utils/metadata\_routing/MetadataRequest.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/utils/metadata\_routing/MetadataRequest.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L21) |
| `id` | `string` | `undefined` | [generated/utils/metadata\_routing/MetadataRequest.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L18) |
| `opts` | `any` | `undefined` | [generated/utils/metadata\_routing/MetadataRequest.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L19) |

## Accessors

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

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

**Returns** `void`

**Defined in** [generated/utils/metadata\_routing/MetadataRequest.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L35)

## Methods

### consumes()

> **consumes**(`opts`): `Promise`\<`any`\>

Check whether the given parameters are consumed by the given method.

**Parameters**

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

`opts.method`?

</td>
<td>

`string`

</td>
<td>

The name of the method to check.

</td>
</tr>
<tr>
<td>

`opts.params`?

</td>
<td>

`any`

</td>
<td>

An iterable of parameters to check.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/metadata\_routing/MetadataRequest.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L104)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/utils/metadata\_routing/MetadataRequest.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L87)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

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

**Returns** `Promise`\<`void`\>

**Defined in** [generated/utils/metadata\_routing/MetadataRequest.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L48)
