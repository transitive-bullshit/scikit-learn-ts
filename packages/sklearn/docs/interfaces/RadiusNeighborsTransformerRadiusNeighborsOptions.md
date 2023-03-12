[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsTransformerRadiusNeighborsOptions

# Interface: RadiusNeighborsTransformerRadiusNeighborsOptions

## Table of contents

### Properties

- [X](RadiusNeighborsTransformerRadiusNeighborsOptions.md#x)
- [radius](RadiusNeighborsTransformerRadiusNeighborsOptions.md#radius)
- [return\_distance](RadiusNeighborsTransformerRadiusNeighborsOptions.md#return_distance)
- [sort\_results](RadiusNeighborsTransformerRadiusNeighborsOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L595)

___

### radius

• `Optional` **radius**: `number`

Limiting distance of neighbors to return. The default is the value passed to the constructor.

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L600)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

Whether or not to return the distances.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L607)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L614)
