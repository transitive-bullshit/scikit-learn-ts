# Bunch

Container object exposing keys as attributes.

Bunch objects are sometimes used as an output for functions and methods. They extend dictionaries by enabling values to be accessed by key, `bunch\["value\_key"\]`, or by an attribute, `bunch.value\_key`.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.Bunch.html)

## Constructors

## constructor()

### Signature

```ts
new Bunch(opts?: BunchOptions): Bunch;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BunchOptions`](../interfaces/BunchOptions.md) |

### Returns

[`Bunch`](Bunch.md)

Defined in:  [generated/utils/Bunch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/utils/Bunch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/utils/Bunch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/utils/Bunch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L21)

### id

> `string`

Defined in:  [generated/utils/Bunch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L18)

### opts

> `any`

Defined in:  [generated/utils/Bunch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/utils/Bunch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L30)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/utils/Bunch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L34)

Defined in:  [generated/utils/Bunch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L30) [generated/utils/Bunch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L34)

## Methods

### clear()

#### Signature

```ts
clear(opts: BunchClearOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchClearOptions`](../interfaces/BunchClearOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L94)

### copy()

#### Signature

```ts
copy(opts: BunchCopyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchCopyOptions`](../interfaces/BunchCopyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L117)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/utils/Bunch.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L80)

### fromkeys()

Create a new dictionary with keys from iterable and values set to value.

#### Signature

```ts
fromkeys(opts: BunchFromkeysOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchFromkeysOptions`](../interfaces/BunchFromkeysOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L143)

### get()

Return the value for key if key is in the dictionary, else default.

#### Signature

```ts
get(opts: BunchGetOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchGetOptions`](../interfaces/BunchGetOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L169)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/utils/Bunch.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L43)

### items()

#### Signature

```ts
items(opts: BunchItemsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchItemsOptions`](../interfaces/BunchItemsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L192)

### keys()

#### Signature

```ts
keys(opts: BunchKeysOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchKeysOptions`](../interfaces/BunchKeysOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L215)

### pop()

If key is not found, default is returned if given, otherwise KeyError is raised

#### Signature

```ts
pop(opts: BunchPopOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchPopOptions`](../interfaces/BunchPopOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L241)

### popitem()

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

#### Signature

```ts
popitem(opts: BunchPopitemOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchPopitemOptions`](../interfaces/BunchPopitemOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L269)

### setdefault()

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

#### Signature

```ts
setdefault(opts: BunchSetdefaultOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchSetdefaultOptions`](../interfaces/BunchSetdefaultOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L297)

### update()

If E is present and has a .keys() method, then does: for k in E: D\[k\] = E\[k\] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k\] = v In either case, this is followed by: for k in F: D\[k\] = F\[k\]

#### Signature

```ts
update(opts: BunchUpdateOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchUpdateOptions`](../interfaces/BunchUpdateOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L323)

### values()

#### Signature

```ts
values(opts: BunchValuesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BunchValuesOptions`](../interfaces/BunchValuesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/Bunch.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/utils/Bunch.ts#L346)
