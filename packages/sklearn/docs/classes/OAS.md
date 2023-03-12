[sklearn](../readme.md) / [Exports](../modules.md) / OAS

# Class: OAS

Oracle Approximating Shrinkage Estimator as proposed in [\[1\]](#r69773891e6a6-1).

Read more in the [User Guide](../covariance.html#shrunk-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.OAS.html

## Table of contents

### Constructors

- [constructor](OAS.md#constructor)

### Properties

- [\_isDisposed](OAS.md#_isdisposed)
- [\_isInitialized](OAS.md#_isinitialized)
- [\_py](OAS.md#_py)
- [id](OAS.md#id)
- [opts](OAS.md#opts)

### Accessors

- [covariance\_](OAS.md#covariance_)
- [feature\_names\_in\_](OAS.md#feature_names_in_)
- [location\_](OAS.md#location_)
- [n\_features\_in\_](OAS.md#n_features_in_)
- [precision\_](OAS.md#precision_)
- [py](OAS.md#py)
- [shrinkage\_](OAS.md#shrinkage_)

### Methods

- [dispose](OAS.md#dispose)
- [error\_norm](OAS.md#error_norm)
- [fit](OAS.md#fit)
- [get\_precision](OAS.md#get_precision)
- [init](OAS.md#init)
- [mahalanobis](OAS.md#mahalanobis)
- [score](OAS.md#score)

## Constructors

### constructor

• **new OAS**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OASOptions`](../interfaces/OASOptions.md) |

#### Defined in

[generated/covariance/OAS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/OAS.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/OAS.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/OAS.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/OAS.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/OAS.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L17)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/OAS.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L244)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/OAS.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L356)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/OAS.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L267)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/OAS.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L333)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/OAS.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L289)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/OAS.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/OAS.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L32)

___

### shrinkage\_

• `get` **shrinkage_**(): `Promise`<`number`\>

coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/OAS.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L311)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/OAS.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L80)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OASErrorNormOptions`](../interfaces/OASErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/OAS.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the Oracle Approximating Shrinkage covariance model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OASFitOptions`](../interfaces/OASFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/OAS.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L129)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OASGetPrecisionOptions`](../interfaces/OASGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/OAS.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L156)

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

[generated/covariance/OAS.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L41)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OASMahalanobisOptions`](../interfaces/OASMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/OAS.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L184)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OASScoreOptions`](../interfaces/OASScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/OAS.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L214)
