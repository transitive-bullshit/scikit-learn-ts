# Class: LeaveOneGroupOut

Leave One Group Out cross-validator.

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided as an array of integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#leave-one-group-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)

## Constructors

### new LeaveOneGroupOut()

> **new LeaveOneGroupOut**(`opts`?): [`LeaveOneGroupOut`](LeaveOneGroupOut.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

[`LeaveOneGroupOut`](LeaveOneGroupOut.md)

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/LeaveOneGroupOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/LeaveOneGroupOut.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/LeaveOneGroupOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L23) |
| `id` | `string` | `undefined` | [generated/model\_selection/LeaveOneGroupOut.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L20) |
| `opts` | `any` | `undefined` | [generated/model\_selection/LeaveOneGroupOut.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L21) |

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:37](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L37)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L91)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L110)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.groups`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Group labels for the samples used while splitting the dataset into train/test set. This ‘groups’ parameter must always be specified to calculate the number of splits, though the other parameters can be omitted. |
| `opts.X`? | `any` | Always ignored, exists for compatibility. |
| `opts.y`? | `any` | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L146)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L50)

***

### set\_split\_request()

> **set\_split\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `split` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.groups`? | `string` \| `boolean` | Metadata routing for `groups` parameter in `split`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L194)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.groups`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The target variable for supervised learning problems. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L230)
