[sklearn](../readme.md) / [Exports](../modules.md) / DecisionTreeRegressorFitOptions

# Interface: DecisionTreeRegressorFitOptions

## Table of contents

### Properties

- [X](DecisionTreeRegressorFitOptions.md#x)
- [check\_input](DecisionTreeRegressorFitOptions.md#check_input)
- [sample\_weight](DecisionTreeRegressorFitOptions.md#sample_weight)
- [y](DecisionTreeRegressorFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L653)

___

### check\_input

• `Optional` **check\_input**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**`Default Value`**

`true`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L670)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L663)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency.

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L658)
