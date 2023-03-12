[sklearn](../readme.md) / [Exports](../modules.md) / DecisionTreeRegressorCostComplexityPruningPathOptions

# Interface: DecisionTreeRegressorCostComplexityPruningPathOptions

## Table of contents

### Properties

- [X](DecisionTreeRegressorCostComplexityPruningPathOptions.md#x)
- [sample\_weight](DecisionTreeRegressorCostComplexityPruningPathOptions.md#sample_weight)
- [y](DecisionTreeRegressorCostComplexityPruningPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L622)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L632)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels) as integers or strings.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L627)
