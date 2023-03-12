[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsClassifierKneighborsGraphOptions

# Interface: KNeighborsClassifierKneighborsGraphOptions

## Table of contents

### Properties

- [X](KNeighborsClassifierKneighborsGraphOptions.md#x)
- [mode](KNeighborsClassifierKneighborsGraphOptions.md#mode)
- [n\_neighbors](KNeighborsClassifierKneighborsGraphOptions.md#n_neighbors)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L595)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**`Default Value`**

`'connectivity'`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L607)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L600)
