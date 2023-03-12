[sklearn](../readme.md) / [Exports](../modules.md) / SparseCoder

# Class: SparseCoder

Sparse coding.

Finds a sparse representation of data against a fixed, precomputed dictionary.

Each row of the result is the solution to a sparse coding problem. The goal is to find a sparse array `code` such that:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparseCoder.html

## Table of contents

### Constructors

- [constructor](SparseCoder.md#constructor)

### Properties

- [\_isDisposed](SparseCoder.md#_isdisposed)
- [\_isInitialized](SparseCoder.md#_isinitialized)
- [\_py](SparseCoder.md#_py)
- [id](SparseCoder.md#id)
- [opts](SparseCoder.md#opts)

### Accessors

- [feature\_names\_in\_](SparseCoder.md#feature_names_in_)
- [py](SparseCoder.md#py)

### Methods

- [dispose](SparseCoder.md#dispose)
- [fit](SparseCoder.md#fit)
- [fit\_transform](SparseCoder.md#fit_transform)
- [get\_feature\_names\_out](SparseCoder.md#get_feature_names_out)
- [init](SparseCoder.md#init)
- [set\_output](SparseCoder.md#set_output)
- [transform](SparseCoder.md#transform)

## Constructors

### constructor

• **new SparseCoder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SparseCoderOptions`](../interfaces/SparseCoderOptions.md) |

#### Defined in

[generated/decomposition/SparseCoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/SparseCoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/SparseCoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/SparseCoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/SparseCoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/SparseCoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/SparseCoder.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L271)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/SparseCoder.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/SparseCoder.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/SparseCoder.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Do nothing and return the estimator unchanged.

This method is just there to implement the usual API and hence work in pipelines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseCoderFitOptions`](../interfaces/SparseCoderFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparseCoder.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L114)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseCoderFitTransformOptions`](../interfaces/SparseCoderFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/SparseCoder.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L144)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseCoderGetFeatureNamesOutOptions`](../interfaces/SparseCoderGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparseCoder.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L178)

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

[generated/decomposition/SparseCoder.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseCoderSetOutputOptions`](../interfaces/SparseCoderSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/SparseCoder.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L213)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseCoderTransformOptions`](../interfaces/SparseCoderTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/SparseCoder.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L243)
