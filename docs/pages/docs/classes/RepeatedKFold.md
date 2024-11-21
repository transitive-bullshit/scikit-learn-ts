# Class: RepeatedKFold

Repeated K-Fold cross validator.

Repeats K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#repeated-k-fold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)

## Constructors

### new RepeatedKFold()

> **new RepeatedKFold**(`opts`?): [`RepeatedKFold`](RepeatedKFold.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.n_repeats`? | `number` | Number of times cross-validator needs to be repeated. |
| `opts.n_splits`? | `number` | Number of folds. Must be at least 2. |
| `opts.random_state`? | `number` | Controls the randomness of each repeated cross-validation instance. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |

**Returns** [`RepeatedKFold`](RepeatedKFold.md)

**Defined in** [generated/model\_selection/RepeatedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/RepeatedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/RepeatedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/RepeatedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L21) |
| `id` | `string` | `undefined` | [generated/model\_selection/RepeatedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L18) |
| `opts` | `any` | `undefined` | [generated/model\_selection/RepeatedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L19) |

## Accessors

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/model\_selection/RepeatedKFold.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L49)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/RepeatedKFold.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L101)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/RepeatedKFold.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L120)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.groups`? | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. |
| `opts.X`? | `any` | Always ignored, exists for compatibility. `np.zeros(n_samples)` may be used as a placeholder. |
| `opts.y`? | `any` | Always ignored, exists for compatibility. `np.zeros(n_samples)` may be used as a placeholder. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/RepeatedKFold.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L154)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/RepeatedKFold.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L62)

***

### split()

> **split**(`opts`): `Promise`\<`ArrayLike`\>

Generate indices to split data into training and test set.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.groups`? | `any` | Always ignored, exists for compatibility. |
| `opts.X`? | `ArrayLike`[] | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `ArrayLike` | The target variable for supervised learning problems. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/RepeatedKFold.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L196)
