[sklearn](../readme.md) / [Exports](../modules.md) / SimpleImputer

# Class: SimpleImputer

Univariate imputer for completing missing values with simple strategies.

Replace missing values using a descriptive statistic (e.g. mean, median, or most frequent) along each column, or using a constant value.

Read more in the [User Guide](../impute.html#impute).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html

## Table of contents

### Constructors

- [constructor](SimpleImputer.md#constructor)

### Properties

- [\_isDisposed](SimpleImputer.md#_isdisposed)
- [\_isInitialized](SimpleImputer.md#_isinitialized)
- [\_py](SimpleImputer.md#_py)
- [id](SimpleImputer.md#id)
- [opts](SimpleImputer.md#opts)

### Accessors

- [feature\_names\_in\_](SimpleImputer.md#feature_names_in_)
- [indicator\_](SimpleImputer.md#indicator_)
- [n\_features\_in\_](SimpleImputer.md#n_features_in_)
- [py](SimpleImputer.md#py)
- [statistics\_](SimpleImputer.md#statistics_)

### Methods

- [dispose](SimpleImputer.md#dispose)
- [fit](SimpleImputer.md#fit)
- [fit\_transform](SimpleImputer.md#fit_transform)
- [get\_feature\_names\_out](SimpleImputer.md#get_feature_names_out)
- [init](SimpleImputer.md#init)
- [inverse\_transform](SimpleImputer.md#inverse_transform)
- [set\_output](SimpleImputer.md#set_output)
- [transform](SimpleImputer.md#transform)

## Constructors

### constructor

• **new SimpleImputer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SimpleImputerOptions`](../interfaces/SimpleImputerOptions.md) |

#### Defined in

[generated/impute/SimpleImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/SimpleImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/SimpleImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/impute/SimpleImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/impute/SimpleImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/impute/SimpleImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/SimpleImputer.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L372)

___

### indicator\_

• `get` **indicator_**(): `Promise`<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L322)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/SimpleImputer.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L347)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/impute/SimpleImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/impute/SimpleImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L34)

___

### statistics\_

• `get` **statistics_**(): `Promise`<`any`[]\>

The imputation fill value for each feature. Computing statistics can result in `np.nan` values. During [`transform`](#sklearn.impute.SimpleImputer.transform "sklearn.impute.SimpleImputer.transform"), features corresponding to `np.nan` statistics will be discarded.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L297)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/impute/SimpleImputer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the imputer on `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerFitOptions`](../interfaces/SimpleImputerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerFitTransformOptions`](../interfaces/SimpleImputerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L136)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerGetFeatureNamesOutOptions`](../interfaces/SimpleImputerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L168)

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

[generated/impute/SimpleImputer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Convert the data back to the original representation.

Inverts the `transform` operation performed on an array. This operation can only be performed after [`SimpleImputer`](#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer") is instantiated with `add\_indicator=True`.

Note that `inverse\_transform` can only invert the transform in features that have binary indicators for missing values. If a feature has no missing values at `fit` time, the feature won’t have a binary indicator, and the imputation done at `transform` time won’t be inverted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerInverseTransformOptions`](../interfaces/SimpleImputerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L205)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerSetOutputOptions`](../interfaces/SimpleImputerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L239)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Impute all missing values in `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SimpleImputerTransformOptions`](../interfaces/SimpleImputerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/SimpleImputer.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L267)
