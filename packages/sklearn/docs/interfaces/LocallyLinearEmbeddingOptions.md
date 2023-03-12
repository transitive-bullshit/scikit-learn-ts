[sklearn](../readme.md) / [Exports](../modules.md) / LocallyLinearEmbeddingOptions

# Interface: LocallyLinearEmbeddingOptions

## Table of contents

### Properties

- [eigen\_solver](LocallyLinearEmbeddingOptions.md#eigen_solver)
- [hessian\_tol](LocallyLinearEmbeddingOptions.md#hessian_tol)
- [max\_iter](LocallyLinearEmbeddingOptions.md#max_iter)
- [method](LocallyLinearEmbeddingOptions.md#method)
- [modified\_tol](LocallyLinearEmbeddingOptions.md#modified_tol)
- [n\_components](LocallyLinearEmbeddingOptions.md#n_components)
- [n\_jobs](LocallyLinearEmbeddingOptions.md#n_jobs)
- [n\_neighbors](LocallyLinearEmbeddingOptions.md#n_neighbors)
- [neighbors\_algorithm](LocallyLinearEmbeddingOptions.md#neighbors_algorithm)
- [random\_state](LocallyLinearEmbeddingOptions.md#random_state)
- [reg](LocallyLinearEmbeddingOptions.md#reg)
- [tol](LocallyLinearEmbeddingOptions.md#tol)

## Properties

### eigen\_solver

• `Optional` **eigen\_solver**: ``"auto"`` \| ``"arpack"`` \| ``"dense"``

The solver used to compute the eigenvectors. The available options are:

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L446)

___

### hessian\_tol

• `Optional` **hessian\_tol**: `number`

Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.

**`Default Value`**

`0.0001`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L474)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations for the arpack solver. Not used if eigen\_solver==’dense’.

**`Default Value`**

`100`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L460)

___

### method

• `Optional` **method**: ``"standard"`` \| ``"hessian"`` \| ``"modified"`` \| ``"ltsa"``

`standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](#r62e36dd1b056-1)

**`Default Value`**

`'standard'`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L467)

___

### modified\_tol

• `Optional` **modified\_tol**: `number`

Tolerance for modified LLE method. Only used if `method \== 'modified'`.

**`Default Value`**

`1e-12`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L481)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of coordinates for the manifold.

**`Default Value`**

`2`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L432)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L498)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors to consider for each point.

**`Default Value`**

`5`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L425)

___

### neighbors\_algorithm

• `Optional` **neighbors\_algorithm**: ``"auto"`` \| ``"ball_tree"`` \| ``"kd_tree"`` \| ``"brute"``

Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L488)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L493)

___

### reg

• `Optional` **reg**: `number`

Regularization constant, multiplies the trace of the local covariance matrix of the distances.

**`Default Value`**

`0.001`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L439)

___

### tol

• `Optional` **tol**: `number`

Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.

**`Default Value`**

`0.000001`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L453)
