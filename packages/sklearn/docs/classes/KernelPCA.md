# KernelPCA

Kernel Principal component analysis (KPCA) [\[1\]](#r396fc7d924b8-1).

Non-linear dimensionality reduction through the use of kernels (see [Pairwise metrics, Affinities and Kernels](../metrics.html#metrics)).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.10.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.10.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](#r396fc7d924b8-3), see `eigen\_solver`.

Read more in the [User Guide](../decomposition.html#kernel-pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html)

## Constructors

## constructor()

### Signature

```ts
new KernelPCA(opts?: object): KernelPCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Hyperparameter of the ridge regression that learns the inverse transform (when fit\_inverse\_transform=`true`).  `Default Value`  `1` |
| `opts.coef0?` | `number` | Independent term in poly and sigmoid kernels. Ignored by other kernels.  `Default Value`  `1` |
| `opts.copy_X?` | `boolean` | If `true`, input X is copied and stored by the model in the `X\_fit\_` attribute. If no further changes will be done to X, setting `copy\_X=False` saves memory by storing a reference.  `Default Value`  `true` |
| `opts.degree?` | `number` | Degree for poly kernels. Ignored by other kernels.  `Default Value`  `3` |
| `opts.eigen_solver?` | `"auto"` \| `"randomized"` \| `"arpack"` \| `"dense"` | Select eigensolver to use. If `n\_components` is much less than the number of training samples, randomized (or arpack to a smaller extent) may be more efficient than the dense eigensolver. Randomized SVD is performed according to the method of Halko et al [\[3\]](#r396fc7d924b8-3).  `Default Value`  `'auto'` |
| `opts.fit_inverse_transform?` | `boolean` | Learn the inverse transform for non-precomputed kernels (i.e. learn to find the pre-image of a point). This method is based on [\[2\]](#r396fc7d924b8-2).  `Default Value`  `false` |
| `opts.gamma?` | `number` | Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels. If `gamma` is `undefined`, then it is set to `1/n\_features`. |
| `opts.iterated_power?` | `"auto"` | Number of iterations for the power method computed by svd\_solver == ‘randomized’. When ‘auto’, it is set to 7 when `n\_components < 0.1 \* min(X.shape)`, other it is set to 4.  `Default Value`  `'auto'` |
| `opts.kernel?` | `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"` | Kernel used for PCA.  `Default Value`  `'linear'` |
| `opts.kernel_params?` | `any` | Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels. |
| `opts.max_iter?` | `number` | Maximum number of iterations for arpack. If `undefined`, optimal value will be chosen by arpack. |
| `opts.n_components?` | `number` | Number of components. If `undefined`, all non-zero components are kept. |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state?` | `number` | Used when `eigen\_solver` == ‘arpack’ or ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.remove_zero_eig?` | `boolean` | If `true`, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n\_components (and sometimes even zero due to numerical instability). When n\_components is `undefined`, this parameter is ignored and components with zero eigenvalues are removed regardless.  `Default Value`  `false` |
| `opts.tol?` | `number` | Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack.  `Default Value`  `0` |

### Returns

[`KernelPCA`](KernelPCA.md)

Defined in:  [generated/decomposition/KernelPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/KernelPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/KernelPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/KernelPCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L23)

### id

> `string`

Defined in:  [generated/decomposition/KernelPCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L20)

### opts

> `any`

Defined in:  [generated/decomposition/KernelPCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L21)

## Accessors

### X\_fit\_

The data used to fit the model. If `copy\_X=False`, then `X\_fit\_` is a reference. This attribute is used for the calls to transform.

#### Signature

```ts
X_fit_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L539)

Defined in:  [generated/decomposition/KernelPCA.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L539)

### X\_transformed\_fit\_

Projection of the fitted data on the kernel principal components. Only available when `fit\_inverse\_transform` is `true`.

#### Signature

```ts
X_transformed_fit_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L514)

Defined in:  [generated/decomposition/KernelPCA.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L514)

### dual\_coef\_

Inverse transform matrix. Only available when `fit\_inverse\_transform` is `true`.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L491)

Defined in:  [generated/decomposition/KernelPCA.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L491)

### eigenvalues\_

Eigenvalues of the centered kernel matrix in decreasing order. If `n\_components` and `remove\_zero\_eig` are not set, then all values are stored.

#### Signature

```ts
eigenvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/KernelPCA.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L441)

Defined in:  [generated/decomposition/KernelPCA.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L441)

### eigenvectors\_

Eigenvectors of the centered kernel matrix. If `n\_components` and `remove\_zero\_eig` are not set, then all components are stored.

#### Signature

```ts
eigenvectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L466)

Defined in:  [generated/decomposition/KernelPCA.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L466)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/KernelPCA.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L587)

Defined in:  [generated/decomposition/KernelPCA.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L587)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/KernelPCA.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L562)

Defined in:  [generated/decomposition/KernelPCA.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L562)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/KernelPCA.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L132)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/decomposition/KernelPCA.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L136)

Defined in:  [generated/decomposition/KernelPCA.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L132) [generated/decomposition/KernelPCA.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L136)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/KernelPCA.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L200)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L217)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.params?` | `any` | Parameters (keyword arguments) and values passed to the fit\_transform instance. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L255)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.KernelPCA.fit "sklearn.decomposition.KernelPCA.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L302)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/KernelPCA.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L145)

### inverse\_transform()

Transform X back to original space.

`inverse\_transform` approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L340)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L375)

### transform()

Transform X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L408)
