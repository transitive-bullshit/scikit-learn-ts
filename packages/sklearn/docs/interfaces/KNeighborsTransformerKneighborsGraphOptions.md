[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsTransformerKneighborsGraphOptions

# Interface: KNeighborsTransformerKneighborsGraphOptions

## Table of contents

### Properties

- [X](KNeighborsTransformerKneighborsGraphOptions.md#x)
- [mode](KNeighborsTransformerKneighborsGraphOptions.md#mode)
- [n\_neighbors](KNeighborsTransformerKneighborsGraphOptions.md#n_neighbors)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L602)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**`Default Value`**

`'connectivity'`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L614)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L607)
