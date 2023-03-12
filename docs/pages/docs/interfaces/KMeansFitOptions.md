# KMeansFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

Defined in:  [generated/cluster/KMeans.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/KMeans.ts#L578)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

Defined in:  [generated/cluster/KMeans.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/KMeans.ts#L588)

### y?

> `any`

Not used, present here for API consistency by convention.

Defined in:  [generated/cluster/KMeans.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/KMeans.ts#L583)
