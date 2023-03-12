[sklearn](../readme.md) / [Exports](../modules.md) / OneHotEncoder

# Class: OneHotEncoder

Encode categorical features as a one-hot numeric array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse\_output` parameter)

By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html

## Table of contents

### Constructors

- [constructor](OneHotEncoder.md#constructor)

### Properties

- [\_isDisposed](OneHotEncoder.md#_isdisposed)
- [\_isInitialized](OneHotEncoder.md#_isinitialized)
- [\_py](OneHotEncoder.md#_py)
- [id](OneHotEncoder.md#id)
- [opts](OneHotEncoder.md#opts)

### Accessors

- [categories\_](OneHotEncoder.md#categories_)
- [drop\_idx\_](OneHotEncoder.md#drop_idx_)
- [feature\_names\_in\_](OneHotEncoder.md#feature_names_in_)
- [n\_features\_in\_](OneHotEncoder.md#n_features_in_)
- [py](OneHotEncoder.md#py)

### Methods

- [dispose](OneHotEncoder.md#dispose)
- [fit](OneHotEncoder.md#fit)
- [fit\_transform](OneHotEncoder.md#fit_transform)
- [get\_feature\_names\_out](OneHotEncoder.md#get_feature_names_out)
- [init](OneHotEncoder.md#init)
- [inverse\_transform](OneHotEncoder.md#inverse_transform)
- [set\_output](OneHotEncoder.md#set_output)
- [transform](OneHotEncoder.md#transform)

## Constructors

### constructor

• **new OneHotEncoder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneHotEncoderOptions`](../interfaces/OneHotEncoderOptions.md) |

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L25)

## Accessors

### categories\_

• `get` **categories_**(): `Promise`<`any`\>

The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of `transform`). This includes the category specified in `drop` (if any).

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L309)

___

### drop\_idx\_

• `get` **drop_idx_**(): `Promise`<`any`[]\>

`drop\_idx\_\[i\]` is the index in `categories\_\[i\]` of the category to be dropped for each feature.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L334)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L384)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L359)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L40)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit OneHotEncoder to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderFitOptions`](../interfaces/OneHotEncoderFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L116)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderFitTransformOptions`](../interfaces/OneHotEncoderFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L146)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderGetFeatureNamesOutOptions`](../interfaces/OneHotEncoderGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L178)

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

[generated/preprocessing/OneHotEncoder.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L49)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Convert the data back to the original representation.

When unknown categories are encountered (all zeros in the one-hot encoding), `undefined` is used to represent this category. If the feature with the unknown category has a dropped category, the dropped category will be its inverse.

For a given input feature, if there is an infrequent category, ‘infrequent\_sklearn’ will be used to represent the infrequent category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderInverseTransformOptions`](../interfaces/OneHotEncoderInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L215)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderSetOutputOptions`](../interfaces/OneHotEncoderSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L249)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X using one-hot encoding.

If there are infrequent categories for a feature, the infrequent categories will be grouped into a single category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderTransformOptions`](../interfaces/OneHotEncoderTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L279)
