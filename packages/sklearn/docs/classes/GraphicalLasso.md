[sklearn](../readme.md) / [Exports](../modules.md) / GraphicalLasso

# Class: GraphicalLasso

Sparse inverse covariance estimation with an l1-penalized estimator.

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html

## Table of contents

### Constructors

- [constructor](GraphicalLasso.md#constructor)

### Properties

- [\_isDisposed](GraphicalLasso.md#_isdisposed)
- [\_isInitialized](GraphicalLasso.md#_isinitialized)
- [\_py](GraphicalLasso.md#_py)
- [id](GraphicalLasso.md#id)
- [opts](GraphicalLasso.md#opts)

### Accessors

- [covariance\_](GraphicalLasso.md#covariance_)
- [feature\_names\_in\_](GraphicalLasso.md#feature_names_in_)
- [location\_](GraphicalLasso.md#location_)
- [n\_features\_in\_](GraphicalLasso.md#n_features_in_)
- [n\_iter\_](GraphicalLasso.md#n_iter_)
- [precision\_](GraphicalLasso.md#precision_)
- [py](GraphicalLasso.md#py)

### Methods

- [dispose](GraphicalLasso.md#dispose)
- [error\_norm](GraphicalLasso.md#error_norm)
- [fit](GraphicalLasso.md#fit)
- [get\_precision](GraphicalLasso.md#get_precision)
- [init](GraphicalLasso.md#init)
- [mahalanobis](GraphicalLasso.md#mahalanobis)
- [score](GraphicalLasso.md#score)

## Constructors

### constructor

• **new GraphicalLasso**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GraphicalLassoOptions`](../interfaces/GraphicalLassoOptions.md) |

#### Defined in

[generated/covariance/GraphicalLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/GraphicalLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/GraphicalLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/GraphicalLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L17)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L278)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L378)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L253)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L353)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L328)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L303)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/GraphicalLasso.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/GraphicalLasso.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L87)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoErrorNormOptions`](../interfaces/GraphicalLassoErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L104)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the GraphicalLasso model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoFitOptions`](../interfaces/GraphicalLassoFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L136)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoGetPrecisionOptions`](../interfaces/GraphicalLassoGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L164)

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

[generated/covariance/GraphicalLasso.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L41)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoMahalanobisOptions`](../interfaces/GraphicalLassoMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L193)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoScoreOptions`](../interfaces/GraphicalLassoScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLasso.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L223)
