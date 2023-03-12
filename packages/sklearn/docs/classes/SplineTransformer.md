[sklearn](../readme.md) / [Exports](../modules.md) / SplineTransformer

# Class: SplineTransformer

Generate univariate B-spline bases for features.

Generate a new feature matrix consisting of `n\_splines=n\_knots + degree \- 1` (`n\_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=`degree` for each feature.

Read more in the [User Guide](../preprocessing.html#spline-transformer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html

## Table of contents

### Constructors

- [constructor](SplineTransformer.md#constructor)

### Properties

- [\_isDisposed](SplineTransformer.md#_isdisposed)
- [\_isInitialized](SplineTransformer.md#_isinitialized)
- [\_py](SplineTransformer.md#_py)
- [id](SplineTransformer.md#id)
- [opts](SplineTransformer.md#opts)

### Accessors

- [bsplines\_](SplineTransformer.md#bsplines_)
- [feature\_names\_in\_](SplineTransformer.md#feature_names_in_)
- [n\_features\_in\_](SplineTransformer.md#n_features_in_)
- [n\_features\_out\_](SplineTransformer.md#n_features_out_)
- [py](SplineTransformer.md#py)

### Methods

- [dispose](SplineTransformer.md#dispose)
- [fit](SplineTransformer.md#fit)
- [fit\_transform](SplineTransformer.md#fit_transform)
- [get\_feature\_names\_out](SplineTransformer.md#get_feature_names_out)
- [init](SplineTransformer.md#init)
- [set\_output](SplineTransformer.md#set_output)
- [transform](SplineTransformer.md#transform)

## Constructors

### constructor

• **new SplineTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SplineTransformerOptions`](../interfaces/SplineTransformerOptions.md) |

#### Defined in

[generated/preprocessing/SplineTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L19)

## Accessors

### bsplines\_

• `get` **bsplines_**(): `Promise`<`any`[]\>

List of BSplines objects, one for each feature.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L279)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L333)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

The total number of input features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L306)

___

### n\_features\_out\_

• `get` **n_features_out_**(): `Promise`<`number`\>

The total number of output features, which is computed as `n\_features \* n\_splines`, where `n\_splines` is the number of bases elements of the B-splines, `n\_knots + degree \- 1` for non-periodic splines and `n\_knots \- 1` for periodic ones. If `include\_bias=False`, then it is only `n\_features \* (n\_splines \- 1)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L360)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute knot positions of splines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerFitOptions`](../interfaces/SplineTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerFitTransformOptions`](../interfaces/SplineTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L144)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerGetFeatureNamesOutOptions`](../interfaces/SplineTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L182)

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

[generated/preprocessing/SplineTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerSetOutputOptions`](../interfaces/SplineTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L219)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform each feature data to B-splines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerTransformOptions`](../interfaces/SplineTransformerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L249)
