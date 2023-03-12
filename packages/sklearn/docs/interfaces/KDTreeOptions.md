[sklearn](../readme.md) / [Exports](../modules.md) / KDTreeOptions

# Interface: KDTreeOptions

## Table of contents

### Properties

- [X](KDTreeOptions.md#x)
- [leaf\_size](KDTreeOptions.md#leaf_size)
- [metric](KDTreeOptions.md#metric)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

n\_samples is the number of points in the data set, and n\_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made.

#### Defined in

[generated/neighbors/KDTree.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L361)

___

### leaf\_size

• `Optional` **leaf\_size**: `any`

Number of points at which to switch to brute-force. Changing leaf\_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n\_samples / leaf\_size. For a specified `leaf\_size`, a leaf node is guaranteed to satisfy `leaf\_size <= n\_points <= 2 \* leaf\_size`, except in the case that `n\_samples < leaf\_size`.

**`Default Value`**

`40`

#### Defined in

[generated/neighbors/KDTree.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L368)

___

### metric

• `Optional` **metric**: `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. kd\_tree.valid\_metrics gives a list of the metrics which are valid for KDTree. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information.

**`Default Value`**

`'minkowski'`

#### Defined in

[generated/neighbors/KDTree.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L375)