# PoissonRegressorOptions

## Properties

### alpha?

> `number`

Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

#### Default Value

`1`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L349)

### fit\_intercept?

> `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor (`X @ coef + intercept`).

#### Default Value

`true`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L356)

### max\_iter?

> `number`

The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

#### Default Value

`100`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L370)

### solver?

> `"lbfgs"` \| `"newton-cholesky"`

Algorithm to use in the optimization problem:

#### Default Value

`'lbfgs'`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L363)

### tol?

> `number`

Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g\_j|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L377)

### verbose?

> `number`

For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

#### Default Value

`0`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L391)

### warm\_start?

> `boolean`

If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_` .

#### Default Value

`false`

Defined in:  [generated/linear\_model/PoissonRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L384)
