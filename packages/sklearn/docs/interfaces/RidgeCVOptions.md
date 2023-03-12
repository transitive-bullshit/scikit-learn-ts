[sklearn](../readme.md) / [Exports](../modules.md) / RidgeCVOptions

# Interface: RidgeCVOptions

## Table of contents

### Properties

- [alpha\_per\_target](RidgeCVOptions.md#alpha_per_target)
- [alphas](RidgeCVOptions.md#alphas)
- [cv](RidgeCVOptions.md#cv)
- [fit\_intercept](RidgeCVOptions.md#fit_intercept)
- [gcv\_mode](RidgeCVOptions.md#gcv_mode)
- [scoring](RidgeCVOptions.md#scoring)
- [store\_cv\_values](RidgeCVOptions.md#store_cv_values)

## Properties

### alpha\_per\_target

• `Optional` **alpha\_per\_target**: `boolean`

Flag indicating whether to optimize the alpha value (picked from the `alphas` parameter list) for each target separately (for multi-output settings: multiple prediction targets). When set to `true`, after fitting, the `alpha\_` attribute will contain a value for each target. When set to `false`, a single alpha is used for all targets.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/RidgeCV.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L402)

___

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If using Leave-One-Out cross-validation, alphas must be positive.

#### Defined in

[generated/linear_model/RidgeCV.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L364)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/linear_model/RidgeCV.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L381)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/RidgeCV.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L371)

___

### gcv\_mode

• `Optional` **gcv\_mode**: ``"auto"`` \| ``"svd"`` \| ``"eigen"``

Flag indicating which strategy to use when performing Leave-One-Out Cross-Validation. Options are:

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/RidgeCV.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L388)

___

### scoring

• `Optional` **scoring**: `string`

A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. If `undefined`, the negative mean squared error if cv is ‘auto’ or `undefined` (i.e. when using leave-one-out cross-validation), and r2 score otherwise.

#### Defined in

[generated/linear_model/RidgeCV.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L376)

___

### store\_cv\_values

• `Optional` **store\_cv\_values**: `boolean`

Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/RidgeCV.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L395)
