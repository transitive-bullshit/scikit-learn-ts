[**sklearn**](../README.md) • **Docs**

***

Transform features by scaling each feature to a given range.

This estimator scales and translates each feature individually such that it is in the given range on the training set, e.g. between zero and one.

The transformation is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html)

## Constructors

### new MinMaxScaler()

> **new MinMaxScaler**(`opts`?): [`MinMaxScaler`](MinMaxScaler.md)

#### Parameters

• **opts?**

• **opts.clip?**: `boolean`

Set to `true` to clip transformed values of held-out data to provided `feature range`.

**Default Value**

`false`

• **opts.copy?**: `boolean`

Set to `false` to perform inplace row normalization and avoid a copy (if the input is already a numpy array).

**Default Value**

`true`

• **opts.feature\_range?**: `any`

Desired range of transformed data.

#### Returns

[`MinMaxScaler`](MinMaxScaler.md)

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L19)

## Accessors

### data\_max\_

#### Get Signature

> **get** **data\_max\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature maximum seen in the data

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L479)

***

### data\_min\_

#### Get Signature

> **get** **data\_min\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature minimum seen in the data

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L454)

***

### data\_range\_

#### Get Signature

> **get** **data\_range\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature range `(data\_max\_ \- data\_min\_)` seen in the data

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L504)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L579)

***

### min\_

#### Get Signature

> **get** **min\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature adjustment for minimum. Equivalent to `min \- X.min(axis=0) \* self.scale\_`

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L408)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L529)

***

### n\_samples\_seen\_

#### Get Signature

> **get** **n\_samples\_seen\_**(): `Promise`\<`number`\>

The number of samples processed by the estimator. It will be reset on new calls to fit, but increments across `partial\_fit` calls.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L554)

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

[generated/preprocessing/MinMaxScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L49)

***

### scale\_

#### Get Signature

> **get** **scale\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Per feature relative scaling of the data. Equivalent to `(max \- min) / (X.max(axis=0) \- X.min(axis=0))`

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L431)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L101)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the minimum and maximum to be used for later scaling.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L118)

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

[generated/preprocessing/MinMaxScaler.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L157)

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

[generated/preprocessing/MinMaxScaler.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L199)

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

[generated/preprocessing/MinMaxScaler.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L235)

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

[generated/preprocessing/MinMaxScaler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L62)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Undo the scaling of X according to feature\_range.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input data that will be transformed. It cannot be sparse.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L269)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online computation of min and max on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MinMaxScaler.fit "sklearn.preprocessing.MinMaxScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data used to compute the mean and standard deviation used for later scaling along the features axis.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L305)

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

[generated/preprocessing/MinMaxScaler.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L344)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Scale features of X according to feature\_range.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input data that will be transformed.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L376)
