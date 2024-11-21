**sklearn** • **Docs**

***

Contains the metadata request info of a consumer.

Instances of `MethodMetadataRequest` are used in this class for each available method under `metadatarequest.{method}`.

Consumer-only classes such as simple estimators return a serialized version of this class as the output of `get\_metadata\_routing()`.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html)

## Constructors

### new MetadataRequest()

> **new MetadataRequest**(`opts`?): [`MetadataRequest`](MetadataRequest.md)

#### Parameters

• **opts?**

• **opts.owner?**: `string`

The name of the object to which these requests belong.

#### Returns

[`MetadataRequest`](MetadataRequest.md)

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L19)

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

[generated/utils/metadata\_routing/MetadataRequest.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L35)

## Methods

### consumes()

> **consumes**(`opts`): `Promise`\<`any`\>

Check whether the given parameters are consumed by the given method.

#### Parameters

• **opts**

• **opts.method?**: `string`

The name of the method to check.

• **opts.params?**: `any`

An iterable of parameters to check.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L104)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRequest.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L87)

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

[generated/utils/metadata\_routing/MetadataRequest.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/utils/metadata_routing/MetadataRequest.ts#L48)
