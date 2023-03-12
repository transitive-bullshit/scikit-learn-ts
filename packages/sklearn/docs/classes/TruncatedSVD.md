[sklearn](../readme.md) / [Exports](../modules.md) / TruncatedSVD

# Class: TruncatedSVD

Dimensionality reduction using truncated SVD (aka LSA).

This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in [`sklearn.feature\_extraction.text`](../classes.html#module-sklearn.feature_extraction.text "sklearn.feature_extraction.text"). In that context, it is known as latent semantic analysis (LSA).

This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on `X \* X.T` or `X.T \* X`, whichever is more efficient.

Read more in the [User Guide](../decomposition.html#lsa).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html

## Table of contents

### Constructors

- [constructor](TruncatedSVD.md#constructor)

### Properties

- [\_isDisposed](TruncatedSVD.md#_isdisposed)
- [\_isInitialized](TruncatedSVD.md#_isinitialized)
- [\_py](TruncatedSVD.md#_py)
- [id](TruncatedSVD.md#id)
- [opts](TruncatedSVD.md#opts)

### Accessors

- [components\_](TruncatedSVD.md#components_)
- [explained\_variance\_](TruncatedSVD.md#explained_variance_)
- [explained\_variance\_ratio\_](TruncatedSVD.md#explained_variance_ratio_)
- [feature\_names\_in\_](TruncatedSVD.md#feature_names_in_)
- [n\_features\_in\_](TruncatedSVD.md#n_features_in_)
- [py](TruncatedSVD.md#py)
- [singular\_values\_](TruncatedSVD.md#singular_values_)

### Methods

- [dispose](TruncatedSVD.md#dispose)
- [fit](TruncatedSVD.md#fit)
- [fit\_transform](TruncatedSVD.md#fit_transform)
- [get\_feature\_names\_out](TruncatedSVD.md#get_feature_names_out)
- [init](TruncatedSVD.md#init)
- [inverse\_transform](TruncatedSVD.md#inverse_transform)
- [set\_output](TruncatedSVD.md#set_output)
- [transform](TruncatedSVD.md#transform)

## Constructors

### constructor

• **new TruncatedSVD**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TruncatedSVDOptions`](../interfaces/TruncatedSVDOptions.md) |

#### Defined in

[generated/decomposition/TruncatedSVD.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L23)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The right singular vectors of the input data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L297)

___

### explained\_variance\_

• `get` **explained_variance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The variance of the training samples transformed by a projection to each component.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L322)

___

### explained\_variance\_ratio\_

• `get` **explained_variance_ratio_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Percentage of variance explained by each of the selected components.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L347)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L422)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L397)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L38)

___

### singular\_values\_

• `get` **singular_values_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L372)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model on training data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDFitOptions`](../interfaces/TruncatedSVDFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L112)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit model to X and perform dimensionality reduction on X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDFitTransformOptions`](../interfaces/TruncatedSVDFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDGetFeatureNamesOutOptions`](../interfaces/TruncatedSVDGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L172)

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

[generated/decomposition/TruncatedSVD.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L47)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform X back to its original space.

Returns an array X\_original whose transform would be X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDInverseTransformOptions`](../interfaces/TruncatedSVDInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L207)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDSetOutputOptions`](../interfaces/TruncatedSVDSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L241)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Perform dimensionality reduction on X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TruncatedSVDTransformOptions`](../interfaces/TruncatedSVDTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L269)
