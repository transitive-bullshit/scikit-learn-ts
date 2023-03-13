# LassoLarsCVOptions

## Properties

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L524)

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/linear\_model/LassoLarsCV.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L500)

### eps?

> `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

Defined in:  [generated/linear\_model/LassoLarsCV.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L517)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L467)

### max\_iter?

> `number`

Maximum number of iterations to perform.

#### Default Value

`500`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L481)

### max\_n\_alphas?

> `number`

The maximum number of points on the path used to compute the residuals in the cross-validation.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L507)

### n\_jobs?

> `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/LassoLarsCV.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L512)

### normalize?

> `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L488)

### positive?

> `boolean`

Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsCV only makes sense for problems where a sparse solution is expected and/or reached.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L531)

### precompute?

> `boolean` \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L495)

### verbose?

> `number` \| `boolean`

Sets the verbosity amount.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoLarsCV.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L474)
