[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsTransformerKneighborsOptions

# Interface: KNeighborsTransformerKneighborsOptions

## Table of contents

### Properties

- [X](KNeighborsTransformerKneighborsOptions.md#x)
- [n\_neighbors](KNeighborsTransformerKneighborsOptions.md#n_neighbors)
- [return\_distance](KNeighborsTransformerKneighborsOptions.md#return_distance)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L583)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L588)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L595)
