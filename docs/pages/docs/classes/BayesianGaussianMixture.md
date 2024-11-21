# Class: BayesianGaussianMixture

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)

## Constructors

### new BayesianGaussianMixture()

> **new BayesianGaussianMixture**(`opts`?): [`BayesianGaussianMixture`](BayesianGaussianMixture.md)

**Parameters**

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

`opts.covariance_prior`?

</td>
<td>

`number` \| `ArrayLike`

</td>
<td>

The prior on the covariance distribution (Wishart). If it is `undefined`, the emiprical covariance prior is initialized using the covariance of X. The shape depends on `covariance_type`:

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

`opts.degrees_of_freedom_prior`?

</td>
<td>

`number`

</td>
<td>

The prior of the number of degrees of freedom on the covariance distributions (Wishart). If it is `undefined`, it’s set to `n_features`.

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

The method used to initialize the weights, the means and the covariances. String must be one of:

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

`opts.mean_precision_prior`?

</td>
<td>

`number`

</td>
<td>

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean_prior`. The value of the parameter must be greater than 0. If it is `undefined`, it is set to 1.

</td>
</tr>
<tr>
<td>

`opts.mean_prior`?

</td>
<td>

`ArrayLike`

</td>
<td>

The prior on the mean distribution (Gaussian). If it is `undefined`, it is set to the mean of X.

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

The number of mixture components. Depending on the data and the value of the `weight_concentration_prior` the model can decide to not use all the components by setting some component `weights_` to values very close to zero. The number of effective components is therefore smaller than n_components.

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

The number of initializations to perform. The result with the highest lower bound value on the likelihood is kept.

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

The convergence threshold. EM iterations will stop when the lower bound average gain on the likelihood (of the training data with respect to the model) is below this threshold.

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

If ‘warm_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

</td>
</tr>
<tr>
<td>

`opts.weight_concentration_prior`?

</td>
<td>

`number`

</td>
<td>

The dirichlet concentration of each component on the weight distribution (Dirichlet). This is commonly called gamma in the literature. The higher concentration puts more mass in the center and will lead to more components being active, while a lower concentration parameter will lead to more mass at the edge of the mixture weights simplex. The value of the parameter must be greater than 0. If it is `undefined`, it’s set to `1. / n_components`.

</td>
</tr>
<tr>
<td>

`opts.weight_concentration_prior_type`?

</td>
<td>

`"dirichlet_process"` \| `"dirichlet_distribution"`

</td>
<td>

String describing the type of the weight concentration prior.

</td>
</tr>
</tbody>
</table>

**Returns** [`BayesianGaussianMixture`](BayesianGaussianMixture.md)

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/mixture/BayesianGaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/mixture/BayesianGaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/mixture/BayesianGaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L21) |
| `id` | `string` | `undefined` | [generated/mixture/BayesianGaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L18) |
| `opts` | `any` | `undefined` | [generated/mixture/BayesianGaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L19) |

## Accessors

### converged\_

**Get Signature**

> **get** **converged\_**(): `Promise`\<`boolean`\>

True when convergence of the best fit of inference was reached, `false` otherwise.

**Returns** `Promise`\<`boolean`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L654)

***

### covariance\_prior\_

**Get Signature**

> **get** **covariance\_prior\_**(): `Promise`\<`number` \| `ArrayLike`\>

The prior on the covariance distribution (Wishart). The shape depends on `covariance_type`:

**Returns** `Promise`\<`number` \| `ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:924](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L924)

***

### covariances\_

**Get Signature**

> **get** **covariances\_**(): `Promise`\<`ArrayLike`\>

The covariance of each mixture component. The shape depends on `covariance_type`:

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L573)

***

### degrees\_of\_freedom\_

**Get Signature**

> **get** **degrees\_of\_freedom\_**(): `Promise`\<`ArrayLike`\>

The number of degrees of freedom of each components in the model.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:897](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L897)

***

### degrees\_of\_freedom\_prior\_

**Get Signature**

> **get** **degrees\_of\_freedom\_prior\_**(): `Promise`\<`number`\>

The prior of the number of degrees of freedom on the covariance distributions (Wishart).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:870](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L870)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:978](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L978)

***

### lower\_bound\_

**Get Signature**

> **get** **lower\_bound\_**(): `Promise`\<`number`\>

Lower bound value on the model evidence (of the training data) of the best fit of inference.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L708)

***

### mean\_precision\_

**Get Signature**

> **get** **mean\_precision\_**(): `Promise`\<`ArrayLike`\>

The precision of each components on the mean distribution (Gaussian).

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:816](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L816)

***

### mean\_precision\_prior\_

**Get Signature**

> **get** **mean\_precision\_prior\_**(): `Promise`\<`number`\>

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean_prior`. If mean_precision_prior is set to `undefined`, `mean_precision_prior_` is set to 1.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:789](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L789)

***

### mean\_prior\_

**Get Signature**

> **get** **mean\_prior\_**(): `Promise`\<`ArrayLike`\>

The prior on the mean distribution (Gaussian).

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:843](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L843)

***

### means\_

**Get Signature**

> **get** **means\_**(): `Promise`\<`ArrayLike`[]\>

The mean of each mixture component.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L546)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:951](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L951)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of step used by the best fit of inference to reach the convergence.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L681)

***

### precisions\_

**Get Signature**

> **get** **precisions\_**(): `Promise`\<`ArrayLike`\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L600)

***

### precisions\_cholesky\_

**Get Signature**

> **get** **precisions\_cholesky\_**(): `Promise`\<`ArrayLike`\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance_type`:

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L627)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

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

**Returns** `void`

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L139)

***

### weight\_concentration\_

**Get Signature**

> **get** **weight\_concentration\_**(): `Promise`\<`ArrayLike`\>

The dirichlet concentration of each component on the weight distribution (Dirichlet).

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:762](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L762)

***

### weight\_concentration\_prior\_

**Get Signature**

> **get** **weight\_concentration\_prior\_**(): `Promise`\<`number`\>

The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight_concentration_prior_type`:

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L735)

***

### weights\_

**Get Signature**

> **get** **weights\_**(): `Promise`\<`ArrayLike`\>

The weights of each mixture components.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L519)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L195)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm_start` is `true`, then `n_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

**Parameters**

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

`ArrayLike`[]

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L214)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

**Parameters**

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

`ArrayLike`[]

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L255)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L298)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

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

**Returns** `Promise`\<`void`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L152)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict the labels for the data samples in X using trained model.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L334)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Evaluate the components’ density for each sample.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L370)

***

### sample()

> **sample**(`opts`): `Promise`\<`any`\>

Generate random samples from the fitted Gaussian distribution.

**Parameters**

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L406)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the per-sample average log-likelihood of the given data X.

**Parameters**

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

`ArrayLike`[]

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

**Returns** `Promise`\<`number`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L444)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`any`\>

Compute the log-likelihood of each sample.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

List of n_features-dimensional data points. Each row corresponds to a single data point.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/mixture/BayesianGaussianMixture.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L483)
