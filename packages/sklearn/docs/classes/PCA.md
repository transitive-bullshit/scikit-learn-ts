[sklearn](../readme.md) / [Exports](../modules.md) / PCA

# Class: PCA

Principal component analysis (PCA).

Linear dimensionality reduction using Singular Value Decomposition of the data to project it to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

It uses the LAPACK implementation of the full SVD or a randomized truncated SVD by the method of Halko et al. 2009, depending on the shape of the input data and the number of components to extract.

It can also use the scipy.sparse.linalg ARPACK implementation of the truncated SVD.

Notice that this class does not support sparse input. See [`TruncatedSVD`](sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") for an alternative with sparse data.

Read more in the [User Guide](../decomposition.html#pca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html

## Table of contents

### Constructors

- [constructor](PCA.md#constructor)

### Properties

- [\_isDisposed](PCA.md#_isdisposed)
- [\_isInitialized](PCA.md#_isinitialized)
- [\_py](PCA.md#_py)
- [id](PCA.md#id)
- [opts](PCA.md#opts)

### Accessors

- [components\_](PCA.md#components_)
- [explained\_variance\_](PCA.md#explained_variance_)
- [explained\_variance\_ratio\_](PCA.md#explained_variance_ratio_)
- [feature\_names\_in\_](PCA.md#feature_names_in_)
- [mean\_](PCA.md#mean_)
- [n\_components\_](PCA.md#n_components_)
- [n\_features\_](PCA.md#n_features_)
- [n\_features\_in\_](PCA.md#n_features_in_)
- [n\_samples\_](PCA.md#n_samples_)
- [noise\_variance\_](PCA.md#noise_variance_)
- [py](PCA.md#py)
- [singular\_values\_](PCA.md#singular_values_)

### Methods

- [dispose](PCA.md#dispose)
- [fit](PCA.md#fit)
- [fit\_transform](PCA.md#fit_transform)
- [get\_covariance](PCA.md#get_covariance)
- [get\_feature\_names\_out](PCA.md#get_feature_names_out)
- [get\_precision](PCA.md#get_precision)
- [init](PCA.md#init)
- [inverse\_transform](PCA.md#inverse_transform)
- [score](PCA.md#score)
- [score\_samples](PCA.md#score_samples)
- [set\_output](PCA.md#set_output)
- [transform](PCA.md#transform)

## Constructors

### constructor

• **new PCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PCAOptions`](../interfaces/PCAOptions.md) |

#### Defined in

[generated/decomposition/PCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/PCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/PCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/PCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/PCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/PCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L25)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/PCA.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L412)

___

### explained\_variance\_

• `get` **explained_variance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The amount of variance explained by each of the selected components. The variance estimation uses `n\_samples \- 1` degrees of freedom.

Equal to n\_components largest eigenvalues of the covariance matrix of X.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L437)

___

### explained\_variance\_ratio\_

• `get` **explained_variance_ratio_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Percentage of variance explained by each of the selected components.

If `n\_components` is not set then all components are stored and the sum of the ratios is equal to 1.0.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L464)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L652)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical mean, estimated from the training set.

Equal to `X.mean(axis=0)`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L514)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

The estimated number of components. When n\_components is set to ‘mle’ or a number between 0 and 1 (with svd\_solver == ‘full’) this number is estimated from input data. Otherwise it equals the parameter n\_components, or the lesser value of n\_features and n\_samples if n\_components is `undefined`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L536)

___

### n\_features\_

• `get` **n_features_**(): `Promise`<`number`\>

Number of features in the training data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L559)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L629)

___

### n\_samples\_

• `get` **n_samples_**(): `Promise`<`number`\>

Number of samples in the training data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L582)

___

### noise\_variance\_

• `get` **noise_variance_**(): `Promise`<`number`\>

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf). It is required to compute the estimated data covariance and score samples.

Equal to the average of (min(n\_features, n\_samples) - n\_components) smallest eigenvalues of the covariance matrix of X.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L606)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/PCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/PCA.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L40)

___

### singular\_values\_

• `get` **singular_values_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L489)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/PCA.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L98)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model with X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAFitOptions`](../interfaces/PCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L115)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the model with X and apply the dimensionality reduction on X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAFitTransformOptions`](../interfaces/PCAFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/PCA.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L142)

___

### get\_covariance

▸ **get_covariance**(`opts`): `Promise`<`any`\>

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAGetCovarianceOptions`](../interfaces/PCAGetCovarianceOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L172)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAGetFeatureNamesOutOptions`](../interfaces/PCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L202)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAGetPrecisionOptions`](../interfaces/PCAGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L234)

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

[generated/decomposition/PCA.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L49)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAInverseTransformOptions`](../interfaces/PCAInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L264)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the average log-likelihood of all samples.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAScoreOptions`](../interfaces/PCAScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L294)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Return the log-likelihood of each sample.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCAScoreSamplesOptions`](../interfaces/PCAScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/PCA.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L324)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCASetOutputOptions`](../interfaces/PCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L354)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PCATransformOptions`](../interfaces/PCATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/PCA.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L384)
