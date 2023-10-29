# Pipeline

Pipeline of transforms with a final estimator.

Sequentially apply a list of transforms and a final estimator. Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final estimator only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

For an example use case of `Pipeline` combined with [`GridSearchCV`](sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "sklearn.model_selection.GridSearchCV"), refer to [Selecting dimensionality reduction with Pipeline and GridSearchCV](../../auto_examples/compose/plot_compare_reduction.html#sphx-glr-auto-examples-compose-plot-compare-reduction-py). The example [Pipelining: chaining a PCA and a logistic regression](../../auto_examples/compose/plot_digits_pipe.html#sphx-glr-auto-examples-compose-plot-digits-pipe-py) shows how to grid search on a pipeline using `'\_\_'` as a separator in the parameter names.

Read more in the [User Guide](../compose.html#pipeline).

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
| `opts.memory?` | `string` | Used to cache the fitted transformers of the pipeline. The last step will never be cached, even if it is a transformer. By default, no caching is performed. If a string is given, it is the path to the caching directory. Enabling caching triggers a clone of the transformers before fitting. Therefore, the transformer instance given to the pipeline cannot be inspected directly. Use the attribute `named\_steps` or `steps` to inspect estimators within the pipeline. Caching the transformers is advantageous when fitting is time consuming. |
| `opts.steps?` | `any` | List of (name, transform) tuples (implementing `fit`/`transform`) that are chained in sequential order. The last transform must be an estimator. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting each step will be printed as it is completed.  `Default Value`  `false` |

### Returns

[`Pipeline`](Pipeline.md)

Defined in:  [generated/pipeline/Pipeline.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L29)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L124)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/pipeline/Pipeline.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L105)

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

Defined in:  [generated/pipeline/Pipeline.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L159)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L206)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L253)

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

Defined in:  [generated/pipeline/Pipeline.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L300)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L337)

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

Defined in:  [generated/pipeline/Pipeline.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L64)

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
| `opts.Xt?` | [`ArrayLike`](../types/ArrayLike.md)[] | Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L372)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L407)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L447)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L489)

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
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | If not `undefined`, this argument is passed as `sample\_weight` keyword argument to the `score` method of the final estimator. |
| `opts.y?` | `any` | Targets used for scoring. Must fulfill label requirements for all steps of the pipeline. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/pipeline/Pipeline.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L529)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/Pipeline.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L576)

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

Defined in:  [generated/pipeline/Pipeline.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L611)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/Pipeline.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L648)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/pipeline/Pipeline.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L685)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/pipeline/Pipeline.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L25)

### id

> `string`

Defined in:  [generated/pipeline/Pipeline.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L22)

### opts

> `any`

Defined in:  [generated/pipeline/Pipeline.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/pipeline/Pipeline.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L51)

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

Defined in:  [generated/pipeline/Pipeline.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L55)

Defined in:  [generated/pipeline/Pipeline.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L51) [generated/pipeline/Pipeline.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/pipeline/Pipeline.ts#L55)
