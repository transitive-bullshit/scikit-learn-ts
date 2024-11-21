[**sklearn**](../README.md) • **Docs**

***

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)

## Constructors

### new BayesianGaussianMixture()

> **new BayesianGaussianMixture**(`opts`?): [`BayesianGaussianMixture`](BayesianGaussianMixture.md)

#### Parameters

• **opts?**

• **opts.covariance\_prior?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

The prior on the covariance distribution (Wishart). If it is `undefined`, the emiprical covariance prior is initialized using the covariance of X. The shape depends on `covariance\_type`:

• **opts.covariance\_type?**: `"full"` \| `"tied"` \| `"diag"` \| `"spherical"`

String describing the type of covariance parameters to use. Must be one of:

**Default Value**

`'full'`

• **opts.degrees\_of\_freedom\_prior?**: `number`

The prior of the number of degrees of freedom on the covariance distributions (Wishart). If it is `undefined`, it’s set to `n\_features`.

• **opts.init\_params?**: `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"`

The method used to initialize the weights, the means and the covariances. String must be one of:

**Default Value**

`'kmeans'`

• **opts.max\_iter?**: `number`

The number of EM iterations to perform.

**Default Value**

`100`

• **opts.mean\_precision\_prior?**: `number`

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. The value of the parameter must be greater than 0. If it is `undefined`, it is set to 1.

• **opts.mean\_prior?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The prior on the mean distribution (Gaussian). If it is `undefined`, it is set to the mean of X.

• **opts.n\_components?**: `number`

The number of mixture components. Depending on the data and the value of the `weight\_concentration\_prior` the model can decide to not use all the components by setting some component `weights\_` to values very close to zero. The number of effective components is therefore smaller than n\_components.

**Default Value**

`1`

• **opts.n\_init?**: `number`

The number of initializations to perform. The result with the highest lower bound value on the likelihood is kept.

**Default Value**

`1`

• **opts.random\_state?**: `number`

Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.reg\_covar?**: `number`

Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.

**Default Value**

`0.000001`

• **opts.tol?**: `number`

The convergence threshold. EM iterations will stop when the lower bound average gain on the likelihood (of the training data with respect to the model) is below this threshold.

**Default Value**

`0.001`

• **opts.verbose?**: `number`

Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.

**Default Value**

`0`

• **opts.verbose\_interval?**: `number`

Number of iteration done before the next print.

**Default Value**

`10`

• **opts.warm\_start?**: `boolean`

If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

• **opts.weight\_concentration\_prior?**: `number`

The dirichlet concentration of each component on the weight distribution (Dirichlet). This is commonly called gamma in the literature. The higher concentration puts more mass in the center and will lead to more components being active, while a lower concentration parameter will lead to more mass at the edge of the mixture weights simplex. The value of the parameter must be greater than 0. If it is `undefined`, it’s set to `1. / n\_components`.

• **opts.weight\_concentration\_prior\_type?**: `"dirichlet_process"` \| `"dirichlet_distribution"`

String describing the type of the weight concentration prior.

**Default Value**

`'dirichlet_process'`

#### Returns

[`BayesianGaussianMixture`](BayesianGaussianMixture.md)

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L19)

## Accessors

### converged\_

#### Get Signature

> **get** **converged\_**(): `Promise`\<`boolean`\>

True when convergence of the best fit of inference was reached, `false` otherwise.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L654)

***

### covariance\_prior\_

#### Get Signature

> **get** **covariance\_prior\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

The prior on the covariance distribution (Wishart). The shape depends on `covariance\_type`:

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:924](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L924)

***

### covariances\_

#### Get Signature

> **get** **covariances\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The covariance of each mixture component. The shape depends on `covariance\_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L573)

***

### degrees\_of\_freedom\_

#### Get Signature

> **get** **degrees\_of\_freedom\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The number of degrees of freedom of each components in the model.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:897](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L897)

***

### degrees\_of\_freedom\_prior\_

#### Get Signature

> **get** **degrees\_of\_freedom\_prior\_**(): `Promise`\<`number`\>

The prior of the number of degrees of freedom on the covariance distributions (Wishart).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:870](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L870)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:978](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L978)

***

### lower\_bound\_

#### Get Signature

> **get** **lower\_bound\_**(): `Promise`\<`number`\>

Lower bound value on the model evidence (of the training data) of the best fit of inference.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L708)

***

### mean\_precision\_

#### Get Signature

> **get** **mean\_precision\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The precision of each components on the mean distribution (Gaussian).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:816](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L816)

***

### mean\_precision\_prior\_

#### Get Signature

> **get** **mean\_precision\_prior\_**(): `Promise`\<`number`\>

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. If mean\_precision\_prior is set to `undefined`, `mean\_precision\_prior\_` is set to 1.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:789](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L789)

***

### mean\_prior\_

#### Get Signature

> **get** **mean\_prior\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The prior on the mean distribution (Gaussian).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:843](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L843)

***

### means\_

#### Get Signature

> **get** **means\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The mean of each mixture component.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L546)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:951](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L951)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of step used by the best fit of inference to reach the convergence.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L681)

***

### precisions\_

#### Get Signature

> **get** **precisions\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L600)

***

### precisions\_cholesky\_

#### Get Signature

> **get** **precisions\_cholesky\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L627)

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

[generated/mixture/BayesianGaussianMixture.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L139)

***

### weight\_concentration\_

#### Get Signature

> **get** **weight\_concentration\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The dirichlet concentration of each component on the weight distribution (Dirichlet).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:762](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L762)

***

### weight\_concentration\_prior\_

#### Get Signature

> **get** **weight\_concentration\_prior\_**(): `Promise`\<`number`\>

The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight\_concentration\_prior\_type`:

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L735)

***

### weights\_

#### Get Signature

> **get** **weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The weights of each mixture components.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L519)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L195)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L214)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L255)

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

[generated/mixture/BayesianGaussianMixture.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L298)

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

[generated/mixture/BayesianGaussianMixture.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L152)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict the labels for the data samples in X using trained model.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L334)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Evaluate the components’ density for each sample.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L370)

***

### sample()

> **sample**(`opts`): `Promise`\<`any`\>

Generate random samples from the fitted Gaussian distribution.

#### Parameters

• **opts**

• **opts.n\_samples?**: `number`

Number of samples to generate.

**Default Value**

`1`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L406)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the per-sample average log-likelihood of the given data X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L444)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`any`\>

Compute the log-likelihood of each sample.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L483)
