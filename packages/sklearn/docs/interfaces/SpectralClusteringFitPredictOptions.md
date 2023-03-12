[sklearn](../readme.md) / [Exports](../modules.md) / SpectralClusteringFitPredictOptions

# Interface: SpectralClusteringFitPredictOptions

## Table of contents

### Properties

- [X](SpectralClusteringFitPredictOptions.md#x)
- [y](SpectralClusteringFitPredictOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed\_nearest\_neighbors`. If a sparse matrix is provided in a format other than `csr\_matrix`, `csc\_matrix`, or `coo\_matrix`, it will be converted into a sparse `csr\_matrix`.

#### Defined in

[generated/cluster/SpectralClustering.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L405)

___

### y

• `Optional` **y**: `any`

Not used, present here for API consistency by convention.

#### Defined in

[generated/cluster/SpectralClustering.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L410)
