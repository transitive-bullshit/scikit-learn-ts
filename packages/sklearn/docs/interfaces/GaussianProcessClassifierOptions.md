[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessClassifierOptions

# Interface: GaussianProcessClassifierOptions

## Table of contents

### Properties

- [copy\_X\_train](GaussianProcessClassifierOptions.md#copy_x_train)
- [kernel](GaussianProcessClassifierOptions.md#kernel)
- [max\_iter\_predict](GaussianProcessClassifierOptions.md#max_iter_predict)
- [multi\_class](GaussianProcessClassifierOptions.md#multi_class)
- [n\_jobs](GaussianProcessClassifierOptions.md#n_jobs)
- [n\_restarts\_optimizer](GaussianProcessClassifierOptions.md#n_restarts_optimizer)
- [optimizer](GaussianProcessClassifierOptions.md#optimizer)
- [random\_state](GaussianProcessClassifierOptions.md#random_state)
- [warm\_start](GaussianProcessClassifierOptions.md#warm_start)

## Properties

### copy\_X\_train

• `Optional` **copy\_X\_train**: `boolean`

If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.

**`Default Value`**

`true`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L497)

___

### kernel

• `Optional` **kernel**: `any`

The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel “1.0 \* RBF(1.0)” is used as default. Note that the kernel’s hyperparameters are optimized during fitting. Also kernel cannot be a `CompoundKernel`.

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L462)

___

### max\_iter\_predict

• `Optional` **max\_iter\_predict**: `number`

The maximum number of iterations in Newton’s method for approximating the posterior during predict. Smaller values will reduce computation time at the cost of worse results.

**`Default Value`**

`100`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L483)

___

### multi\_class

• `Optional` **multi\_class**: ``"one_vs_rest"`` \| ``"one_vs_one"``

Specifies how multi-class classification problems are handled. Supported are ‘one\_vs\_rest’ and ‘one\_vs\_one’. In ‘one\_vs\_rest’, one binary Gaussian process classifier is fitted for each class, which is trained to separate this class from the rest. In ‘one\_vs\_one’, one binary Gaussian process classifier is fitted for each pair of classes, which is trained to separate these two classes. The predictions of these binary predictors are combined into multi-class predictions. Note that ‘one\_vs\_one’ does not support predicting probability estimates.

**`Default Value`**

`'one_vs_rest'`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L509)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation: the specified multiclass problems are computed in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L514)

___

### n\_restarts\_optimizer

• `Optional` **n\_restarts\_optimizer**: `number`

The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that n\_restarts\_optimizer=0 implies that one run is performed.

**`Default Value`**

`0`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L476)

___

### optimizer

• `Optional` **optimizer**: ``"fmin_l_bfgs_b"``

Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:

**`Default Value`**

`'fmin_l_bfgs_b'`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L469)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L502)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

If warm-starts are enabled, the solution of the last Newton iteration on the Laplace approximation of the posterior mode is used as initialization for the next call of \_posterior\_mode(). This can speed up convergence when \_posterior\_mode is called several times on similar problems as in hyperparameter optimization. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L490)
