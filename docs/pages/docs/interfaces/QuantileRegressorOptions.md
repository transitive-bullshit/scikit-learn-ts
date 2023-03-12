# QuantileRegressorOptions

## Properties

### alpha?

> `number`

Regularization constant that multiplies the L1 penalty term.

#### Default Value

`1`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L354)

### fit\_intercept?

> `boolean`

Whether or not to fit the intercept.

#### Default Value

`true`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L361)

### quantile?

> `number`

The quantile that the model tries to predict. It must be strictly between 0 and 1. If 0.5 (default), the model predicts the 50% quantile, i.e. the median.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L347)

### solver?

> `"highs-ds"` \| `"highs-ipm"` \| `"highs"` \| `"interior-point"` \| `"revised simplex"`

Method used by [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") to solve the linear programming formulation.

From `scipy>=1.6.0`, it is recommended to use the highs methods because they are the fastest ones. Solvers “highs-ds”, “highs-ipm” and “highs” support sparse input data and, in fact, always convert to sparse csc.

From `scipy>=1.11.0`, “interior-point” is not available anymore.

#### Default Value

`'interior-point'`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L372)

### solver\_options?

> `any`

Additional parameters passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") as options. If `undefined` and if `solver='interior-point'`, then `{"lstsq": `true`}` is passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") for the sake of stability.

Defined in:  [generated/linear\_model/QuantileRegressor.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L382)
