# RandomTreesEmbeddingFitTransformOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Input data used to build forests. Use `dtype=np.float32` for maximum efficiency.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L638)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L648)

### y?

> `any`

Not used, present for API consistency by convention.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L643)
