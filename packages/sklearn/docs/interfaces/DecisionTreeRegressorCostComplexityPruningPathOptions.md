# DecisionTreeRegressorCostComplexityPruningPathOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L622)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L632)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target values (class labels) as integers or strings.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L627)
