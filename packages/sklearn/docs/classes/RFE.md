[sklearn](../readme.md) / [Exports](../modules.md) / RFE

# Class: RFE

Feature ranking with recursive feature elimination.

Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

Read more in the [User Guide](../feature_selection.html#rfe).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html

## Table of contents

### Constructors

- [constructor](RFE.md#constructor)

### Properties

- [\_isDisposed](RFE.md#_isdisposed)
- [\_isInitialized](RFE.md#_isinitialized)
- [\_py](RFE.md#_py)
- [id](RFE.md#id)
- [opts](RFE.md#opts)

### Accessors

- [estimator\_](RFE.md#estimator_)
- [feature\_names\_in\_](RFE.md#feature_names_in_)
- [n\_features\_](RFE.md#n_features_)
- [n\_features\_in\_](RFE.md#n_features_in_)
- [py](RFE.md#py)
- [ranking\_](RFE.md#ranking_)
- [support\_](RFE.md#support_)

### Methods

- [decision\_function](RFE.md#decision_function)
- [dispose](RFE.md#dispose)
- [fit](RFE.md#fit)
- [fit\_transform](RFE.md#fit_transform)
- [get\_feature\_names\_out](RFE.md#get_feature_names_out)
- [get\_support](RFE.md#get_support)
- [init](RFE.md#init)
- [inverse\_transform](RFE.md#inverse_transform)
- [predict](RFE.md#predict)
- [predict\_log\_proba](RFE.md#predict_log_proba)
- [predict\_proba](RFE.md#predict_proba)
- [score](RFE.md#score)
- [set\_output](RFE.md#set_output)
- [transform](RFE.md#transform)

## Constructors

### constructor

• **new RFE**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RFEOptions`](../interfaces/RFEOptions.md) |

#### Defined in

[generated/feature_selection/RFE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/RFE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/RFE.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/RFE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/RFE.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/RFE.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L19)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The fitted estimator used to select features.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L456)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/RFE.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L524)

___

### n\_features\_

• `get` **n_features_**(): `Promise`<`number`\>

The number of selected features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFE.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L478)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFE.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L501)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/RFE.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/RFE.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L34)

___

### ranking\_

• `get` **ranking_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/RFE.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L547)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The mask of selected features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/RFE.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L569)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<`any`\>

Compute the decision function of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEDecisionFunctionOptions`](../interfaces/RFEDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L103)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/RFE.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L86)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the RFE model and then the underlying estimator on the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEFitOptions`](../interfaces/RFEFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L131)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEFitTransformOptions`](../interfaces/RFEFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFE.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L164)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEGetFeatureNamesOutOptions`](../interfaces/RFEGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L196)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEGetSupportOptions`](../interfaces/RFEGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L226)

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

[generated/feature_selection/RFE.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEInverseTransformOptions`](../interfaces/RFEInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L254)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Reduce X to the selected features and predict using the estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictOptions`](../interfaces/RFEPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L282)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<`any`[]\>

Predict class log-probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictLogProbaOptions`](../interfaces/RFEPredictLogProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFE.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L310)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`[]\>

Predict class probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictProbaOptions`](../interfaces/RFEPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/RFE.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L338)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Reduce X to the selected features and return the score of the estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEScoreOptions`](../interfaces/RFEScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/RFE.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L366)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFESetOutputOptions`](../interfaces/RFESetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L400)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFETransformOptions`](../interfaces/RFETransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/RFE.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/RFE.ts#L428)
