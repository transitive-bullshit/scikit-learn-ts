# GroupShuffleSplit

Shuffle-Group(s)-Out cross-validation iterator

Provides randomized train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

The difference between LeavePGroupsOut and GroupShuffleSplit is that the former generates splits using all subsets of size `p` unique groups, whereas GroupShuffleSplit generates a user-determined number of random test splits, each with a user-determined fraction of unique groups.

For example, a less computationally intensive alternative to `LeavePGroupsOut(p=10)` would be `GroupShuffleSplit(test\_size=10, n\_splits=100)`.

Note: The parameters `test\_size` and `train\_size` refer to groups, and not to samples, as in ShuffleSplit.

Read more in the [User Guide](../cross_validation.html#group-shuffle-split).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupShuffleSplit.html)

## Constructors

## constructor()

### Signature

```ts
new GroupShuffleSplit(opts?: GroupShuffleSplitOptions): GroupShuffleSplit;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GroupShuffleSplitOptions`](../interfaces/GroupShuffleSplitOptions.md) |

### Returns

[`GroupShuffleSplit`](GroupShuffleSplit.md)

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L33)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L31)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L30)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L29)

### id

> `string`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L26)

### opts

> `any`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L27)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L38)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L42)

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L38) [generated/model\_selection/GroupShuffleSplit.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L42)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L95)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: GroupShuffleSplitGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GroupShuffleSplitGetNSplitsOptions`](../interfaces/GroupShuffleSplitGetNSplitsOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L112)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L51)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: GroupShuffleSplitSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GroupShuffleSplitSplitOptions`](../interfaces/GroupShuffleSplitSplitOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L146)
