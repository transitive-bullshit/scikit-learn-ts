# TweedieRegressorOptions

## Properties

### alpha?

> `number`

Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

#### Default Value

`1`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L358)

### fit\_intercept?

> `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor (`X @ coef + intercept`).

#### Default Value

`true`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L365)

### link?

> `"auto"` \| `"log"` \| `"identity"`

The link function of the GLM, i.e. mapping from linear predictor `X @ coeff + intercept` to prediction `y\_pred`. Option ‘auto’ sets the link depending on the chosen `power` parameter as follows:

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L372)

### max\_iter?

> `number`

The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

#### Default Value

`100`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L386)

### power?

> `number`

The power determines the underlying target distribution according to the following table:

#### Default Value

`0`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L351)

### solver?

> `"lbfgs"` \| `"newton-cholesky"`

Algorithm to use in the optimization problem:

#### Default Value

`'lbfgs'`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L379)

### tol?

> `number`

Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g\_j|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L393)

### verbose?

> `number`

For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

#### Default Value

`0`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L407)

### warm\_start?

> `boolean`

If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_` .

#### Default Value

`false`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L400)
