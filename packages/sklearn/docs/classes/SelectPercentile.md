[sklearn](../readme.md) / [Exports](../modules.md) / SelectPercentile

# Class: SelectPercentile

Select features according to a percentile of the highest scores.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectPercentile.html

## Table of contents

### Constructors

- [constructor](SelectPercentile.md#constructor)

### Properties

- [\_isDisposed](SelectPercentile.md#_isdisposed)
- [\_isInitialized](SelectPercentile.md#_isinitialized)
- [\_py](SelectPercentile.md#_py)
- [id](SelectPercentile.md#id)
- [opts](SelectPercentile.md#opts)

### Accessors

- [feature\_names\_in\_](SelectPercentile.md#feature_names_in_)
- [n\_features\_in\_](SelectPercentile.md#n_features_in_)
- [pvalues\_](SelectPercentile.md#pvalues_)
- [py](SelectPercentile.md#py)
- [scores\_](SelectPercentile.md#scores_)

### Methods

- [dispose](SelectPercentile.md#dispose)
- [fit](SelectPercentile.md#fit)
- [fit\_transform](SelectPercentile.md#fit_transform)
- [get\_feature\_names\_out](SelectPercentile.md#get_feature_names_out)
- [get\_support](SelectPercentile.md#get_support)
- [init](SelectPercentile.md#init)
- [inverse\_transform](SelectPercentile.md#inverse_transform)
- [set\_output](SelectPercentile.md#set_output)
- [transform](SelectPercentile.md#transform)

## Constructors

### constructor

• **new SelectPercentile**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectPercentileOptions`](../interfaces/SelectPercentileOptions.md) |

#### Defined in

[generated/feature_selection/SelectPercentile.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L414)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L387)

___

### pvalues\_

• `get` **pvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

p-values of feature scores, `undefined` if `score\_func` returned only scores.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L360)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L32)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scores of features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L333)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileFitOptions`](../interfaces/SelectPercentileFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L100)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileFitTransformOptions`](../interfaces/SelectPercentileFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileGetFeatureNamesOutOptions`](../interfaces/SelectPercentileGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L172)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileGetSupportOptions`](../interfaces/SelectPercentileGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L207)

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

[generated/feature_selection/SelectPercentile.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileInverseTransformOptions`](../interfaces/SelectPercentileInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L237)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileSetOutputOptions`](../interfaces/SelectPercentileSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L273)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectPercentileTransformOptions`](../interfaces/SelectPercentileTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectPercentile.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L303)
