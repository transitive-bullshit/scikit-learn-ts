# KernelPCAOptions

## Properties

### alpha?

> `number`

Hyperparameter of the ridge regression that learns the inverse transform (when fit\_inverse\_transform=`true`).

#### Default Value

`1`

Defined in:  [generated/decomposition/KernelPCA.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L511)

### coef0?

> `number`

Independent term in poly and sigmoid kernels. Ignored by other kernels.

#### Default Value

`1`

Defined in:  [generated/decomposition/KernelPCA.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L499)

### copy\_X?

> `boolean`

If `true`, input X is copied and stored by the model in the `X\_fit\_` attribute. If no further changes will be done to X, setting `copy\_X=False` saves memory by storing a reference.

#### Default Value

`true`

Defined in:  [generated/decomposition/KernelPCA.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L563)

### degree?

> `number`

Degree for poly kernels. Ignored by other kernels.

#### Default Value

`3`

Defined in:  [generated/decomposition/KernelPCA.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L492)

### eigen\_solver?

> `"auto"` \| `"randomized"` \| `"arpack"` \| `"dense"`

Select eigensolver to use. If `n\_components` is much less than the number of training samples, randomized (or arpack to a smaller extent) may be more efficient than the dense eigensolver. Randomized SVD is performed according to the method of Halko et al [\[3\]](#r396fc7d924b8-3).

#### Default Value

`'auto'`

Defined in:  [generated/decomposition/KernelPCA.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L525)

### fit\_inverse\_transform?

> `boolean`

Learn the inverse transform for non-precomputed kernels (i.e. learn to find the pre-image of a point). This method is based on [\[2\]](#r396fc7d924b8-2).

#### Default Value

`false`

Defined in:  [generated/decomposition/KernelPCA.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L518)

### gamma?

> `number`

Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels. If `gamma` is `undefined`, then it is set to `1/n\_features`.

Defined in:  [generated/decomposition/KernelPCA.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L485)

### iterated\_power?

> `"auto"`

Number of iterations for the power method computed by svd\_solver == ‘randomized’. When ‘auto’, it is set to 7 when `n\_components < 0.1 \* min(X.shape)`, other it is set to 4.

#### Default Value

`'auto'`

Defined in:  [generated/decomposition/KernelPCA.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L544)

### kernel?

> `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"`

Kernel used for PCA.

#### Default Value

`'linear'`

Defined in:  [generated/decomposition/KernelPCA.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L480)

### kernel\_params?

> `any`

Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.

Defined in:  [generated/decomposition/KernelPCA.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L504)

### max\_iter?

> `number`

Maximum number of iterations for arpack. If `undefined`, optimal value will be chosen by arpack.

Defined in:  [generated/decomposition/KernelPCA.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L537)

### n\_components?

> `number`

Number of components. If `undefined`, all non-zero components are kept.

Defined in:  [generated/decomposition/KernelPCA.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L473)

### n\_jobs?

> `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/decomposition/KernelPCA.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L568)

### random\_state?

> `number`

Used when `eigen\_solver` == ‘arpack’ or ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/KernelPCA.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L556)

### remove\_zero\_eig?

> `boolean`

If `true`, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n\_components (and sometimes even zero due to numerical instability). When n\_components is `undefined`, this parameter is ignored and components with zero eigenvalues are removed regardless.

#### Default Value

`false`

Defined in:  [generated/decomposition/KernelPCA.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L551)

### tol?

> `number`

Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack.

#### Default Value

`0`

Defined in:  [generated/decomposition/KernelPCA.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L532)
