[sklearn](../readme.md) / [Exports](../modules.md) / SparseRandomProjection

# Class: SparseRandomProjection

Reduce dimensionality through sparse random projection.

Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

If we note `s \= 1 / density` the components of the random matrix are drawn from:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html

## Table of contents

### Constructors

- [constructor](SparseRandomProjection.md#constructor)

### Properties

- [\_isDisposed](SparseRandomProjection.md#_isdisposed)
- [\_isInitialized](SparseRandomProjection.md#_isinitialized)
- [\_py](SparseRandomProjection.md#_py)
- [id](SparseRandomProjection.md#id)
- [opts](SparseRandomProjection.md#opts)

### Accessors

- [components\_](SparseRandomProjection.md#components_)
- [density\_](SparseRandomProjection.md#density_)
- [feature\_names\_in\_](SparseRandomProjection.md#feature_names_in_)
- [inverse\_components\_](SparseRandomProjection.md#inverse_components_)
- [n\_components\_](SparseRandomProjection.md#n_components_)
- [n\_features\_in\_](SparseRandomProjection.md#n_features_in_)
- [py](SparseRandomProjection.md#py)

### Methods

- [dispose](SparseRandomProjection.md#dispose)
- [fit](SparseRandomProjection.md#fit)
- [fit\_transform](SparseRandomProjection.md#fit_transform)
- [get\_feature\_names\_out](SparseRandomProjection.md#get_feature_names_out)
- [init](SparseRandomProjection.md#init)
- [inverse\_transform](SparseRandomProjection.md#inverse_transform)
- [set\_output](SparseRandomProjection.md#set_output)
- [transform](SparseRandomProjection.md#transform)

## Constructors

### constructor

• **new SparseRandomProjection**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SparseRandomProjectionOptions`](../interfaces/SparseRandomProjectionOptions.md) |

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<`any`[]\>

Random matrix used for the projection. Sparse matrix will be of CSR format.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L352)

___

### density\_

• `get` **density_**(): `Promise`<`any`\>

Concrete density computed from when density = “auto”.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L406)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L460)

___

### inverse\_components\_

• `get` **inverse_components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L379)

___

### n\_components\_

• `get` **n_components_**(): `Promise`<`number`\>

Concrete number of components computed when n\_components=”auto”.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L325)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L433)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Generate a sparse random projection matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionFitOptions`](../interfaces/SparseRandomProjectionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L110)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionFitTransformOptions`](../interfaces/SparseRandomProjectionFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionGetFeatureNamesOutOptions`](../interfaces/SparseRandomProjectionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L183)

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

[generated/random_projection/SparseRandomProjection.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionInverseTransformOptions`](../interfaces/SparseRandomProjectionInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L222)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionSetOutputOptions`](../interfaces/SparseRandomProjectionSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L259)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Project the data by using matrix product with the random matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionTransformOptions`](../interfaces/SparseRandomProjectionTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/random_projection/SparseRandomProjection.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L291)
