[sklearn](../readme.md) / [Exports](../modules.md) / RFECV

# Class: RFECV

Recursive feature elimination with cross-validation to select features.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../feature_selection.html#rfe).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html

## Table of contents

### Constructors

- [constructor](RFECV.md#constructor)

### Properties

- [\_isDisposed](RFECV.md#_isdisposed)
- [\_isInitialized](RFECV.md#_isinitialized)
- [\_py](RFECV.md#_py)
- [id](RFECV.md#id)
- [opts](RFECV.md#opts)

### Accessors

- [cv\_results\_](RFECV.md#cv_results_)
- [estimator\_](RFECV.md#estimator_)
- [feature\_names\_in\_](RFECV.md#feature_names_in_)
- [n\_features\_](RFECV.md#n_features_)
- [n\_features\_in\_](RFECV.md#n_features_in_)
- [py](RFECV.md#py)
- [ranking\_](RFECV.md#ranking_)
- [support\_](RFECV.md#support_)

### Methods

- [decision\_function](RFECV.md#decision_function)
- [dispose](RFECV.md#dispose)
- [fit](RFECV.md#fit)
- [fit\_transform](RFECV.md#fit_transform)
- [get\_feature\_names\_out](RFECV.md#get_feature_names_out)
- [get\_support](RFECV.md#get_support)
- [init](RFECV.md#init)
- [inverse\_transform](RFECV.md#inverse_transform)
- [predict](RFECV.md#predict)
- [predict\_log\_proba](RFECV.md#predict_log_proba)
- [predict\_proba](RFECV.md#predict_proba)
- [score](RFECV.md#score)
- [set\_output](RFECV.md#set_output)
- [transform](RFECV.md#transform)

## Constructors

### constructor

• **new RFECV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RFECVOptions`](../interfaces/RFECVOptions.md) |

#### Defined in

[generated/feature_selection/RFECV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/RFECV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/RFECV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/RFECV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/RFECV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/RFECV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L19)

## Accessors

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys:

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L482)

___

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The fitted estimator used to select features.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L459)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/RFECV.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L551)

___

### n\_features\_

• `get` **n_features_**(): `Promise`<`number`\>

The number of selected features with cross-validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFECV.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L505)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFECV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L528)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/RFECV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/RFECV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L34)

___

### ranking\_

• `get` **ranking_**(): `Promise`<`any`[]\>

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFECV.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L576)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The mask of selected features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/RFECV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L598)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<`any`\>

Compute the decision function of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVDecisionFunctionOptions`](../interfaces/RFECVDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L105)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/RFECV.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L88)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the RFE model and automatically tune the number of selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVFitOptions`](../interfaces/RFECVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L133)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVFitTransformOptions`](../interfaces/RFECVFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFECV.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L167)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVGetFeatureNamesOutOptions`](../interfaces/RFECVGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L199)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVGetSupportOptions`](../interfaces/RFECVGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L229)

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

[generated/feature_selection/RFECV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVInverseTransformOptions`](../interfaces/RFECVInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L257)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Reduce X to the selected features and predict using the estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictOptions`](../interfaces/RFECVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L285)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<`any`[]\>

Predict class log-probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictLogProbaOptions`](../interfaces/RFECVPredictLogProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFECV.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L313)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`[]\>

Predict class probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictProbaOptions`](../interfaces/RFECVPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFECV.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L341)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Reduce X to the selected features and return the score of the estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVScoreOptions`](../interfaces/RFECVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFECV.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L369)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVSetOutputOptions`](../interfaces/RFECVSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L403)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVTransformOptions`](../interfaces/RFECVTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFECV.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFECV.ts#L431)
