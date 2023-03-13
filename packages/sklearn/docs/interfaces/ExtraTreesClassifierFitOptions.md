# ExtraTreesClassifierFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`.

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L754)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L764)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target values (class labels in classification, real numbers in regression).

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:759](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L759)
