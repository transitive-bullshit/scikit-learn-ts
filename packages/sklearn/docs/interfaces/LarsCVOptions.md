[sklearn](../readme.md) / [Exports](../modules.md) / LarsCVOptions

# Interface: LarsCVOptions

## Table of contents

### Properties

- [copy\_X](LarsCVOptions.md#copy_x)
- [cv](LarsCVOptions.md#cv)
- [eps](LarsCVOptions.md#eps)
- [fit\_intercept](LarsCVOptions.md#fit_intercept)
- [max\_iter](LarsCVOptions.md#max_iter)
- [max\_n\_alphas](LarsCVOptions.md#max_n_alphas)
- [n\_jobs](LarsCVOptions.md#n_jobs)
- [normalize](LarsCVOptions.md#normalize)
- [precompute](LarsCVOptions.md#precompute)
- [verbose](LarsCVOptions.md#verbose)

## Properties

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LarsCV.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L508)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/linear_model/LarsCV.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L484)

___

### eps

• `Optional` **eps**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

#### Defined in

[generated/linear_model/LarsCV.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L501)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LarsCV.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L451)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations to perform.

**`Default Value`**

`500`

#### Defined in

[generated/linear_model/LarsCV.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L465)

___

### max\_n\_alphas

• `Optional` **max\_n\_alphas**: `number`

The maximum number of points on the path used to compute the residuals in the cross-validation.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/LarsCV.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L491)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/LarsCV.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L496)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LarsCV.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L472)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike) \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/LarsCV.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L479)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Sets the verbosity amount.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LarsCV.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L458)