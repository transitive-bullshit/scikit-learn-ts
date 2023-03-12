[sklearn](../readme.md) / [Exports](../modules.md) / TSNEFitTransformOptions

# Interface: TSNEFitTransformOptions

## Table of contents

### Properties

- [X](TSNEFitTransformOptions.md#x)
- [y](TSNEFitTransformOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

If the metric is ‘precomputed’ X must be a square distance matrix. Otherwise it contains a sample per row. If the method is ‘exact’, X may be a sparse matrix of type ‘csr’, ‘csc’ or ‘coo’. If the method is ‘barnes\_hut’ and the metric is ‘precomputed’, X may be a precomputed sparse graph.

#### Defined in

[generated/manifold/TSNE.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L437)

___

### y

• `Optional` **y**: `any`

Ignored.

#### Defined in

[generated/manifold/TSNE.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L442)
