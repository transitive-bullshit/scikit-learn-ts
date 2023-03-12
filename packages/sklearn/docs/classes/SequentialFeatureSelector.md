[sklearn](../readme.md) / [Exports](../modules.md) / SequentialFeatureSelector

# Class: SequentialFeatureSelector

Transformer that performs Sequential Feature Selection.

This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

Read more in the [User Guide](../feature_selection.html#sequential-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html

## Table of contents

### Constructors

- [constructor](SequentialFeatureSelector.md#constructor)

### Properties

- [\_isDisposed](SequentialFeatureSelector.md#_isdisposed)
- [\_isInitialized](SequentialFeatureSelector.md#_isinitialized)
- [\_py](SequentialFeatureSelector.md#_py)
- [id](SequentialFeatureSelector.md#id)
- [opts](SequentialFeatureSelector.md#opts)

### Accessors

- [feature\_names\_in\_](SequentialFeatureSelector.md#feature_names_in_)
- [n\_features\_in\_](SequentialFeatureSelector.md#n_features_in_)
- [n\_features\_to\_select\_](SequentialFeatureSelector.md#n_features_to_select_)
- [py](SequentialFeatureSelector.md#py)
- [support\_](SequentialFeatureSelector.md#support_)

### Methods

- [dispose](SequentialFeatureSelector.md#dispose)
- [fit](SequentialFeatureSelector.md#fit)
- [fit\_transform](SequentialFeatureSelector.md#fit_transform)
- [get\_feature\_names\_out](SequentialFeatureSelector.md#get_feature_names_out)
- [get\_support](SequentialFeatureSelector.md#get_support)
- [init](SequentialFeatureSelector.md#init)
- [inverse\_transform](SequentialFeatureSelector.md#inverse_transform)
- [set\_output](SequentialFeatureSelector.md#set_output)
- [transform](SequentialFeatureSelector.md#transform)

## Constructors

### constructor

• **new SequentialFeatureSelector**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SequentialFeatureSelectorOptions`](../interfaces/SequentialFeatureSelectorOptions.md) |

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L386)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L359)

___

### n\_features\_to\_select\_

• `get` **n_features_to_select_**(): `Promise`<`number`\>

The number of features that were selected.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L413)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L34)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The mask of selected features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L440)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn the features to select from X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorFitOptions`](../interfaces/SequentialFeatureSelectorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L110)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorFitTransformOptions`](../interfaces/SequentialFeatureSelectorFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L144)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorGetFeatureNamesOutOptions`](../interfaces/SequentialFeatureSelectorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L183)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorGetSupportOptions`](../interfaces/SequentialFeatureSelectorGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L218)

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

[generated/feature_selection/SequentialFeatureSelector.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorInverseTransformOptions`](../interfaces/SequentialFeatureSelectorInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L252)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorSetOutputOptions`](../interfaces/SequentialFeatureSelectorSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L289)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorTransformOptions`](../interfaces/SequentialFeatureSelectorTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SequentialFeatureSelector.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L324)
