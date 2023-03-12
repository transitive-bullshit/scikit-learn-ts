[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsTransformerOptions

# Interface: RadiusNeighborsTransformerOptions

## Table of contents

### Properties

- [algorithm](RadiusNeighborsTransformerOptions.md#algorithm)
- [leaf\_size](RadiusNeighborsTransformerOptions.md#leaf_size)
- [metric](RadiusNeighborsTransformerOptions.md#metric)
- [metric\_params](RadiusNeighborsTransformerOptions.md#metric_params)
- [mode](RadiusNeighborsTransformerOptions.md#mode)
- [n\_jobs](RadiusNeighborsTransformerOptions.md#n_jobs)
- [p](RadiusNeighborsTransformerOptions.md#p)
- [radius](RadiusNeighborsTransformerOptions.md#radius)

## Properties

### algorithm

• `Optional` **algorithm**: ``"auto"`` \| ``"ball_tree"`` \| ``"kd_tree"`` \| ``"brute"``

Algorithm used to compute the nearest neighbors:

**`Default Value`**

`'auto'`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L522)

___

### leaf\_size

• `Optional` **leaf\_size**: `number`

Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

**`Default Value`**

`30`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L529)

___

### metric

• `Optional` **metric**: `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

Distance matrices are not supported.

**`Default Value`**

`'minkowski'`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L540)

___

### metric\_params

• `Optional` **metric\_params**: `any`

Additional keyword arguments for the metric function.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L552)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.

**`Default Value`**

`'distance'`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L508)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run for neighbors search. If `\-1`, then the number of jobs is set to the number of CPU cores.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L557)

___

### p

• `Optional` **p**: `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**`Default Value`**

`2`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L547)

___

### radius

• `Optional` **radius**: `number`

Radius of neighborhood in the transformed sparse graph.

**`Default Value`**

`1`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L515)
