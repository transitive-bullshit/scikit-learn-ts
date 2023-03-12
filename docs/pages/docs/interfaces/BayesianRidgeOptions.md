# BayesianRidgeOptions

## Properties

### alpha\_1?

> `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

#### Default Value

`0.000001`

Defined in:  [generated/linear\_model/BayesianRidge.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L491)

### alpha\_2?

> `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

#### Default Value

`0.000001`

Defined in:  [generated/linear\_model/BayesianRidge.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L498)

### alpha\_init?

> `number`

Initial value for alpha (precision of the noise). If not set, alpha\_init is 1/Var(y).

Defined in:  [generated/linear\_model/BayesianRidge.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L517)

### compute\_score?

> `boolean`

If `true`, compute the log marginal likelihood at each iteration of the optimization.

#### Default Value

`false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L529)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/BayesianRidge.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L543)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/BayesianRidge.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L536)

### lambda\_1?

> `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

#### Default Value

`0.000001`

Defined in:  [generated/linear\_model/BayesianRidge.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L505)

### lambda\_2?

> `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

#### Default Value

`0.000001`

Defined in:  [generated/linear\_model/BayesianRidge.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L512)

### lambda\_init?

> `number`

Initial value for lambda (precision of the weights). If not set, lambda\_init is 1.

Defined in:  [generated/linear\_model/BayesianRidge.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L522)

### n\_iter?

> `number`

Maximum number of iterations. Should be greater than or equal to 1.

#### Default Value

`300`

Defined in:  [generated/linear\_model/BayesianRidge.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L477)

### tol?

> `number`

Stop the algorithm if w has converged.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/BayesianRidge.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L484)

### verbose?

> `boolean`

Verbose mode when fitting the model.

#### Default Value

`false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L550)
