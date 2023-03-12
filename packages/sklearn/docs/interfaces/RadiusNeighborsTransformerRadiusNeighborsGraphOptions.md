[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsTransformerRadiusNeighborsGraphOptions

# Interface: RadiusNeighborsTransformerRadiusNeighborsGraphOptions

## Table of contents

### Properties

- [X](RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md#x)
- [mode](RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md#mode)
- [radius](RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md#radius)
- [sort\_results](RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L621)

___

### mode

• `Optional` **mode**: ``"connectivity"`` \| ``"distance"``

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

**`Default Value`**

`'connectivity'`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L633)

___

### radius

• `Optional` **radius**: `number`

Radius of neighborhoods. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L626)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L640)