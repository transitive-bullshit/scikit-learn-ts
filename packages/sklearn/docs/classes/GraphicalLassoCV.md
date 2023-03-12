[sklearn](../readme.md) / [Exports](../modules.md) / GraphicalLassoCV

# Class: GraphicalLassoCV

Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html

## Table of contents

### Constructors

- [constructor](GraphicalLassoCV.md#constructor)

### Properties

- [\_isDisposed](GraphicalLassoCV.md#_isdisposed)
- [\_isInitialized](GraphicalLassoCV.md#_isinitialized)
- [\_py](GraphicalLassoCV.md#_py)
- [id](GraphicalLassoCV.md#id)
- [opts](GraphicalLassoCV.md#opts)

### Accessors

- [alpha\_](GraphicalLassoCV.md#alpha_)
- [covariance\_](GraphicalLassoCV.md#covariance_)
- [cv\_results\_](GraphicalLassoCV.md#cv_results_)
- [feature\_names\_in\_](GraphicalLassoCV.md#feature_names_in_)
- [location\_](GraphicalLassoCV.md#location_)
- [n\_features\_in\_](GraphicalLassoCV.md#n_features_in_)
- [n\_iter\_](GraphicalLassoCV.md#n_iter_)
- [precision\_](GraphicalLassoCV.md#precision_)
- [py](GraphicalLassoCV.md#py)

### Methods

- [dispose](GraphicalLassoCV.md#dispose)
- [error\_norm](GraphicalLassoCV.md#error_norm)
- [fit](GraphicalLassoCV.md#fit)
- [get\_precision](GraphicalLassoCV.md#get_precision)
- [init](GraphicalLassoCV.md#init)
- [mahalanobis](GraphicalLassoCV.md#mahalanobis)
- [score](GraphicalLassoCV.md#score)

## Constructors

### constructor

• **new GraphicalLassoCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GraphicalLassoCVOptions`](../interfaces/GraphicalLassoCVOptions.md) |

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L19)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

Penalization parameter selected.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L356)

___

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated covariance matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L302)

___

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys:

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L383)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L464)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated location, i.e. the estimated mean.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L275)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L437)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L410)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated precision matrix (inverse covariance).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L329)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L95)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVErrorNormOptions`](../interfaces/GraphicalLassoCVErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L112)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the GraphicalLasso covariance model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVFitOptions`](../interfaces/GraphicalLassoCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L146)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVGetPrecisionOptions`](../interfaces/GraphicalLassoCVGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L176)

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

[generated/covariance/GraphicalLassoCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L43)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVMahalanobisOptions`](../interfaces/GraphicalLassoCVMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L209)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoCVScoreOptions`](../interfaces/GraphicalLassoCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L243)
