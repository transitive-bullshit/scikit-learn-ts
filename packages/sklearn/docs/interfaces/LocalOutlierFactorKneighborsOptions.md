[sklearn](../readme.md) / [Exports](../modules.md) / LocalOutlierFactorKneighborsOptions

# Interface: LocalOutlierFactorKneighborsOptions

## Table of contents

### Properties

- [X](LocalOutlierFactorKneighborsOptions.md#x)
- [n\_neighbors](LocalOutlierFactorKneighborsOptions.md#n_neighbors)
- [return\_distance](LocalOutlierFactorKneighborsOptions.md#return_distance)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L676)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighbors required for each sample. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L681)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:688](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L688)
