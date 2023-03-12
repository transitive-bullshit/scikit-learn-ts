[sklearn](../readme.md) / [Exports](../modules.md) / StackingRegressor

# Class: StackingRegressor

Stack of estimators with a final regressor.

Stacked generalization consists in stacking the output of individual estimator and use a regressor to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the [User Guide](../ensemble.html#stacking).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingRegressor.html

## Table of contents

### Constructors

- [constructor](StackingRegressor.md#constructor)

### Properties

- [\_isDisposed](StackingRegressor.md#_isdisposed)
- [\_isInitialized](StackingRegressor.md#_isinitialized)
- [\_py](StackingRegressor.md#_py)
- [id](StackingRegressor.md#id)
- [opts](StackingRegressor.md#opts)

### Accessors

- [estimators\_](StackingRegressor.md#estimators_)
- [feature\_names\_in\_](StackingRegressor.md#feature_names_in_)
- [final\_estimator\_](StackingRegressor.md#final_estimator_)
- [named\_estimators\_](StackingRegressor.md#named_estimators_)
- [py](StackingRegressor.md#py)
- [stack\_method\_](StackingRegressor.md#stack_method_)

### Methods

- [dispose](StackingRegressor.md#dispose)
- [fit](StackingRegressor.md#fit)
- [fit\_transform](StackingRegressor.md#fit_transform)
- [get\_feature\_names\_out](StackingRegressor.md#get_feature_names_out)
- [init](StackingRegressor.md#init)
- [predict](StackingRegressor.md#predict)
- [score](StackingRegressor.md#score)
- [set\_output](StackingRegressor.md#set_output)
- [transform](StackingRegressor.md#transform)

## Constructors

### constructor

• **new StackingRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StackingRegressorOptions`](../interfaces/StackingRegressorOptions.md) |

#### Defined in

[generated/ensemble/StackingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/StackingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/StackingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/StackingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L21)

## Accessors

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L345)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L399)

___

### final\_estimator\_

• `get` **final_estimator_**(): `Promise`<`any`\>

The regressor to stacked the base estimators fitted.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L426)

___

### named\_estimators\_

• `get` **named_estimators_**(): `Promise`<`any`\>

Attribute to access any fitted sub-estimators by name.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L372)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/StackingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/StackingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L36)

___

### stack\_method\_

• `get` **stack_method_**(): `Promise`<`any`\>

The method used by each base estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L453)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorFitOptions`](../interfaces/StackingRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the estimators and return the predictions for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorFitTransformOptions`](../interfaces/StackingRegressorFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorGetFeatureNamesOutOptions`](../interfaces/StackingRegressorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L180)

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

[generated/ensemble/StackingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict target for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorPredictOptions`](../interfaces/StackingRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L215)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorScoreOptions`](../interfaces/StackingRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L249)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorSetOutputOptions`](../interfaces/StackingRegressorSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L285)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the predictions for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingRegressorTransformOptions`](../interfaces/StackingRegressorTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/StackingRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L315)
