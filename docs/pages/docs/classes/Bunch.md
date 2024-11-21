**sklearn** • **Docs**

***

Container object exposing keys as attributes.

Bunch objects are sometimes used as an output for functions and methods. They extend dictionaries by enabling values to be accessed by key, `bunch\["value\_key"\]`, or by an attribute, `bunch.value\_key`.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.Bunch.html)

## Constructors

### new Bunch()

> **new Bunch**(`opts`?): [`Bunch`](Bunch.md)

#### Parameters

• **opts?**

#### Returns

[`Bunch`](Bunch.md)

#### Defined in

[generated/utils/Bunch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/utils/Bunch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/utils/Bunch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/utils/Bunch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/utils/Bunch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/utils/Bunch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L19)

## Accessors

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

[generated/utils/Bunch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L30)

## Methods

### clear()

> **clear**(`opts`): `Promise`\<`any`\>

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L94)

***

### copy()

> **copy**(`opts`): `Promise`\<`any`\>

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L117)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/utils/Bunch.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L80)

***

### fromkeys()

> **fromkeys**(`opts`): `Promise`\<`any`\>

Create a new dictionary with keys from iterable and values set to value.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L143)

***

### get()

> **get**(`opts`): `Promise`\<`any`\>

Return the value for key if key is in the dictionary, else default.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L169)

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

[generated/utils/Bunch.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L43)

***

### items()

> **items**(`opts`): `Promise`\<`any`\>

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L192)

***

### keys()

> **keys**(`opts`): `Promise`\<`any`\>

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L215)

***

### pop()

> **pop**(`opts`): `Promise`\<`any`\>

If key is not found, default is returned if given, otherwise KeyError is raised

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L241)

***

### popitem()

> **popitem**(`opts`): `Promise`\<`any`\>

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L269)

***

### setdefault()

> **setdefault**(`opts`): `Promise`\<`any`\>

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L297)

***

### update()

> **update**(`opts`): `Promise`\<`any`\>

If E is present and has a .keys() method, then does: for k in E: D\[k\] = E\[k\] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k\] = v In either case, this is followed by: for k in F: D\[k\] = F\[k\]

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L323)

***

### values()

> **values**(`opts`): `Promise`\<`any`\>

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/Bunch.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/utils/Bunch.ts#L346)
