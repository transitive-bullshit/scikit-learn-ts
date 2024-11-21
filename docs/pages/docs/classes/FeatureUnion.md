**sklearn** • **Docs**

***

Concatenates results of multiple transformer objects.

This estimator applies a list of transformer objects in parallel to the input data, then concatenates the results. This is useful to combine several feature extraction mechanisms into a single transformer.

Parameters of the transformers may be set using its name and the parameter name separated by a ‘\_\_’. A transformer may be replaced entirely by setting the parameter with its name to another transformer, removed by setting to ‘drop’ or disabled by setting to ‘passthrough’ (features are passed without transformation).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html)

## Constructors

### new FeatureUnion()

> **new FeatureUnion**(`opts`?): [`FeatureUnion`](FeatureUnion.md)

#### Parameters

• **opts?**

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.transformer\_list?**: `any`

List of transformer objects to be applied to the data. The first half of each tuple is the name of the transformer. The transformer can be ‘drop’ for it to be ignored or can be ‘passthrough’ for features to be passed unchanged.

• **opts.transformer\_weights?**: `any`

Multiplicative weights for features per transformer. Keys are transformer names, values the weights. Raises ValueError if key not present in `transformer\_list`.

• **opts.verbose?**: `boolean`

If `true`, the time elapsed while fitting each transformer will be printed as it is completed.

**Default Value**

`false`

• **opts.verbose\_feature\_names\_out?**: `boolean`

If `true`, [`get\_feature\_names\_out`](#sklearn.pipeline.FeatureUnion.get_feature_names_out "sklearn.pipeline.FeatureUnion.get_feature_names_out") will prefix all feature names with the name of the transformer that generated that feature. If `false`, [`get\_feature\_names\_out`](#sklearn.pipeline.FeatureUnion.get_feature_names_out "sklearn.pipeline.FeatureUnion.get_feature_names_out") will not prefix any feature names and will error if feature names are not unique.

**Default Value**

`true`

#### Returns

[`FeatureUnion`](FeatureUnion.md)

#### Defined in

[generated/pipeline/FeatureUnion.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/pipeline/FeatureUnion.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/pipeline/FeatureUnion.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/pipeline/FeatureUnion.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/pipeline/FeatureUnion.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/pipeline/FeatureUnion.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L21)

## Accessors

### named\_transformers

#### Get Signature

> **get** **named\_transformers**(): `Promise`\<`any`\>

Dictionary-like object, with the following attributes. Read-only attribute to access any transformer parameter by user given name. Keys are transformer names and values are transformer parameters.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L355)

***

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

[generated/pipeline/FeatureUnion.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L61)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L113)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit all transformers using X.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

If `enable\_metadata\_routing=False` (default): Parameters directly passed to the `fit` methods of the sub-transformers.

• **opts.X?**: `ArrayLike`

Input data, used to fit transformers.

• **opts.y?**: `ArrayLike`[]

Targets for supervised learning.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L130)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Fit all transformers, transform the data and concatenate results.

#### Parameters

• **opts**

• **opts.params?**: `any`

If `enable\_metadata\_routing=False` (default): Parameters directly passed to the `fit` methods of the sub-transformers.

• **opts.X?**: `ArrayLike`

Input data to be transformed.

• **opts.y?**: `ArrayLike`[]

Targets for supervised learning.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L172)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L214)

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

[generated/pipeline/FeatureUnion.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L250)

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

[generated/pipeline/FeatureUnion.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L74)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set the output container when `"transform"` and `"fit\_transform"` are called.

`set\_output` will set the output of all estimators in `transformer\_list`.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L286)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X separately by each transformer, concatenate results.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters routed to the `transform` method of the sub-transformers via the metadata routing API. See Metadata Routing User Guide for more details.

• **opts.X?**: `ArrayLike`

Input data to be transformed.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L318)
