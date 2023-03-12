[sklearn](../readme.md) / [Exports](../modules.md) / PLSSVD

# Class: PLSSVD

Partial Least Square SVD.

This transformer simply performs a SVD on the cross-covariance matrix `X'Y`. It is able to project both the training data `X` and the targets `Y`. The training data `X` is projected on the left singular vectors, while the targets are projected on the right singular vectors.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSSVD.html

## Table of contents

### Constructors

- [constructor](PLSSVD.md#constructor)

### Properties

- [\_isDisposed](PLSSVD.md#_isdisposed)
- [\_isInitialized](PLSSVD.md#_isinitialized)
- [\_py](PLSSVD.md#_py)
- [id](PLSSVD.md#id)
- [opts](PLSSVD.md#opts)

### Accessors

- [feature\_names\_in\_](PLSSVD.md#feature_names_in_)
- [n\_features\_in\_](PLSSVD.md#n_features_in_)
- [py](PLSSVD.md#py)
- [x\_weights\_](PLSSVD.md#x_weights_)
- [y\_weights\_](PLSSVD.md#y_weights_)

### Methods

- [dispose](PLSSVD.md#dispose)
- [fit](PLSSVD.md#fit)
- [fit\_transform](PLSSVD.md#fit_transform)
- [get\_feature\_names\_out](PLSSVD.md#get_feature_names_out)
- [init](PLSSVD.md#init)
- [set\_output](PLSSVD.md#set_output)
- [transform](PLSSVD.md#transform)

## Constructors

### constructor

• **new PLSSVD**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSSVDOptions`](../interfaces/PLSSVDOptions.md) |

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L322)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L299)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L34)

___

### x\_weights\_

• `get` **x_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The left singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L253)

___

### y\_weights\_

• `get` **y_weights_**(): `Promise`<`any`\>

The right singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L276)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L84)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model to data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDFitOptions`](../interfaces/PLSSVDFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L101)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Learn and apply the dimensionality reduction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDFitTransformOptions`](../interfaces/PLSSVDFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L131)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDGetFeatureNamesOutOptions`](../interfaces/PLSSVDGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L163)

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

[generated/cross_decomposition/PLSSVD.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDSetOutputOptions`](../interfaces/PLSSVDSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L195)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Apply the dimensionality reduction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDTransformOptions`](../interfaces/PLSSVDTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L223)
