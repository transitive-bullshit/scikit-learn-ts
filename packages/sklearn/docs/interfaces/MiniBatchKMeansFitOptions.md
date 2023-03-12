[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchKMeansFitOptions

# Interface: MiniBatchKMeansFitOptions

## Table of contents

### Properties

- [X](MiniBatchKMeansFitOptions.md#x)
- [sample\_weight](MiniBatchKMeansFitOptions.md#sample_weight)
- [y](MiniBatchKMeansFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L680)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

The weights for each observation in X. If `undefined`, all observations are assigned equal weight.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L690)

___

### y

• `Optional` **y**: `any`

Not used, present here for API consistency by convention.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L685)
