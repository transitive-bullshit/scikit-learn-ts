[sklearn](../readme.md) / [Exports](../modules.md) / SelectKBest

# Class: SelectKBest

Select features according to the k highest scores.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectKBest.html

## Table of contents

### Constructors

- [constructor](SelectKBest.md#constructor)

### Properties

- [\_isDisposed](SelectKBest.md#_isdisposed)
- [\_isInitialized](SelectKBest.md#_isinitialized)
- [\_py](SelectKBest.md#_py)
- [id](SelectKBest.md#id)
- [opts](SelectKBest.md#opts)

### Accessors

- [feature\_names\_in\_](SelectKBest.md#feature_names_in_)
- [n\_features\_in\_](SelectKBest.md#n_features_in_)
- [pvalues\_](SelectKBest.md#pvalues_)
- [py](SelectKBest.md#py)
- [scores\_](SelectKBest.md#scores_)

### Methods

- [dispose](SelectKBest.md#dispose)
- [fit](SelectKBest.md#fit)
- [fit\_transform](SelectKBest.md#fit_transform)
- [get\_feature\_names\_out](SelectKBest.md#get_feature_names_out)
- [get\_support](SelectKBest.md#get_support)
- [init](SelectKBest.md#init)
- [inverse\_transform](SelectKBest.md#inverse_transform)
- [set\_output](SelectKBest.md#set_output)
- [transform](SelectKBest.md#transform)

## Constructors

### constructor

• **new SelectKBest**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectKBestOptions`](../interfaces/SelectKBestOptions.md) |

#### Defined in

[generated/feature_selection/SelectKBest.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectKBest.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectKBest.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectKBest.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectKBest.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectKBest.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L382)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L357)

___

### pvalues\_

• `get` **pvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

p-values of feature scores, `undefined` if `score\_func` returned only scores.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L334)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectKBest.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectKBest.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L32)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scores of features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L311)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L81)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestFitOptions`](../interfaces/SelectKBestFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L98)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestFitTransformOptions`](../interfaces/SelectKBestFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L130)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestGetFeatureNamesOutOptions`](../interfaces/SelectKBestGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L162)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestGetSupportOptions`](../interfaces/SelectKBestGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L195)

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

[generated/feature_selection/SelectKBest.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestInverseTransformOptions`](../interfaces/SelectKBestInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L223)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestSetOutputOptions`](../interfaces/SelectKBestSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L255)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectKBestTransformOptions`](../interfaces/SelectKBestTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectKBest.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L283)
