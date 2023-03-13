# LeavePOut

Leave-P-Out cross-validator

Provides train/test indices to split data in train/test sets. This results in testing on all distinct samples of size p, while the remaining n - p samples form the training set in each iteration.

Note: `LeavePOut(p)` is NOT equivalent to `KFold(n\_splits=n\_samples // p)` which creates non-overlapping test sets.

Due to the high number of iterations which grows combinatorically with the number of samples this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") or [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit").

Read more in the [User Guide](../cross_validation.html#leave-p-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePOut.html)

## Constructors

## constructor()

### Signature

```ts
new LeavePOut(opts?: object): LeavePOut;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.p?` | `number` | Size of the test sets. Must be strictly less than the number of samples. |

### Returns

[`LeavePOut`](LeavePOut.md)

Defined in:  [generated/model\_selection/LeavePOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L29)

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

Defined in:  [generated/model\_selection/LeavePOut.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L89)

### get\_n\_splits()

Returns the number of splitting iterations in the cross-validator

#### Signature

```ts
get_n_splits(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LeavePOut.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L106)

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

Defined in:  [generated/model\_selection/LeavePOut.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L52)

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

Defined in:  [generated/model\_selection/LeavePOut.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L151)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeavePOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeavePOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LeavePOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/LeavePOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/LeavePOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LeavePOut.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L39)

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

Defined in:  [generated/model\_selection/LeavePOut.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L43)

Defined in:  [generated/model\_selection/LeavePOut.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L39) [generated/model\_selection/LeavePOut.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L43)
