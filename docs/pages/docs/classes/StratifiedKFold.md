# StratifiedKFold

Stratified K-Folds cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a variation of KFold that returns stratified folds. The folds are made by preserving the percentage of samples for each class.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html)

## Constructors

## constructor()

### Signature

```ts
new StratifiedKFold(opts?: StratifiedKFoldOptions): StratifiedKFold;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `StratifiedKFoldOptions` |

### Returns

[`StratifiedKFold`](StratifiedKFold.md)

Defined in:  [generated/model\_selection/StratifiedKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L32)

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

Defined in: [generated/model\_selection/StratifiedKFold.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L36)

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

Defined in:  [generated/model\_selection/StratifiedKFold.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L87)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: StratifiedKFoldGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StratifiedKFoldGetNSplitsOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/StratifiedKFold.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L104)

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

Defined in:  [generated/model\_selection/StratifiedKFold.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L45)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: StratifiedKFoldSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StratifiedKFoldSplitOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/StratifiedKFold.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L132)
