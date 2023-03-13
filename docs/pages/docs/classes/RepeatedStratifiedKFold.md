# RepeatedStratifiedKFold

Repeated Stratified K-Fold cross validator.

Repeats Stratified K-Fold n times with different randomization in each repetition.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedStratifiedKFold.html)

## Constructors

## constructor()

### Signature

```ts
new RepeatedStratifiedKFold(opts?: RepeatedStratifiedKFoldOptions): RepeatedStratifiedKFold;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `RepeatedStratifiedKFoldOptions` |

### Returns

[`RepeatedStratifiedKFold`](RepeatedStratifiedKFold.md)

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L30)

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

Defined in: [generated/model\_selection/RepeatedStratifiedKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L34)

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

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L89)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: RepeatedStratifiedKFoldGetNSplitsOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RepeatedStratifiedKFoldGetNSplitsOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L106)

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

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L43)

### split()

Generates indices to split data into training and test set.

#### Signature

```ts
split(opts: RepeatedStratifiedKFoldSplitOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RepeatedStratifiedKFoldSplitOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/RepeatedStratifiedKFold.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L142)
