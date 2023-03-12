[sklearn](../readme.md) / [Exports](../modules.md) / Hyperparameter

# Class: Hyperparameter

A kernel hyperparameter’s specification in form of a namedtuple.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html

## Table of contents

### Constructors

- [constructor](Hyperparameter.md#constructor)

### Properties

- [\_isDisposed](Hyperparameter.md#_isdisposed)
- [\_isInitialized](Hyperparameter.md#_isinitialized)
- [\_py](Hyperparameter.md#_py)
- [id](Hyperparameter.md#id)
- [opts](Hyperparameter.md#opts)

### Accessors

- [py](Hyperparameter.md#py)

### Methods

- [\_\_call\_\_](Hyperparameter.md#__call__)
- [count](Hyperparameter.md#count)
- [dispose](Hyperparameter.md#dispose)
- [index](Hyperparameter.md#index)
- [init](Hyperparameter.md#init)

## Constructors

### constructor

• **new Hyperparameter**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HyperparameterOptions`](../interfaces/HyperparameterOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L30)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<`any`\>

Call self as a function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HyperparameterCallOptions`](../interfaces/HyperparameterCallOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L100)

___

### count

▸ **count**(`opts`): `Promise`<`any`\>

Return number of occurrences of value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HyperparameterCountOptions`](../interfaces/HyperparameterCountOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L126)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L83)

___

### index

▸ **index**(`opts`): `Promise`<`any`\>

Return first index of value.

Raises ValueError if the value is not present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HyperparameterIndexOptions`](../interfaces/HyperparameterIndexOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Hyperparameter.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L154)

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

[generated/gaussian_process/kernels/Hyperparameter.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L39)
