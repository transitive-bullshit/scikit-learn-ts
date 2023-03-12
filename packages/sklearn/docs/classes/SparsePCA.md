[sklearn](../readme.md) / [Exports](../modules.md) / SparsePCA

# Class: SparsePCA

Sparse Principal Components Analysis (SparsePCA).

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the [User Guide](../decomposition.html#sparsepca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparsePCA.html

## Table of contents

### Constructors

- [constructor](SparsePCA.md#constructor)

### Properties

- [\_isDisposed](SparsePCA.md#_isdisposed)
- [\_isInitialized](SparsePCA.md#_isinitialized)
- [\_py](SparsePCA.md#_py)
- [id](SparsePCA.md#id)
- [opts](SparsePCA.md#opts)

### Accessors

- [components\_](SparsePCA.md#components_)
- [error\_](SparsePCA.md#error_)
- [feature\_names\_in\_](SparsePCA.md#feature_names_in_)
- [mean\_](SparsePCA.md#mean_)
- [n\_components\_](SparsePCA.md#n_components_)
- [n\_features\_in\_](SparsePCA.md#n_features_in_)
- [n\_iter\_](SparsePCA.md#n_iter_)
- [py](SparsePCA.md#py)

### Methods

- [dispose](SparsePCA.md#dispose)
- [fit](SparsePCA.md#fit)
- [fit\_transform](SparsePCA.md#fit_transform)
- [get\_feature\_names\_out](SparsePCA.md#get_feature_names_out)
- [init](SparsePCA.md#init)
- [inverse\_transform](SparsePCA.md#inverse_transform)
- [set\_output](SparsePCA.md#set_output)
- [transform](SparsePCA.md#transform)

## Constructors

### constructor

• **new SparsePCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SparsePCAOptions`](../interfaces/SparsePCAOptions.md) |

#### Defined in

[generated/decomposition/SparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/SparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/SparsePCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/SparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/SparsePCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/SparsePCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Sparse components extracted from the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/SparsePCA.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L302)

___

### error\_

• `get` **error_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Vector of errors at each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/SparsePCA.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L325)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/SparsePCA.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L444)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/SparsePCA.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L396)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

Estimated number of components.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L348)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L419)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L373)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/SparsePCA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/SparsePCA.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCAFitOptions`](../interfaces/SparsePCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L111)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCAFitTransformOptions`](../interfaces/SparsePCAFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/SparsePCA.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L141)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCAGetFeatureNamesOutOptions`](../interfaces/SparsePCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L175)

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

[generated/decomposition/SparsePCA.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data from the latent space to the original space.

This inversion is an approximation due to the loss of information induced by the forward decomposition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCAInverseTransformOptions`](../interfaces/SparsePCAInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/SparsePCA.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L210)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCASetOutputOptions`](../interfaces/SparsePCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparsePCA.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L242)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Least Squares projection of the data onto the sparse components.

To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparsePCATransformOptions`](../interfaces/SparsePCATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/SparsePCA.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L274)
