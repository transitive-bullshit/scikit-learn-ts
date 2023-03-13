# RandomTreesEmbeddingFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L621)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L631)

### y?

> `any`

Not used, present for API consistency by convention.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L626)
