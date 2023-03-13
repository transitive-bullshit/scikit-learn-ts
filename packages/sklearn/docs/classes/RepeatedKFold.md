# RepeatedKFold

Repeated K-Fold cross validator.

Repeats K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)

## Constructors

## constructor()

### Signature

```ts
new RepeatedKFold(opts?: RepeatedKFoldOptions): RepeatedKFold;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RepeatedKFoldOptions`](../interfaces/RepeatedKFoldOptions.md) |

### Returns

[`RepeatedKFold`](RepeatedKFold.md)

Defined in:  [generated/model\_selection/RepeatedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L30)

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L34)

Defined in:  [generated/model\_selection/RepeatedKFold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L30) [generated/model\_selection/RepeatedKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L34)

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L85)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: RepeatedKFoldGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedKFoldGetNSplitsOptions`](../interfaces/RepeatedKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/RepeatedKFold.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L102)

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L43)

### split()

Generates indices to split data into training and test set.

#### Signature

```ts
split(opts: RepeatedKFoldSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedKFoldSplitOptions`](../interfaces/RepeatedKFoldSplitOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/RepeatedKFold.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L132)
