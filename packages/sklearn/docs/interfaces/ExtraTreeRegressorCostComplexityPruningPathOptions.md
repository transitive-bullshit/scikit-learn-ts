[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeRegressorCostComplexityPruningPathOptions

# Interface: ExtraTreeRegressorCostComplexityPruningPathOptions

## Table of contents

### Properties

- [X](ExtraTreeRegressorCostComplexityPruningPathOptions.md#x)
- [sample\_weight](ExtraTreeRegressorCostComplexityPruningPathOptions.md#sample_weight)
- [y](ExtraTreeRegressorCostComplexityPruningPathOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L623)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L633)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels) as integers or strings.

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L628)
