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
new StratifiedShuffleSplit(opts?: StratifiedShuffleSplitOptions): StratifiedShuffleSplit;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StratifiedShuffleSplitOptions`](../interfaces/StratifiedShuffleSplitOptions.md) |

### Returns

[`StratifiedShuffleSplit`](StratifiedShuffleSplit.md)

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L34)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L38)

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L34) [generated/model\_selection/StratifiedShuffleSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L38)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L93)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: StratifiedShuffleSplitGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedShuffleSplitGetNSplitsOptions`](../interfaces/StratifiedShuffleSplitGetNSplitsOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L110)

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

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L47)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: StratifiedShuffleSplitSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedShuffleSplitSplitOptions`](../interfaces/StratifiedShuffleSplitSplitOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L144)
