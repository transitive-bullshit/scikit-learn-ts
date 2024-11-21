[**sklearn**](../README.md) • **Docs**

***

Predefined split cross-validator.

Provides train/test indices to split data into train/test sets using a predefined scheme specified by the user with the `test\_fold` parameter.

Read more in the [User Guide](../cross_validation.html#predefined-split).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.PredefinedSplit.html)

## Constructors

### new PredefinedSplit()

> **new PredefinedSplit**(`opts`?): [`PredefinedSplit`](PredefinedSplit.md)

#### Parameters

• **opts?**

• **opts.test\_fold?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The entry `test\_fold\[i\]` represents the index of the test set that sample `i` belongs to. It is possible to exclude sample `i` from any test set (i.e. include sample `i` in every training set) by setting `test\_fold\[i\]` equal to -1.

#### Returns

[`PredefinedSplit`](PredefinedSplit.md)

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L19)

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

[generated/model\_selection/PredefinedSplit.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L35)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L87)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L106)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

• **opts**

• **opts.groups?**: `any`

Always ignored, exists for compatibility.

• **opts.X?**: `any`

Always ignored, exists for compatibility.

• **opts.y?**: `any`

Always ignored, exists for compatibility.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L140)

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

[generated/model\_selection/PredefinedSplit.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L48)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: `any`

Always ignored, exists for compatibility.

• **opts.X?**: `any`

Always ignored, exists for compatibility.

• **opts.y?**: `any`

Always ignored, exists for compatibility.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/PredefinedSplit.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L182)
