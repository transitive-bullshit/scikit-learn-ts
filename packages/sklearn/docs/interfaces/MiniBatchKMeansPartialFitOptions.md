[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchKMeansPartialFitOptions

# Interface: MiniBatchKMeansPartialFitOptions

## Table of contents

### Properties

- [X](MiniBatchKMeansPartialFitOptions.md#x)
- [sample\_weight](MiniBatchKMeansPartialFitOptions.md#sample_weight)
- [y](MiniBatchKMeansPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L738)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:748](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L748)

___

### y

• `Optional` **y**: `any`

Not used, present here for API consistency by convention.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:743](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L743)
