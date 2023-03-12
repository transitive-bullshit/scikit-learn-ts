[sklearn](../readme.md) / [Exports](../modules.md) / IncrementalPCA

# Class: IncrementalPCA

Incremental principal components analysis (IPCA).

Linear dimensionality reduction using Singular Value Decomposition of the data, keeping only the most significant singular vectors to project the data to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

Depending on the size of the input data, this algorithm can be much more memory efficient than a PCA, and allows sparse input.

This algorithm has constant memory complexity, on the order of `batch\_size \* n\_features`, enabling use of np.memmap files without loading the entire file into memory. For sparse matrices, the input is converted to dense in batches (in order to be able to subtract the mean) which avoids storing the entire dense matrix at any one time.

The computational overhead of each SVD is `O(batch\_size \* n\_features \*\* 2)`, but only 2 \* batch\_size samples remain in memory at a time. There will be `n\_samples / batch\_size` SVD computations to get the principal components, versus 1 large SVD of complexity `O(n\_samples \* n\_features \*\* 2)` for PCA.

Read more in the [User Guide](../decomposition.html#incrementalpca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.IncrementalPCA.html

## Table of contents

### Constructors

- [constructor](IncrementalPCA.md#constructor)

### Properties

- [\_isDisposed](IncrementalPCA.md#_isdisposed)
- [\_isInitialized](IncrementalPCA.md#_isinitialized)
- [\_py](IncrementalPCA.md#_py)
- [id](IncrementalPCA.md#id)
- [opts](IncrementalPCA.md#opts)

### Accessors

- [batch\_size\_](IncrementalPCA.md#batch_size_)
- [components\_](IncrementalPCA.md#components_)
- [explained\_variance\_](IncrementalPCA.md#explained_variance_)
- [explained\_variance\_ratio\_](IncrementalPCA.md#explained_variance_ratio_)
- [feature\_names\_in\_](IncrementalPCA.md#feature_names_in_)
- [mean\_](IncrementalPCA.md#mean_)
- [n\_components\_](IncrementalPCA.md#n_components_)
- [n\_features\_in\_](IncrementalPCA.md#n_features_in_)
- [n\_samples\_seen\_](IncrementalPCA.md#n_samples_seen_)
- [noise\_variance\_](IncrementalPCA.md#noise_variance_)
- [py](IncrementalPCA.md#py)
- [singular\_values\_](IncrementalPCA.md#singular_values_)
- [var\_](IncrementalPCA.md#var_)

### Methods

- [dispose](IncrementalPCA.md#dispose)
- [fit](IncrementalPCA.md#fit)
- [fit\_transform](IncrementalPCA.md#fit_transform)
- [get\_covariance](IncrementalPCA.md#get_covariance)
- [get\_feature\_names\_out](IncrementalPCA.md#get_feature_names_out)
- [get\_precision](IncrementalPCA.md#get_precision)
- [init](IncrementalPCA.md#init)
- [inverse\_transform](IncrementalPCA.md#inverse_transform)
- [partial\_fit](IncrementalPCA.md#partial_fit)
- [set\_output](IncrementalPCA.md#set_output)
- [transform](IncrementalPCA.md#transform)

## Constructors

### constructor

• **new IncrementalPCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IncrementalPCAOptions`](../interfaces/IncrementalPCAOptions.md) |

#### Defined in

[generated/decomposition/IncrementalPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L25)

## Accessors

### batch\_size\_

• `get` **batch_size_**(): `Promise`<`number`\>

Inferred batch size from `batch\_size`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L610)

___

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L389)

___

### explained\_variance\_

• `get` **explained_variance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Variance explained by each of the selected components.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L414)

___

### explained\_variance\_ratio\_

• `get` **explained_variance_ratio_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L439)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L660)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical mean, aggregate over calls to `partial\_fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L489)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

The estimated number of components. Relevant when `n\_components=None`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L560)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L635)

___

### n\_samples\_seen\_

• `get` **n_samples_seen_**(): `Promise`<`number`\>

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L585)

___

### noise\_variance\_

• `get` **noise_variance_**(): `Promise`<`number`\>

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L535)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L40)

___

### singular\_values\_

• `get` **singular_values_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L464)

___

### var\_

• `get` **var_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical variance, aggregate over calls to `partial\_fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L512)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model with X, using minibatches of size batch\_size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAFitOptions`](../interfaces/IncrementalPCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAFitTransformOptions`](../interfaces/IncrementalPCAFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L138)

___

### get\_covariance

▸ **get_covariance**(`opts`): `Promise`<`any`\>

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetCovarianceOptions`](../interfaces/IncrementalPCAGetCovarianceOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L172)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetFeatureNamesOutOptions`](../interfaces/IncrementalPCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L202)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetPrecisionOptions`](../interfaces/IncrementalPCAGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L237)

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

[generated/decomposition/IncrementalPCA.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L49)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAInverseTransformOptions`](../interfaces/IncrementalPCAInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L267)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Incremental fit with X. All of X is processed as a single batch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAPartialFitOptions`](../interfaces/IncrementalPCAPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L299)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCASetOutputOptions`](../interfaces/IncrementalPCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L331)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set, using minibatches of size batch\_size if X is sparse.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCATransformOptions`](../interfaces/IncrementalPCATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L361)
