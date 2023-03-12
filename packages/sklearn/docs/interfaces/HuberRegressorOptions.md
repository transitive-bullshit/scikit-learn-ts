[sklearn](../readme.md) / [Exports](../modules.md) / HuberRegressorOptions

# Interface: HuberRegressorOptions

## Table of contents

### Properties

- [alpha](HuberRegressorOptions.md#alpha)
- [epsilon](HuberRegressorOptions.md#epsilon)
- [fit\_intercept](HuberRegressorOptions.md#fit_intercept)
- [max\_iter](HuberRegressorOptions.md#max_iter)
- [tol](HuberRegressorOptions.md#tol)
- [warm\_start](HuberRegressorOptions.md#warm_start)

## Properties

### alpha

• `Optional` **alpha**: `number`

Strength of the squared L2 regularization. Note that the penalty is equal to `alpha \* ||w||^2`. Must be in the range `\[0, inf)`.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/HuberRegressor.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L389)

___

### epsilon

• `Optional` **epsilon**: `number`

The parameter epsilon controls the number of samples that should be classified as outliers. The smaller the epsilon, the more robust it is to outliers. Epsilon must be in the range `\[1, inf)`.

**`Default Value`**

`1.35`

#### Defined in

[generated/linear_model/HuberRegressor.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L375)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether or not to fit the intercept. This can be set to `false` if the data is already centered around the origin.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/HuberRegressor.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L403)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` should run for.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/HuberRegressor.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L382)

___

### tol

• `Optional` **tol**: `number`

The iteration will stop when `max{|proj g\_i | i \= 1, ..., n}` <= `tol` where pg\_i is the i-th component of the projected gradient.

**`Default Value`**

`0.00001`

#### Defined in

[generated/linear_model/HuberRegressor.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L410)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

This is useful if the stored attributes of a previously used model has to be reused. If set to `false`, then the coefficients will be rewritten for every call to fit. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/HuberRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L396)
