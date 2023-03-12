[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchSparsePCA

# Class: MiniBatchSparsePCA

Mini-batch Sparse Principal Components Analysis.

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the [User Guide](../decomposition.html#sparsepca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html

## Table of contents

### Constructors

- [constructor](MiniBatchSparsePCA.md#constructor)

### Properties

- [\_isDisposed](MiniBatchSparsePCA.md#_isdisposed)
- [\_isInitialized](MiniBatchSparsePCA.md#_isinitialized)
- [\_py](MiniBatchSparsePCA.md#_py)
- [id](MiniBatchSparsePCA.md#id)
- [opts](MiniBatchSparsePCA.md#opts)

### Accessors

- [components\_](MiniBatchSparsePCA.md#components_)
- [feature\_names\_in\_](MiniBatchSparsePCA.md#feature_names_in_)
- [mean\_](MiniBatchSparsePCA.md#mean_)
- [n\_components\_](MiniBatchSparsePCA.md#n_components_)
- [n\_features\_in\_](MiniBatchSparsePCA.md#n_features_in_)
- [n\_iter\_](MiniBatchSparsePCA.md#n_iter_)
- [py](MiniBatchSparsePCA.md#py)

### Methods

- [dispose](MiniBatchSparsePCA.md#dispose)
- [fit](MiniBatchSparsePCA.md#fit)
- [fit\_transform](MiniBatchSparsePCA.md#fit_transform)
- [get\_feature\_names\_out](MiniBatchSparsePCA.md#get_feature_names_out)
- [init](MiniBatchSparsePCA.md#init)
- [inverse\_transform](MiniBatchSparsePCA.md#inverse_transform)
- [set\_output](MiniBatchSparsePCA.md#set_output)
- [transform](MiniBatchSparsePCA.md#transform)

## Constructors

### constructor

• **new MiniBatchSparsePCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchSparsePCAOptions`](../interfaces/MiniBatchSparsePCAOptions.md) |

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Sparse components extracted from the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L328)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L463)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L409)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

Estimated number of components.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L355)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L436)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L382)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAFitOptions`](../interfaces/MiniBatchSparsePCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L116)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAFitTransformOptions`](../interfaces/MiniBatchSparsePCAFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L148)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAGetFeatureNamesOutOptions`](../interfaces/MiniBatchSparsePCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L188)

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

[generated/decomposition/MiniBatchSparsePCA.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data from the latent space to the original space.

This inversion is an approximation due to the loss of information induced by the forward decomposition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAInverseTransformOptions`](../interfaces/MiniBatchSparsePCAInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L225)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCASetOutputOptions`](../interfaces/MiniBatchSparsePCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L262)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Least Squares projection of the data onto the sparse components.

To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCATransformOptions`](../interfaces/MiniBatchSparsePCATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L296)
