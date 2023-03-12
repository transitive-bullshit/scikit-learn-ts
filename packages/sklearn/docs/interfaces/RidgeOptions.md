[sklearn](../readme.md) / [Exports](../modules.md) / RidgeOptions

# Interface: RidgeOptions

## Table of contents

### Properties

- [alpha](RidgeOptions.md#alpha)
- [copy\_X](RidgeOptions.md#copy_x)
- [fit\_intercept](RidgeOptions.md#fit_intercept)
- [max\_iter](RidgeOptions.md#max_iter)
- [positive](RidgeOptions.md#positive)
- [random\_state](RidgeOptions.md#random_state)
- [solver](RidgeOptions.md#solver)
- [tol](RidgeOptions.md#tol)

## Properties

### alpha

• `Optional` **alpha**: `number`

Constant that multiplies the L2 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.

When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Ridge` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/Ridge.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L320)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Ridge.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L334)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to fit the intercept for this model. If set to false, no intercept will be used in calculations (i.e. `X` and `y` are expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Ridge.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L327)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations for conjugate gradient solver. For ‘sparse\_cg’ and ‘lsqr’ solvers, the default value is determined by scipy.sparse.linalg. For ‘sag’ solver, the default value is 1000. For ‘lbfgs’ solver, the default value is 15000.

#### Defined in

[generated/linear_model/Ridge.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L339)

___

### positive

• `Optional` **positive**: `boolean`

When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/Ridge.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L368)

___

### random\_state

• `Optional` **random\_state**: `number`

Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details.

#### Defined in

[generated/linear_model/Ridge.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L373)

___

### solver

• `Optional` **solver**: ``"auto"`` \| ``"svd"`` \| ``"lsqr"`` \| ``"lbfgs"`` \| ``"sag"`` \| ``"saga"`` \| ``"cholesky"`` \| ``"sparse_cg"``

Solver to use in the computational routines:

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/Ridge.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L353)

___

### tol

• `Optional` **tol**: `number`

Precision of the solution. Note that `tol` has no effect for solvers ‘svd’ and ‘cholesky’.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/Ridge.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L346)
