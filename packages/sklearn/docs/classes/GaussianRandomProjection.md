[sklearn](../readme.md) / [Exports](../modules.md) / GaussianRandomProjection

# Class: GaussianRandomProjection

Reduce dimensionality through Gaussian random projection.

The components of the random matrix are drawn from N(0, 1 / n\_components).

Read more in the [User Guide](../random_projection.html#gaussian-random-matrix).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html

## Table of contents

### Constructors

- [constructor](GaussianRandomProjection.md#constructor)

### Properties

- [\_isDisposed](GaussianRandomProjection.md#_isdisposed)
- [\_isInitialized](GaussianRandomProjection.md#_isinitialized)
- [\_py](GaussianRandomProjection.md#_py)
- [id](GaussianRandomProjection.md#id)
- [opts](GaussianRandomProjection.md#opts)

### Accessors

- [components\_](GaussianRandomProjection.md#components_)
- [feature\_names\_in\_](GaussianRandomProjection.md#feature_names_in_)
- [inverse\_components\_](GaussianRandomProjection.md#inverse_components_)
- [n\_components\_](GaussianRandomProjection.md#n_components_)
- [n\_features\_in\_](GaussianRandomProjection.md#n_features_in_)
- [py](GaussianRandomProjection.md#py)

### Methods

- [dispose](GaussianRandomProjection.md#dispose)
- [fit](GaussianRandomProjection.md#fit)
- [fit\_transform](GaussianRandomProjection.md#fit_transform)
- [get\_feature\_names\_out](GaussianRandomProjection.md#get_feature_names_out)
- [init](GaussianRandomProjection.md#init)
- [inverse\_transform](GaussianRandomProjection.md#inverse_transform)
- [set\_output](GaussianRandomProjection.md#set_output)
- [transform](GaussianRandomProjection.md#transform)

## Constructors

### constructor

• **new GaussianRandomProjection**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianRandomProjectionOptions`](../interfaces/GaussianRandomProjectionOptions.md) |

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Random matrix used for the projection.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L350)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L431)

___

### inverse\_components\_

• `get` **inverse_components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L377)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

Concrete number of components computed when n\_components=”auto”.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L323)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L404)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Generate a sparse random projection matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionFitOptions`](../interfaces/GaussianRandomProjectionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionFitTransformOptions`](../interfaces/GaussianRandomProjectionFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L138)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionGetFeatureNamesOutOptions`](../interfaces/GaussianRandomProjectionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L179)

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

[generated/random_projection/GaussianRandomProjection.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionInverseTransformOptions`](../interfaces/GaussianRandomProjectionInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L218)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionSetOutputOptions`](../interfaces/GaussianRandomProjectionSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L255)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Project the data by using matrix product with the random matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianRandomProjectionTransformOptions`](../interfaces/GaussianRandomProjectionTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L289)
