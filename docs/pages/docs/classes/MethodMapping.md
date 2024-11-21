# Class: MethodMapping

Stores the mapping between caller and callee methods for a router.

This class is primarily used in a `get_metadata_routing()` of a router object when defining the mapping between the router’s methods and a sub-object (a sub-estimator or a scorer).

Iterating through an instance of this class yields `MethodPair(caller, callee)` instances.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MethodMapping.html)

## Constructors

### new MethodMapping()

> **new MethodMapping**(`opts`?): [`MethodMapping`](MethodMapping.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.callee`? | `string` | Child object’s method name. This method is called in `caller`. |
| `opts.caller`? | `string` | Parent estimator’s method name in which the `callee` is called. |

**Returns** [`MethodMapping`](MethodMapping.md)

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/utils/metadata\_routing/MethodMapping.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/utils/metadata\_routing/MethodMapping.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/utils/metadata\_routing/MethodMapping.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L21) |
| `id` | `string` | `undefined` | [generated/utils/metadata\_routing/MethodMapping.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L18) |
| `opts` | `any` | `undefined` | [generated/utils/metadata\_routing/MethodMapping.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L19) |

## Accessors

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L40)

***

### self

**Get Signature**

> **get** **self**(): `Promise`\<`any`\>

Returns self.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L146)

## Methods

### add()

> **add**(`opts`): `Promise`\<`any`\>

Add a method mapping.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.callee`? | `string` | Child object’s method name. This method is called in `caller`. |
| `opts.caller`? | `string` | Parent estimator’s method name in which the `callee` is called. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L109)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L92)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/utils/metadata\_routing/MethodMapping.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/metadata_routing/MethodMapping.ts#L53)
