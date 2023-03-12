[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchNMF

# Class: MiniBatchNMF

Mini-Batch Non-Negative Matrix Factorization (NMF).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html

## Table of contents

### Constructors

- [constructor](MiniBatchNMF.md#constructor)

### Properties

- [\_isDisposed](MiniBatchNMF.md#_isdisposed)
- [\_isInitialized](MiniBatchNMF.md#_isinitialized)
- [\_py](MiniBatchNMF.md#_py)
- [id](MiniBatchNMF.md#id)
- [opts](MiniBatchNMF.md#opts)

### Accessors

- [components\_](MiniBatchNMF.md#components_)
- [feature\_names\_in\_](MiniBatchNMF.md#feature_names_in_)
- [n\_components\_](MiniBatchNMF.md#n_components_)
- [n\_features\_in\_](MiniBatchNMF.md#n_features_in_)
- [n\_iter\_](MiniBatchNMF.md#n_iter_)
- [n\_steps\_](MiniBatchNMF.md#n_steps_)
- [py](MiniBatchNMF.md#py)
- [reconstruction\_err\_](MiniBatchNMF.md#reconstruction_err_)

### Methods

- [dispose](MiniBatchNMF.md#dispose)
- [fit](MiniBatchNMF.md#fit)
- [fit\_transform](MiniBatchNMF.md#fit_transform)
- [get\_feature\_names\_out](MiniBatchNMF.md#get_feature_names_out)
- [init](MiniBatchNMF.md#init)
- [inverse\_transform](MiniBatchNMF.md#inverse_transform)
- [partial\_fit](MiniBatchNMF.md#partial_fit)
- [set\_output](MiniBatchNMF.md#set_output)
- [transform](MiniBatchNMF.md#transform)

## Constructors

### constructor

• **new MiniBatchNMF**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchNMFOptions`](../interfaces/MiniBatchNMFOptions.md) |

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L15)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Factorization matrix, sometimes called ‘dictionary’.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L347)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L493)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L372)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L468)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Actual number of started iterations over the whole dataset.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L422)

___

### n\_steps\_

• `get` **n_steps_**(): `Promise`<`number`\>

Number of mini-batches processed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L445)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L30)

___

### reconstruction\_err\_

• `get` **reconstruction_err_**(): `Promise`<`number`\>

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L397)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn a NMF model for the data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFFitOptions`](../interfaces/MiniBatchNMFFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L116)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFFitTransformOptions`](../interfaces/MiniBatchNMFFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L148)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFGetFeatureNamesOutOptions`](../interfaces/MiniBatchNMFGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L186)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L39)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform data back to its original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFInverseTransformOptions`](../interfaces/MiniBatchNMFInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L219)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Update the model using the data in `X` as a mini-batch.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once (see [Strategies to scale computationally: bigger data](../../computing/scaling_strategies.html#scaling-strategies)).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFPartialFitOptions`](../interfaces/MiniBatchNMFPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L255)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFSetOutputOptions`](../interfaces/MiniBatchNMFSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L291)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data X according to the fitted MiniBatchNMF model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchNMFTransformOptions`](../interfaces/MiniBatchNMFTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L319)
