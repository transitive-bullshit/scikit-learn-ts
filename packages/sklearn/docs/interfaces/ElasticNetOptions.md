[sklearn](../readme.md) / [Exports](../modules.md) / ElasticNetOptions

# Interface: ElasticNetOptions

## Table of contents

### Properties

- [alpha](ElasticNetOptions.md#alpha)
- [copy\_X](ElasticNetOptions.md#copy_x)
- [fit\_intercept](ElasticNetOptions.md#fit_intercept)
- [l1\_ratio](ElasticNetOptions.md#l1_ratio)
- [max\_iter](ElasticNetOptions.md#max_iter)
- [positive](ElasticNetOptions.md#positive)
- [precompute](ElasticNetOptions.md#precompute)
- [random\_state](ElasticNetOptions.md#random_state)
- [selection](ElasticNetOptions.md#selection)
- [tol](ElasticNetOptions.md#tol)
- [warm\_start](ElasticNetOptions.md#warm_start)

## Properties

### alpha

• `Optional` **alpha**: `number`

Constant that multiplies the penalty terms. Defaults to 1.0. See the notes for the exact mathematical meaning of this parameter. `alpha \= 0` is equivalent to an ordinary least square, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Lasso` object is not advised. Given this, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/ElasticNet.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L400)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ElasticNet.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L435)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ElasticNet.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L414)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

The ElasticNet mixing parameter, with `0 <= l1\_ratio <= 1`. For `l1\_ratio \= 0` the penalty is an L2 penalty. `For l1\_ratio \= 1` it is an L1 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1 and L2.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/ElasticNet.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L407)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/ElasticNet.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L428)

___

### positive

• `Optional` **positive**: `boolean`

When set to `true`, forces the coefficients to be positive.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L456)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike)[]

Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always `false` to preserve sparsity.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L421)

___

### random\_state

• `Optional` **random\_state**: `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/linear_model/ElasticNet.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L461)

___

### selection

• `Optional` **selection**: ``"random"`` \| ``"cyclic"``

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

**`Default Value`**

`'cyclic'`

#### Defined in

[generated/linear_model/ElasticNet.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L468)

___

### tol

• `Optional` **tol**: `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`, see Notes below.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/ElasticNet.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L442)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ElasticNet.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L449)
