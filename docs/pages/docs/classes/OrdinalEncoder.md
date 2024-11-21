**sklearn** • **Docs**

***

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

Read more in the User Guide. For a comparison of different encoders, refer to: Comparing Target Encoder with Other Encoders.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html)

## Constructors

### new OrdinalEncoder()

> **new OrdinalEncoder**(`opts`?): [`OrdinalEncoder`](OrdinalEncoder.md)

#### Parameters

• **opts?**

• **opts.categories?**: `"auto"`

Categories (unique values) per feature:

**Default Value**

`'auto'`

• **opts.dtype?**: `any`

Desired dtype of output.

• **opts.encoded\_missing\_value?**: `number`

Encoded value of missing categories. If set to `np.nan`, then the `dtype` parameter must be a float dtype.

• **opts.handle\_unknown?**: `"error"` \| `"use_encoded_value"`

When set to ‘error’ an error will be raised in case an unknown categorical feature is present during transform. When set to ‘use\_encoded\_value’, the encoded value of unknown categories will be set to the value given for the parameter `unknown\_value`. In [`inverse\_transform`](#sklearn.preprocessing.OrdinalEncoder.inverse_transform "sklearn.preprocessing.OrdinalEncoder.inverse_transform"), an unknown category will be denoted as `undefined`.

**Default Value**

`'error'`

• **opts.max\_categories?**: `number`

Specifies an upper limit to the number of output categories for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.

`max\_categories` do **not** take into account missing or unknown categories. Setting `unknown\_value` or `encoded\_missing\_value` to an integer will increase the number of unique integer codes by one each. This can result in up to `max\_categories + 2` integer codes.

• **opts.min\_frequency?**: `number`

Specifies the minimum frequency below which a category will be considered infrequent.

• **opts.unknown\_value?**: `number`

When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype.

#### Returns

[`OrdinalEncoder`](OrdinalEncoder.md)

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L19)

## Accessors

### categories\_

#### Get Signature

> **get** **categories\_**(): `Promise`\<`any`\>

The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L391)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L441)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L416)

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

[generated/preprocessing/OrdinalEncoder.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L71)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L123)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the OrdinalEncoder to X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to determine the categories of each feature.

• **opts.y?**: `any`

Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L140)

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

[generated/preprocessing/OrdinalEncoder.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L179)

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

[generated/preprocessing/OrdinalEncoder.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L221)

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

[generated/preprocessing/OrdinalEncoder.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L257)

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

[generated/preprocessing/OrdinalEncoder.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L84)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Convert the data back to the original representation.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The transformed data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L291)

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

[generated/preprocessing/OrdinalEncoder.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L327)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X to ordinal codes.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to encode.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L359)
