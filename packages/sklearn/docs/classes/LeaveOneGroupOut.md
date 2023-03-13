# LeaveOneGroupOut

Leave One Group Out cross-validator

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided an array integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the [User Guide](../cross_validation.html#leave-one-group-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)

## Constructors

## constructor()

### Signature

```ts
new LeaveOneGroupOut(opts?: LeaveOneGroupOutOptions): LeaveOneGroupOut;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LeaveOneGroupOutOptions`](../interfaces/LeaveOneGroupOutOptions.md) |

### Returns

[`LeaveOneGroupOut`](LeaveOneGroupOut.md)

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L21)

## Accessors

### n\_splits

Returns the number of splitting iterations in the cross-validator.

#### Signature

```ts
n_splits(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L172)

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L172)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L32)

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

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L36)

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L32) [generated/model\_selection/LeaveOneGroupOut.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L36)

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

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L89)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: LeaveOneGroupOutGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneGroupOutGetNSplitsOptions`](../interfaces/LeaveOneGroupOutGetNSplitsOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L106)

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

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L45)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: LeaveOneGroupOutSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneGroupOutSplitOptions`](../interfaces/LeaveOneGroupOutSplitOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/LeaveOneGroupOut.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L138)
