[sklearn](../readme.md) / [Exports](../modules.md) / NearestNeighborsRadiusNeighborsGraphOptions

# Interface: NearestNeighborsRadiusNeighborsGraphOptions

## Table of contents

### Properties

- [X](NearestNeighborsRadiusNeighborsGraphOptions.md#x)
- [mode](NearestNeighborsRadiusNeighborsGraphOptions.md#mode)
- [radius](NearestNeighborsRadiusNeighborsGraphOptions.md#radius)
- [sort\_results](NearestNeighborsRadiusNeighborsGraphOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L560)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**`Default Value`**

`'connectivity'`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L572)

___

### radius

• `Optional` **radius**: `number`

Radius of neighborhoods. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L565)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L579)
