# GaussianProcessRegressorOptions

## Properties

### alpha?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Value added to the diagonal of the kernel matrix during fitting. This can prevent a potential numerical issue during fitting, by ensuring that the calculated values form a positive definite matrix. It can also be interpreted as the variance of additional Gaussian measurement noise on the training observations. Note that this is different from using a `WhiteKernel`. If an array is passed, it must have the same number of entries as the data used for fitting and is used as datapoint-dependent noise level. Allowing to specify the noise level directly as a parameter is mainly for convenience and for consistency with [`Ridge`](sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge "sklearn.linear_model.Ridge").

#### Default Value

`1e-10`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L518)

### copy\_X\_train?

> `boolean`

If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.

#### Default Value

`true`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L546)

### kernel?

> `any`

The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel `ConstantKernel(1.0, constant\_value\_bounds="fixed") \* RBF(1.0, length\_scale\_bounds="fixed")` is used as default. Note that the kernel hyperparameters are optimized during fitting unless the bounds are marked as “fixed”.

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L511)

### n\_restarts\_optimizer?

> `number`

The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that `n\_restarts\_optimizer \== 0` implies that one run is performed.

#### Default Value

`0`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L532)

### normalize\_y?

> `boolean`

Whether or not to normalize the target values `y` by removing the mean and scaling to unit-variance. This is recommended for cases where zero-mean, unit-variance priors are used. Note that, in this implementation, the normalisation is reversed before the GP predictions are reported.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L539)

### optimizer?

> `"fmin_l_bfgs_b"`

Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:

#### Default Value

`'fmin_l_bfgs_b'`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L525)

### random\_state?

> `number`

Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L551)
