# Pipeline

Pipeline of transforms with a final estimator.

Sequentially apply a list of transforms and a final estimator. Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final estimator only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)

## Constructors

## constructor()

### Signature

```ts
new Pipeline(opts?: object): Pipeline;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.memory?` | `string` | Used to cache the fitted transformers of the pipeline. By default, no caching is performed. If a string is given, it is the path to the caching directory. Enabling caching triggers a clone of the transformers before fitting. Therefore, the transformer instance given to the pipeline cannot be inspected directly. Use the attribute `named\_steps` or `steps` to inspect estimators within the pipeline. Caching the transformers is advantageous when fitting is time consuming. |
| `opts.steps?` | `any` | List of (name, transform) tuples (implementing `fit`/`transform`) that are chained in sequential order. The last transform must be an estimator. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting each step will be printed as it is completed.  `Default Value`  `false` |

### Returns

[`Pipeline`](Pipeline.md)

Defined in:  [generated/pipeline/Pipeline.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L27)

## Methods

### decision\_function()

Transform the data, and apply `decision\_function` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `decision\_function` method. Only valid if the final estimator implements `decision\_function`.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L122)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/pipeline/Pipeline.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L103)

### fit()

Fit the model.

Fit all the transformers one after the other and transform the data. Finally, fit the transformed data using the final estimator.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. Must fulfill input requirements of first step of the pipeline. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`. |
| `opts.y?` | `any` | Training targets. Must fulfill label requirements for all steps of the pipeline. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L157)

### fit\_predict()

Transform the data, and apply `fit\_predict` with the final estimator.

Call `fit\_transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `fit\_predict` method. Only valid if the final estimator implements `fit\_predict`.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. Must fulfill input requirements of first step of the pipeline. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`. |
| `opts.y?` | `any` | Training targets. Must fulfill label requirements for all steps of the pipeline. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/pipeline/Pipeline.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L204)

### fit\_transform()

Fit the model and transform with the final estimator.

Fits all the transformers one after the other and transform the data. Then uses `fit\_transform` on transformed data with the final estimator.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. Must fulfill input requirements of first step of the pipeline. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`. |
| `opts.y?` | `any` | Training targets. Must fulfill label requirements for all steps of the pipeline. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L251)

### get\_feature\_names\_out()

Get output feature names for transformation.

Transform input features using the pipeline.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L298)

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

Defined in:  [generated/pipeline/Pipeline.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L62)

### inverse\_transform()

Apply `inverse\_transform` for each step in a reverse order.

All estimators in the pipeline must support `inverse\_transform`.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.Xt?` | `ArrayLike`[] | Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L335)

### predict()

Transform the data, and apply `predict` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict` method. Only valid if the final estimator implements `predict`.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |
| `opts.predict_params?` | `any` | Parameters to the `predict` called at the end of all transformations in the pipeline. Note that while this may be used to return uncertainties from some models with return\_std or return\_cov, uncertainties that are generated by the transformations in the pipeline are not propagated to the final estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/pipeline/Pipeline.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L370)

### predict\_log\_proba()

Transform the data, and apply `predict\_log\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_log\_proba` method. Only valid if the final estimator implements `predict\_log\_proba`.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |
| `opts.predict_log_proba_params?` | `any` | Parameters to the `predict\_log\_proba` called at the end of all transformations in the pipeline. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L410)

### predict\_proba()

Transform the data, and apply `predict\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_proba` method. Only valid if the final estimator implements `predict\_proba`.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |
| `opts.predict_proba_params?` | `any` | Parameters to the `predict\_proba` called at the end of all transformations in the pipeline. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L452)

### score()

Transform the data, and apply `score` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score` method. Only valid if the final estimator implements `score`.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |
| `opts.sample_weight?` | `ArrayLike` | If not `undefined`, this argument is passed as `sample\_weight` keyword argument to the `score` method of the final estimator. |
| `opts.y?` | `any` | Targets used for scoring. Must fulfill label requirements for all steps of the pipeline. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/pipeline/Pipeline.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L492)

### score\_samples()

Transform the data, and apply `score\_samples` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score\_samples` method. Only valid if the final estimator implements `score\_samples`.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of first step of the pipeline. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/pipeline/Pipeline.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L539)

### set\_output()

Set the output container when `"transform"` and `"fit\_transform"` are called.

Calling `set\_output` will set the output of all estimators in `steps`.

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

Defined in:  [generated/pipeline/Pipeline.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L574)

### transform()

Transform the data, and apply `transform` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `transform` method. Only valid if the final estimator implements `transform`.

This also works where final estimator is `undefined` in which case all prior transformations are applied.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to transform. Must fulfill input requirements of first step of the pipeline. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/pipeline/Pipeline.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L611)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L23)

### id

> `string`

Defined in:  [generated/pipeline/Pipeline.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L20)

### opts

> `any`

Defined in:  [generated/pipeline/Pipeline.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L49)

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

Defined in: [generated/pipeline/Pipeline.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L53)
