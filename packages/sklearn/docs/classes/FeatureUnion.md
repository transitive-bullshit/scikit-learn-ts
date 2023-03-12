[sklearn](../readme.md) / [Exports](../modules.md) / FeatureUnion

# Class: FeatureUnion

Concatenates results of multiple transformer objects.

This estimator applies a list of transformer objects in parallel to the input data, then concatenates the results. This is useful to combine several feature extraction mechanisms into a single transformer.

Parameters of the transformers may be set using its name and the parameter name separated by a ‘\_\_’. A transformer may be replaced entirely by setting the parameter with its name to another transformer, removed by setting to ‘drop’ or disabled by setting to ‘passthrough’ (features are passed without transformation).

Read more in the [User Guide](../compose.html#feature-union).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html

## Table of contents

### Constructors

- [constructor](FeatureUnion.md#constructor)

### Properties

- [\_isDisposed](FeatureUnion.md#_isdisposed)
- [\_isInitialized](FeatureUnion.md#_isinitialized)
- [\_py](FeatureUnion.md#_py)
- [id](FeatureUnion.md#id)
- [opts](FeatureUnion.md#opts)

### Accessors

- [named\_transformers](FeatureUnion.md#named_transformers)
- [py](FeatureUnion.md#py)

### Methods

- [dispose](FeatureUnion.md#dispose)
- [fit](FeatureUnion.md#fit)
- [fit\_transform](FeatureUnion.md#fit_transform)
- [get\_feature\_names\_out](FeatureUnion.md#get_feature_names_out)
- [init](FeatureUnion.md#init)
- [set\_output](FeatureUnion.md#set_output)
- [transform](FeatureUnion.md#transform)

## Constructors

### constructor

• **new FeatureUnion**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FeatureUnionOptions`](../interfaces/FeatureUnionOptions.md) |

#### Defined in

[generated/pipeline/FeatureUnion.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/pipeline/FeatureUnion.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/pipeline/FeatureUnion.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/pipeline/FeatureUnion.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/pipeline/FeatureUnion.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/pipeline/FeatureUnion.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L21)

## Accessors

### named\_transformers

• `get` **named_transformers**(): `Promise`<`any`\>

Dictionary-like object, with the following attributes. Read-only attribute to access any transformer parameter by user given name. Keys are transformer names and values are transformer parameters.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L259)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/pipeline/FeatureUnion.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/pipeline/FeatureUnion.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit all transformers using X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionFitOptions`](../interfaces/FeatureUnionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit all transformers, transform the data and concatenate results.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionFitTransformOptions`](../interfaces/FeatureUnionFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionGetFeatureNamesOutOptions`](../interfaces/FeatureUnionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L166)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L45)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set the output container when `"transform"` and `"fit\_transform"` are called.

`set\_output` will set the output of all estimators in `transformer\_list`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionSetOutputOptions`](../interfaces/FeatureUnionSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L201)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X separately by each transformer, concatenate results.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionTransformOptions`](../interfaces/FeatureUnionTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/pipeline/FeatureUnion.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L229)
