# Class: KernelPCA

Kernel Principal component analysis (KPCA).

Non-linear dimensionality reduction through the use of kernels [\[1\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-1), see also [Pairwise metrics, Affinities and Kernels](https://scikit-learn.org/stable/modules/generated/../metrics.html#metrics).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.14.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.14.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-3), see `eigen_solver`.

For a usage example and comparison between Principal Components Analysis (PCA) and its kernelized version (KPCA), see [Kernel PCA](https://scikit-learn.org/stable/modules/generated/../../auto_examples/decomposition/plot_kernel_pca.html#sphx-glr-auto-examples-decomposition-plot-kernel-pca-py).

For a usage example in denoising images using KPCA, see [Image denoising using kernel PCA](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_digits_denoising.html#sphx-glr-auto-examples-applications-plot-digits-denoising-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#kernel-pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html)

## Constructors

### new KernelPCA()

> **new KernelPCA**(`opts`?): [`KernelPCA`](KernelPCA.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alpha`? | `number` | Hyperparameter of the ridge regression that learns the inverse transform (when fit_inverse_transform=`true`). |
| `opts.coef0`? | `number` | Independent term in poly and sigmoid kernels. Ignored by other kernels. |
| `opts.copy_X`? | `boolean` | If `true`, input X is copied and stored by the model in the `X_fit_` attribute. If no further changes will be done to X, setting `copy_X=False` saves memory by storing a reference. |
| `opts.degree`? | `number` | Degree for poly kernels. Ignored by other kernels. |
| `opts.eigen_solver`? | `"auto"` \| `"randomized"` \| `"arpack"` \| `"dense"` | Select eigensolver to use. If `n_components` is much less than the number of training samples, randomized (or arpack to a smaller extent) may be more efficient than the dense eigensolver. Randomized SVD is performed according to the method of Halko et al [\[3\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-3). |
| `opts.fit_inverse_transform`? | `boolean` | Learn the inverse transform for non-precomputed kernels (i.e. learn to find the pre-image of a point). This method is based on [\[2\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-2). |
| `opts.gamma`? | `number` | Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels. If `gamma` is `undefined`, then it is set to `1/n_features`. |
| `opts.iterated_power`? | `"auto"` | Number of iterations for the power method computed by svd_solver == ‘randomized’. When ‘auto’, it is set to 7 when `n_components < 0.1 \* min(X.shape)`, other it is set to 4. |
| `opts.kernel`? | `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"` | Kernel used for PCA. |
| `opts.kernel_params`? | `any` | Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels. |
| `opts.max_iter`? | `number` | Maximum number of iterations for arpack. If `undefined`, optimal value will be chosen by arpack. |
| `opts.n_components`? | `number` | Number of components. If `undefined`, all non-zero components are kept. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state`? | `number` | Used when `eigen_solver` == ‘arpack’ or ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.remove_zero_eig`? | `boolean` | If `true`, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n_components (and sometimes even zero due to numerical instability). When n_components is `undefined`, this parameter is ignored and components with zero eigenvalues are removed regardless. |
| `opts.tol`? | `number` | Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack. |

**Returns** [`KernelPCA`](KernelPCA.md)

**Defined in** [generated/decomposition/KernelPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L31)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/KernelPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L29) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/KernelPCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L28) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/KernelPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L27) |
| `id` | `string` | `undefined` | [generated/decomposition/KernelPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L24) |
| `opts` | `any` | `undefined` | [generated/decomposition/KernelPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L25) |

## Accessors

### dual\_coef\_

**Get Signature**

> **get** **dual\_coef\_**(): `Promise`\<`ArrayLike`[]\>

Inverse transform matrix. Only available when `fit_inverse_transform` is `true`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L505)

***

### eigenvalues\_

**Get Signature**

> **get** **eigenvalues\_**(): `Promise`\<`ArrayLike`\>

Eigenvalues of the centered kernel matrix in decreasing order. If `n_components` and `remove_zero_eig` are not set, then all values are stored.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/decomposition/KernelPCA.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L455)

***

### eigenvectors\_

**Get Signature**

> **get** **eigenvectors\_**(): `Promise`\<`ArrayLike`[]\>

Eigenvectors of the centered kernel matrix. If `n_components` and `remove_zero_eig` are not set, then all components are stored.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L480)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/decomposition/KernelPCA.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L601)

***

### gamma\_

**Get Signature**

> **get** **gamma\_**(): `Promise`\<`number`\>

Kernel coefficient for rbf, poly and sigmoid kernels. When `gamma` is explicitly provided, this is just the same as `gamma`. When `gamma` is `undefined`, this is the actual value of kernel coefficient.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/KernelPCA.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L626)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/KernelPCA.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L576)

***

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

**Defined in** [generated/decomposition/KernelPCA.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L136)

***

### X\_fit\_

**Get Signature**

> **get** **X\_fit\_**(): `Promise`\<`ArrayLike`[]\>

The data used to fit the model. If `copy_X=False`, then `X_fit_` is a reference. This attribute is used for the calls to transform.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L553)

***

### X\_transformed\_fit\_

**Get Signature**

> **get** **X\_transformed\_fit\_**(): `Promise`\<`ArrayLike`[]\>

Projection of the fitted data on the kernel principal components. Only available when `fit_inverse_transform` is `true`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L528)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/decomposition/KernelPCA.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L187)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/decomposition/KernelPCA.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L204)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the model from data in X and transform X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters (keyword arguments) and values passed to the fit_transform instance. |
| `opts.X`? | `ArrayLike` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L241)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/decomposition/KernelPCA.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L285)

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

**Defined in** [generated/decomposition/KernelPCA.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L321)

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

**Defined in** [generated/decomposition/KernelPCA.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L149)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X back to original space.

`inverse_transform` approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L357)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/decomposition/KernelPCA.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L391)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/KernelPCA.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L423)
