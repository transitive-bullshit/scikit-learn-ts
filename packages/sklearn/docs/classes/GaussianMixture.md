# Class: GaussianMixture

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../mixture.html#gmm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)

## Constructors

### new GaussianMixture()

> **new GaussianMixture**(`opts`?): [`GaussianMixture`](GaussianMixture.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.covariance_type`?

</td>
<td>

`"full"` \| `"tied"` \| `"diag"` \| `"spherical"`

</td>
<td>

String describing the type of covariance parameters to use. Must be one of:

</td>
</tr>
<tr>
<td>

`opts.init_params`?

</td>
<td>

`"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"`

</td>
<td>

The method used to initialize the weights, the means and the precisions. String must be one of:

</td>
</tr>
<tr>
<td>

`opts.max_iter`?

</td>
<td>

`number`

</td>
<td>

The number of EM iterations to perform.

</td>
</tr>
<tr>
<td>

`opts.means_init`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

The user-provided initial means, If it is `undefined`, means are initialized using the `init_params` method.

</td>
</tr>
<tr>
<td>

`opts.n_components`?

</td>
<td>

`number`

</td>
<td>

The number of mixture components.

</td>
</tr>
<tr>
<td>

`opts.n_init`?

</td>
<td>

`number`

</td>
<td>

The number of initializations to perform. The best results are kept.

</td>
</tr>
<tr>
<td>

`opts.precisions_init`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The user-provided initial precisions (inverse of the covariance matrices). If it is `undefined`, precisions are initialized using the ‘init_params’ method. The shape depends on ‘covariance_type’:

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Controls the random seed given to the method chosen to initialize the parameters (see `init_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.reg_covar`?

</td>
<td>

`number`

</td>
<td>

Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.

</td>
</tr>
<tr>
<td>

`opts.tol`?

</td>
<td>

`number`

</td>
<td>

The convergence threshold. EM iterations will stop when the lower bound average gain is below this threshold.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.

</td>
</tr>
<tr>
<td>

`opts.verbose_interval`?

</td>
<td>

`number`

</td>
<td>

Number of iteration done before the next print.

</td>
</tr>
<tr>
<td>

`opts.warm_start`?

</td>
<td>

`boolean`

</td>
<td>

If ‘warm_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. In that case, ‘n_init’ is ignored and only a single initialization occurs upon the first call. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

</td>
</tr>
<tr>
<td>

`opts.weights_init`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The user-provided initial weights. If it is `undefined`, weights are initialized using the `init_params` method.

</td>
</tr>
</tbody>
</table>

#### Returns

[`GaussianMixture`](GaussianMixture.md)

#### Defined in

[generated/mixture/GaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/mixture/GaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/mixture/GaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/mixture/GaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L21) |
| `id` | `string` | `undefined` | [generated/mixture/GaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L18) |
| `opts` | `any` | `undefined` | [generated/mixture/GaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L19) |

## Accessors

### converged\_

#### Get Signature

> **get** **converged\_**(): `Promise`\<`boolean`\>

True when convergence of the best fit of EM was reached, `false` otherwise.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L663)

***

### covariances\_

#### Get Signature

> **get** **covariances\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The covariance of each mixture component. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L588)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:763](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L763)

***

### lower\_bound\_

#### Get Signature

> **get** **lower\_bound\_**(): `Promise`\<`number`\>

Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L713)

***

### means\_

#### Get Signature

> **get** **means\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The mean of each mixture component.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/mixture/GaussianMixture.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L563)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L738)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of step used by the best fit of EM to reach the convergence.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:688](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L688)

***

### precisions\_

#### Get Signature

> **get** **precisions\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L613)

***

### precisions\_cholesky\_

#### Get Signature

> **get** **precisions\_cholesky\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L638)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/mixture/GaussianMixture.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L120)

***

### weights\_

#### Get Signature

> **get** **weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The weights of each mixture components.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L538)

## Methods

### aic()

> **aic**(`opts`): `Promise`\<`number`\>

Akaike information criterion for the current model on the input X.

You can refer to this [mathematical section](https://scikit-learn.org/stable/modules/generated/../linear_model.html#aic-bic) for more details regarding the formulation of the AIC used.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`[]

</td>
<td>

The input samples.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L191)

***

### bic()

> **bic**(`opts`): `Promise`\<`number`\>

Bayesian information criterion for the current model on the input X.

You can refer to this [mathematical section](https://scikit-learn.org/stable/modules/generated/../linear_model.html#aic-bic) for more details regarding the formulation of the BIC used.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`[]

</td>
<td>

The input samples.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L225)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L172)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm_start` is `true`, then `n_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L259)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L298)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L337)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L133)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict the labels for the data samples in X using trained model.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L371)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Evaluate the components’ density for each sample.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L403)

***

### sample()

> **sample**(`opts`): `Promise`\<`any`\>

Generate random samples from the fitted Gaussian distribution.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.n_samples`?

</td>
<td>

`number`

</td>
<td>

Number of samples to generate.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L435)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the per-sample average log-likelihood of the given data X.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L469)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`any`\>

Compute the log-likelihood of each sample.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L506)
