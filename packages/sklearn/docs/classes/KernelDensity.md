[sklearn](../readme.md) / [Exports](../modules.md) / KernelDensity

# Class: KernelDensity

Kernel Density Estimation.

Read more in the [User Guide](../density.html#kernel-density).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html

## Table of contents

### Constructors

- [constructor](KernelDensity.md#constructor)

### Properties

- [\_isDisposed](KernelDensity.md#_isdisposed)
- [\_isInitialized](KernelDensity.md#_isinitialized)
- [\_py](KernelDensity.md#_py)
- [id](KernelDensity.md#id)
- [opts](KernelDensity.md#opts)

### Accessors

- [bandwidth\_](KernelDensity.md#bandwidth_)
- [feature\_names\_in\_](KernelDensity.md#feature_names_in_)
- [n\_features\_in\_](KernelDensity.md#n_features_in_)
- [py](KernelDensity.md#py)
- [tree\_](KernelDensity.md#tree_)

### Methods

- [dispose](KernelDensity.md#dispose)
- [fit](KernelDensity.md#fit)
- [init](KernelDensity.md#init)
- [sample](KernelDensity.md#sample)
- [score](KernelDensity.md#score)
- [score\_samples](KernelDensity.md#score_samples)

## Constructors

### constructor

• **new KernelDensity**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelDensityOptions`](../interfaces/KernelDensityOptions.md) |

#### Defined in

[generated/neighbors/KernelDensity.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KernelDensity.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KernelDensity.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KernelDensity.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/KernelDensity.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/KernelDensity.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L17)

## Accessors

### bandwidth\_

• `get` **bandwidth_**(): `Promise`<`number`\>

Value of the bandwidth, given directly by the bandwidth parameter or estimated using the ‘scott’ or ‘silverman’ method.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L299)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KernelDensity.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L274)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L226)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/KernelDensity.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/KernelDensity.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L32)

___

### tree\_

• `get` **tree_**(): `Promise`<`any`\>

The tree algorithm for fast generalized N-point problems.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L251)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the Kernel Density model on the data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelDensityFitOptions`](../interfaces/KernelDensityFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L106)

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

[generated/neighbors/KernelDensity.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L41)

___

### sample

▸ **sample**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Generate random samples from the model.

Currently, this is implemented only for gaussian and tophat kernels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelDensitySampleOptions`](../interfaces/KernelDensitySampleOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/KernelDensity.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L140)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the total log-likelihood under the model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelDensityScoreOptions`](../interfaces/KernelDensityScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L168)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the log-likelihood of each sample under the model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelDensityScoreSamplesOptions`](../interfaces/KernelDensityScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KernelDensity.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L196)
