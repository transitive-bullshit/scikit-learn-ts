# GaussianProcessRegressorLogMarginalLikelihoodOptions

## Properties

### clone\_kernel?

> `boolean`

If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.

#### Default Value

`true`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L584)

### eval\_gradient?

> `boolean`

If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. If `true`, theta must not be `undefined`.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L577)

### theta?

> `any`

Kernel hyperparameters for which the log-marginal likelihood is evaluated. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned.

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L570)
