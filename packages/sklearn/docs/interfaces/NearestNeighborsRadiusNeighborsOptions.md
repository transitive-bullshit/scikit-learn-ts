# NearestNeighborsRadiusNeighborsOptions

## Properties

### X?

> `any`

The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.

Defined in:  [generated/neighbors/NearestNeighbors.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L534)

### radius?

> `number`

Limiting distance of neighbors to return. The default is the value passed to the constructor.

Defined in:  [generated/neighbors/NearestNeighbors.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L539)

### return\_distance?

> `boolean`

Whether or not to return the distances.

#### Default Value

`true`

Defined in:  [generated/neighbors/NearestNeighbors.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L546)

### sort\_results?

> `boolean`

If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

#### Default Value

`false`

Defined in:  [generated/neighbors/NearestNeighbors.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L553)
