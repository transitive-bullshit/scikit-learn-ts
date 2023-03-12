[sklearn](../readme.md) / [Exports](../modules.md) / MeanShiftOptions

# Interface: MeanShiftOptions

## Table of contents

### Properties

- [bandwidth](MeanShiftOptions.md#bandwidth)
- [bin\_seeding](MeanShiftOptions.md#bin_seeding)
- [cluster\_all](MeanShiftOptions.md#cluster_all)
- [max\_iter](MeanShiftOptions.md#max_iter)
- [min\_bin\_freq](MeanShiftOptions.md#min_bin_freq)
- [n\_jobs](MeanShiftOptions.md#n_jobs)
- [seeds](MeanShiftOptions.md#seeds)

## Properties

### bandwidth

• `Optional` **bandwidth**: `number`

Bandwidth used in the flat kernel.

If not given, the bandwidth is estimated using sklearn.cluster.estimate\_bandwidth; see the documentation for that function for hints on scalability (see also the Notes, below).

#### Defined in

[generated/cluster/MeanShift.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L318)

___

### bin\_seeding

• `Optional` **bin\_seeding**: `boolean`

If true, initial kernel locations are not locations of all points, but rather the location of the discretized version of points, where points are binned onto a grid whose coarseness corresponds to the bandwidth. Setting this option to `true` will speed up the algorithm because fewer seeds will be initialized. The default value is `false`. Ignored if seeds argument is not `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/cluster/MeanShift.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L330)

___

### cluster\_all

• `Optional` **cluster\_all**: `boolean`

If true, then all points are clustered, even those orphans that are not within any kernel. Orphans are assigned to the nearest kernel. If false, then orphans are given cluster label -1.

**`Default Value`**

`true`

#### Defined in

[generated/cluster/MeanShift.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L344)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations, per seed point before the clustering operation terminates (for that seed point), if has not converged yet.

**`Default Value`**

`300`

#### Defined in

[generated/cluster/MeanShift.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L356)

___

### min\_bin\_freq

• `Optional` **min\_bin\_freq**: `number`

To speed up the algorithm, accept only those bins with at least min\_bin\_freq points as seeds.

**`Default Value`**

`1`

#### Defined in

[generated/cluster/MeanShift.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L337)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation. The following tasks benefit from the parallelization:

#### Defined in

[generated/cluster/MeanShift.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L349)

___

### seeds

• `Optional` **seeds**: [`ArrayLike`](../modules.md#arraylike)[]

Seeds used to initialize kernels. If not set, the seeds are calculated by clustering.get\_bin\_seeds with bandwidth as the grid size and default values for other parameters.

#### Defined in

[generated/cluster/MeanShift.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L323)