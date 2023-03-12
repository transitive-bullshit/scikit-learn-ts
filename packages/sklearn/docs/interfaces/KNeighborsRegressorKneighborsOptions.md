[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsRegressorKneighborsOptions

# Interface: KNeighborsRegressorKneighborsOptions

## Table of contents

### Properties

- [X](KNeighborsRegressorKneighborsOptions.md#x)
- [n\_neighbors](KNeighborsRegressorKneighborsOptions.md#n_neighbors)
- [return\_distance](KNeighborsRegressorKneighborsOptions.md#return_distance)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L490)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L495)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/KNeighborsRegressor.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L502)
