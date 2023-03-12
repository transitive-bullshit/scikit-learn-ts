[sklearn](../readme.md) / [Exports](../modules.md) / ParameterSampler

# Class: ParameterSampler

Generator on parameters sampled from given distributions.

Non-deterministic iterable over random candidate combinations for hyper- parameter search. If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](../grid_search.html#grid-search).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterSampler.html

## Table of contents

### Constructors

- [constructor](ParameterSampler.md#constructor)

### Properties

- [\_isDisposed](ParameterSampler.md#_isdisposed)
- [\_isInitialized](ParameterSampler.md#_isinitialized)
- [\_py](ParameterSampler.md#_py)
- [id](ParameterSampler.md#id)
- [opts](ParameterSampler.md#opts)

### Accessors

- [params](ParameterSampler.md#params)
- [py](ParameterSampler.md#py)

### Methods

- [dispose](ParameterSampler.md#dispose)
- [init](ParameterSampler.md#init)

## Constructors

### constructor

• **new ParameterSampler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ParameterSamplerOptions`](../interfaces/ParameterSamplerOptions.md) |

#### Defined in

[generated/model_selection/ParameterSampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/ParameterSampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/ParameterSampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/ParameterSampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/ParameterSampler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/ParameterSampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L19)

## Accessors

### params

• `get` **params**(): `Promise`<`any`\>

*Yields** dictionaries mapping each estimator parameter to as sampled value.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/ParameterSampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L104)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/ParameterSampler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/ParameterSampler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/ParameterSampler.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L87)

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

[generated/model_selection/ParameterSampler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L43)
