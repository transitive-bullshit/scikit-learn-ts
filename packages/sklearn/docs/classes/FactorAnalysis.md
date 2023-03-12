[sklearn](../readme.md) / [Exports](../modules.md) / FactorAnalysis

# Class: FactorAnalysis

Factor Analysis (FA).

A simple linear generative model with Gaussian latent variables.

The observations are assumed to be caused by a linear transformation of lower dimensional latent factors and added Gaussian noise. Without loss of generality the factors are distributed according to a Gaussian with zero mean and unit covariance. The noise is also zero mean and has an arbitrary diagonal covariance matrix.

If we would restrict the model further, by assuming that the Gaussian noise is even isotropic (all diagonal entries are the same) we would obtain [`PCA`](sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "sklearn.decomposition.PCA").

FactorAnalysis performs a maximum likelihood estimate of the so-called `loading` matrix, the transformation of the latent variables to the observed ones, using SVD based approach.

Read more in the [User Guide](../decomposition.html#fa).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FactorAnalysis.html

## Table of contents

### Constructors

- [constructor](FactorAnalysis.md#constructor)

### Properties

- [\_isDisposed](FactorAnalysis.md#_isdisposed)
- [\_isInitialized](FactorAnalysis.md#_isinitialized)
- [\_py](FactorAnalysis.md#_py)
- [id](FactorAnalysis.md#id)
- [opts](FactorAnalysis.md#opts)

### Accessors

- [components\_](FactorAnalysis.md#components_)
- [feature\_names\_in\_](FactorAnalysis.md#feature_names_in_)
- [loglike\_](FactorAnalysis.md#loglike_)
- [mean\_](FactorAnalysis.md#mean_)
- [n\_features\_in\_](FactorAnalysis.md#n_features_in_)
- [n\_iter\_](FactorAnalysis.md#n_iter_)
- [noise\_variance\_](FactorAnalysis.md#noise_variance_)
- [py](FactorAnalysis.md#py)

### Methods

- [dispose](FactorAnalysis.md#dispose)
- [fit](FactorAnalysis.md#fit)
- [fit\_transform](FactorAnalysis.md#fit_transform)
- [get\_covariance](FactorAnalysis.md#get_covariance)
- [get\_feature\_names\_out](FactorAnalysis.md#get_feature_names_out)
- [get\_precision](FactorAnalysis.md#get_precision)
- [init](FactorAnalysis.md#init)
- [score](FactorAnalysis.md#score)
- [score\_samples](FactorAnalysis.md#score_samples)
- [set\_output](FactorAnalysis.md#set_output)
- [transform](FactorAnalysis.md#transform)

## Constructors

### constructor

• **new FactorAnalysis**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FactorAnalysisOptions`](../interfaces/FactorAnalysisOptions.md) |

#### Defined in

[generated/decomposition/FactorAnalysis.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L25)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Components with maximum variance.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L394)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L542)

___

### loglike\_

• `get` **loglike_**(): `Promise`<`any`[]\>

The log likelihood at each iteration.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L419)

___

### mean\_

• `get` **mean_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Per-feature empirical mean, estimated from the training set.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L494)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L517)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L469)

___

### noise\_variance\_

• `get` **noise_variance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The estimated noise variance for each feature.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L444)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L40)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the FactorAnalysis model to X using SVD based approach.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisFitOptions`](../interfaces/FactorAnalysisFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L120)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisFitTransformOptions`](../interfaces/FactorAnalysisFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L150)

___

### get\_covariance

▸ **get_covariance**(`opts`): `Promise`<`any`\>

Compute data covariance with the FactorAnalysis model.

`cov \= components\_.T \* components\_ + diag(noise\_variance)`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetCovarianceOptions`](../interfaces/FactorAnalysisGetCovarianceOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L184)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetFeatureNamesOutOptions`](../interfaces/FactorAnalysisGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L214)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Compute data precision matrix with the FactorAnalysis model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisGetPrecisionOptions`](../interfaces/FactorAnalysisGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L247)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L49)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the average log-likelihood of the samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisScoreOptions`](../interfaces/FactorAnalysisScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L276)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the log-likelihood of each sample.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisScoreSamplesOptions`](../interfaces/FactorAnalysisScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L304)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisSetOutputOptions`](../interfaces/FactorAnalysisSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L336)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply dimensionality reduction to X using the model.

Compute the expected mean of the latent variables. See Barber, 21.2.33 (or Bishop, 12.66).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FactorAnalysisTransformOptions`](../interfaces/FactorAnalysisTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L366)
