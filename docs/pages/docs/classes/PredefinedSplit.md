# PredefinedSplit

Predefined split cross-validator

Provides train/test indices to split data into train/test sets using a predefined scheme specified by the user with the `test\_fold` parameter.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.PredefinedSplit.html)

## Constructors

## constructor()

### Signature

```ts
new PredefinedSplit(opts?: PredefinedSplitOptions): PredefinedSplit;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `PredefinedSplitOptions` |

### Returns

[`PredefinedSplit`](PredefinedSplit.md)

Defined in:  [generated/model\_selection/PredefinedSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/PredefinedSplit.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L30)

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

Defined in: [generated/model\_selection/PredefinedSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L34)

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

Defined in:  [generated/model\_selection/PredefinedSplit.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L83)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: PredefinedSplitGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PredefinedSplitGetNSplitsOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/PredefinedSplit.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L100)

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

Defined in:  [generated/model\_selection/PredefinedSplit.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L43)

### split()

Generate indices to split data into training and test set.

#### Signature

```ts
split(opts: PredefinedSplitSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PredefinedSplitSplitOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/PredefinedSplit.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L128)
