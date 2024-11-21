[**sklearn**](../README.md) • **Docs**

***

Gaussian process classification (GPC) based on Laplace approximation.

The implementation is based on Algorithm 3.1, 3.2, and 5.1 from [\[RW2006\]](#r2da648a61a73-rw2006).

Internally, the Laplace approximation is used for approximating the non-Gaussian posterior by a Gaussian.

Currently, the implementation is restricted to using the logistic link function. For multi-class classification, several binary one-versus rest classifiers are fitted. Note that this class thus does not implement a true multi-class Laplace approximation.

Read more in the [User Guide](../gaussian_process.html#gaussian-process).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html)

## Constructors

### new GaussianProcessClassifier()

> **new GaussianProcessClassifier**(`opts`?): [`GaussianProcessClassifier`](GaussianProcessClassifier.md)

#### Parameters

• **opts?**

• **opts.copy\_X\_train?**: `boolean`

If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.

**Default Value**

`true`

• **opts.kernel?**: `any`

The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel “1.0 \* RBF(1.0)” is used as default. Note that the kernel’s hyperparameters are optimized during fitting. Also kernel cannot be a `CompoundKernel`.

• **opts.max\_iter\_predict?**: `number`

The maximum number of iterations in Newton’s method for approximating the posterior during predict. Smaller values will reduce computation time at the cost of worse results.

**Default Value**

`100`

• **opts.multi\_class?**: `"one_vs_rest"` \| `"one_vs_one"`

Specifies how multi-class classification problems are handled. Supported are ‘one\_vs\_rest’ and ‘one\_vs\_one’. In ‘one\_vs\_rest’, one binary Gaussian process classifier is fitted for each class, which is trained to separate this class from the rest. In ‘one\_vs\_one’, one binary Gaussian process classifier is fitted for each pair of classes, which is trained to separate these two classes. The predictions of these binary predictors are combined into multi-class predictions. Note that ‘one\_vs\_one’ does not support predicting probability estimates.

**Default Value**

`'one_vs_rest'`

• **opts.n\_jobs?**: `number`

The number of jobs to use for the computation: the specified multiclass problems are computed in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.n\_restarts\_optimizer?**: `number`

The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that n\_restarts\_optimizer=0 implies that one run is performed.

**Default Value**

`0`

• **opts.optimizer?**: `"fmin_l_bfgs_b"`

Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:

**Default Value**

`'fmin_l_bfgs_b'`

• **opts.random\_state?**: `number`

Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.warm\_start?**: `boolean`

If warm-starts are enabled, the solution of the last Newton iteration on the Laplace approximation of the posterior mode is used as initialization for the next call of \_posterior\_mode(). This can speed up convergence when \_posterior\_mode is called several times on similar problems as in hyperparameter optimization. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`GaussianProcessClassifier`](GaussianProcessClassifier.md)

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L23)

## Accessors

### base\_estimator\_

#### Get Signature

> **get** **base\_estimator\_**(): `Promise`\<`any`\>

The estimator instance that defines the likelihood function using the observed data.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L453)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Unique class labels.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L507)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L588)

***

### log\_marginal\_likelihood\_value\_

#### Get Signature

> **get** **log\_marginal\_likelihood\_value\_**(): `Promise`\<`number`\>

The log-marginal-likelihood of `self.kernel\_.theta`

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L480)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number`\>

The number of classes in the training data

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L534)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L561)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L91)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L147)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Gaussian process classification model.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Feature vectors or other representations of training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values, must be binary.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L164)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L205)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L104)

***

### log\_marginal\_likelihood()

> **log\_marginal\_likelihood**(`opts`): `Promise`\<`number`\>

Return log-marginal likelihood of theta for training data.

In the case of multi-class classification, the mean log-marginal likelihood of the one-versus-rest classifiers are returned.

#### Parameters

• **opts**

• **opts.clone\_kernel?**: `boolean`

If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.

**Default Value**

`true`

• **opts.eval\_gradient?**: `boolean`

If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. Note that gradient computation is not supported for non-binary classification. If `true`, theta must not be `undefined`.

**Default Value**

`false`

• **opts.theta?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Kernel hyperparameters for which the log-marginal likelihood is evaluated. In the case of multi-class classification, theta may be the hyperparameters of the compound kernel or of an individual kernel. In the latter case, all individual kernel get assigned the same theta values. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L243)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform classification on an array of test vectors X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Query points where the GP is evaluated for classification.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L293)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return probability estimates for the test vector X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Query points where the GP is evaluated for classification.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L329)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L367)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessClassifier.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L417)
