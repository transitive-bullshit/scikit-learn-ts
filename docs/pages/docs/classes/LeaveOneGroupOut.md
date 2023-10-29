# LeaveOneGroupOut

Leave One Group Out cross-validator

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided an array integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)

## Constructors

## constructor()

### Signature

```ts
new LeaveOneGroupOut(opts?: object): LeaveOneGroupOut;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

### Returns

[`LeaveOneGroupOut`](LeaveOneGroupOut.md)

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L27)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L92)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L111)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Always ignored, exists for compatibility. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. This ‘groups’ parameter must always be specified to calculate the number of splits, though the other parameters can be omitted. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L148)

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

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L50)

### set\_split\_request()

Request metadata passed to the `split` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_split_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.groups?` | `string` \| `boolean` | Metadata routing for `groups` parameter in `split`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L199)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.y?` | `ArrayLike` | The target variable for supervised learning problems. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L236)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:37](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L37)

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

Defined in: [generated/model\_selection/LeaveOneGroupOut.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L41)
