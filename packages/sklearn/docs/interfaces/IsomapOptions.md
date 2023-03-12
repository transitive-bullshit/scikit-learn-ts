[sklearn](../readme.md) / [Exports](../modules.md) / IsomapOptions

# Interface: IsomapOptions

## Table of contents

### Properties

- [eigen\_solver](IsomapOptions.md#eigen_solver)
- [max\_iter](IsomapOptions.md#max_iter)
- [metric](IsomapOptions.md#metric)
- [metric\_params](IsomapOptions.md#metric_params)
- [n\_components](IsomapOptions.md#n_components)
- [n\_jobs](IsomapOptions.md#n_jobs)
- [n\_neighbors](IsomapOptions.md#n_neighbors)
- [neighbors\_algorithm](IsomapOptions.md#neighbors_algorithm)
- [p](IsomapOptions.md#p)
- [path\_method](IsomapOptions.md#path_method)
- [radius](IsomapOptions.md#radius)
- [tol](IsomapOptions.md#tol)

## Properties

### eigen\_solver

• `Optional` **eigen\_solver**: ``"auto"`` \| ``"arpack"`` \| ``"dense"``

‘auto’ : Attempt to choose the most efficient solver for the given problem.

‘arpack’ : Use Arnoldi decomposition to find the eigenvalues and eigenvectors.

‘dense’ : Use a direct solver (i.e. LAPACK) for the eigenvalue decomposition.

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/Isomap.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L454)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations for the arpack solver. not used if eigen\_solver == ‘dense’.

#### Defined in

[generated/manifold/Isomap.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L466)

___

### metric

• `Optional` **metric**: `any`

The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [Glossary](../../glossary.html#term-sparse-graph).

**`Default Value`**

`'minkowski'`

#### Defined in

[generated/manifold/Isomap.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L498)

___

### metric\_params

• `Optional` **metric\_params**: `any`

Additional keyword arguments for the metric function.

#### Defined in

[generated/manifold/Isomap.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L510)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of coordinates for the manifold.

**`Default Value`**

`2`

#### Defined in

[generated/manifold/Isomap.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L443)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/manifold/Isomap.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L491)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors to consider for each point. If `n\_neighbors` is an int, then `radius` must be `undefined`.

**`Default Value`**

`5`

#### Defined in

[generated/manifold/Isomap.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L431)

___

### neighbors\_algorithm

• `Optional` **neighbors\_algorithm**: ``"auto"`` \| ``"ball_tree"`` \| ``"kd_tree"`` \| ``"brute"``

Algorithm to use for nearest neighbors search, passed to neighbors.NearestNeighbors instance.

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/Isomap.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L486)

___

### p

• `Optional` **p**: `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**`Default Value`**

`2`

#### Defined in

[generated/manifold/Isomap.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L505)

___

### path\_method

• `Optional` **path\_method**: ``"auto"`` \| ``"FW"`` \| ``"D"``

Method to use in finding shortest path.

‘auto’ : attempt to choose the best algorithm automatically.

‘FW’ : Floyd-Warshall algorithm.

‘D’ : Dijkstra’s algorithm.

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/Isomap.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L479)

___

### radius

• `Optional` **radius**: `number`

Limiting distance of neighbors to return. If `radius` is a float, then `n\_neighbors` must be set to `undefined`.

#### Defined in

[generated/manifold/Isomap.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L436)

___

### tol

• `Optional` **tol**: `number`

Convergence tolerance passed to arpack or lobpcg. not used if eigen\_solver == ‘dense’.

**`Default Value`**

`0`

#### Defined in

[generated/manifold/Isomap.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/Isomap.ts#L461)