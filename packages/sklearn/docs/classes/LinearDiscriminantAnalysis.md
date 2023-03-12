[sklearn](../readme.md) / [Exports](../modules.md) / LinearDiscriminantAnalysis

# Class: LinearDiscriminantAnalysis

Linear Discriminant Analysis.

A classifier with a linear decision boundary, generated by fitting class conditional densities to the data and using Bayes’ rule.

The model fits a Gaussian density to each class, assuming that all classes share the same covariance matrix.

The fitted model can also be used to reduce the dimensionality of the input by projecting it to the most discriminative directions, using the `transform` method.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html

## Table of contents

### Constructors

- [constructor](LinearDiscriminantAnalysis.md#constructor)

### Properties

- [\_isDisposed](LinearDiscriminantAnalysis.md#_isdisposed)
- [\_isInitialized](LinearDiscriminantAnalysis.md#_isinitialized)
- [\_py](LinearDiscriminantAnalysis.md#_py)
- [id](LinearDiscriminantAnalysis.md#id)
- [opts](LinearDiscriminantAnalysis.md#opts)

### Accessors

- [classes\_](LinearDiscriminantAnalysis.md#classes_)
- [coef\_](LinearDiscriminantAnalysis.md#coef_)
- [covariance\_](LinearDiscriminantAnalysis.md#covariance_)
- [explained\_variance\_ratio\_](LinearDiscriminantAnalysis.md#explained_variance_ratio_)
- [feature\_names\_in\_](LinearDiscriminantAnalysis.md#feature_names_in_)
- [intercept\_](LinearDiscriminantAnalysis.md#intercept_)
- [means\_](LinearDiscriminantAnalysis.md#means_)
- [n\_features\_in\_](LinearDiscriminantAnalysis.md#n_features_in_)
- [priors\_](LinearDiscriminantAnalysis.md#priors_)
- [py](LinearDiscriminantAnalysis.md#py)
- [scalings\_](LinearDiscriminantAnalysis.md#scalings_)
- [xbar\_](LinearDiscriminantAnalysis.md#xbar_)

### Methods

- [decision\_function](LinearDiscriminantAnalysis.md#decision_function)
- [dispose](LinearDiscriminantAnalysis.md#dispose)
- [fit](LinearDiscriminantAnalysis.md#fit)
- [fit\_transform](LinearDiscriminantAnalysis.md#fit_transform)
- [get\_feature\_names\_out](LinearDiscriminantAnalysis.md#get_feature_names_out)
- [init](LinearDiscriminantAnalysis.md#init)
- [predict](LinearDiscriminantAnalysis.md#predict)
- [predict\_log\_proba](LinearDiscriminantAnalysis.md#predict_log_proba)
- [predict\_proba](LinearDiscriminantAnalysis.md#predict_proba)
- [score](LinearDiscriminantAnalysis.md#score)
- [set\_output](LinearDiscriminantAnalysis.md#set_output)
- [transform](LinearDiscriminantAnalysis.md#transform)

## Constructors

### constructor

• **new LinearDiscriminantAnalysis**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LinearDiscriminantAnalysisOptions`](../interfaces/LinearDiscriminantAnalysisOptions.md) |

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Unique class labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L695)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Weight vector(s).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L479)

___

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Weighted within-class covariance matrix. It corresponds to `sum\_k prior\_k \* C\_k` where `C\_k` is the covariance matrix of the samples in class `k`. The `C\_k` are estimated using the (potentially shrunk) biased estimator of covariance. If solver is ‘svd’, only exists when `store\_covariance` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L533)

___

### explained\_variance\_ratio\_

• `get` **explained_variance_ratio_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Percentage of variance explained by each of the selected components. If `n\_components` is not set then all components are stored and the sum of explained variances is equal to 1.0. Only available when eigen or svd solver is used.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L560)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L749)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Intercept term.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L506)

___

### means\_

• `get` **means_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Class-wise means.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L587)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L722)

___

### priors\_

• `get` **priors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class priors (sum to 1).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L614)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L36)

___

### scalings\_

• `get` **scalings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Scaling of the features in the space spanned by the class centroids. Only available for ‘svd’ and ‘eigen’ solvers.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L641)

___

### xbar\_

• `get` **xbar_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Overall mean. Only present if solver is ‘svd’.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L668)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Apply decision function to an array of samples.

The decision function is equal (up to a constant factor) to the log-posterior of the model, i.e. `log p(y \= k | x)`. In a binary classification setting this instead corresponds to the difference `log p(y \= 1 | x) \- log p(y \= 0 | x)`. See [Mathematical formulation of the LDA and QDA classifiers](../lda_qda.html#lda-qda-math).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisDecisionFunctionOptions`](../interfaces/LinearDiscriminantAnalysisDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L118)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the Linear Discriminant Analysis model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisFitOptions`](../interfaces/LinearDiscriminantAnalysisFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L153)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisFitTransformOptions`](../interfaces/LinearDiscriminantAnalysisFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L189)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisGetFeatureNamesOutOptions`](../interfaces/LinearDiscriminantAnalysisGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L230)

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

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisPredictOptions`](../interfaces/LinearDiscriminantAnalysisPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L265)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimate log probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisPredictLogProbaOptions`](../interfaces/LinearDiscriminantAnalysisPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L299)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimate probability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisPredictProbaOptions`](../interfaces/LinearDiscriminantAnalysisPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L334)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisScoreOptions`](../interfaces/LinearDiscriminantAnalysisScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L371)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisSetOutputOptions`](../interfaces/LinearDiscriminantAnalysisSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L409)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Project data to maximize class separation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearDiscriminantAnalysisTransformOptions`](../interfaces/LinearDiscriminantAnalysisTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L444)