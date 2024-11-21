**sklearn** • **Docs**

***

Leave One Group Out cross-validator.

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided as an array of integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)

## Constructors

### new LeaveOneGroupOut()

> **new LeaveOneGroupOut**(`opts`?): [`LeaveOneGroupOut`](LeaveOneGroupOut.md)

#### Parameters

• **opts?**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

[`LeaveOneGroupOut`](LeaveOneGroupOut.md)

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L21)

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

[generated/model\_selection/LeaveOneGroupOut.ts:37](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L37)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L91)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L110)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

• **opts**

• **opts.groups?**: `ArrayLike`

Group labels for the samples used while splitting the dataset into train/test set. This ‘groups’ parameter must always be specified to calculate the number of splits, though the other parameters can be omitted.

• **opts.X?**: `any`

Always ignored, exists for compatibility.

• **opts.y?**: `any`

Always ignored, exists for compatibility.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L146)

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

[generated/model\_selection/LeaveOneGroupOut.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L50)

***

### set\_split\_request()

> **set\_split\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `split` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.groups?**: `string` \| `boolean`

Metadata routing for `groups` parameter in `split`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L194)

***

### split()

> **split**(`opts`): `Promise`\<`ArrayLike`\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: `ArrayLike`

Group labels for the samples used while splitting the dataset into train/test set.

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

The target variable for supervised learning problems.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/LeaveOneGroupOut.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L230)
