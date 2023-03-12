[sklearn](../readme.md) / [Exports](../modules.md) / EmpiricalCovariance

# Class: EmpiricalCovariance

Maximum likelihood covariance estimator.

Read more in the [User Guide](../covariance.html#covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EmpiricalCovariance.html

## Table of contents

### Constructors

- [constructor](EmpiricalCovariance.md#constructor)

### Properties

- [\_isDisposed](EmpiricalCovariance.md#_isdisposed)
- [\_isInitialized](EmpiricalCovariance.md#_isinitialized)
- [\_py](EmpiricalCovariance.md#_py)
- [id](EmpiricalCovariance.md#id)
- [opts](EmpiricalCovariance.md#opts)

### Accessors

- [covariance\_](EmpiricalCovariance.md#covariance_)
- [feature\_names\_in\_](EmpiricalCovariance.md#feature_names_in_)
- [location\_](EmpiricalCovariance.md#location_)
- [n\_features\_in\_](EmpiricalCovariance.md#n_features_in_)
- [precision\_](EmpiricalCovariance.md#precision_)
- [py](EmpiricalCovariance.md#py)

### Methods

- [dispose](EmpiricalCovariance.md#dispose)
- [error\_norm](EmpiricalCovariance.md#error_norm)
- [fit](EmpiricalCovariance.md#fit)
- [get\_precision](EmpiricalCovariance.md#get_precision)
- [init](EmpiricalCovariance.md#init)
- [mahalanobis](EmpiricalCovariance.md#mahalanobis)
- [score](EmpiricalCovariance.md#score)

## Constructors

### constructor

• **new EmpiricalCovariance**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`EmpiricalCovarianceOptions`](../interfaces/EmpiricalCovarianceOptions.md) |

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L17)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L299)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L380)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L272)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L353)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo-inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L326)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L85)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceErrorNormOptions`](../interfaces/EmpiricalCovarianceErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L102)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the maximum likelihood covariance estimator to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceFitOptions`](../interfaces/EmpiricalCovarianceFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L139)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceGetPrecisionOptions`](../interfaces/EmpiricalCovarianceGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L169)

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

[generated/covariance/EmpiricalCovariance.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L41)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceMahalanobisOptions`](../interfaces/EmpiricalCovarianceMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L204)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EmpiricalCovarianceScoreOptions`](../interfaces/EmpiricalCovarianceScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L240)
