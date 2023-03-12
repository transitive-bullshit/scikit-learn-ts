[sklearn](../readme.md) / [Exports](../modules.md) / SelectorMixin

# Class: SelectorMixin

Transformer mixin that performs feature selection given a support mask

This mixin provides a feature selector implementation with `transform` and `inverse\_transform` functionality given an implementation of `\_get\_support\_mask`.

Methods

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectorMixin.html

## Table of contents

### Constructors

- [constructor](SelectorMixin.md#constructor)

### Properties

- [\_isDisposed](SelectorMixin.md#_isdisposed)
- [\_isInitialized](SelectorMixin.md#_isinitialized)
- [\_py](SelectorMixin.md#_py)
- [id](SelectorMixin.md#id)
- [opts](SelectorMixin.md#opts)

### Accessors

- [X\_new](SelectorMixin.md#x_new)
- [py](SelectorMixin.md#py)

### Methods

- [dispose](SelectorMixin.md#dispose)
- [fit\_transform](SelectorMixin.md#fit_transform)
- [get\_feature\_names\_out](SelectorMixin.md#get_feature_names_out)
- [get\_support](SelectorMixin.md#get_support)
- [init](SelectorMixin.md#init)
- [inverse\_transform](SelectorMixin.md#inverse_transform)
- [set\_output](SelectorMixin.md#set_output)
- [transform](SelectorMixin.md#transform)

## Constructors

### constructor

• **new SelectorMixin**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectorMixinOptions`](../interfaces/SelectorMixinOptions.md) |

#### Defined in

[generated/feature_selection/SelectorMixin.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L19)

## Accessors

### X\_new

• `get` **X_new**(): `Promise`<`any`[]\>

Transformed array.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L289)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectorMixin.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L87)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinFitTransformOptions`](../interfaces/SelectorMixinFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L106)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinGetFeatureNamesOutOptions`](../interfaces/SelectorMixinGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L138)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinGetSupportOptions`](../interfaces/SelectorMixinGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L171)

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

[generated/feature_selection/SelectorMixin.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinInverseTransformOptions`](../interfaces/SelectorMixinInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L199)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinSetOutputOptions`](../interfaces/SelectorMixinSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L233)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectorMixinTransformOptions`](../interfaces/SelectorMixinTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectorMixin.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L261)
