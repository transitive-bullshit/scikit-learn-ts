[sklearn](../readme.md) / [Exports](../modules.md) / RidgeClassifierCVOptions

# Interface: RidgeClassifierCVOptions

## Table of contents

### Properties

- [alphas](RidgeClassifierCVOptions.md#alphas)
- [class\_weight](RidgeClassifierCVOptions.md#class_weight)
- [cv](RidgeClassifierCVOptions.md#cv)
- [fit\_intercept](RidgeClassifierCVOptions.md#fit_intercept)
- [scoring](RidgeClassifierCVOptions.md#scoring)
- [store\_cv\_values](RidgeClassifierCVOptions.md#store_cv_values)

## Properties

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L440)

___

### class\_weight

• `Optional` **class\_weight**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L464)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L457)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L447)

___

### scoring

• `Optional` **scoring**: `string`

A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`.

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L452)

___

### store\_cv\_values

• `Optional` **store\_cv\_values**: `boolean`

Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L471)