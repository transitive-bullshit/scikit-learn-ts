# BayesianGaussianMixtureOptions

## Properties

### covariance\_prior?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

The prior on the covariance distribution (Wishart). If it is `undefined`, the emiprical covariance prior is initialized using the covariance of X. The shape depends on `covariance\_type`:

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:927](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L927)

### covariance\_type?

> `"full"` \| `"tied"` \| `"diag"` \| `"spherical"`

String describing the type of covariance parameters to use. Must be one of:

#### Default Value

`'full'`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:858](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L858)

### degrees\_of\_freedom\_prior?

> `number`

The prior of the number of degrees of freedom on the covariance distributions (Wishart). If it is `undefined`, it’s set to `n\_features`.

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:922](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L922)

### init\_params?

> `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"`

The method used to initialize the weights, the means and the covariances. String must be one of:

#### Default Value

`'kmeans'`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:893](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L893)

### max\_iter?

> `number`

The number of EM iterations to perform.

#### Default Value

`100`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:879](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L879)

### mean\_precision\_prior?

> `number`

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. The value of the parameter must be greater than 0. If it is `undefined`, it is set to 1.

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:912](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L912)

### mean\_prior?

> [`ArrayLike`](../types/ArrayLike.md)

The prior on the mean distribution (Gaussian). If it is `undefined`, it is set to the mean of X.

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:917](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L917)

### n\_components?

> `number`

The number of mixture components. Depending on the data and the value of the `weight\_concentration\_prior` the model can decide to not use all the components by setting some component `weights\_` to values very close to zero. The number of effective components is therefore smaller than n\_components.

#### Default Value

`1`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:851](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L851)

### n\_init?

> `number`

The number of initializations to perform. The result with the highest lower bound value on the likelihood is kept.

#### Default Value

`1`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:886](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L886)

### random\_state?

> `number`

Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:932](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L932)

### reg\_covar?

> `number`

Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.

#### Default Value

`0.000001`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:872](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L872)

### tol?

> `number`

The convergence threshold. EM iterations will stop when the lower bound average gain on the likelihood (of the training data with respect to the model) is below this threshold.

#### Default Value

`0.001`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:865](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L865)

### verbose?

> `number`

Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.

#### Default Value

`0`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:946](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L946)

### verbose\_interval?

> `number`

Number of iteration done before the next print.

#### Default Value

`10`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:953](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L953)

### warm\_start?

> `boolean`

If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:939](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L939)

### weight\_concentration\_prior?

> `number`

The dirichlet concentration of each component on the weight distribution (Dirichlet). This is commonly called gamma in the literature. The higher concentration puts more mass in the center and will lead to more components being active, while a lower concentration parameter will lead to more mass at the edge of the mixture weights simplex. The value of the parameter must be greater than 0. If it is `undefined`, it’s set to `1. / n\_components`.

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:907](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L907)

### weight\_concentration\_prior\_type?

> `"dirichlet_process"` \| `"dirichlet_distribution"`

String describing the type of the weight concentration prior.

#### Default Value

`'dirichlet_process'`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:900](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L900)
