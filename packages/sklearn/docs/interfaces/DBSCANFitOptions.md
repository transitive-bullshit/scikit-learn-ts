[sklearn](../readme.md) / [Exports](../modules.md) / DBSCANFitOptions

# Interface: DBSCANFitOptions

## Table of contents

### Properties

- [X](DBSCANFitOptions.md#x)
- [sample\_weight](DBSCANFitOptions.md#sample_weight)
- [y](DBSCANFitOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Defined in

[generated/cluster/DBSCAN.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L343)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1.

#### Defined in

[generated/cluster/DBSCAN.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L353)

___

### y

• `Optional` **y**: `any`

Not used, present here for API consistency by convention.

#### Defined in

[generated/cluster/DBSCAN.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L348)
