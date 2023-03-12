[sklearn](../readme.md) / [Exports](../modules.md) / SpectralClusteringOptions

# Interface: SpectralClusteringOptions

## Table of contents

### Properties

- [affinity](SpectralClusteringOptions.md#affinity)
- [assign\_labels](SpectralClusteringOptions.md#assign_labels)
- [coef0](SpectralClusteringOptions.md#coef0)
- [degree](SpectralClusteringOptions.md#degree)
- [eigen\_solver](SpectralClusteringOptions.md#eigen_solver)
- [eigen\_tol](SpectralClusteringOptions.md#eigen_tol)
- [gamma](SpectralClusteringOptions.md#gamma)
- [kernel\_params](SpectralClusteringOptions.md#kernel_params)
- [n\_clusters](SpectralClusteringOptions.md#n_clusters)
- [n\_components](SpectralClusteringOptions.md#n_components)
- [n\_init](SpectralClusteringOptions.md#n_init)
- [n\_jobs](SpectralClusteringOptions.md#n_jobs)
- [n\_neighbors](SpectralClusteringOptions.md#n_neighbors)
- [random\_state](SpectralClusteringOptions.md#random_state)
- [verbose](SpectralClusteringOptions.md#verbose)

## Properties

### affinity

• `Optional` **affinity**: `string`

‘nearest\_neighbors’: construct the affinity matrix by computing a graph of nearest neighbors.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/cluster/SpectralClustering.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L334)

___

### assign\_labels

• `Optional` **assign\_labels**: ``"kmeans"`` \| ``"discretize"`` \| ``"cluster_qr"``

The strategy for assigning labels in the embedding space. There are two ways to assign labels after the Laplacian embedding. k-means is a popular choice, but it can be sensitive to initialization. Discretization is another approach which is less sensitive to random initialization [\[3\]](#r5f6cbeb1558e-3). The cluster\_qr method [\[5\]](#r5f6cbeb1558e-5) directly extract clusters from eigenvectors in spectral clustering. In contrast to k-means and discretization, cluster\_qr has no tuning parameters and runs no iterations, yet may outperform k-means and discretization in terms of both quality and speed.

**`Default Value`**

`'kmeans'`

#### Defined in

[generated/cluster/SpectralClustering.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L355)

___

### coef0

• `Optional` **coef0**: `number`

Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

**`Default Value`**

`1`

#### Defined in

[generated/cluster/SpectralClustering.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L369)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel. Ignored by other kernels.

**`Default Value`**

`3`

#### Defined in

[generated/cluster/SpectralClustering.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L362)

___

### eigen\_solver

• `Optional` **eigen\_solver**: ``"arpack"`` \| ``"lobpcg"`` \| ``"amg"``

The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems, but may also lead to instabilities. If `undefined`, then `'arpack'` is used. See [\[4\]](#r5f6cbeb1558e-4) for more details regarding `'lobpcg'`.

#### Defined in

[generated/cluster/SpectralClustering.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L303)

___

### eigen\_tol

• `Optional` **eigen\_tol**: `number`

Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

**`Default Value`**

`'auto'`

#### Defined in

[generated/cluster/SpectralClustering.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L348)

___

### gamma

• `Optional` **gamma**: `number`

Kernel coefficient for rbf, poly, sigmoid, laplacian and chi2 kernels. Ignored for `affinity='nearest\_neighbors'`.

**`Default Value`**

`1`

#### Defined in

[generated/cluster/SpectralClustering.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L327)

___

### kernel\_params

• `Optional` **kernel\_params**: `any`

Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.

#### Defined in

[generated/cluster/SpectralClustering.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L374)

___

### n\_clusters

• `Optional` **n\_clusters**: `number`

The dimension of the projection subspace.

**`Default Value`**

`8`

#### Defined in

[generated/cluster/SpectralClustering.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L298)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of eigenvectors to use for the spectral embedding. If `undefined`, defaults to `n\_clusters`.

#### Defined in

[generated/cluster/SpectralClustering.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L308)

___

### n\_init

• `Optional` **n\_init**: `number`

Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n\_init consecutive runs in terms of inertia. Only used if `assign\_labels='kmeans'`.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/SpectralClustering.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L320)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run when `affinity='nearest\_neighbors'` or `affinity='precomputed\_nearest\_neighbors'`. The neighbors search will be done in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/cluster/SpectralClustering.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L379)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors to use when constructing the affinity matrix using the nearest neighbors method. Ignored for `affinity='rbf'`.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/SpectralClustering.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L341)

___

### random\_state

• `Optional` **random\_state**: `number`

A pseudo random number generator used for the initialization of the lobpcg eigenvectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](../../glossary.html#term-random_state)).

#### Defined in

[generated/cluster/SpectralClustering.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L313)

___

### verbose

• `Optional` **verbose**: `boolean`

Verbosity mode.

**`Default Value`**

`false`

#### Defined in

[generated/cluster/SpectralClustering.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L386)