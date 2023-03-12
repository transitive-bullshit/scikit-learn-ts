# GaussianMixtureOptions

## Properties

### covariance\_type?

> `"full"` \| `"tied"` \| `"diag"` \| `"spherical"`

String describing the type of covariance parameters to use. Must be one of:

#### Default Value

`'full'`

Defined in:  [generated/mixture/GaussianMixture.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L641)

### init\_params?

> `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"`

The method used to initialize the weights, the means and the precisions. String must be one of:

#### Default Value

`'kmeans'`

Defined in:  [generated/mixture/GaussianMixture.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L676)

### max\_iter?

> `number`

The number of EM iterations to perform.

#### Default Value

`100`

Defined in:  [generated/mixture/GaussianMixture.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L662)

### means\_init?

> [`ArrayLike`](../types/ArrayLike.md)[]

The user-provided initial means, If it is `undefined`, means are initialized using the `init\_params` method.

Defined in:  [generated/mixture/GaussianMixture.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L686)

### n\_components?

> `number`

The number of mixture components.

#### Default Value

`1`

Defined in:  [generated/mixture/GaussianMixture.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L634)

### n\_init?

> `number`

The number of initializations to perform. The best results are kept.

#### Default Value

`1`

Defined in:  [generated/mixture/GaussianMixture.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L669)

### precisions\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The user-provided initial precisions (inverse of the covariance matrices). If it is `undefined`, precisions are initialized using the ‘init\_params’ method. The shape depends on ‘covariance\_type’:

Defined in:  [generated/mixture/GaussianMixture.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L691)

### random\_state?

> `number`

Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/mixture/GaussianMixture.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L696)

### reg\_covar?

> `number`

Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.

#### Default Value

`0.000001`

Defined in:  [generated/mixture/GaussianMixture.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L655)

### tol?

> `number`

The convergence threshold. EM iterations will stop when the lower bound average gain is below this threshold.

#### Default Value

`0.001`

Defined in:  [generated/mixture/GaussianMixture.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L648)

### verbose?

> `number`

Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.

#### Default Value

`0`

Defined in:  [generated/mixture/GaussianMixture.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L710)

### verbose\_interval?

> `number`

Number of iteration done before the next print.

#### Default Value

`10`

Defined in:  [generated/mixture/GaussianMixture.ts:717](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L717)

### warm\_start?

> `boolean`

If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. In that case, ‘n\_init’ is ignored and only a single initialization occurs upon the first call. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/mixture/GaussianMixture.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L703)

### weights\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The user-provided initial weights. If it is `undefined`, weights are initialized using the `init\_params` method.

Defined in:  [generated/mixture/GaussianMixture.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L681)
