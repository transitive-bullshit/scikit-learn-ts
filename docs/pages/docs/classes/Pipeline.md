# Pipeline

Pipeline of transforms with a final estimator.

Sequentially apply a list of transforms and a final estimator. Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final estimator only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

Read more in the [User Guide](../compose.html#pipeline).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)

## Constructors

## constructor()

### Signature

```ts
new Pipeline(opts?: PipelineOptions): Pipeline;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PipelineOptions`](../interfaces/PipelineOptions.md) |

### Returns

[`Pipeline`](Pipeline.md)

Defined in:  [generated/pipeline/Pipeline.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L23)

### id

> `string`

Defined in:  [generated/pipeline/Pipeline.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L20)

### opts

> `any`

Defined in:  [generated/pipeline/Pipeline.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L32)

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

Defined in: [generated/pipeline/Pipeline.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L36)

## Methods

### decision\_function()

Transform the data, and apply `decision\_function` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `decision\_function` method. Only valid if the final estimator implements `decision\_function`.

#### Signature

```ts
decision_function(opts: PipelineDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineDecisionFunctionOptions`](../interfaces/PipelineDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L105)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/pipeline/Pipeline.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L86)

### fit()

Fit the model.

Fit all the transformers one after the other and transform the data. Finally, fit the transformed data using the final estimator.

#### Signature

```ts
fit(opts: PipelineFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitOptions`](../interfaces/PipelineFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L137)

### fit\_predict()

Transform the data, and apply `fit\_predict` with the final estimator.

Call `fit\_transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `fit\_predict` method. Only valid if the final estimator implements `fit\_predict`.

#### Signature

```ts
fit_predict(opts: PipelineFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitPredictOptions`](../interfaces/PipelineFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L169)

### fit\_transform()

Fit the model and transform with the final estimator.

Fits all the transformers one after the other and transform the data. Then uses `fit\_transform` on transformed data with the final estimator.

#### Signature

```ts
fit_transform(opts: PipelineFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineFitTransformOptions`](../interfaces/PipelineFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L201)

### get\_feature\_names\_out()

Get output feature names for transformation.

Transform input features using the pipeline.

#### Signature

```ts
get_feature_names_out(opts: PipelineGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineGetFeatureNamesOutOptions`](../interfaces/PipelineGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L233)

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

Defined in:  [generated/pipeline/Pipeline.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L45)

### inverse\_transform()

Apply `inverse\_transform` for each step in a reverse order.

All estimators in the pipeline must support `inverse\_transform`.

#### Signature

```ts
inverse_transform(opts: PipelineInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineInverseTransformOptions`](../interfaces/PipelineInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L267)

### predict()

Transform the data, and apply `predict` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict` method. Only valid if the final estimator implements `predict`.

#### Signature

```ts
predict(opts: PipelinePredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictOptions`](../interfaces/PipelinePredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L299)

### predict\_log\_proba()

Transform the data, and apply `predict\_log\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_log\_proba` method. Only valid if the final estimator implements `predict\_log\_proba`.

#### Signature

```ts
predict_log_proba(opts: PipelinePredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictLogProbaOptions`](../interfaces/PipelinePredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L329)

### predict\_proba()

Transform the data, and apply `predict\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_proba` method. Only valid if the final estimator implements `predict\_proba`.

#### Signature

```ts
predict_proba(opts: PipelinePredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelinePredictProbaOptions`](../interfaces/PipelinePredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L363)

### score()

Transform the data, and apply `score` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score` method. Only valid if the final estimator implements `score`.

#### Signature

```ts
score(opts: PipelineScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineScoreOptions`](../interfaces/PipelineScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/pipeline/Pipeline.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L393)

### score\_samples()

Transform the data, and apply `score\_samples` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score\_samples` method. Only valid if the final estimator implements `score\_samples`.

#### Signature

```ts
score_samples(opts: PipelineScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineScoreSamplesOptions`](../interfaces/PipelineScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L425)

### set\_output()

Set the output container when `"transform"` and `"fit\_transform"` are called.

Calling `set\_output` will set the output of all estimators in `steps`.

#### Signature

```ts
set_output(opts: PipelineSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineSetOutputOptions`](../interfaces/PipelineSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L455)

### transform()

Transform the data, and apply `transform` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `transform` method. Only valid if the final estimator implements `transform`.

This also works where final estimator is `undefined` in which case all prior transformations are applied.

#### Signature

```ts
transform(opts: PipelineTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PipelineTransformOptions`](../interfaces/PipelineTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/Pipeline.ts#L487)
