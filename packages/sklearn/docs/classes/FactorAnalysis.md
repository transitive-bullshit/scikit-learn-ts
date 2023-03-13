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
new FactorAnalysis(opts?: FactorAnalysisOptions): FactorAnalysis;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FactorAnalysisOptions`](../interfaces/FactorAnalysisOptions.md) |

### Returns

[`FactorAnalysis`](FactorAnalysis.md)

Defined in:  [generated/decomposition/FactorAnalysis.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/FactorAnalysis.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/FactorAnalysis.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/FactorAnalysis.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L27)

### id

> `string`

Defined in:  [generated/decomposition/FactorAnalysis.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L24)

### opts

> `any`

Defined in:  [generated/decomposition/FactorAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L25)

## Accessors

### components\_

Components with maximum variance.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L394)

Defined in:  [generated/decomposition/FactorAnalysis.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L394)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L542)

Defined in:  [generated/decomposition/FactorAnalysis.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L542)

### loglike\_

The log likelihood at each iteration.

#### Signature

```ts
loglike_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L419)

Defined in:  [generated/decomposition/FactorAnalysis.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L419)

### mean\_

Per-feature empirical mean, estimated from the training set.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L494)

Defined in:  [generated/decomposition/FactorAnalysis.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L494)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L517)

Defined in:  [generated/decomposition/FactorAnalysis.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L517)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L469)

Defined in:  [generated/decomposition/FactorAnalysis.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L469)

### noise\_variance\_

The estimated noise variance for each feature.

#### Signature

```ts
noise_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L444)

Defined in:  [generated/decomposition/FactorAnalysis.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L444)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/FactorAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L36)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L40)

Defined in:  [generated/decomposition/FactorAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L36) [generated/decomposition/FactorAnalysis.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L40)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L103)

### fit()

Fit the FactorAnalysis model to X using SVD based approach.

#### Signature

```ts
fit(opts: FactorAnalysisFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisFitOptions`](../interfaces/FactorAnalysisFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L120)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: FactorAnalysisFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisFitTransformOptions`](../interfaces/FactorAnalysisFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L150)

### get\_covariance()

Compute data covariance with the FactorAnalysis model.

`cov \= components\_.T \* components\_ + diag(noise\_variance)`

#### Signature

```ts
get_covariance(opts: FactorAnalysisGetCovarianceOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetCovarianceOptions`](../interfaces/FactorAnalysisGetCovarianceOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L184)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: FactorAnalysisGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetFeatureNamesOutOptions`](../interfaces/FactorAnalysisGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L214)

### get\_precision()

Compute data precision matrix with the FactorAnalysis model.

#### Signature

```ts
get_precision(opts: FactorAnalysisGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetPrecisionOptions`](../interfaces/FactorAnalysisGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L247)

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

Defined in:  [generated/decomposition/FactorAnalysis.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L49)

### score()

Compute the average log-likelihood of the samples.

#### Signature

```ts
score(opts: FactorAnalysisScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisScoreOptions`](../interfaces/FactorAnalysisScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L276)

### score\_samples()

Compute the log-likelihood of each sample.

#### Signature

```ts
score_samples(opts: FactorAnalysisScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisScoreSamplesOptions`](../interfaces/FactorAnalysisScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L304)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: FactorAnalysisSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisSetOutputOptions`](../interfaces/FactorAnalysisSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L336)

### transform()

Apply dimensionality reduction to X using the model.

Compute the expected mean of the latent variables. See Barber, 21.2.33 (or Bishop, 12.66).

#### Signature

```ts
transform(opts: FactorAnalysisTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisTransformOptions`](../interfaces/FactorAnalysisTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FactorAnalysis.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L366)
