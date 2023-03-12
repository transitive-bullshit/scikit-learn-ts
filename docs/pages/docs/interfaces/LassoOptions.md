# LassoOptions

## Properties

### alpha?

> `number`

Constant that multiplies the L1 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.

When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Lasso` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

#### Default Value

`1`

Defined in:  [generated/linear\_model/Lasso.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L397)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/Lasso.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L418)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/Lasso.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L404)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/Lasso.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L425)

### positive?

> `boolean`

When set to `true`, forces the coefficients to be positive.

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L446)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[]

Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always `false` to preserve sparsity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L411)

### random\_state?

> `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/Lasso.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L451)

### selection?

> `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

#### Default Value

`'cyclic'`

Defined in:  [generated/linear\_model/Lasso.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L458)

### tol?

> `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`, see Notes below.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/Lasso.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L432)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/linear\_model/Lasso.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/Lasso.ts#L439)
