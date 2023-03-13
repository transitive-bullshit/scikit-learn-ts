# RadiusNeighborsRegressorRadiusNeighborsOptions

## Properties

### X?

> `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L509)

### radius?

> `number`

Limiting distance of neighbors to return. The default is the value passed to the constructor.

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L514)

### return\_distance?

> `boolean`

Whether or not to return the distances.

#### Default Value

`true`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L521)

### sort\_results?

> `boolean`

If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

#### Default Value

`false`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L528)
