[sklearn](../readme.md) / [Exports](../modules.md) / SelectFromModel

# Class: SelectFromModel

Meta-transformer for selecting features based on importance weights.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html

## Table of contents

### Constructors

- [constructor](SelectFromModel.md#constructor)

### Properties

- [\_isDisposed](SelectFromModel.md#_isdisposed)
- [\_isInitialized](SelectFromModel.md#_isinitialized)
- [\_py](SelectFromModel.md#_py)
- [id](SelectFromModel.md#id)
- [opts](SelectFromModel.md#opts)

### Accessors

- [estimator\_](SelectFromModel.md#estimator_)
- [feature\_names\_in\_](SelectFromModel.md#feature_names_in_)
- [max\_features\_](SelectFromModel.md#max_features_)
- [py](SelectFromModel.md#py)

### Methods

- [dispose](SelectFromModel.md#dispose)
- [fit](SelectFromModel.md#fit)
- [fit\_transform](SelectFromModel.md#fit_transform)
- [get\_feature\_names\_out](SelectFromModel.md#get_feature_names_out)
- [get\_support](SelectFromModel.md#get_support)
- [init](SelectFromModel.md#init)
- [inverse\_transform](SelectFromModel.md#inverse_transform)
- [partial\_fit](SelectFromModel.md#partial_fit)
- [set\_output](SelectFromModel.md#set_output)
- [transform](SelectFromModel.md#transform)

## Constructors

### constructor

• **new SelectFromModel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectFromModelOptions`](../interfaces/SelectFromModelOptions.md) |

#### Defined in

[generated/feature_selection/SelectFromModel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L15)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The base estimator from which the transformer is built. This attribute exist only when `fit` has been called.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L351)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L401)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

Maximum number of features calculated during [fit](../../glossary.html#term-fit). Only defined if the `max\_features` is not `undefined`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L376)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectFromModel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L30)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the SelectFromModel meta-transformer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelFitOptions`](../interfaces/SelectFromModelFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L100)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelFitTransformOptions`](../interfaces/SelectFromModelFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelGetFeatureNamesOutOptions`](../interfaces/SelectFromModelGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L168)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelGetSupportOptions`](../interfaces/SelectFromModelGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L201)

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

[generated/feature_selection/SelectFromModel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L39)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelInverseTransformOptions`](../interfaces/SelectFromModelInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L229)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Fit the SelectFromModel meta-transformer only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelPartialFitOptions`](../interfaces/SelectFromModelPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L261)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelSetOutputOptions`](../interfaces/SelectFromModelSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L295)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFromModelTransformOptions`](../interfaces/SelectFromModelTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFromModel.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L323)
