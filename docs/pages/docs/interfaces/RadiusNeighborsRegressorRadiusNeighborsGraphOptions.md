# RadiusNeighborsRegressorRadiusNeighborsGraphOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L535)

### mode?

> `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

#### Default Value

`'connectivity'`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L547)

### radius?

> `number`

Radius of neighborhoods. The default is the value passed to the constructor.

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L540)

### sort\_results?

> `boolean`

If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.

#### Default Value

`false`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L554)
