**sklearn** • **Docs**

***

Stores and handles metadata routing for a router object.

This class is used by router objects to store and handle metadata routing. Routing information is stored as a dictionary of the form `{"object\_name": RouteMappingPair(method\_mapping, routing\_info)}`, where `method\_mapping` is an instance of [`MethodMapping`](sklearn.utils.metadata_routing.MethodMapping.html#sklearn.utils.metadata_routing.MethodMapping "sklearn.utils.metadata_routing.MethodMapping") and `routing\_info` is either a [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") or a [`MetadataRouter`](#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") instance.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html)

## Constructors

### new MetadataRouter()

> **new MetadataRouter**(`opts`?): [`MetadataRouter`](MetadataRouter.md)

#### Parameters

• **opts?**

• **opts.owner?**: `string`

The name of the object to which these requests belong.

#### Returns

[`MetadataRouter`](MetadataRouter.md)

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L17)

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

[generated/utils/metadata\_routing/MetadataRouter.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L33)

## Methods

### add()

> **add**(`opts`): `Promise`\<`any`\>

Add named objects with their corresponding method mapping.

#### Parameters

• **opts**

• **opts.method\_mapping?**: `any`

The mapping between the child and the parent’s methods.

• **opts.objs?**: `any`

A dictionary of objects from which metadata is extracted by calling [`get\_routing\_for\_object`](sklearn.utils.metadata_routing.get_routing_for_object.html#sklearn.utils.metadata_routing.get_routing_for_object "sklearn.utils.metadata_routing.get_routing_for_object") on them.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L102)

***

### add\_self\_request()

> **add\_self\_request**(`opts`): `Promise`\<`any`\>

Add `self` (as a consumer) to the routing.

This method is used if the router is also a consumer, and hence the router itself needs to be included in the routing. The passed object can be an estimator or a [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest").

A router should add itself using this method instead of `add` since it should be treated differently than the other objects to which metadata is routed by the router.

#### Parameters

• **opts**

• **opts.obj?**: `any`

This is typically the router instance, i.e. `self` in a `get\_metadata\_routing()` implementation. It can also be a `MetadataRequest` instance.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L143)

***

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

[generated/utils/metadata\_routing/MetadataRouter.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L177)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L85)

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

[generated/utils/metadata\_routing/MetadataRouter.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L46)

***

### route\_params()

> **route\_params**(`opts`): `Promise`\<`any`\>

Return the input parameters requested by child objects.

The output of this method is a bunch, which includes the metadata for all methods of each child object that is used in the router’s `caller` method.

If the router is also a consumer, it also checks for warnings of `self`’s/consumer’s requested metadata.

#### Parameters

• **opts**

• **opts.caller?**: `string`

The name of the method for which the parameters are requested and routed. If called inside the fit method of a router, it would be `"fit"`.

• **opts.params?**: `any`

A dictionary of provided metadata.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L218)

***

### validate\_metadata()

> **validate\_metadata**(`opts`): `Promise`\<`any`\>

Validate given metadata for a method.

This raises a `TypeError` if some of the passed metadata are not understood by child objects.

#### Parameters

• **opts**

• **opts.method?**: `string`

The name of the method for which the parameters are requested and routed. If called inside the fit method of a router, it would be `"fit"`.

• **opts.params?**: `any`

A dictionary of provided metadata.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/utils/metadata\_routing/MetadataRouter.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/utils/metadata_routing/MetadataRouter.ts#L257)
