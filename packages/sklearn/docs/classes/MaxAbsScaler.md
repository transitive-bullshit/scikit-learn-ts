[**sklearn**](../README.md) • **Docs**

***

Scale each feature by its maximum absolute value.

This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

This scaler can also be applied to sparse CSR or CSC matrices.

`MaxAbsScaler` doesn’t reduce the effect of outliers; it only linearly scales them down. For an example visualization, refer to [Compare MaxAbsScaler with other scalers](../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-max-abs-scaler-section).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html)

## Constructors

### new MaxAbsScaler()

> **new MaxAbsScaler**(`opts`?): [`MaxAbsScaler`](MaxAbsScaler.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

Set to `false` to perform inplace scaling and avoid a copy (if the input is already a numpy array).

**Default Value**

`true`

#### Returns

[`MaxAbsScaler`](MaxAbsScaler.md)

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L21)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L469)

***

### max\_abs\_

#### Get Signature

> **get** **max\_abs\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature maximum absolute value.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L421)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L444)

***

### n\_samples\_seen\_

#### Get Signature

> **get** **n\_samples\_seen\_**(): `Promise`\<`number`\>

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L494)

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

[generated/preprocessing/MaxAbsScaler.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L39)

***

### scale\_

#### Get Signature

> **get** **scale\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature relative scaling of the data.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L398)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L91)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the maximum absolute value to be used for later scaling.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L108)

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

[generated/preprocessing/MaxAbsScaler.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L147)

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

[generated/preprocessing/MaxAbsScaler.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L189)

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

[generated/preprocessing/MaxAbsScaler.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L225)

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

[generated/preprocessing/MaxAbsScaler.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L52)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Scale back the data to the original representation.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data that should be transformed back.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L259)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online computation of max absolute value of X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MaxAbsScaler.fit "sklearn.preprocessing.MaxAbsScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data used to compute the mean and standard deviation used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L295)

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

[generated/preprocessing/MaxAbsScaler.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L334)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Scale the data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The data that should be scaled.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MaxAbsScaler.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L366)
