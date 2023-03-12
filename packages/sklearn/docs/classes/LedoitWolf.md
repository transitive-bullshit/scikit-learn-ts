[sklearn](../readme.md) / [Exports](../modules.md) / LedoitWolf

# Class: LedoitWolf

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the [User Guide](../covariance.html#shrunk-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html

## Table of contents

### Constructors

- [constructor](LedoitWolf.md#constructor)

### Properties

- [\_isDisposed](LedoitWolf.md#_isdisposed)
- [\_isInitialized](LedoitWolf.md#_isinitialized)
- [\_py](LedoitWolf.md#_py)
- [id](LedoitWolf.md#id)
- [opts](LedoitWolf.md#opts)

### Accessors

- [covariance\_](LedoitWolf.md#covariance_)
- [feature\_names\_in\_](LedoitWolf.md#feature_names_in_)
- [location\_](LedoitWolf.md#location_)
- [n\_features\_in\_](LedoitWolf.md#n_features_in_)
- [precision\_](LedoitWolf.md#precision_)
- [py](LedoitWolf.md#py)
- [shrinkage\_](LedoitWolf.md#shrinkage_)

### Methods

- [dispose](LedoitWolf.md#dispose)
- [error\_norm](LedoitWolf.md#error_norm)
- [fit](LedoitWolf.md#fit)
- [get\_precision](LedoitWolf.md#get_precision)
- [init](LedoitWolf.md#init)
- [mahalanobis](LedoitWolf.md#mahalanobis)
- [score](LedoitWolf.md#score)

## Constructors

### constructor

• **new LedoitWolf**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LedoitWolfOptions`](../interfaces/LedoitWolfOptions.md) |

#### Defined in

[generated/covariance/LedoitWolf.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/LedoitWolf.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/LedoitWolf.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/LedoitWolf.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/LedoitWolf.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/LedoitWolf.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L19)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/LedoitWolf.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L250)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/LedoitWolf.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L369)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/LedoitWolf.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L275)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L344)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/LedoitWolf.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L298)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/LedoitWolf.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/LedoitWolf.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L34)

___

### shrinkage\_

• `get` **shrinkage_**(): `Promise`<`number`\>

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L321)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L85)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfErrorNormOptions`](../interfaces/LedoitWolfErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L102)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the Ledoit-Wolf shrunk covariance model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfFitOptions`](../interfaces/LedoitWolfFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L134)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfGetPrecisionOptions`](../interfaces/LedoitWolfGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L162)

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

[generated/covariance/LedoitWolf.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L43)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfMahalanobisOptions`](../interfaces/LedoitWolfMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/LedoitWolf.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L190)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LedoitWolfScoreOptions`](../interfaces/LedoitWolfScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L220)
