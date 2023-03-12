[sklearn](../readme.md) / [Exports](../modules.md) / Pipeline

# Class: Pipeline

Pipeline of transforms with a final estimator.

Sequentially apply a list of transforms and a final estimator. Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final estimator only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

Read more in the [User Guide](../compose.html#pipeline).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html

## Table of contents

### Constructors

- [constructor](Pipeline.md#constructor)

### Properties

- [\_isDisposed](Pipeline.md#_isdisposed)
- [\_isInitialized](Pipeline.md#_isinitialized)
- [\_py](Pipeline.md#_py)
- [id](Pipeline.md#id)
- [opts](Pipeline.md#opts)

### Accessors

- [py](Pipeline.md#py)

### Methods

- [decision\_function](Pipeline.md#decision_function)
- [dispose](Pipeline.md#dispose)
- [fit](Pipeline.md#fit)
- [fit\_predict](Pipeline.md#fit_predict)
- [fit\_transform](Pipeline.md#fit_transform)
- [get\_feature\_names\_out](Pipeline.md#get_feature_names_out)
- [init](Pipeline.md#init)
- [inverse\_transform](Pipeline.md#inverse_transform)
- [predict](Pipeline.md#predict)
- [predict\_log\_proba](Pipeline.md#predict_log_proba)
- [predict\_proba](Pipeline.md#predict_proba)
- [score](Pipeline.md#score)
- [score\_samples](Pipeline.md#score_samples)
- [set\_output](Pipeline.md#set_output)
- [transform](Pipeline.md#transform)

## Constructors

### constructor

• **new Pipeline**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PipelineOptions`](../interfaces/PipelineOptions.md) |

#### Defined in

[generated/pipeline/Pipeline.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/pipeline/Pipeline.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/pipeline/Pipeline.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/pipeline/Pipeline.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/pipeline/Pipeline.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/pipeline/Pipeline.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L21)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/pipeline/Pipeline.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/pipeline/Pipeline.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data, and apply `decision\_function` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `decision\_function` method. Only valid if the final estimator implements `decision\_function`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineDecisionFunctionOptions`](../interfaces/PipelineDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L105)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/pipeline/Pipeline.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L86)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model.

Fit all the transformers one after the other and transform the data. Finally, fit the transformed data using the final estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitOptions`](../interfaces/PipelineFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L137)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform the data, and apply `fit\_predict` with the final estimator.

Call `fit\_transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `fit\_predict` method. Only valid if the final estimator implements `fit\_predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitPredictOptions`](../interfaces/PipelineFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/pipeline/Pipeline.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L169)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the model and transform with the final estimator.

Fits all the transformers one after the other and transform the data. Then uses `fit\_transform` on transformed data with the final estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitTransformOptions`](../interfaces/PipelineFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L201)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

Transform input features using the pipeline.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineGetFeatureNamesOutOptions`](../interfaces/PipelineGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L233)

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

[generated/pipeline/Pipeline.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply `inverse\_transform` for each step in a reverse order.

All estimators in the pipeline must support `inverse\_transform`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineInverseTransformOptions`](../interfaces/PipelineInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L267)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform the data, and apply `predict` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict` method. Only valid if the final estimator implements `predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictOptions`](../interfaces/PipelinePredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/pipeline/Pipeline.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L299)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data, and apply `predict\_log\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_log\_proba` method. Only valid if the final estimator implements `predict\_log\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictLogProbaOptions`](../interfaces/PipelinePredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L329)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data, and apply `predict\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_proba` method. Only valid if the final estimator implements `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictProbaOptions`](../interfaces/PipelinePredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L363)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Transform the data, and apply `score` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score` method. Only valid if the final estimator implements `score`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineScoreOptions`](../interfaces/PipelineScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/pipeline/Pipeline.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L393)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform the data, and apply `score\_samples` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score\_samples` method. Only valid if the final estimator implements `score\_samples`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineScoreSamplesOptions`](../interfaces/PipelineScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/pipeline/Pipeline.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L425)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set the output container when `"transform"` and `"fit\_transform"` are called.

Calling `set\_output` will set the output of all estimators in `steps`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineSetOutputOptions`](../interfaces/PipelineSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L455)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the data, and apply `transform` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `transform` method. Only valid if the final estimator implements `transform`.

This also works where final estimator is `undefined` in which case all prior transformations are applied.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineTransformOptions`](../interfaces/PipelineTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L487)
