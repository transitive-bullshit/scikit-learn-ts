[sklearn](../readme.md) / [Exports](../modules.md) / SelectFpr

# Class: SelectFpr

Filter: Select the pvalues below alpha based on a FPR test.

FPR test stands for `false` Positive Rate test. It controls the total amount of false detections.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFpr.html

## Table of contents

### Constructors

- [constructor](SelectFpr.md#constructor)

### Properties

- [\_isDisposed](SelectFpr.md#_isdisposed)
- [\_isInitialized](SelectFpr.md#_isinitialized)
- [\_py](SelectFpr.md#_py)
- [id](SelectFpr.md#id)
- [opts](SelectFpr.md#opts)

### Accessors

- [feature\_names\_in\_](SelectFpr.md#feature_names_in_)
- [n\_features\_in\_](SelectFpr.md#n_features_in_)
- [pvalues\_](SelectFpr.md#pvalues_)
- [py](SelectFpr.md#py)
- [scores\_](SelectFpr.md#scores_)

### Methods

- [dispose](SelectFpr.md#dispose)
- [fit](SelectFpr.md#fit)
- [fit\_transform](SelectFpr.md#fit_transform)
- [get\_feature\_names\_out](SelectFpr.md#get_feature_names_out)
- [get\_support](SelectFpr.md#get_support)
- [init](SelectFpr.md#init)
- [inverse\_transform](SelectFpr.md#inverse_transform)
- [set\_output](SelectFpr.md#set_output)
- [transform](SelectFpr.md#transform)

## Constructors

### constructor

• **new SelectFpr**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectFprOptions`](../interfaces/SelectFprOptions.md) |

#### Defined in

[generated/feature_selection/SelectFpr.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFpr.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/SelectFpr.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/SelectFpr.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/SelectFpr.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/SelectFpr.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L383)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L358)

___

### pvalues\_

• `get` **pvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

p-values of feature scores.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L335)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/SelectFpr.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/SelectFpr.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L34)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scores of features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L312)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L82)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprFitOptions`](../interfaces/SelectFprFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L99)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprFitTransformOptions`](../interfaces/SelectFprFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L131)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprGetFeatureNamesOutOptions`](../interfaces/SelectFprGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L163)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprGetSupportOptions`](../interfaces/SelectFprGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L196)

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

[generated/feature_selection/SelectFpr.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprInverseTransformOptions`](../interfaces/SelectFprInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L224)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprSetOutputOptions`](../interfaces/SelectFprSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L256)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFprTransformOptions`](../interfaces/SelectFprTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/SelectFpr.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L284)
