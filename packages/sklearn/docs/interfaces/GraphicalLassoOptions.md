# GraphicalLassoOptions

## Properties

### alpha?

> `number`

The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].

#### Default Value

`0.01`

Defined in:  [generated/covariance/GraphicalLasso.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L407)

### assume\_centered?

> `boolean`

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

#### Default Value

`false`

Defined in:  [generated/covariance/GraphicalLasso.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L449)

### enet\_tol?

> `number`

The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

#### Default Value

`0.0001`

Defined in:  [generated/covariance/GraphicalLasso.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L428)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`100`

Defined in:  [generated/covariance/GraphicalLasso.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L435)

### mode?

> `"cd"` \| `"lars"`

The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.

#### Default Value

`'cd'`

Defined in:  [generated/covariance/GraphicalLasso.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L414)

### tol?

> `number`

The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

#### Default Value

`0.0001`

Defined in:  [generated/covariance/GraphicalLasso.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L421)

### verbose?

> `boolean`

If verbose is `true`, the objective function and dual gap are plotted at each iteration.

#### Default Value

`false`

Defined in:  [generated/covariance/GraphicalLasso.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L442)
