[sklearn](../readme.md) / [Exports](../modules.md) / ShrunkCovariance

# Class: ShrunkCovariance

Covariance estimator with shrinkage.

Read more in the [User Guide](../covariance.html#shrunk-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.ShrunkCovariance.html

## Table of contents

### Constructors

- [constructor](ShrunkCovariance.md#constructor)

### Properties

- [\_isDisposed](ShrunkCovariance.md#_isdisposed)
- [\_isInitialized](ShrunkCovariance.md#_isinitialized)
- [\_py](ShrunkCovariance.md#_py)
- [id](ShrunkCovariance.md#id)
- [opts](ShrunkCovariance.md#opts)

### Accessors

- [covariance\_](ShrunkCovariance.md#covariance_)
- [feature\_names\_in\_](ShrunkCovariance.md#feature_names_in_)
- [location\_](ShrunkCovariance.md#location_)
- [n\_features\_in\_](ShrunkCovariance.md#n_features_in_)
- [precision\_](ShrunkCovariance.md#precision_)
- [py](ShrunkCovariance.md#py)

### Methods

- [dispose](ShrunkCovariance.md#dispose)
- [error\_norm](ShrunkCovariance.md#error_norm)
- [fit](ShrunkCovariance.md#fit)
- [get\_precision](ShrunkCovariance.md#get_precision)
- [init](ShrunkCovariance.md#init)
- [mahalanobis](ShrunkCovariance.md#mahalanobis)
- [score](ShrunkCovariance.md#score)

## Constructors

### constructor

• **new ShrunkCovariance**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ShrunkCovarianceOptions`](../interfaces/ShrunkCovarianceOptions.md) |

#### Defined in

[generated/covariance/ShrunkCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L17)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L265)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L373)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L292)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L346)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L319)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L85)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceErrorNormOptions`](../interfaces/ShrunkCovarianceErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L102)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the shrunk covariance model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceFitOptions`](../interfaces/ShrunkCovarianceFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L136)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceGetPrecisionOptions`](../interfaces/ShrunkCovarianceGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L166)

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

[generated/covariance/ShrunkCovariance.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L41)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceMahalanobisOptions`](../interfaces/ShrunkCovarianceMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L199)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShrunkCovarianceScoreOptions`](../interfaces/ShrunkCovarianceScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/ShrunkCovariance.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L233)
