[sklearn](../readme.md) / [Exports](../modules.md) / QuantileTransformer

# Class: QuantileTransformer

Transform features using quantiles information.

This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

Read more in the [User Guide](../preprocessing.html#preprocessing-transformer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html

## Table of contents

### Constructors

- [constructor](QuantileTransformer.md#constructor)

### Properties

- [\_isDisposed](QuantileTransformer.md#_isdisposed)
- [\_isInitialized](QuantileTransformer.md#_isinitialized)
- [\_py](QuantileTransformer.md#_py)
- [id](QuantileTransformer.md#id)
- [opts](QuantileTransformer.md#opts)

### Accessors

- [feature\_names\_in\_](QuantileTransformer.md#feature_names_in_)
- [n\_features\_in\_](QuantileTransformer.md#n_features_in_)
- [n\_quantiles\_](QuantileTransformer.md#n_quantiles_)
- [py](QuantileTransformer.md#py)
- [quantiles\_](QuantileTransformer.md#quantiles_)
- [references\_](QuantileTransformer.md#references_)

### Methods

- [dispose](QuantileTransformer.md#dispose)
- [fit](QuantileTransformer.md#fit)
- [fit\_transform](QuantileTransformer.md#fit_transform)
- [get\_feature\_names\_out](QuantileTransformer.md#get_feature_names_out)
- [init](QuantileTransformer.md#init)
- [inverse\_transform](QuantileTransformer.md#inverse_transform)
- [set\_output](QuantileTransformer.md#set_output)
- [transform](QuantileTransformer.md#transform)

## Constructors

### constructor

• **new QuantileTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`QuantileTransformerOptions`](../interfaces/QuantileTransformerOptions.md) |

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L21)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L426)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L399)

___

### n\_quantiles\_

• `get` **n_quantiles_**(): `Promise`<`number`\>

The actual number of quantiles used to discretize the cumulative distribution function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L318)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L36)

___

### quantiles\_

• `get` **quantiles_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The values corresponding the quantiles of reference.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L345)

___

### references\_

• `get` **references_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Quantiles of references.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L372)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the quantiles used for transforming.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerFitOptions`](../interfaces/QuantileTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L112)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerFitTransformOptions`](../interfaces/QuantileTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L144)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerGetFeatureNamesOutOptions`](../interfaces/QuantileTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L182)

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

[generated/preprocessing/QuantileTransformer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`\>

Back-projection to the original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerInverseTransformOptions`](../interfaces/QuantileTransformerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L217)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerSetOutputOptions`](../interfaces/QuantileTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L254)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Feature-wise transformation of the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerTransformOptions`](../interfaces/QuantileTransformerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L286)
