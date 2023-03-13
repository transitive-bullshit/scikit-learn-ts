# TimeSeriesSplit

Time Series cross-validator

Provides train/test indices to split time series data samples that are observed at fixed time intervals, in train/test sets. In each split, test indices must be higher than before, and thus shuffling in cross validator is inappropriate.

This cross-validation object is a variation of [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"). In the kth split, it returns first k folds as train set and the (k+1)th fold as test set.

Note that unlike standard cross-validation methods, successive training sets are supersets of those that come before them.

Read more in the [User Guide](../cross_validation.html#time-series-split).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

## Constructors

## constructor()

### Signature

```ts
new TimeSeriesSplit(opts?: object): TimeSeriesSplit;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.gap?` | `number` | Number of samples to exclude from the end of each train set before the test set.  `Default Value`  `0` |
| `opts.max_train_size?` | `number` | Maximum size for a single training set. |
| `opts.n_splits?` | `number` | Number of splits. Must be at least 2.  `Default Value`  `5` |
| `opts.test_size?` | `number` | Used to limit the size of the test set. Defaults to `n\_samples // (n\_splits + 1)`, which is the maximum allowed value with `gap=0`. |

### Returns

[`TimeSeriesSplit`](TimeSeriesSplit.md)

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L58)

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

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L62)

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L58) [generated/model\_selection/TimeSeriesSplit.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L62)

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

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L115)

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

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L132)

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

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L71)

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
| `opts.groups?` | [`ArrayLike`](../types/ArrayLike.md) | Always ignored, exists for compatibility. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Always ignored, exists for compatibility. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L175)
