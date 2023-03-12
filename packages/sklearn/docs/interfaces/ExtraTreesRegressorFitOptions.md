[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreesRegressorFitOptions

# Interface: ExtraTreesRegressorFitOptions

## Table of contents

### Properties

- [X](ExtraTreesRegressorFitOptions.md#x)
- [sample\_weight](ExtraTreesRegressorFitOptions.md#sample_weight)
- [y](ExtraTreesRegressorFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L610)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L620)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels in classification, real numbers in regression).

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L615)
