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
new GroupShuffleSplit(opts?: object): GroupShuffleSplit;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of re-shuffling & splitting iterations.  `Default Value`  `5` |
| `opts.random_state?` | `number` | Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.test_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of groups to include in the test split (rounded up). If int, represents the absolute number of test groups. If `undefined`, the value is set to the complement of the train size. The default will change in version 0.21. It will remain 0.2 only if `train\_size` is unspecified, otherwise it will complement the specified `train\_size`.  `Default Value`  `0.2` |
| `opts.train_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of the groups to include in the train split. If int, represents the absolute number of train groups. If `undefined`, the value is automatically set to the complement of the test size. |

### Returns

[`GroupShuffleSplit`](GroupShuffleSplit.md)

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L33)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L31)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L30)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L29)

### id

> `string`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L26)

### opts

> `any`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L27)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L62)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L66)

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L62) [generated/model\_selection/GroupShuffleSplit.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L66)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L119)

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
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L136)

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

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L75)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | [`ArrayLike`](../types/ArrayLike.md) | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target variable for supervised learning problems. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L183)
