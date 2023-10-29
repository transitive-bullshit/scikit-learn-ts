# KFold

K-Folds cross-validator

Provides train/test indices to split data in train/test sets. Split dataset into k consecutive folds (without shuffling by default).

Each fold is then used once as a validation while the k - 1 remaining folds form the training set.

Read more in the User Guide.

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to Visualizing cross-validation behavior in scikit-learn

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html)

## Constructors

## constructor()

### Signature

```ts
new KFold(opts?: object): KFold;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_splits?` | `number` | Number of folds. Must be at least 2.  `Default Value`  `5` |
| `opts.random_state?` | `number` | When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.shuffle?` | `boolean` | Whether to shuffle the data before splitting into batches. Note that the samples within each split will not be shuffled.  `Default Value`  `false` |

### Returns

[`KFold`](KFold.md)

Defined in:  [generated/model\_selection/KFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L29)

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

Defined in:  [generated/model\_selection/KFold.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L107)

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

Defined in:  [generated/model\_selection/KFold.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L126)

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

Defined in:  [generated/model\_selection/KFold.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L159)

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

Defined in:  [generated/model\_selection/KFold.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L66)

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

Defined in:  [generated/model\_selection/KFold.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L202)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/KFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/KFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/KFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/KFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/KFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/KFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L53)

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

Defined in: [generated/model\_selection/KFold.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/model_selection/KFold.ts#L57)
