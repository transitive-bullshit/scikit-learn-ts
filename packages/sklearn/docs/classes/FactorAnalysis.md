# FactorAnalysis

Factor Analysis (FA).

A simple linear generative model with Gaussian latent variables.

The observations are assumed to be caused by a linear transformation of lower dimensional latent factors and added Gaussian noise. Without loss of generality the factors are distributed according to a Gaussian with zero mean and unit covariance. The noise is also zero mean and has an arbitrary diagonal covariance matrix.

If we would restrict the model further, by assuming that the Gaussian noise is even isotropic (all diagonal entries are the same) we would obtain [`PCA`](sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "sklearn.decomposition.PCA").

FactorAnalysis performs a maximum likelihood estimate of the so-called `loading` matrix, the transformation of the latent variables to the observed ones, using SVD based approach.

Read more in the [User Guide](../decomposition.html#fa).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FactorAnalysis.html)

## Constructors

## constructor()

### Signature

```ts
new FactorAnalysis(opts?: object): FactorAnalysis;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Whether to make a copy of X. If `false`, the input X gets overwritten during fitting.  `Default Value`  `true` |
| `opts.iterated_power?` | `number` | Number of iterations for the power method. 3 by default. Only used if `svd\_method` equals ‘randomized’.  `Default Value`  `3` |
| `opts.max_iter?` | `number` | Maximum number of iterations.  `Default Value`  `1000` |
| `opts.n_components?` | `number` | Dimensionality of latent space, the number of components of `X` that are obtained after `transform`. If `undefined`, n\_components is set to the number of features. |
| `opts.noise_variance_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial guess of the noise variance for each feature. If `undefined`, it defaults to np.ones(n\_features). |
| `opts.random_state?` | `number` | Only used when `svd\_method` equals ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).  `Default Value`  `0` |
| `opts.rotation?` | `"varimax"` \| `"quartimax"` | If not `undefined`, apply the indicated rotation. Currently, varimax and quartimax are implemented. See [“The varimax criterion for analytic rotation in factor analysis”](https://link.springer.com/article/10.1007%2FBF02289233) H. F. Kaiser, 1958. |
| `opts.svd_method?` | `"randomized"` \| `"lapack"` | Which SVD method to use. If ‘lapack’ use standard SVD from scipy.linalg, if ‘randomized’ use fast `randomized\_svd` function. Defaults to ‘randomized’. For most applications ‘randomized’ will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated\_power`. If this is not sufficient, for maximum precision you should choose ‘lapack’.  `Default Value`  `'randomized'` |
| `opts.tol?` | `number` | Stopping tolerance for log-likelihood increase.  `Default Value`  `0.01` |

### Returns

[`FactorAnalysis`](FactorAnalysis.md)

Defined in:  [generated/decomposition/FactorAnalysis.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L31)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L160)

### fit()

Fit the FactorAnalysis model to X using SVD based approach.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.y?` | `any` | Ignored parameter. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L177)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L217)

### get\_covariance()

Compute data covariance with the FactorAnalysis model.

`cov \= components\_.T \* components\_ + diag(noise\_variance)`

#### Signature

```ts
get_covariance(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.cov?` | [`ArrayLike`](../types/ArrayLike.md)[] | Estimated covariance of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L266)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.FactorAnalysis.fit "sklearn.decomposition.FactorAnalysis.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L301)

### get\_precision()

Compute data precision matrix with the FactorAnalysis model.

#### Signature

```ts
get_precision(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.precision?` | [`ArrayLike`](../types/ArrayLike.md)[] | Estimated precision of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L337)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L106)

### score()

Compute the average log-likelihood of the samples.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data. |
| `opts.y?` | `any` | Ignored parameter. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L371)

### score\_samples()

Compute the log-likelihood of each sample.

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L409)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L444)

### transform()

Apply dimensionality reduction to X using the model.

Compute the expected mean of the latent variables. See Barber, 21.2.33 (or Bishop, 12.66).

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L479)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/FactorAnalysis.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/FactorAnalysis.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/FactorAnalysis.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L27)

### id

> `string`

Defined in:  [generated/decomposition/FactorAnalysis.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L24)

### opts

> `any`

Defined in:  [generated/decomposition/FactorAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L25)

## Accessors

### components\_

Components with maximum variance.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L512)

Defined in:  [generated/decomposition/FactorAnalysis.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L512)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L660)

Defined in:  [generated/decomposition/FactorAnalysis.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L660)

### loglike\_

The log likelihood at each iteration.

#### Signature

```ts
loglike_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L537)

Defined in:  [generated/decomposition/FactorAnalysis.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L537)

### mean\_

Per-feature empirical mean, estimated from the training set.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L612)

Defined in:  [generated/decomposition/FactorAnalysis.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L612)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L635)

Defined in:  [generated/decomposition/FactorAnalysis.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L635)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L587)

Defined in:  [generated/decomposition/FactorAnalysis.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L587)

### noise\_variance\_

The estimated noise variance for each feature.

#### Signature

```ts
noise_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L562)

Defined in:  [generated/decomposition/FactorAnalysis.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L562)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/FactorAnalysis.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L93)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L97)

Defined in:  [generated/decomposition/FactorAnalysis.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L93) [generated/decomposition/FactorAnalysis.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L97)
