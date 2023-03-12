[sklearn](../readme.md) / [Exports](../modules.md) / KernelPCA

# Class: KernelPCA

Kernel Principal component analysis (KPCA) [\[1\]](#r396fc7d924b8-1).

Non-linear dimensionality reduction through the use of kernels (see [Pairwise metrics, Affinities and Kernels](../metrics.html#metrics)).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.10.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.10.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](#r396fc7d924b8-3), see `eigen\_solver`.

Read more in the [User Guide](../decomposition.html#kernel-pca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html

## Table of contents

### Constructors

- [constructor](KernelPCA.md#constructor)

### Properties

- [\_isDisposed](KernelPCA.md#_isdisposed)
- [\_isInitialized](KernelPCA.md#_isinitialized)
- [\_py](KernelPCA.md#_py)
- [id](KernelPCA.md#id)
- [opts](KernelPCA.md#opts)

### Accessors

- [X\_fit\_](KernelPCA.md#x_fit_)
- [X\_transformed\_fit\_](KernelPCA.md#x_transformed_fit_)
- [dual\_coef\_](KernelPCA.md#dual_coef_)
- [eigenvalues\_](KernelPCA.md#eigenvalues_)
- [eigenvectors\_](KernelPCA.md#eigenvectors_)
- [feature\_names\_in\_](KernelPCA.md#feature_names_in_)
- [n\_features\_in\_](KernelPCA.md#n_features_in_)
- [py](KernelPCA.md#py)

### Methods

- [dispose](KernelPCA.md#dispose)
- [fit](KernelPCA.md#fit)
- [fit\_transform](KernelPCA.md#fit_transform)
- [get\_feature\_names\_out](KernelPCA.md#get_feature_names_out)
- [init](KernelPCA.md#init)
- [inverse\_transform](KernelPCA.md#inverse_transform)
- [set\_output](KernelPCA.md#set_output)
- [transform](KernelPCA.md#transform)

## Constructors

### constructor

• **new KernelPCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelPCAOptions`](../interfaces/KernelPCAOptions.md) |

#### Defined in

[generated/decomposition/KernelPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/KernelPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/KernelPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/KernelPCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/KernelPCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/KernelPCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L21)

## Accessors

### X\_fit\_

• `get` **X_fit_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The data used to fit the model. If `copy\_X=False`, then `X\_fit\_` is a reference. This attribute is used for the calls to transform.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L398)

___

### X\_transformed\_fit\_

• `get` **X_transformed_fit_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Projection of the fitted data on the kernel principal components. Only available when `fit\_inverse\_transform` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L373)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Inverse transform matrix. Only available when `fit\_inverse\_transform` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L350)

___

### eigenvalues\_

• `get` **eigenvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Eigenvalues of the centered kernel matrix in decreasing order. If `n\_components` and `remove\_zero\_eig` are not set, then all values are stored.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/KernelPCA.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L300)

___

### eigenvectors\_

• `get` **eigenvectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Eigenvectors of the centered kernel matrix. If `n\_components` and `remove\_zero\_eig` are not set, then all components are stored.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L325)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/KernelPCA.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L446)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L421)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/KernelPCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/KernelPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L100)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAFitOptions`](../interfaces/KernelPCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L117)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the model from data in X and transform X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAFitTransformOptions`](../interfaces/KernelPCAFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L145)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAGetFeatureNamesOutOptions`](../interfaces/KernelPCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L177)

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

[generated/decomposition/KernelPCA.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X back to original space.

`inverse\_transform` approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAInverseTransformOptions`](../interfaces/KernelPCAInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L212)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCASetOutputOptions`](../interfaces/KernelPCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L244)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCATransformOptions`](../interfaces/KernelPCATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L272)
