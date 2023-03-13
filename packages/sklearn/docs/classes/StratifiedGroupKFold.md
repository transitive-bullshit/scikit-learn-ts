# StratifiedGroupKFold

Stratified K-Folds iterator variant with non-overlapping groups.

This cross-validation object is a variation of StratifiedKFold attempts to return stratified folds with non-overlapping groups. The folds are made by preserving the percentage of samples for each class.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The difference between [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold") and [`StratifiedGroupKFold`](#sklearn.model_selection.StratifiedGroupKFold "sklearn.model_selection.StratifiedGroupKFold") is that the former attempts to create balanced folds such that the number of distinct groups is approximately the same in each fold, whereas StratifiedGroupKFold attempts to create folds which preserve the percentage of samples for each class as much as possible given the constraint of non-overlapping groups between splits.

Read more in the [User Guide](../cross_validation.html#cross-validation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedGroupKFold.html)

## Constructors

## constructor()

### Signature

```ts
new StratifiedGroupKFold(opts?: object): StratifiedGroupKFold;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of folds. Must be at least 2.  `Default Value`  `5` |
| `opts.random_state?` | `number` | When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.shuffle?` | `boolean` | Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled. This implementation can only shuffle groups that have approximately the same y distribution, no global shuffle will be performed.  `Default Value`  `false` |

### Returns

[`StratifiedGroupKFold`](StratifiedGroupKFold.md)

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L29)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L112)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L129)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L66)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L176)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L53)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L57)

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L53) [generated/model\_selection/StratifiedGroupKFold.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L57)
