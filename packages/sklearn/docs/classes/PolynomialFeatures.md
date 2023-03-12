[sklearn](../readme.md) / [Exports](../modules.md) / PolynomialFeatures

# Class: PolynomialFeatures

Generate polynomial and interaction features.

Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

Read more in the [User Guide](../preprocessing.html#polynomial-features).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html

## Table of contents

### Constructors

- [constructor](PolynomialFeatures.md#constructor)

### Properties

- [\_isDisposed](PolynomialFeatures.md#_isdisposed)
- [\_isInitialized](PolynomialFeatures.md#_isinitialized)
- [\_py](PolynomialFeatures.md#_py)
- [id](PolynomialFeatures.md#id)
- [opts](PolynomialFeatures.md#opts)

### Accessors

- [feature\_names\_in\_](PolynomialFeatures.md#feature_names_in_)
- [n\_features\_in\_](PolynomialFeatures.md#n_features_in_)
- [n\_output\_features\_](PolynomialFeatures.md#n_output_features_)
- [py](PolynomialFeatures.md#py)

### Methods

- [dispose](PolynomialFeatures.md#dispose)
- [fit](PolynomialFeatures.md#fit)
- [fit\_transform](PolynomialFeatures.md#fit_transform)
- [get\_feature\_names\_out](PolynomialFeatures.md#get_feature_names_out)
- [init](PolynomialFeatures.md#init)
- [set\_output](PolynomialFeatures.md#set_output)
- [transform](PolynomialFeatures.md#transform)

## Constructors

### constructor

• **new PolynomialFeatures**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PolynomialFeaturesOptions`](../interfaces/PolynomialFeaturesOptions.md) |

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L304)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L277)

___

### n\_output\_features\_

• `get` **n_output_features_**(): `Promise`<`number`\>

The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L331)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute number of output features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesFitOptions`](../interfaces/PolynomialFeaturesFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesFitTransformOptions`](../interfaces/PolynomialFeaturesFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesGetFeatureNamesOutOptions`](../interfaces/PolynomialFeaturesGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L178)

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

[generated/preprocessing/PolynomialFeatures.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesSetOutputOptions`](../interfaces/PolynomialFeaturesSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L215)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform data to polynomial features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesTransformOptions`](../interfaces/PolynomialFeaturesTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L245)
