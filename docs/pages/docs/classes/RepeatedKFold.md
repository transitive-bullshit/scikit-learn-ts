# RepeatedKFold

Repeated K-Fold cross validator.

Repeats K-Fold n times with different randomization in each repetition.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)

## Constructors

## constructor()

### Signature

```ts
new RepeatedKFold(opts?: object): RepeatedKFold;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_repeats?` | `number` | Number of times cross-validator needs to be repeated.  `Default Value`  `10` |
| `opts.n_splits?` | `number` | Number of folds. Must be at least 2.  `Default Value`  `5` |
| `opts.random_state?` | `number` | Controls the randomness of each repeated cross-validation instance. Pass an int for reproducible output across multiple function calls. See Glossary. |

### Returns

[`RepeatedKFold`](RepeatedKFold.md)

Defined in:  [generated/model\_selection/RepeatedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/RepeatedKFold.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L49)

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

Defined in: [generated/model\_selection/RepeatedKFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L53)

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L104)

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
| `opts.X?` | `any` | Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.y?` | `any` | Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/RepeatedKFold.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L121)

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L62)

### split()

Generates indices to split data into training and test set.

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

Defined in:  [generated/model\_selection/RepeatedKFold.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L166)
