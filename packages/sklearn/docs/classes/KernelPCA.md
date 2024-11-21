[**sklearn**](../README.md) • **Docs**

***

Kernel Principal component analysis (KPCA).

Non-linear dimensionality reduction through the use of kernels [\[1\]](#r396fc7d924b8-1), see also [Pairwise metrics, Affinities and Kernels](../metrics.html#metrics).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.14.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.14.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](#r396fc7d924b8-3), see `eigen\_solver`.

For a usage example and comparison between Principal Components Analysis (PCA) and its kernelized version (KPCA), see [Kernel PCA](../../auto_examples/decomposition/plot_kernel_pca.html#sphx-glr-auto-examples-decomposition-plot-kernel-pca-py).

For a usage example in denoising images using KPCA, see [Image denoising using kernel PCA](../../auto_examples/applications/plot_digits_denoising.html#sphx-glr-auto-examples-applications-plot-digits-denoising-py).

Read more in the [User Guide](../decomposition.html#kernel-pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html)

## Constructors

### new KernelPCA()

> **new KernelPCA**(`opts`?): [`KernelPCA`](KernelPCA.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Hyperparameter of the ridge regression that learns the inverse transform (when fit\_inverse\_transform=`true`).

**Default Value**

`1`

• **opts.coef0?**: `number`

Independent term in poly and sigmoid kernels. Ignored by other kernels.

**Default Value**

`1`

• **opts.copy\_X?**: `boolean`

If `true`, input X is copied and stored by the model in the `X\_fit\_` attribute. If no further changes will be done to X, setting `copy\_X=False` saves memory by storing a reference.

**Default Value**

`true`

• **opts.degree?**: `number`

Degree for poly kernels. Ignored by other kernels.

**Default Value**

`3`

• **opts.eigen\_solver?**: `"auto"` \| `"randomized"` \| `"arpack"` \| `"dense"`

Select eigensolver to use. If `n\_components` is much less than the number of training samples, randomized (or arpack to a smaller extent) may be more efficient than the dense eigensolver. Randomized SVD is performed according to the method of Halko et al [\[3\]](#r396fc7d924b8-3).

**Default Value**

`'auto'`

• **opts.fit\_inverse\_transform?**: `boolean`

Learn the inverse transform for non-precomputed kernels (i.e. learn to find the pre-image of a point). This method is based on [\[2\]](#r396fc7d924b8-2).

**Default Value**

`false`

• **opts.gamma?**: `number`

Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels. If `gamma` is `undefined`, then it is set to `1/n\_features`.

• **opts.iterated\_power?**: `"auto"`

Number of iterations for the power method computed by svd\_solver == ‘randomized’. When ‘auto’, it is set to 7 when `n\_components < 0.1 \* min(X.shape)`, other it is set to 4.

**Default Value**

`'auto'`

• **opts.kernel?**: `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"`

Kernel used for PCA.

**Default Value**

`'linear'`

• **opts.kernel\_params?**: `any`

Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.

• **opts.max\_iter?**: `number`

Maximum number of iterations for arpack. If `undefined`, optimal value will be chosen by arpack.

• **opts.n\_components?**: `number`

Number of components. If `undefined`, all non-zero components are kept.

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.random\_state?**: `number`

Used when `eigen\_solver` == ‘arpack’ or ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.remove\_zero\_eig?**: `boolean`

If `true`, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n\_components (and sometimes even zero due to numerical instability). When n\_components is `undefined`, this parameter is ignored and components with zero eigenvalues are removed regardless.

**Default Value**

`false`

• **opts.tol?**: `number`

Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack.

**Default Value**

`0`

#### Returns

[`KernelPCA`](KernelPCA.md)

#### Defined in

[generated/decomposition/KernelPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/KernelPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/KernelPCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/KernelPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/KernelPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/KernelPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L25)

## Accessors

### dual\_coef\_

#### Get Signature

> **get** **dual\_coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Inverse transform matrix. Only available when `fit\_inverse\_transform` is `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L505)

***

### eigenvalues\_

#### Get Signature

> **get** **eigenvalues\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Eigenvalues of the centered kernel matrix in decreasing order. If `n\_components` and `remove\_zero\_eig` are not set, then all values are stored.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/KernelPCA.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L455)

***

### eigenvectors\_

#### Get Signature

> **get** **eigenvectors\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Eigenvectors of the centered kernel matrix. If `n\_components` and `remove\_zero\_eig` are not set, then all components are stored.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L480)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/KernelPCA.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L601)

***

### gamma\_

#### Get Signature

> **get** **gamma\_**(): `Promise`\<`number`\>

Kernel coefficient for rbf, poly and sigmoid kernels. When `gamma` is explicitly provided, this is just the same as `gamma`. When `gamma` is `undefined`, this is the actual value of kernel coefficient.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L626)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L576)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/decomposition/KernelPCA.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L136)

***

### X\_fit\_

#### Get Signature

> **get** **X\_fit\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The data used to fit the model. If `copy\_X=False`, then `X\_fit\_` is a reference. This attribute is used for the calls to transform.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L553)

***

### X\_transformed\_fit\_

#### Get Signature

> **get** **X\_transformed\_fit\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Projection of the fitted data on the kernel principal components. Only available when `fit\_inverse\_transform` is `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L528)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L187)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L204)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Fit the model from data in X and transform X.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters (keyword arguments) and values passed to the fit\_transform instance.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L241)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L285)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L321)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L149)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform X back to original space.

`inverse\_transform` approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L357)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/KernelPCA.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L391)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/KernelPCA.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L423)
