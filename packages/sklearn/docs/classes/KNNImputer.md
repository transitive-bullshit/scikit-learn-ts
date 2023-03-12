[sklearn](../readme.md) / [Exports](../modules.md) / KNNImputer

# Class: KNNImputer

Imputation for completing missing values using k-Nearest Neighbors.

Each sample’s missing values are imputed using the mean value from `n\_neighbors` nearest neighbors found in the training set. Two samples are close if the features that neither is missing are close.

Read more in the [User Guide](../impute.html#knnimpute).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html

## Table of contents

### Constructors

- [constructor](KNNImputer.md#constructor)

### Properties

- [\_isDisposed](KNNImputer.md#_isdisposed)
- [\_isInitialized](KNNImputer.md#_isinitialized)
- [\_py](KNNImputer.md#_py)
- [id](KNNImputer.md#id)
- [opts](KNNImputer.md#opts)

### Accessors

- [feature\_names\_in\_](KNNImputer.md#feature_names_in_)
- [indicator\_](KNNImputer.md#indicator_)
- [n\_features\_in\_](KNNImputer.md#n_features_in_)
- [py](KNNImputer.md#py)

### Methods

- [dispose](KNNImputer.md#dispose)
- [fit](KNNImputer.md#fit)
- [fit\_transform](KNNImputer.md#fit_transform)
- [get\_feature\_names\_out](KNNImputer.md#get_feature_names_out)
- [init](KNNImputer.md#init)
- [set\_output](KNNImputer.md#set_output)
- [transform](KNNImputer.md#transform)

## Constructors

### constructor

• **new KNNImputer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNNImputerOptions`](../interfaces/KNNImputerOptions.md) |

#### Defined in

[generated/impute/KNNImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/KNNImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/KNNImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/impute/KNNImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/impute/KNNImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/impute/KNNImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/KNNImputer.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L307)

___

### indicator\_

• `get` **indicator_**(): `Promise`<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if add\_indicator is `false`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L259)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/KNNImputer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L282)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/impute/KNNImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/impute/KNNImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/impute/KNNImputer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the imputer on X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerFitOptions`](../interfaces/KNNImputerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerFitTransformOptions`](../interfaces/KNNImputerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/impute/KNNImputer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L136)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerGetFeatureNamesOutOptions`](../interfaces/KNNImputerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L168)

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

[generated/impute/KNNImputer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerSetOutputOptions`](../interfaces/KNNImputerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L203)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Impute all missing values in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerTransformOptions`](../interfaces/KNNImputerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/impute/KNNImputer.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L231)
