[sklearn](../readme.md) / [Exports](../modules.md) / VarianceThreshold

# Class: VarianceThreshold

Feature selector that removes all low-variance features.

This feature selection algorithm looks only at the features (X), not the desired outputs (y), and can thus be used for unsupervised learning.

Read more in the [User Guide](../feature_selection.html#variance-threshold).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.VarianceThreshold.html

## Table of contents

### Constructors

- [constructor](VarianceThreshold.md#constructor)

### Properties

- [\_isDisposed](VarianceThreshold.md#_isdisposed)
- [\_isInitialized](VarianceThreshold.md#_isinitialized)
- [\_py](VarianceThreshold.md#_py)
- [id](VarianceThreshold.md#id)
- [opts](VarianceThreshold.md#opts)

### Accessors

- [feature\_names\_in\_](VarianceThreshold.md#feature_names_in_)
- [n\_features\_in\_](VarianceThreshold.md#n_features_in_)
- [py](VarianceThreshold.md#py)
- [variances\_](VarianceThreshold.md#variances_)

### Methods

- [dispose](VarianceThreshold.md#dispose)
- [fit](VarianceThreshold.md#fit)
- [fit\_transform](VarianceThreshold.md#fit_transform)
- [get\_feature\_names\_out](VarianceThreshold.md#get_feature_names_out)
- [get\_support](VarianceThreshold.md#get_support)
- [init](VarianceThreshold.md#init)
- [inverse\_transform](VarianceThreshold.md#inverse_transform)
- [set\_output](VarianceThreshold.md#set_output)
- [transform](VarianceThreshold.md#transform)

## Constructors

### constructor

• **new VarianceThreshold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`VarianceThresholdOptions`](../interfaces/VarianceThresholdOptions.md) |

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L388)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L361)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L34)

___

### variances\_

• `get` **variances_**(): `Promise`<`any`\>

Variances of individual features.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L334)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn empirical variances from X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdFitOptions`](../interfaces/VarianceThresholdFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L102)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdFitTransformOptions`](../interfaces/VarianceThresholdFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdGetFeatureNamesOutOptions`](../interfaces/VarianceThresholdGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L172)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdGetSupportOptions`](../interfaces/VarianceThresholdGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L207)

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

[generated/feature_selection/VarianceThreshold.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdInverseTransformOptions`](../interfaces/VarianceThresholdInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L237)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdSetOutputOptions`](../interfaces/VarianceThresholdSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L274)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VarianceThresholdTransformOptions`](../interfaces/VarianceThresholdTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L304)
