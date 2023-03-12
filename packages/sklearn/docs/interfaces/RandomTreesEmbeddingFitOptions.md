[sklearn](../readme.md) / [Exports](../modules.md) / RandomTreesEmbeddingFitOptions

# Interface: RandomTreesEmbeddingFitOptions

## Table of contents

### Properties

- [X](RandomTreesEmbeddingFitOptions.md#x)
- [sample\_weight](RandomTreesEmbeddingFitOptions.md#sample_weight)
- [y](RandomTreesEmbeddingFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L621)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L631)

___

### y

• `Optional` **y**: `any`

Not used, present for API consistency by convention.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L626)
