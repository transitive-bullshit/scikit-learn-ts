**sklearn** • **Docs**

***

Bin continuous data into intervals.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html)

## Constructors

### new KBinsDiscretizer()

> **new KBinsDiscretizer**(`opts`?): [`KBinsDiscretizer`](KBinsDiscretizer.md)

#### Parameters

• **opts?**

• **opts.dtype?**: `any`

The desired data-type for the output. If `undefined`, output dtype is consistent with input dtype. Only np.float32 and np.float64 are supported.

• **opts.encode?**: `"onehot"` \| `"onehot-dense"` \| `"ordinal"`

Method used to encode the transformed result.

**Default Value**

`'onehot'`

• **opts.n\_bins?**: `number` \| `ArrayLike`

The number of bins to produce. Raises ValueError if `n\_bins < 2`.

**Default Value**

`5`

• **opts.random\_state?**: `number`

Determines random number generation for subsampling. Pass an int for reproducible results across multiple function calls. See the `subsample` parameter for more details. See Glossary.

• **opts.strategy?**: `"uniform"` \| `"quantile"` \| `"kmeans"`

Strategy used to define the widths of the bins.

**Default Value**

`'quantile'`

• **opts.subsample?**: `number`

Maximum number of samples, used to fit the model, for computational efficiency. `subsample=None` means that all the training samples are used when computing the quantiles that determine the binning thresholds. Since quantile computation relies on sorting each column of `X` and that sorting has an `n log(n)` time complexity, it is recommended to use subsampling on datasets with a very large number of samples.

**Default Value**

`200`

#### Returns

[`KBinsDiscretizer`](KBinsDiscretizer.md)

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L17)

## Accessors

### bin\_edges\_

#### Get Signature

> **get** **bin\_edges\_**(): `Promise`\<`any`[]\>

The edges of each bin. Contain arrays of varying shapes `(n\_bins\_, )` Ignored features will have empty arrays.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L456)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L537)

***

### n\_bins\_

#### Get Signature

> **get** **n\_bins\_**(): `Promise`\<`ArrayLike`\>

Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L483)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L510)

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

[generated/preprocessing/KBinsDiscretizer.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L66)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the estimator.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Contains weight values to be associated with each sample. Cannot be used when `strategy` is set to `"uniform"`.

• **opts.X?**: `ArrayLike`[]

Data to be discretized.

• **opts.y?**: `any`

Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L137)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L183)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L229)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L267)

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

[generated/preprocessing/KBinsDiscretizer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L79)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform discretized data back to original feature space.

Note that this function does not regenerate the original data due to discretization rounding.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Transformed data in the binned space.

• **opts.Xt?**: `ArrayLike`[]

Transformed data in the binned space.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L305)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L350)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L388)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Discretize the data.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Data to be discretized.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/KBinsDiscretizer.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L422)
