# StratifiedShuffleSplit

Stratified ShuffleSplit cross-validator

Provides train/test indices to split data in train/test sets.

This cross-validation object is a merge of StratifiedKFold and ShuffleSplit, which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.

Note: like the ShuffleSplit strategy, stratified random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

Read more in the [User Guide](../cross_validation.html#stratified-shuffle-split).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html)

## Constructors

## constructor()

### Signature

```ts
new StratifiedShuffleSplit(opts?: object): StratifiedShuffleSplit;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of re-shuffling & splitting iterations.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.test_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1. |
| `opts.train_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size. |

### Returns

[`StratifiedShuffleSplit`](StratifiedShuffleSplit.md)

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L29)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L115)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L132)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L69)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.  Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data. |
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target variable for supervised learning problems. Stratification is done based on the y labels. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L179)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L56)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L60)

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L56) [generated/model\_selection/StratifiedShuffleSplit.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L60)
