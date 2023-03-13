# SpectralEmbeddingOptions

## Properties

### affinity?

> `"precomputed"` \| `"rbf"` \| `"nearest_neighbors"` \| `"precomputed_nearest_neighbors"`

‘nearest\_neighbors’ : construct the affinity matrix by computing a graph of nearest neighbors.

#### Default Value

`'nearest_neighbors'`

Defined in:  [generated/manifold/SpectralEmbedding.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L322)

### eigen\_solver?

> `"arpack"` \| `"lobpcg"` \| `"amg"`

The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems. If `undefined`, then `'arpack'` is used.

Defined in:  [generated/manifold/SpectralEmbedding.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L341)

### eigen\_tol?

> `number`

Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

#### Default Value

`'auto'`

Defined in:  [generated/manifold/SpectralEmbedding.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L348)

### gamma?

> `number`

Kernel coefficient for rbf kernel. If `undefined`, gamma will be set to 1/n\_features.

Defined in:  [generated/manifold/SpectralEmbedding.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L331)

### n\_components?

> `number`

The dimension of the projected subspace.

#### Default Value

`2`

Defined in:  [generated/manifold/SpectralEmbedding.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L315)

### n\_jobs?

> `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/manifold/SpectralEmbedding.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L358)

### n\_neighbors?

> `number`

Number of nearest neighbors for nearest\_neighbors graph building. If `undefined`, n\_neighbors will be set to max(n\_samples/10, 1).

Defined in:  [generated/manifold/SpectralEmbedding.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L353)

### random\_state?

> `number`

A pseudo random number generator used for the initialization of the lobpcg eigen vectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](../../glossary.html#term-random_state)).

Defined in:  [generated/manifold/SpectralEmbedding.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L336)
