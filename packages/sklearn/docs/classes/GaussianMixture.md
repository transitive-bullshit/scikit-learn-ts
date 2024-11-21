# Class: GaussianMixture

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../mixture.html#gmm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)

## Constructors

### new GaussianMixture()

> **new GaussianMixture**(`opts`?): [`GaussianMixture`](GaussianMixture.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.covariance_type`? | `"full"` \| `"tied"` \| `"diag"` \| `"spherical"` | String describing the type of covariance parameters to use. Must be one of: |
| `opts.init_params`? | `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"` | The method used to initialize the weights, the means and the precisions. String must be one of: |
| `opts.max_iter`? | `number` | The number of EM iterations to perform. |
| `opts.means_init`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The user-provided initial means, If it is `undefined`, means are initialized using the `init_params` method. |
| `opts.n_components`? | `number` | The number of mixture components. |
| `opts.n_init`? | `number` | The number of initializations to perform. The best results are kept. |
| `opts.precisions_init`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The user-provided initial precisions (inverse of the covariance matrices). If it is `undefined`, precisions are initialized using the ‘init_params’ method. The shape depends on ‘covariance_type’: |
| `opts.random_state`? | `number` | Controls the random seed given to the method chosen to initialize the parameters (see `init_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.reg_covar`? | `number` | Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive. |
| `opts.tol`? | `number` | The convergence threshold. EM iterations will stop when the lower bound average gain is below this threshold. |
| `opts.verbose`? | `number` | Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step. |
| `opts.verbose_interval`? | `number` | Number of iteration done before the next print. |
| `opts.warm_start`? | `boolean` | If ‘warm_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. In that case, ‘n_init’ is ignored and only a single initialization occurs upon the first call. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start). |
| `opts.weights_init`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The user-provided initial weights. If it is `undefined`, weights are initialized using the `init_params` method. |

#### Returns

[`GaussianMixture`](GaussianMixture.md)

#### Defined in

[generated/mixture/GaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/mixture/GaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/mixture/GaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/mixture/GaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L21) |
| `id` | `string` | `undefined` | [generated/mixture/GaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L18) |
| `opts` | `any` | `undefined` | [generated/mixture/GaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L19) |

## Accessors

### converged\_

#### Get Signature

> **get** **converged\_**(): `Promise`\<`boolean`\>

True when convergence of the best fit of EM was reached, `false` otherwise.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L663)

***

### covariances\_

#### Get Signature

> **get** **covariances\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The covariance of each mixture component. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L588)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:763](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L763)

***

### lower\_bound\_

#### Get Signature

> **get** **lower\_bound\_**(): `Promise`\<`number`\>

Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L713)

***

### means\_

#### Get Signature

> **get** **means\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The mean of each mixture component.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/mixture/GaussianMixture.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L563)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L738)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of step used by the best fit of EM to reach the convergence.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:688](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L688)

***

### precisions\_

#### Get Signature

> **get** **precisions\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L613)

***

### precisions\_cholesky\_

#### Get Signature

> **get** **precisions\_cholesky\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L638)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/mixture/GaussianMixture.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L120)

***

### weights\_

#### Get Signature

> **get** **weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The weights of each mixture components.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L538)

## Methods

### aic()

> **aic**(`opts`): `Promise`\<`number`\>

Akaike information criterion for the current model on the input X.

You can refer to this [mathematical section](https://scikit-learn.org/stable/modules/generated/../linear_model.html#aic-bic) for more details regarding the formulation of the AIC used.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any`[] | The input samples. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L191)

***

### bic()

> **bic**(`opts`): `Promise`\<`number`\>

Bayesian information criterion for the current model on the input X.

You can refer to this [mathematical section](https://scikit-learn.org/stable/modules/generated/../linear_model.html#aic-bic) for more details regarding the formulation of the BIC used.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any`[] | The input samples. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L225)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L172)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm_start` is `true`, then `n_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L259)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L298)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L337)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L133)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict the labels for the data samples in X using trained model.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L371)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Evaluate the components’ density for each sample.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L403)

***

### sample()

> **sample**(`opts`): `Promise`\<`any`\>

Generate random samples from the fitted Gaussian distribution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.n_samples`? | `number` | Number of samples to generate. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L435)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the per-sample average log-likelihood of the given data X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L469)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`any`\>

Compute the log-likelihood of each sample.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | List of n_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L506)
