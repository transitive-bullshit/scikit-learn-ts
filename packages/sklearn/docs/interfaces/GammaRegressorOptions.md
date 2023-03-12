[sklearn](../readme.md) / [Exports](../modules.md) / GammaRegressorOptions

# Interface: GammaRegressorOptions

## Table of contents

### Properties

- [alpha](GammaRegressorOptions.md#alpha)
- [fit\_intercept](GammaRegressorOptions.md#fit_intercept)
- [max\_iter](GammaRegressorOptions.md#max_iter)
- [solver](GammaRegressorOptions.md#solver)
- [tol](GammaRegressorOptions.md#tol)
- [verbose](GammaRegressorOptions.md#verbose)
- [warm\_start](GammaRegressorOptions.md#warm_start)

## Properties

### alpha

• `Optional` **alpha**: `number`

Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/GammaRegressor.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L329)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor `X @ coef\_ + intercept\_`.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/GammaRegressor.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L336)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/GammaRegressor.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L350)

___

### solver

• `Optional` **solver**: ``"lbfgs"`` \| ``"newton-cholesky"``

Algorithm to use in the optimization problem:

**`Default Value`**

`'lbfgs'`

#### Defined in

[generated/linear_model/GammaRegressor.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L343)

___

### tol

• `Optional` **tol**: `number`

Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g\_j|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/GammaRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L357)

___

### verbose

• `Optional` **verbose**: `number`

For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/GammaRegressor.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L371)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/GammaRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L364)
