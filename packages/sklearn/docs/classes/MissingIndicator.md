[sklearn](../readme.md) / [Exports](../modules.md) / MissingIndicator

# Class: MissingIndicator

Binary indicators for missing values.

Note that this component typically should not be used in a vanilla `Pipeline` consisting of transformers and a classifier, but rather could be added using a `FeatureUnion` or `ColumnTransformer`.

Read more in the [User Guide](../impute.html#impute).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html

## Table of contents

### Constructors

- [constructor](MissingIndicator.md#constructor)

### Properties

- [\_isDisposed](MissingIndicator.md#_isdisposed)
- [\_isInitialized](MissingIndicator.md#_isinitialized)
- [\_py](MissingIndicator.md#_py)
- [id](MissingIndicator.md#id)
- [opts](MissingIndicator.md#opts)

### Accessors

- [feature\_names\_in\_](MissingIndicator.md#feature_names_in_)
- [features\_](MissingIndicator.md#features_)
- [n\_features\_in\_](MissingIndicator.md#n_features_in_)
- [py](MissingIndicator.md#py)

### Methods

- [dispose](MissingIndicator.md#dispose)
- [fit](MissingIndicator.md#fit)
- [fit\_transform](MissingIndicator.md#fit_transform)
- [get\_feature\_names\_out](MissingIndicator.md#get_feature_names_out)
- [init](MissingIndicator.md#init)
- [set\_output](MissingIndicator.md#set_output)
- [transform](MissingIndicator.md#transform)

## Constructors

### constructor

• **new MissingIndicator**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MissingIndicatorOptions`](../interfaces/MissingIndicatorOptions.md) |

#### Defined in

[generated/impute/MissingIndicator.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/MissingIndicator.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/MissingIndicator.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/impute/MissingIndicator.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/impute/MissingIndicator.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/impute/MissingIndicator.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/MissingIndicator.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L321)

___

### features\_

• `get` **features_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The features indices which will be returned when calling [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform"). They are computed during [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). If `features='all'`, `features\_` is equal to `range(n\_features)`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/MissingIndicator.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L267)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/MissingIndicator.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L294)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/impute/MissingIndicator.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/impute/MissingIndicator.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/impute/MissingIndicator.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the transformer on `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MissingIndicatorFitOptions`](../interfaces/MissingIndicatorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/MissingIndicator.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate missing values indicator for `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MissingIndicatorFitTransformOptions`](../interfaces/MissingIndicatorFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/MissingIndicator.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MissingIndicatorGetFeatureNamesOutOptions`](../interfaces/MissingIndicatorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/MissingIndicator.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L168)

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

[generated/impute/MissingIndicator.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MissingIndicatorSetOutputOptions`](../interfaces/MissingIndicatorSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/MissingIndicator.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L205)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate missing values indicator for `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MissingIndicatorTransformOptions`](../interfaces/MissingIndicatorTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/MissingIndicator.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/MissingIndicator.ts#L235)
