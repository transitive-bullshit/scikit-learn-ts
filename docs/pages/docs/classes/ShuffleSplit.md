# ShuffleSplit

Random permutation cross-validator

Yields indices to split data into training and test sets.

Note: contrary to other cross-validation strategies, random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html)

## Constructors

## constructor()

### Signature

```ts
new ShuffleSplit(opts?: ShuffleSplitOptions): ShuffleSplit;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ShuffleSplitOptions` |

### Returns

[`ShuffleSplit`](ShuffleSplit.md)

Defined in:  [generated/model\_selection/ShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L32)

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

Defined in: [generated/model\_selection/ShuffleSplit.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L36)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L87)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: ShuffleSplitGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ShuffleSplitGetNSplitsOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/ShuffleSplit.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L104)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L45)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: ShuffleSplitSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ShuffleSplitSplitOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/ShuffleSplit.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L132)
