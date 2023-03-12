[sklearn](../readme.md) / [Exports](../modules.md) / KDTreeQueryOptions

# Interface: KDTreeQueryOptions

## Table of contents

### Properties

- [X](KDTreeQueryOptions.md#x)
- [breadth\_first](KDTreeQueryOptions.md#breadth_first)
- [dualtree](KDTreeQueryOptions.md#dualtree)
- [k](KDTreeQueryOptions.md#k)
- [return\_distance](KDTreeQueryOptions.md#return_distance)
- [sort\_results](KDTreeQueryOptions.md#sort_results)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

An array of points to query

#### Defined in

[generated/neighbors/KDTree.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L435)

___

### breadth\_first

• `Optional` **breadth\_first**: `boolean`

if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/KDTree.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L463)

___

### dualtree

• `Optional` **dualtree**: `boolean`

if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/KDTree.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L456)

___

### k

• `Optional` **k**: `number`

The number of nearest neighbors to return

**`Default Value`**

`1`

#### Defined in

[generated/neighbors/KDTree.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L442)

___

### return\_distance

• `Optional` **return\_distance**: `boolean`

if `true`, return a tuple (d, i) of distances and indices if `false`, return array i

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/KDTree.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L449)

___

### sort\_results

• `Optional` **sort\_results**: `boolean`

if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order.

**`Default Value`**

`true`

#### Defined in

[generated/neighbors/KDTree.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L470)
