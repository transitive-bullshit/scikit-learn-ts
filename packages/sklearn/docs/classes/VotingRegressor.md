[sklearn](../readme.md) / [Exports](../modules.md) / VotingRegressor

# Class: VotingRegressor

Prediction voting regressor for unfitted estimators.

A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

Read more in the [User Guide](../ensemble.html#voting-regressor).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html

## Table of contents

### Constructors

- [constructor](VotingRegressor.md#constructor)

### Properties

- [\_isDisposed](VotingRegressor.md#_isdisposed)
- [\_isInitialized](VotingRegressor.md#_isinitialized)
- [\_py](VotingRegressor.md#_py)
- [id](VotingRegressor.md#id)
- [opts](VotingRegressor.md#opts)

### Accessors

- [estimators\_](VotingRegressor.md#estimators_)
- [feature\_names\_in\_](VotingRegressor.md#feature_names_in_)
- [named\_estimators\_](VotingRegressor.md#named_estimators_)
- [py](VotingRegressor.md#py)

### Methods

- [dispose](VotingRegressor.md#dispose)
- [fit](VotingRegressor.md#fit)
- [fit\_transform](VotingRegressor.md#fit_transform)
- [get\_feature\_names\_out](VotingRegressor.md#get_feature_names_out)
- [init](VotingRegressor.md#init)
- [predict](VotingRegressor.md#predict)
- [score](VotingRegressor.md#score)
- [set\_output](VotingRegressor.md#set_output)
- [transform](VotingRegressor.md#transform)

## Constructors

### constructor

• **new VotingRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`VotingRegressorOptions`](../interfaces/VotingRegressorOptions.md) |

#### Defined in

[generated/ensemble/VotingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/VotingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/VotingRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/VotingRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L19)

## Accessors

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L327)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L377)

___

### named\_estimators\_

• `get` **named_estimators_**(): `Promise`<`any`\>

Attribute to access any fitted sub-estimators by name.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L352)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/VotingRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/VotingRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorFitOptions`](../interfaces/VotingRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorFitTransformOptions`](../interfaces/VotingRegressorFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L138)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorGetFeatureNamesOutOptions`](../interfaces/VotingRegressorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L172)

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

[generated/ensemble/VotingRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorPredictOptions`](../interfaces/VotingRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L207)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorScoreOptions`](../interfaces/VotingRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L237)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorSetOutputOptions`](../interfaces/VotingRegressorSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L271)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return predictions for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorTransformOptions`](../interfaces/VotingRegressorTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L299)
