[**sklearn**](../README.md) • **Docs**

***

Principal component analysis (PCA).

Linear dimensionality reduction using Singular Value Decomposition of the data to project it to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

It uses the LAPACK implementation of the full SVD or a randomized truncated SVD by the method of Halko et al. 2009, depending on the shape of the input data and the number of components to extract.

With sparse inputs, the ARPACK implementation of the truncated SVD can be used (i.e. through [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.14.1)")). Alternatively, one may consider [`TruncatedSVD`](sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") where the data are not centered.

Notice that this class only supports sparse inputs for some solvers such as “arpack” and “covariance\_eigh”. See [`TruncatedSVD`](sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") for an alternative with sparse data.

For a usage example, see [PCA example with Iris Data-set](../../auto_examples/decomposition/plot_pca_iris.html#sphx-glr-auto-examples-decomposition-plot-pca-iris-py)

Read more in the [User Guide](../decomposition.html#pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)

## Constructors

### new PCA()

> **new PCA**(`opts`?): [`PCA`](PCA.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

If `false`, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit\_transform(X) instead.

**Default Value**

`true`

• **opts.iterated\_power?**: `number` \| `"auto"`

Number of iterations for the power method computed by svd\_solver == ‘randomized’. Must be of range \[0, infinity).

**Default Value**

`'auto'`

• **opts.n\_components?**: `number` \| `"mle"`

Number of components to keep. if n\_components is not set all components are kept:

• **opts.n\_oversamples?**: `number`

This parameter is only relevant when `svd\_solver="randomized"`. It corresponds to the additional number of random vectors to sample the range of `X` so as to ensure proper conditioning. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

**Default Value**

`10`

• **opts.power\_iteration\_normalizer?**: `"auto"` \| `"QR"` \| `"LU"` \| `"none"`

Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Used when the ‘arpack’ or ‘randomized’ solvers are used. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.svd\_solver?**: `"auto"` \| `"randomized"` \| `"arpack"` \| `"full"` \| `"covariance_eigh"`

The solver is selected by a default ‘auto’ policy is based on `X.shape` and `n\_components`: if the input data has fewer than 1000 features and more than 10 times as many samples, then the “covariance\_eigh” solver is used. Otherwise, if the input data is larger than 500x500 and the number of components to extract is lower than 80% of the smallest dimension of the data, then the more efficient “randomized” method is selected. Otherwise the exact “full” SVD is computed and optionally truncated afterwards.

**Default Value**

`'auto'`

• **opts.tol?**: `number`

Tolerance for singular values computed by svd\_solver == ‘arpack’. Must be of range \[0.0, infinity).

**Default Value**

`0`

• **opts.whiten?**: `boolean`

When `true` (`false` by default) the `components\_` vectors are multiplied by the square root of n\_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.

Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.

**Default Value**

`false`

#### Returns

[`PCA`](PCA.md)

#### Defined in

[generated/decomposition/PCA.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L33)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/PCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L31)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/PCA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L30)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/PCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L29)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/PCA.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L26)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/PCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L27)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/PCA.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L551)

***

### explained\_variance\_

#### Get Signature

> **get** **explained\_variance\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The amount of variance explained by each of the selected components. The variance estimation uses `n\_samples \- 1` degrees of freedom.

Equal to n\_components largest eigenvalues of the covariance matrix of X.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L576)

***

### explained\_variance\_ratio\_

#### Get Signature

> **get** **explained\_variance\_ratio\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Percentage of variance explained by each of the selected components.

If `n\_components` is not set then all components are stored and the sum of the ratios is equal to 1.0.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L603)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:768](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L768)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per-feature empirical mean, estimated from the training set.

Equal to `X.mean(axis=0)`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L653)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

The estimated number of components. When n\_components is set to ‘mle’ or a number between 0 and 1 (with svd\_solver == ‘full’) this number is estimated from input data. Otherwise it equals the parameter n\_components, or the lesser value of n\_features and n\_samples if n\_components is `undefined`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:675](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L675)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L745)

***

### n\_samples\_

#### Get Signature

> **get** **n\_samples\_**(): `Promise`\<`number`\>

Number of samples in the training data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:698](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L698)

***

### noise\_variance\_

#### Get Signature

> **get** **noise\_variance\_**(): `Promise`\<`number`\>

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf). It is required to compute the estimated data covariance and score samples.

Equal to the average of (min(n\_features, n\_samples) - n\_components) smallest eigenvalues of the covariance matrix of X.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L722)

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

[generated/decomposition/PCA.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L99)

***

### singular\_values\_

#### Get Signature

> **get** **singular\_values\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L628)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/PCA.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L150)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model with X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L167)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Fit the model with X and apply the dimensionality reduction on X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/PCA.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L203)

***

### get\_covariance()

> **get\_covariance**(`opts`): `Promise`\<`any`\>

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Parameters

• **opts**

• **opts.cov?**: `any`

Estimated covariance of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L242)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L276)

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

[generated/decomposition/PCA.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L310)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Parameters

• **opts**

• **opts.precision?**: `any`

Estimated precision of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L344)

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

[generated/decomposition/PCA.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L112)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

New data, where `n\_samples` is the number of samples and `n\_components` is the number of components.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L378)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the average log-likelihood of all samples.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/PCA.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L412)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Return the log-likelihood of each sample.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/PCA.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L451)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/PCA.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L485)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/PCA.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/decomposition/PCA.ts#L519)
