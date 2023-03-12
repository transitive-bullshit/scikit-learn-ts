[sklearn](../readme.md) / [Exports](../modules.md) / NMF

# Class: NMF

Non-Negative Matrix Factorization (NMF).

Find two non-negative matrices, i.e. matrices with all non-negative elements, (W, H) whose product approximates the non-negative matrix X. This factorization can be used for example for dimensionality reduction, source separation or topic extraction.

The objective function is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html

## Table of contents

### Constructors

- [constructor](NMF.md#constructor)

### Properties

- [\_isDisposed](NMF.md#_isdisposed)
- [\_isInitialized](NMF.md#_isinitialized)
- [\_py](NMF.md#_py)
- [id](NMF.md#id)
- [opts](NMF.md#opts)

### Accessors

- [components\_](NMF.md#components_)
- [feature\_names\_in\_](NMF.md#feature_names_in_)
- [n\_components\_](NMF.md#n_components_)
- [n\_features\_in\_](NMF.md#n_features_in_)
- [n\_iter\_](NMF.md#n_iter_)
- [py](NMF.md#py)
- [reconstruction\_err\_](NMF.md#reconstruction_err_)

### Methods

- [dispose](NMF.md#dispose)
- [fit](NMF.md#fit)
- [fit\_transform](NMF.md#fit_transform)
- [get\_feature\_names\_out](NMF.md#get_feature_names_out)
- [init](NMF.md#init)
- [inverse\_transform](NMF.md#inverse_transform)
- [set\_output](NMF.md#set_output)
- [transform](NMF.md#transform)

## Constructors

### constructor

• **new NMF**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NMFOptions`](../interfaces/NMFOptions.md) |

#### Defined in

[generated/decomposition/NMF.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/NMF.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/NMF.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/NMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/NMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/NMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Factorization matrix, sometimes called ‘dictionary’.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/NMF.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L294)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/NMF.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L410)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L317)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L387)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Actual number of iterations.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L365)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/NMF.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/NMF.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L34)

___

### reconstruction\_err\_

• `get` **reconstruction_err_**(): `Promise`<`number`\>

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L340)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/NMF.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L92)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn a NMF model for the data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFFitOptions`](../interfaces/NMFFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L109)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFFitTransformOptions`](../interfaces/NMFFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/NMF.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFGetFeatureNamesOutOptions`](../interfaces/NMFGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L176)

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

[generated/decomposition/NMF.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform data back to its original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFInverseTransformOptions`](../interfaces/NMFInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/NMF.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L206)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFSetOutputOptions`](../interfaces/NMFSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L238)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data X according to the fitted NMF model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NMFTransformOptions`](../interfaces/NMFTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/NMF.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L266)
