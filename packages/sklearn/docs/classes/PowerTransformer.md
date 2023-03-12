[sklearn](../readme.md) / [Exports](../modules.md) / PowerTransformer

# Class: PowerTransformer

Apply a power transform featurewise to make data more Gaussian-like.

Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

By default, zero-mean, unit-variance normalization is applied to the transformed data.

Read more in the [User Guide](../preprocessing.html#preprocessing-transformer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html

## Table of contents

### Constructors

- [constructor](PowerTransformer.md#constructor)

### Properties

- [\_isDisposed](PowerTransformer.md#_isdisposed)
- [\_isInitialized](PowerTransformer.md#_isinitialized)
- [\_py](PowerTransformer.md#_py)
- [id](PowerTransformer.md#id)
- [opts](PowerTransformer.md#opts)

### Accessors

- [feature\_names\_in\_](PowerTransformer.md#feature_names_in_)
- [lambdas\_](PowerTransformer.md#lambdas_)
- [n\_features\_in\_](PowerTransformer.md#n_features_in_)
- [py](PowerTransformer.md#py)

### Methods

- [dispose](PowerTransformer.md#dispose)
- [fit](PowerTransformer.md#fit)
- [fit\_transform](PowerTransformer.md#fit_transform)
- [get\_feature\_names\_out](PowerTransformer.md#get_feature_names_out)
- [init](PowerTransformer.md#init)
- [inverse\_transform](PowerTransformer.md#inverse_transform)
- [set\_output](PowerTransformer.md#set_output)
- [transform](PowerTransformer.md#transform)

## Constructors

### constructor

• **new PowerTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PowerTransformerOptions`](../interfaces/PowerTransformerOptions.md) |

#### Defined in

[generated/preprocessing/PowerTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L25)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L363)

___

### lambdas\_

• `get` **lambdas_**(): `Promise`<`any`[]\>

The parameters of the power transformation for the selected features.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L309)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L336)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L40)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Estimate the optimal parameter lambda for each feature.

The optimal lambda parameter for minimizing skewness is estimated on each feature independently using maximum likelihood.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerFitOptions`](../interfaces/PowerTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L112)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit `PowerTransformer` to `X`, then transform `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerFitTransformOptions`](../interfaces/PowerTransformerFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerGetFeatureNamesOutOptions`](../interfaces/PowerTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L176)

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

[generated/preprocessing/PowerTransformer.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L49)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply the inverse power transformation using the fitted lambdas.

The inverse of the Box-Cox transformation is given by:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerInverseTransformOptions`](../interfaces/PowerTransformerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L213)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerSetOutputOptions`](../interfaces/PowerTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L249)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply the power transform to each feature using the fitted lambdas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerTransformOptions`](../interfaces/PowerTransformerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L279)
