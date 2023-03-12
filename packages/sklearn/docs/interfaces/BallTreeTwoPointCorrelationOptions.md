[sklearn](../readme.md) / [Exports](../modules.md) / BallTreeTwoPointCorrelationOptions

# Interface: BallTreeTwoPointCorrelationOptions

## Table of contents

### Properties

- [X](BallTreeTwoPointCorrelationOptions.md#x)
- [dualtree](BallTreeTwoPointCorrelationOptions.md#dualtree)
- [r](BallTreeTwoPointCorrelationOptions.md#r)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

An array of points to query. Last dimension should match dimension of training data.

#### Defined in

[generated/neighbors/BallTree.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L514)

___

### dualtree

• `Optional` **dualtree**: `boolean`

If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N.

**`Default Value`**

`false`

#### Defined in

[generated/neighbors/BallTree.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L526)

___

### r

• `Optional` **r**: [`ArrayLike`](../modules.md#arraylike)

A one-dimensional array of distances

#### Defined in

[generated/neighbors/BallTree.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L519)
