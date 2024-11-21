[**sklearn**](../README.md) • **Docs**

***

Leave P Group(s) Out cross-validator.

Provides train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

The difference between LeavePGroupsOut and LeaveOneGroupOut is that the former builds the test sets with all the samples assigned to `p` different values of the groups while the latter uses samples all assigned the same groups.

Read more in the [User Guide](../cross_validation.html#leave-p-groups-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePGroupsOut.html)

## Constructors

### new LeavePGroupsOut()

> **new LeavePGroupsOut**(`opts`?): [`LeavePGroupsOut`](LeavePGroupsOut.md)

#### Parameters

• **opts?**

• **opts.n\_groups?**: `number`

Number of groups (`p`) to leave out in the test split.

#### Returns

[`LeavePGroupsOut`](LeavePGroupsOut.md)

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L23)

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

[generated/model\_selection/LeavePGroupsOut.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L39)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L91)

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

[generated/model\_selection/LeavePGroupsOut.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L110)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Group labels for the samples used while splitting the dataset into train/test set. This ‘groups’ parameter must always be specified to calculate the number of splits, though the other parameters can be omitted.

• **opts.X?**: `any`

Always ignored, exists for compatibility.

• **opts.y?**: `any`

Always ignored, exists for compatibility.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L144)

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

[generated/model\_selection/LeavePGroupsOut.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L52)

***

### set\_split\_request()

> **set\_split\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `split` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.groups?**: `string` \| `boolean`

Metadata routing for `groups` parameter in `split`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L190)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Group labels for the samples used while splitting the dataset into train/test set.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target variable for supervised learning problems.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/LeavePGroupsOut.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L224)
