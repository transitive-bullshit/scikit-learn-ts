**sklearn** • **Docs**

***

A sequence of data transformers with an optional final predictor.

`Pipeline` allows you to sequentially apply a list of transformers to preprocess the data and, if desired, conclude the sequence with a final predictor for predictive modeling.

Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final estimator only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

For an example use case of `Pipeline` combined with [`GridSearchCV`](sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "sklearn.model_selection.GridSearchCV"), refer to Selecting dimensionality reduction with Pipeline and GridSearchCV. The example Pipelining: chaining a PCA and a logistic regression shows how to grid search on a pipeline using `'\_\_'` as a separator in the parameter names.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)

## Constructors

### new Pipeline()

> **new Pipeline**(`opts`?): [`Pipeline`](Pipeline.md)

#### Parameters

• **opts?**

• **opts.memory?**: `string`

Used to cache the fitted transformers of the pipeline. The last step will never be cached, even if it is a transformer. By default, no caching is performed. If a string is given, it is the path to the caching directory. Enabling caching triggers a clone of the transformers before fitting. Therefore, the transformer instance given to the pipeline cannot be inspected directly. Use the attribute `named\_steps` or `steps` to inspect estimators within the pipeline. Caching the transformers is advantageous when fitting is time consuming.

• **opts.steps?**: `any`

List of (name of step, estimator) tuples that are to be chained in sequential order. To be compatible with the scikit-learn API, all steps must define `fit`. All non-last steps must also define `transform`. See Combining Estimators for more details.

• **opts.verbose?**: `boolean`

If `true`, the time elapsed while fitting each step will be printed as it is completed.

**Default Value**

`false`

#### Returns

[`Pipeline`](Pipeline.md)

#### Defined in

[generated/pipeline/Pipeline.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/pipeline/Pipeline.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/pipeline/Pipeline.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/pipeline/Pipeline.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/pipeline/Pipeline.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/pipeline/Pipeline.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L25)

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/pipeline/Pipeline.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L53)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data, and apply `decision\_function` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `decision\_function` method. Only valid if the final estimator implements `decision\_function`.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L123)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/pipeline/Pipeline.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L104)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model.

Fit all the transformers one after the other and sequentially transform the data. Finally, fit the transformed data using the final estimator.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

• **opts.y?**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L162)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Transform the data, and apply `fit\_predict` with the final estimator.

Call `fit\_transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `fit\_predict` method. Only valid if the final estimator implements `fit\_predict`.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

• **opts.y?**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/pipeline/Pipeline.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L206)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the model and transform with the final estimator.

Fit all the transformers one after the other and sequentially transform the data. Only valid if the final estimator either implements `fit\_transform` or `fit` and `transform`.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

• **opts.y?**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L250)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

Transform input features using the pipeline.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L294)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L330)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/pipeline/Pipeline.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L66)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply `inverse\_transform` for each step in a reverse order.

All estimators in the pipeline must support `inverse\_transform`.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.

• **opts.X?**: `ArrayLike`[]

Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method.

• **opts.Xt?**: `ArrayLike`[]

Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L364)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Transform the data, and apply `predict` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict` method. Only valid if the final estimator implements `predict`.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/pipeline/Pipeline.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L408)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data, and apply `predict\_log\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_log\_proba` method. Only valid if the final estimator implements `predict\_log\_proba`.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L447)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data, and apply `predict\_proba` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_proba` method. Only valid if the final estimator implements `predict\_proba`.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default):

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L486)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Transform the data, and apply `score` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score` method. Only valid if the final estimator implements `score`.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.

• **opts.sample\_weight?**: `ArrayLike`

If not `undefined`, this argument is passed as `sample\_weight` keyword argument to the `score` method of the final estimator.

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

• **opts.y?**: `any`

Targets used for scoring. Must fulfill label requirements for all steps of the pipeline.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/pipeline/Pipeline.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L525)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Transform the data, and apply `score\_samples` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score\_samples` method. Only valid if the final estimator implements `score\_samples`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/pipeline/Pipeline.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L574)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set the output container when `"transform"` and `"fit\_transform"` are called.

Calling `set\_output` will set the output of all estimators in `steps`.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L608)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/Pipeline.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L644)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data, and apply `transform` with the final estimator.

Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `transform` method. Only valid if the final estimator implements `transform`.

This also works where final estimator is `undefined` in which case all prior transformations are applied.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.

• **opts.X?**: `any`

Data to transform. Must fulfill input requirements of first step of the pipeline.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/pipeline/Pipeline.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/pipeline/Pipeline.ts#L680)
