# LeaveOneOut

Leave-One-Out cross-validator

Provides train/test indices to split data in train/test sets. Each sample is used once as a test set (singleton) while the remaining samples form the training set.

Note: `LeaveOneOut()` is equivalent to `KFold(n\_splits=n)` and `LeavePOut(p=1)` where `n` is the number of samples.

Due to the high number of test sets (which is the same as the number of samples) this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") or [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold").

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneOut.html)

## Constructors

## constructor()

### Signature

```ts
new LeaveOneOut(opts?: object): LeaveOneOut;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. |

### Returns

[`LeaveOneOut`](LeaveOneOut.md)

Defined in:  [generated/model\_selection/LeaveOneOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L23)

## Accessors

### n\_splits

Returns the number of splitting iterations in the cross-validator.

#### Signature

```ts
n_splits(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/LeaveOneOut.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L213)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LeaveOneOut.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L49)

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

Defined in: [generated/model\_selection/LeaveOneOut.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L53)

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

Defined in:  [generated/model\_selection/LeaveOneOut.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L104)

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
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | `any` | Always ignored, exists for compatibility. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/LeaveOneOut.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L121)

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

Defined in:  [generated/model\_selection/LeaveOneOut.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L62)

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
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.y?` | `ArrayLike` | The target variable for supervised learning problems. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/LeaveOneOut.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L166)
