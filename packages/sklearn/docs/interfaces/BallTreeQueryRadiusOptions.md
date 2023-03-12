[sklearn](../readme.md) / [Exports](../modules.md) / BallTreeQueryRadiusOptions

# Interface: BallTreeQueryRadiusOptions

## Table of contents

### Properties

- [X](BallTreeQueryRadiusOptions.md#x)
- [count\_only](BallTreeQueryRadiusOptions.md#count_only)
- [r](BallTreeQueryRadiusOptions.md#r)
- [return\_distance](BallTreeQueryRadiusOptions.md#return_distance)
- [sort\_results](BallTreeQueryRadiusOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

An array of points to query

#### Defined in

[generated/neighbors/BallTree.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L479)

___

### count\_only

• `Optional` **count\_only**: `boolean`

if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return\_distance==`true`, setting count\_only=`true` will result in an error.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/BallTree.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L498)

___

### r

• `Optional` **r**: `any`

r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point.

#### Defined in

[generated/neighbors/BallTree.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L484)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return\_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return\_distance=`false`. Results are not sorted by default: see `sort\_results` keyword.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/BallTree.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L491)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return\_distance == `false`, setting sort\_results = `true` will result in an error.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/BallTree.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L505)
