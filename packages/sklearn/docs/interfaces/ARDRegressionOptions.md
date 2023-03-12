[sklearn](../readme.md) / [Exports](../modules.md) / ARDRegressionOptions

# Interface: ARDRegressionOptions

## Table of contents

### Properties

- [alpha\_1](ARDRegressionOptions.md#alpha_1)
- [alpha\_2](ARDRegressionOptions.md#alpha_2)
- [compute\_score](ARDRegressionOptions.md#compute_score)
- [copy\_X](ARDRegressionOptions.md#copy_x)
- [fit\_intercept](ARDRegressionOptions.md#fit_intercept)
- [lambda\_1](ARDRegressionOptions.md#lambda_1)
- [lambda\_2](ARDRegressionOptions.md#lambda_2)
- [n\_iter](ARDRegressionOptions.md#n_iter)
- [threshold\_lambda](ARDRegressionOptions.md#threshold_lambda)
- [tol](ARDRegressionOptions.md#tol)
- [verbose](ARDRegressionOptions.md#verbose)

## Properties

### alpha\_1

• `Optional` **alpha\_1**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/ARDRegression.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L466)

___

### alpha\_2

• `Optional` **alpha\_2**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/ARDRegression.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L473)

___

### compute\_score

• `Optional` **compute\_score**: `boolean`

If `true`, compute the objective function at each step of the model.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ARDRegression.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L494)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ARDRegression.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L515)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/ARDRegression.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L508)

___

### lambda\_1

• `Optional` **lambda\_1**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/ARDRegression.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L480)

___

### lambda\_2

• `Optional` **lambda\_2**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

**`Default Value`**

`0.000001`

#### Defined in

[generated/linear_model/ARDRegression.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L487)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Maximum number of iterations.

**`Default Value`**

`300`

#### Defined in

[generated/linear_model/ARDRegression.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L452)

___

### threshold\_lambda

• `Optional` **threshold\_lambda**: `number`

Threshold for removing (pruning) weights with high precision from the computation.

**`Default Value`**

`10`

#### Defined in

[generated/linear_model/ARDRegression.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L501)

___

### tol

• `Optional` **tol**: `number`

Stop the algorithm if w has converged.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/ARDRegression.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L459)

___

### verbose

• `Optional` **verbose**: `boolean`

Verbose mode when fitting the model.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/ARDRegression.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L522)
