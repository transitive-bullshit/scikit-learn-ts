# ShuffleSplit

Random permutation cross-validator

Yields indices to split data into training and test sets.

Note: contrary to other cross-validation strategies, random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

Read more in the User Guide.

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to Visualizing cross-validation behavior in scikit-learn

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html)

## Constructors

## constructor()

### Signature

```ts
new ShuffleSplit(opts?: object): ShuffleSplit;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of re-shuffling & splitting iterations.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.test_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1. |
| `opts.train_size?` | `number` | If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size. |

### Returns

[`ShuffleSplit`](ShuffleSplit.md)

Defined in:  [generated/model\_selection/ShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L29)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L111)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/ShuffleSplit.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L130)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L165)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L69)

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

Defined in:  [generated/model\_selection/ShuffleSplit.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L208)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L56)

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

Defined in: [generated/model\_selection/ShuffleSplit.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L60)
