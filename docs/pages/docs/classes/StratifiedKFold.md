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
new StratifiedKFold(opts?: object): StratifiedKFold;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of folds. Must be at least 2.  `Default Value`  `5` |
| `opts.random_state?` | `number` | When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.shuffle?` | `boolean` | Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled.  `Default Value`  `false` |

### Returns

[`StratifiedKFold`](StratifiedKFold.md)

Defined in:  [generated/model\_selection/StratifiedKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/StratifiedKFold.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L51)

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

Defined in: [generated/model\_selection/StratifiedKFold.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L55)

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

Defined in:  [generated/model\_selection/StratifiedKFold.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L106)

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

Defined in:  [generated/model\_selection/StratifiedKFold.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L123)

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

Defined in:  [generated/model\_selection/StratifiedKFold.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L64)

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
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.  Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data. |
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | `ArrayLike` | The target variable for supervised learning problems. Stratification is done based on the y labels. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/StratifiedKFold.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L166)
