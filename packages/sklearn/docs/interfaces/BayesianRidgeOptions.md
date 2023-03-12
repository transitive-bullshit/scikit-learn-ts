[sklearn](../readme.md) / [Exports](../modules.md) / BayesianRidgeOptions

# Interface: BayesianRidgeOptions

## Table of contents

### Properties

- [alpha\_1](BayesianRidgeOptions.md#alpha_1)
- [alpha\_2](BayesianRidgeOptions.md#alpha_2)
- [alpha\_init](BayesianRidgeOptions.md#alpha_init)
- [compute\_score](BayesianRidgeOptions.md#compute_score)
- [copy\_X](BayesianRidgeOptions.md#copy_x)
- [fit\_intercept](BayesianRidgeOptions.md#fit_intercept)
- [lambda\_1](BayesianRidgeOptions.md#lambda_1)
- [lambda\_2](BayesianRidgeOptions.md#lambda_2)
- [lambda\_init](BayesianRidgeOptions.md#lambda_init)
- [n\_iter](BayesianRidgeOptions.md#n_iter)
- [tol](BayesianRidgeOptions.md#tol)
- [verbose](BayesianRidgeOptions.md#verbose)

## Properties

### alpha\_1

• `Optional` **alpha\_1**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/BayesianRidge.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L491)

___

### alpha\_2

• `Optional` **alpha\_2**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/BayesianRidge.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L498)

___

### alpha\_init

• `Optional` **alpha\_init**: `number`

Initial value for alpha (precision of the noise). If not set, alpha\_init is 1/Var(y).

#### Defined in

[generated/linear_model/BayesianRidge.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L517)

___

### compute\_score

• `Optional` **compute\_score**: `boolean`

If `true`, compute the log marginal likelihood at each iteration of the optimization.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/BayesianRidge.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L529)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/BayesianRidge.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L543)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/BayesianRidge.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L536)

___

### lambda\_1

• `Optional` **lambda\_1**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/BayesianRidge.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L505)

___

### lambda\_2

• `Optional` **lambda\_2**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/BayesianRidge.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L512)

___

### lambda\_init

• `Optional` **lambda\_init**: `number`

Initial value for lambda (precision of the weights). If not set, lambda\_init is 1.

#### Defined in

[generated/linear_model/BayesianRidge.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L522)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Maximum number of iterations. Should be greater than or equal to 1.

**`Default Value`**

`300`

#### Defined in

[generated/linear_model/BayesianRidge.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L477)

___

### tol

• `Optional` **tol**: `number`

Stop the algorithm if w has converged.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/BayesianRidge.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L484)

___

### verbose

• `Optional` **verbose**: `boolean`

Verbose mode when fitting the model.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/BayesianRidge.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L550)
