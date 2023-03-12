# BallTreeQueryOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

An array of points to query

Defined in:  [generated/neighbors/BallTree.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L437)

### breadth\_first?

> `boolean`

if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner.

#### Default Value

`false`

Defined in:  [generated/neighbors/BallTree.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L465)

### dualtree?

> `boolean`

if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large.

#### Default Value

`false`

Defined in:  [generated/neighbors/BallTree.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L458)

### k?

> `number`

The number of nearest neighbors to return

#### Default Value

`1`

Defined in:  [generated/neighbors/BallTree.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L444)

### return\_distance?

> `boolean`

if `true`, return a tuple (d, i) of distances and indices if `false`, return array i

#### Default Value

`true`

Defined in:  [generated/neighbors/BallTree.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L451)

### sort\_results?

> `boolean`

if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order.

#### Default Value

`true`

Defined in:  [generated/neighbors/BallTree.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/BallTree.ts#L472)
