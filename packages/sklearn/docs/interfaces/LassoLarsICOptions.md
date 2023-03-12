[sklearn](../readme.md) / [Exports](../modules.md) / LassoLarsICOptions

# Interface: LassoLarsICOptions

## Table of contents

### Properties

- [copy\_X](LassoLarsICOptions.md#copy_x)
- [criterion](LassoLarsICOptions.md#criterion)
- [eps](LassoLarsICOptions.md#eps)
- [fit\_intercept](LassoLarsICOptions.md#fit_intercept)
- [max\_iter](LassoLarsICOptions.md#max_iter)
- [noise\_variance](LassoLarsICOptions.md#noise_variance)
- [normalize](LassoLarsICOptions.md#normalize)
- [positive](LassoLarsICOptions.md#positive)
- [precompute](LassoLarsICOptions.md#precompute)
- [verbose](LassoLarsICOptions.md#verbose)

## Properties

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L468)

___

### criterion

• `Optional` **criterion**: ``"aic"`` \| ``"bic"``

The type of criterion to use.

**`Default Value`**

`'aic'`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L421)

___

### eps

• `Optional` **eps**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

#### Defined in

[generated/linear_model/LassoLarsIC.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L461)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L428)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations to perform. Can be used for early stopping.

**`Default Value`**

`500`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L456)

___

### noise\_variance

• `Optional` **noise\_variance**: `number`

The estimated noise variance of the data. If `undefined`, an unbiased estimate is computed by an OLS model. However, it is only possible in the case where `n\_samples > n\_features + fit\_intercept`.

#### Defined in

[generated/linear_model/LassoLarsIC.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L480)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L442)

___

### positive

• `Optional` **positive**: `boolean`

Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsIC only makes sense for problems where a sparse solution is expected and/or reached.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L475)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike) \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L449)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Sets the verbosity amount.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L435)