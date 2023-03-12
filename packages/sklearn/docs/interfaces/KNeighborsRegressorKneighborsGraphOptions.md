[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsRegressorKneighborsGraphOptions

# Interface: KNeighborsRegressorKneighborsGraphOptions

## Table of contents

### Properties

- [X](KNeighborsRegressorKneighborsGraphOptions.md#x)
- [mode](KNeighborsRegressorKneighborsGraphOptions.md#mode)
- [n\_neighbors](KNeighborsRegressorKneighborsGraphOptions.md#n_neighbors)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L509)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**`Default Value`**

`'connectivity'`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L521)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L514)
