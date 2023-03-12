[sklearn](../readme.md) / [Exports](../modules.md) / NearestNeighborsOptions

# Interface: NearestNeighborsOptions

## Table of contents

### Properties

- [algorithm](NearestNeighborsOptions.md#algorithm)
- [leaf\_size](NearestNeighborsOptions.md#leaf_size)
- [metric](NearestNeighborsOptions.md#metric)
- [metric\_params](NearestNeighborsOptions.md#metric_params)
- [n\_jobs](NearestNeighborsOptions.md#n_jobs)
- [n\_neighbors](NearestNeighborsOptions.md#n_neighbors)
- [p](NearestNeighborsOptions.md#p)
- [radius](NearestNeighborsOptions.md#radius)

## Properties

### algorithm

• `Optional` **algorithm**: ``"auto"`` \| ``"ball_tree"`` \| ``"kd_tree"`` \| ``"brute"``

Algorithm used to compute the nearest neighbors:

**`Default Value`**

`'auto'`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L442)

___

### leaf\_size

• `Optional` **leaf\_size**: `number`

Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

**`Default Value`**

`30`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L449)

___

### metric

• `Optional` **metric**: `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

**`Default Value`**

`'minkowski'`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L460)

___

### metric\_params

• `Optional` **metric\_params**: `any`

Additional keyword arguments for the metric function.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L472)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L477)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.NearestNeighbors.kneighbors "sklearn.neighbors.NearestNeighbors.kneighbors") queries.

**`Default Value`**

`5`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L428)

___

### p

• `Optional` **p**: `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**`Default Value`**

`2`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L467)

___

### radius

• `Optional` **radius**: `number`

Range of parameter space to use by default for [`radius\_neighbors`](#sklearn.neighbors.NearestNeighbors.radius_neighbors "sklearn.neighbors.NearestNeighbors.radius_neighbors") queries.

**`Default Value`**

`1`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L435)
