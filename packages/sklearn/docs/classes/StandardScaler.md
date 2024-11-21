[**sklearn**](../README.md) • **Docs**

***

Standardize features by removing the mean and scaling to unit variance.

The standard score of a sample `x` is calculated as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

## Constructors

### new StandardScaler()

> **new StandardScaler**(`opts`?): [`StandardScaler`](StandardScaler.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

**Default Value**

`true`

• **opts.with\_mean?**: `boolean`

If `true`, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

**Default Value**

`true`

• **opts.with\_std?**: `boolean`

If `true`, scale the data to unit variance (or equivalently, unit standard deviation).

**Default Value**

`true`

#### Returns

[`StandardScaler`](StandardScaler.md)

#### Defined in

[generated/preprocessing/StandardScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/StandardScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/StandardScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/StandardScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/StandardScaler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/StandardScaler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L17)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L676)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False` and `with\_std=False`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L605)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L651)

***

### n\_samples\_seen\_

#### Get Signature

> **get** **n\_samples\_seen\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L701)

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

[generated/preprocessing/StandardScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L49)

***

### scale\_

#### Get Signature

> **get** **scale\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L582)

***

### var\_

#### Get Signature

> **get** **var\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_mean=False` and `with\_std=False`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L628)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L101)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the mean and std to be used for later scaling.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Individual weights for each sample.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data used to compute the mean and standard deviation used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L118)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L162)

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

[generated/preprocessing/StandardScaler.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L204)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L240)

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

[generated/preprocessing/StandardScaler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L62)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Scale back the data to the original representation.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Copy the input X or not.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data used to scale along the features axis.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L274)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online computation of mean and std on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.StandardScaler.fit "sklearn.preprocessing.StandardScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

The algorithm for incremental mean and std is given in Equation 1.5a,b in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. “Algorithms for computing the sample variance: Analysis and recommendations.” The American Statistician 37.3 (1983): 242-247:

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Individual weights for each sample.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data used to compute the mean and standard deviation used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L317)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L363)

***

### set\_inverse\_transform\_request()

> **set\_inverse\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `inverse\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L401)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L437)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L473)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L511)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform standardization by centering and scaling.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Copy the input X or not.

• **opts.X?**: `any`[]

The data used to scale along the features axis.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/StandardScaler.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L545)
