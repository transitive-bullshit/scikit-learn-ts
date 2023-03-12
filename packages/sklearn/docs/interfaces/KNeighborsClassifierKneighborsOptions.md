[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsClassifierKneighborsOptions

# Interface: KNeighborsClassifierKneighborsOptions

## Table of contents

### Properties

- [X](KNeighborsClassifierKneighborsOptions.md#x)
- [n\_neighbors](KNeighborsClassifierKneighborsOptions.md#n_neighbors)
- [return\_distance](KNeighborsClassifierKneighborsOptions.md#return_distance)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L576)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L581)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L588)
