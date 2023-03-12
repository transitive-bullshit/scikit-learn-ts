[sklearn](../readme.md) / [Exports](../modules.md) / SelectFdr

# Class: SelectFdr

Filter: Select the p-values for an estimated false discovery rate.

This uses the Benjamini-Hochberg procedure. `alpha` is an upper bound on the expected false discovery rate.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFdr.html

## Table of contents

### Constructors

- [constructor](SelectFdr.md#constructor)

### Properties

- [\_isDisposed](SelectFdr.md#_isdisposed)
- [\_isInitialized](SelectFdr.md#_isinitialized)
- [\_py](SelectFdr.md#_py)
- [id](SelectFdr.md#id)
- [opts](SelectFdr.md#opts)

### Accessors

- [feature\_names\_in\_](SelectFdr.md#feature_names_in_)
- [n\_features\_in\_](SelectFdr.md#n_features_in_)
- [pvalues\_](SelectFdr.md#pvalues_)
- [py](SelectFdr.md#py)
- [scores\_](SelectFdr.md#scores_)

### Methods

- [dispose](SelectFdr.md#dispose)
- [fit](SelectFdr.md#fit)
- [fit\_transform](SelectFdr.md#fit_transform)
- [get\_feature\_names\_out](SelectFdr.md#get_feature_names_out)
- [get\_support](SelectFdr.md#get_support)
- [init](SelectFdr.md#init)
- [inverse\_transform](SelectFdr.md#inverse_transform)
- [set\_output](SelectFdr.md#set_output)
- [transform](SelectFdr.md#transform)

## Constructors

### constructor

• **new SelectFdr**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectFdrOptions`](../interfaces/SelectFdrOptions.md) |

#### Defined in

[generated/feature_selection/SelectFdr.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFdr.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFdr.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectFdr.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectFdr.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectFdr.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L383)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L358)

___

### pvalues\_

• `get` **pvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

p-values of feature scores.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L335)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectFdr.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectFdr.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L34)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scores of features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L312)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L82)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrFitOptions`](../interfaces/SelectFdrFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L99)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrFitTransformOptions`](../interfaces/SelectFdrFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L131)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrGetFeatureNamesOutOptions`](../interfaces/SelectFdrGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L163)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrGetSupportOptions`](../interfaces/SelectFdrGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L196)

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

[generated/feature_selection/SelectFdr.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrInverseTransformOptions`](../interfaces/SelectFdrInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L224)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrSetOutputOptions`](../interfaces/SelectFdrSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L256)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFdrTransformOptions`](../interfaces/SelectFdrTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFdr.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L284)
