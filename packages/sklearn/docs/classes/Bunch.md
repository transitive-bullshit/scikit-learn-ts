[sklearn](../readme.md) / [Exports](../modules.md) / Bunch

# Class: Bunch

Container object exposing keys as attributes.

Bunch objects are sometimes used as an output for functions and methods. They extend dictionaries by enabling values to be accessed by key, `bunch\["value\_key"\]`, or by an attribute, `bunch.value\_key`.

Examples

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.utils.Bunch.html

## Table of contents

### Constructors

- [constructor](Bunch.md#constructor)

### Properties

- [\_isDisposed](Bunch.md#_isdisposed)
- [\_isInitialized](Bunch.md#_isinitialized)
- [\_py](Bunch.md#_py)
- [id](Bunch.md#id)
- [opts](Bunch.md#opts)

### Accessors

- [py](Bunch.md#py)

### Methods

- [clear](Bunch.md#clear)
- [copy](Bunch.md#copy)
- [dispose](Bunch.md#dispose)
- [fromkeys](Bunch.md#fromkeys)
- [get](Bunch.md#get)
- [init](Bunch.md#init)
- [items](Bunch.md#items)
- [keys](Bunch.md#keys)
- [pop](Bunch.md#pop)
- [popitem](Bunch.md#popitem)
- [setdefault](Bunch.md#setdefault)
- [update](Bunch.md#update)
- [values](Bunch.md#values)

## Constructors

### constructor

• **new Bunch**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BunchOptions`](../interfaces/BunchOptions.md) |

#### Defined in

[generated/utils/Bunch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/utils/Bunch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/utils/Bunch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/utils/Bunch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/utils/Bunch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/utils/Bunch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/utils/Bunch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/utils/Bunch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L34)

## Methods

### clear

▸ **clear**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchClearOptions`](../interfaces/BunchClearOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L94)

___

### copy

▸ **copy**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchCopyOptions`](../interfaces/BunchCopyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L117)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/utils/Bunch.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L80)

___

### fromkeys

▸ **fromkeys**(`opts`): `Promise`<`any`\>

Create a new dictionary with keys from iterable and values set to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchFromkeysOptions`](../interfaces/BunchFromkeysOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L143)

___

### get

▸ **get**(`opts`): `Promise`<`any`\>

Return the value for key if key is in the dictionary, else default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchGetOptions`](../interfaces/BunchGetOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L169)

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

[generated/utils/Bunch.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L43)

___

### items

▸ **items**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchItemsOptions`](../interfaces/BunchItemsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L192)

___

### keys

▸ **keys**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchKeysOptions`](../interfaces/BunchKeysOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L215)

___

### pop

▸ **pop**(`opts`): `Promise`<`any`\>

If key is not found, default is returned if given, otherwise KeyError is raised

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchPopOptions`](../interfaces/BunchPopOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L241)

___

### popitem

▸ **popitem**(`opts`): `Promise`<`any`\>

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchPopitemOptions`](../interfaces/BunchPopitemOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L269)

___

### setdefault

▸ **setdefault**(`opts`): `Promise`<`any`\>

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchSetdefaultOptions`](../interfaces/BunchSetdefaultOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L297)

___

### update

▸ **update**(`opts`): `Promise`<`any`\>

If E is present and has a .keys() method, then does: for k in E: D\[k\] = E\[k\] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k\] = v In either case, this is followed by: for k in F: D\[k\] = F\[k\]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchUpdateOptions`](../interfaces/BunchUpdateOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L323)

___

### values

▸ **values**(`opts`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchValuesOptions`](../interfaces/BunchValuesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/Bunch.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/Bunch.ts#L346)
