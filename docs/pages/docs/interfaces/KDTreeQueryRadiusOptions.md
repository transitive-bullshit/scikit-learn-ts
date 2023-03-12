# KDTreeQueryRadiusOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

An array of points to query

Defined in:  [generated/neighbors/KDTree.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L477)

### count\_only?

> `boolean`

if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return\_distance==`true`, setting count\_only=`true` will result in an error.

#### Default Value

`false`

Defined in:  [generated/neighbors/KDTree.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L496)

### r?

> `any`

r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point.

Defined in:  [generated/neighbors/KDTree.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L482)

### return\_distance?

> `boolean`

if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return\_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return\_distance=`false`. Results are not sorted by default: see `sort\_results` keyword.

#### Default Value

`false`

Defined in:  [generated/neighbors/KDTree.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L489)

### sort\_results?

> `boolean`

if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return\_distance == `false`, setting sort\_results = `true` will result in an error.

#### Default Value

`false`

Defined in:  [generated/neighbors/KDTree.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L503)
