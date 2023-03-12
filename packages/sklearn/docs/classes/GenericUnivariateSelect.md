[sklearn](../readme.md) / [Exports](../modules.md) / GenericUnivariateSelect

# Class: GenericUnivariateSelect

Univariate feature selector with configurable strategy.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.GenericUnivariateSelect.html

## Table of contents

### Constructors

- [constructor](GenericUnivariateSelect.md#constructor)

### Properties

- [\_isDisposed](GenericUnivariateSelect.md#_isdisposed)
- [\_isInitialized](GenericUnivariateSelect.md#_isinitialized)
- [\_py](GenericUnivariateSelect.md#_py)
- [id](GenericUnivariateSelect.md#id)
- [opts](GenericUnivariateSelect.md#opts)

### Accessors

- [feature\_names\_in\_](GenericUnivariateSelect.md#feature_names_in_)
- [n\_features\_in\_](GenericUnivariateSelect.md#n_features_in_)
- [pvalues\_](GenericUnivariateSelect.md#pvalues_)
- [py](GenericUnivariateSelect.md#py)
- [scores\_](GenericUnivariateSelect.md#scores_)

### Methods

- [dispose](GenericUnivariateSelect.md#dispose)
- [fit](GenericUnivariateSelect.md#fit)
- [fit\_transform](GenericUnivariateSelect.md#fit_transform)
- [get\_feature\_names\_out](GenericUnivariateSelect.md#get_feature_names_out)
- [get\_support](GenericUnivariateSelect.md#get_support)
- [init](GenericUnivariateSelect.md#init)
- [inverse\_transform](GenericUnivariateSelect.md#inverse_transform)
- [set\_output](GenericUnivariateSelect.md#set_output)
- [transform](GenericUnivariateSelect.md#transform)

## Constructors

### constructor

• **new GenericUnivariateSelect**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GenericUnivariateSelectOptions`](../interfaces/GenericUnivariateSelectOptions.md) |

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L430)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L403)

___

### pvalues\_

• `get` **pvalues_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

p-values of feature scores, `undefined` if `score\_func` returned scores only.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L376)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L32)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Scores of features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L349)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectFitOptions`](../interfaces/GenericUnivariateSelectFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectFitTransformOptions`](../interfaces/GenericUnivariateSelectFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L138)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Mask feature names according to selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectGetFeatureNamesOutOptions`](../interfaces/GenericUnivariateSelectGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L177)

___

### get\_support

▸ **get_support**(`opts`): `Promise`<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectGetSupportOptions`](../interfaces/GenericUnivariateSelectGetSupportOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L212)

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

[generated/feature_selection/GenericUnivariateSelect.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Reverse the transformation operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectInverseTransformOptions`](../interfaces/GenericUnivariateSelectInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L246)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectSetOutputOptions`](../interfaces/GenericUnivariateSelectSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L283)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Reduce X to the selected features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GenericUnivariateSelectTransformOptions`](../interfaces/GenericUnivariateSelectTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L317)
