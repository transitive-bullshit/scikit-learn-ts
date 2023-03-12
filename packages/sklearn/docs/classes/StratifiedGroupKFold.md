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
new StratifiedGroupKFold(opts?: StratifiedGroupKFoldOptions): StratifiedGroupKFold;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StratifiedGroupKFoldOptions`](../interfaces/StratifiedGroupKFoldOptions.md) |

### Returns

[`StratifiedGroupKFold`](StratifiedGroupKFold.md)

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L34)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L38)

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L34) [generated/model\_selection/StratifiedGroupKFold.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L38)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L93)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: StratifiedGroupKFoldGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedGroupKFoldGetNSplitsOptions`](../interfaces/StratifiedGroupKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L110)

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

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L47)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: StratifiedGroupKFoldSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedGroupKFoldSplitOptions`](../interfaces/StratifiedGroupKFoldSplitOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L144)
