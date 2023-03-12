[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsClassifierRadiusNeighborsOptions

# Interface: RadiusNeighborsClassifierRadiusNeighborsOptions

## Table of contents

### Properties

- [X](RadiusNeighborsClassifierRadiusNeighborsOptions.md#x)
- [radius](RadiusNeighborsClassifierRadiusNeighborsOptions.md#radius)
- [return\_distance](RadiusNeighborsClassifierRadiusNeighborsOptions.md#return_distance)
- [sort\_results](RadiusNeighborsClassifierRadiusNeighborsOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L637)

___

### radius

• `Optional` **radius**: `number`

Limiting distance of neighbors to return. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L642)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L649)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L656)
