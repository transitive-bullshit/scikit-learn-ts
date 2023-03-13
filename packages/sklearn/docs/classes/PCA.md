# PCA

Principal component analysis (PCA).

Linear dimensionality reduction using Singular Value Decomposition of the data to project it to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

It uses the LAPACK implementation of the full SVD or a randomized truncated SVD by the method of Halko et al. 2009, depending on the shape of the input data and the number of components to extract.

It can also use the scipy.sparse.linalg ARPACK implementation of the truncated SVD.

Notice that this class does not support sparse input. See [`TruncatedSVD`](sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") for an alternative with sparse data.

Read more in the [User Guide](../decomposition.html#pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)

## Constructors

## constructor()

### Signature

```ts
new PCA(opts?: object): PCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | If `false`, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit\_transform(X) instead.  `Default Value`  `true` |
| `opts.iterated_power?` | `number` \| `"auto"` | Number of iterations for the power method computed by svd\_solver == ‘randomized’. Must be of range \[0, infinity).  `Default Value`  `'auto'` |
| `opts.n_components?` | `number` \| `"mle"` | Number of components to keep. if n\_components is not set all components are kept: |
| `opts.n_oversamples?` | `number` | This parameter is only relevant when `svd\_solver="randomized"`. It corresponds to the additional number of random vectors to sample the range of `X` so as to ensure proper conditioning. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.  `Default Value`  `10` |
| `opts.power_iteration_normalizer?` | `"auto"` \| `"QR"` \| `"LU"` \| `"none"` | Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Used when the ‘arpack’ or ‘randomized’ solvers are used. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.svd_solver?` | `"auto"` \| `"full"` \| `"randomized"` \| `"arpack"` | The solver is selected by a default policy based on `X.shape` and `n\_components`: if the input data is larger than 500x500 and the number of components to extract is lower than 80% of the smallest dimension of the data, then the more efficient ‘randomized’ method is enabled. Otherwise the exact full SVD is computed and optionally truncated afterwards.  `Default Value`  `'auto'` |
| `opts.tol?` | `number` | Tolerance for singular values computed by svd\_solver == ‘arpack’. Must be of range \[0.0, infinity).  `Default Value`  `0` |
| `opts.whiten?` | `boolean` | When `true` (`false` by default) the `components\_` vectors are multiplied by the square root of n\_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.  Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.  `Default Value`  `false` |

### Returns

[`PCA`](PCA.md)

Defined in:  [generated/decomposition/PCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L31)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/PCA.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L159)

### fit()

Fit the model with X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L176)

### fit\_transform()

Fit the model with X and apply the dimensionality reduction on X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/PCA.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L213)

### get\_covariance()

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Signature

```ts
get_covariance(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.cov?` | `any` | Estimated covariance of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L253)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.PCA.fit "sklearn.decomposition.PCA.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L288)

### get\_precision()

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Signature

```ts
get_precision(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.precision?` | `any` | Estimated precision of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L323)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/PCA.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L110)

### inverse\_transform()

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | New data, where `n\_samples` is the number of samples and `n\_components` is the number of components. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L358)

### score()

Return the average log-likelihood of all samples.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L393)

### score\_samples()

Return the log-likelihood of each sample.

See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L433)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/PCA.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L468)

### transform()

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/PCA.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L503)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/PCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/PCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/PCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L27)

### id

> `string`

Defined in:  [generated/decomposition/PCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L24)

### opts

> `any`

Defined in:  [generated/decomposition/PCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L25)

## Accessors

### components\_

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/PCA.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L536)

Defined in:  [generated/decomposition/PCA.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L536)

### explained\_variance\_

The amount of variance explained by each of the selected components. The variance estimation uses `n\_samples \- 1` degrees of freedom.

Equal to n\_components largest eigenvalues of the covariance matrix of X.

#### Signature

```ts
explained_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L561)

Defined in:  [generated/decomposition/PCA.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L561)

### explained\_variance\_ratio\_

Percentage of variance explained by each of the selected components.

If `n\_components` is not set then all components are stored and the sum of the ratios is equal to 1.0.

#### Signature

```ts
explained_variance_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L588)

Defined in:  [generated/decomposition/PCA.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L588)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:776](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L776)

Defined in:  [generated/decomposition/PCA.ts:776](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L776)

### mean\_

Per-feature empirical mean, estimated from the training set.

Equal to `X.mean(axis=0)`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L638)

Defined in:  [generated/decomposition/PCA.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L638)

### n\_components\_

The estimated number of components. When n\_components is set to ‘mle’ or a number between 0 and 1 (with svd\_solver == ‘full’) this number is estimated from input data. Otherwise it equals the parameter n\_components, or the lesser value of n\_features and n\_samples if n\_components is `undefined`.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L660)

Defined in:  [generated/decomposition/PCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L660)

### n\_features\_

Number of features in the training data.

#### Signature

```ts
n_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L683)

Defined in:  [generated/decomposition/PCA.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L683)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L753)

Defined in:  [generated/decomposition/PCA.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L753)

### n\_samples\_

Number of samples in the training data.

#### Signature

```ts
n_samples_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L706)

Defined in:  [generated/decomposition/PCA.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L706)

### noise\_variance\_

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf). It is required to compute the estimated data covariance and score samples.

Equal to the average of (min(n\_features, n\_samples) - n\_components) smallest eigenvalues of the covariance matrix of X.

#### Signature

```ts
noise_variance_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/PCA.ts:730](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L730)

Defined in:  [generated/decomposition/PCA.ts:730](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L730)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/PCA.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L97)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/decomposition/PCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L101)

Defined in:  [generated/decomposition/PCA.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L97) [generated/decomposition/PCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L101)

### singular\_values\_

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Signature

```ts
singular_values_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/PCA.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L613)

Defined in:  [generated/decomposition/PCA.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/PCA.ts#L613)
