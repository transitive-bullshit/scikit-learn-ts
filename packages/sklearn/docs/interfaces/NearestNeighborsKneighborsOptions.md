[sklearn](../readme.md) / [Exports](../modules.md) / NearestNeighborsKneighborsOptions

# Interface: NearestNeighborsKneighborsOptions

## Table of contents

### Properties

- [X](NearestNeighborsKneighborsOptions.md#x)
- [n\_neighbors](NearestNeighborsKneighborsOptions.md#n_neighbors)
- [return\_distance](NearestNeighborsKneighborsOptions.md#return_distance)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L496)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/NearestNeighbors.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L501)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L508)
