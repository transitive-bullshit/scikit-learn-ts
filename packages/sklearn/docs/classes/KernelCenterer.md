[sklearn](../readme.md) / [Exports](../modules.md) / KernelCenterer

# Class: KernelCenterer

Center an arbitrary kernel matrix \\(K\\).

Let define a kernel \\(K\\) such that:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KernelCenterer.html

## Table of contents

### Constructors

- [constructor](KernelCenterer.md#constructor)

### Properties

- [\_isDisposed](KernelCenterer.md#_isdisposed)
- [\_isInitialized](KernelCenterer.md#_isinitialized)
- [\_py](KernelCenterer.md#_py)
- [id](KernelCenterer.md#id)
- [opts](KernelCenterer.md#opts)

### Accessors

- [py](KernelCenterer.md#py)

### Methods

- [dispose](KernelCenterer.md#dispose)
- [fit](KernelCenterer.md#fit)
- [fit\_transform](KernelCenterer.md#fit_transform)
- [get\_feature\_names\_out](KernelCenterer.md#get_feature_names_out)
- [init](KernelCenterer.md#init)
- [set\_output](KernelCenterer.md#set_output)
- [transform](KernelCenterer.md#transform)

## Constructors

### constructor

• **new KernelCenterer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelCentererOptions`](../interfaces/KernelCentererOptions.md) |

#### Defined in

[generated/preprocessing/KernelCenterer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit KernelCenterer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCentererFitOptions`](../interfaces/KernelCentererFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCentererFitTransformOptions`](../interfaces/KernelCentererFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCentererGetFeatureNamesOutOptions`](../interfaces/KernelCentererGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L168)

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

[generated/preprocessing/KernelCenterer.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L41)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCentererSetOutputOptions`](../interfaces/KernelCentererSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L203)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Center kernel matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCentererTransformOptions`](../interfaces/KernelCentererTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L231)
