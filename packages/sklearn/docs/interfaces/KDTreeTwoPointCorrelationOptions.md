[sklearn](../readme.md) / [Exports](../modules.md) / KDTreeTwoPointCorrelationOptions

# Interface: KDTreeTwoPointCorrelationOptions

## Table of contents

### Properties

- [X](KDTreeTwoPointCorrelationOptions.md#x)
- [dualtree](KDTreeTwoPointCorrelationOptions.md#dualtree)
- [r](KDTreeTwoPointCorrelationOptions.md#r)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

An array of points to query. Last dimension should match dimension of training data.

#### Defined in

[generated/neighbors/KDTree.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L512)

___

### dualtree

• `Optional` **dualtree**: `boolean`

If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/KDTree.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L524)

___

### r

• `Optional` **r**: [`ArrayLike`](../modules.md#arraylike)

A one-dimensional array of distances

#### Defined in

[generated/neighbors/KDTree.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L517)
