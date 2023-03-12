[sklearn](../readme.md) / [Exports](../modules.md) / LassoLarsOptions

# Interface: LassoLarsOptions

## Table of contents

### Properties

- [alpha](LassoLarsOptions.md#alpha)
- [copy\_X](LassoLarsOptions.md#copy_x)
- [eps](LassoLarsOptions.md#eps)
- [fit\_intercept](LassoLarsOptions.md#fit_intercept)
- [fit\_path](LassoLarsOptions.md#fit_path)
- [jitter](LassoLarsOptions.md#jitter)
- [max\_iter](LassoLarsOptions.md#max_iter)
- [normalize](LassoLarsOptions.md#normalize)
- [positive](LassoLarsOptions.md#positive)
- [precompute](LassoLarsOptions.md#precompute)
- [random\_state](LassoLarsOptions.md#random_state)
- [verbose](LassoLarsOptions.md#verbose)

## Properties

### alpha

• `Optional` **alpha**: `number`

Constant that multiplies the penalty term. Defaults to 1.0. `alpha \= 0` is equivalent to an ordinary least square, solved by [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression"). For numerical reasons, using `alpha \= 0` with the LassoLars object is not advised and you should prefer the LinearRegression object.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/LassoLars.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L395)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoLars.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L442)

___

### eps

• `Optional` **eps**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

#### Defined in

[generated/linear_model/LassoLars.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L435)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoLars.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L402)

___

### fit\_path

• `Optional` **fit\_path**: `boolean`

If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LassoLars.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L449)

___

### jitter

• `Optional` **jitter**: `number`

Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability.

#### Defined in

[generated/linear_model/LassoLars.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L461)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations to perform.

**`Default Value`**

`500`

#### Defined in

[generated/linear_model/LassoLars.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L430)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLars.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L416)

___

### positive

• `Optional` **positive**: `boolean`

Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLars.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L456)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike) \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/LassoLars.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L423)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Ignored if `jitter` is `undefined`.

#### Defined in

[generated/linear_model/LassoLars.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L466)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Sets the verbosity amount.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LassoLars.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L409)
