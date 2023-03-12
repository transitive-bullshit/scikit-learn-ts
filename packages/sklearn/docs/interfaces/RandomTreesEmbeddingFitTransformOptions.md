[sklearn](../readme.md) / [Exports](../modules.md) / RandomTreesEmbeddingFitTransformOptions

# Interface: RandomTreesEmbeddingFitTransformOptions

## Table of contents

### Properties

- [X](RandomTreesEmbeddingFitTransformOptions.md#x)
- [sample\_weight](RandomTreesEmbeddingFitTransformOptions.md#sample_weight)
- [y](RandomTreesEmbeddingFitTransformOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input data used to build forests. Use `dtype=np.float32` for maximum efficiency.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L638)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L648)

___

### y

• `Optional` **y**: `any`

Not used, present for API consistency by convention.

#### Defined in

[generated/ensemble/RandomTreesEmbedding.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L643)
