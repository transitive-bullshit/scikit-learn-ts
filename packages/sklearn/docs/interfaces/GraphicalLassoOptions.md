[sklearn](../readme.md) / [Exports](../modules.md) / GraphicalLassoOptions

# Interface: GraphicalLassoOptions

## Table of contents

### Properties

- [alpha](GraphicalLassoOptions.md#alpha)
- [assume\_centered](GraphicalLassoOptions.md#assume_centered)
- [enet\_tol](GraphicalLassoOptions.md#enet_tol)
- [max\_iter](GraphicalLassoOptions.md#max_iter)
- [mode](GraphicalLassoOptions.md#mode)
- [tol](GraphicalLassoOptions.md#tol)
- [verbose](GraphicalLassoOptions.md#verbose)

## Properties

### alpha

• `Optional` **alpha**: `number`

The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].

**`Default Value`**

`0.01`

#### Defined in

[generated/covariance/GraphicalLasso.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L407)

___

### assume\_centered

• `Optional` **assume\_centered**: `boolean`

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/GraphicalLasso.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L449)

___

### enet\_tol

• `Optional` **enet\_tol**: `number`

The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

**`Default Value`**

`0.0001`

#### Defined in

[generated/covariance/GraphicalLasso.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L428)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations.

**`Default Value`**

`100`

#### Defined in

[generated/covariance/GraphicalLasso.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L435)

___

### mode

• `Optional` **mode**: ``"cd"`` \| ``"lars"``

The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.

**`Default Value`**

`'cd'`

#### Defined in

[generated/covariance/GraphicalLasso.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L414)

___

### tol

• `Optional` **tol**: `number`

The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

**`Default Value`**

`0.0001`

#### Defined in

[generated/covariance/GraphicalLasso.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L421)

___

### verbose

• `Optional` **verbose**: `boolean`

If verbose is `true`, the objective function and dual gap are plotted at each iteration.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/GraphicalLasso.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L442)
