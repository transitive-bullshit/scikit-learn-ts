[sklearn](../readme.md) / [Exports](../modules.md) / OrthogonalMatchingPursuit

# Class: OrthogonalMatchingPursuit

Orthogonal Matching Pursuit model (OMP).

Read more in the [User Guide](../linear_model.html#omp).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuit.html

## Table of contents

### Constructors

- [constructor](OrthogonalMatchingPursuit.md#constructor)

### Properties

- [\_isDisposed](OrthogonalMatchingPursuit.md#_isdisposed)
- [\_isInitialized](OrthogonalMatchingPursuit.md#_isinitialized)
- [\_py](OrthogonalMatchingPursuit.md#_py)
- [id](OrthogonalMatchingPursuit.md#id)
- [opts](OrthogonalMatchingPursuit.md#opts)

### Accessors

- [coef\_](OrthogonalMatchingPursuit.md#coef_)
- [feature\_names\_in\_](OrthogonalMatchingPursuit.md#feature_names_in_)
- [intercept\_](OrthogonalMatchingPursuit.md#intercept_)
- [n\_features\_in\_](OrthogonalMatchingPursuit.md#n_features_in_)
- [n\_iter\_](OrthogonalMatchingPursuit.md#n_iter_)
- [n\_nonzero\_coefs\_](OrthogonalMatchingPursuit.md#n_nonzero_coefs_)
- [py](OrthogonalMatchingPursuit.md#py)

### Methods

- [dispose](OrthogonalMatchingPursuit.md#dispose)
- [fit](OrthogonalMatchingPursuit.md#fit)
- [init](OrthogonalMatchingPursuit.md#init)
- [predict](OrthogonalMatchingPursuit.md#predict)
- [score](OrthogonalMatchingPursuit.md#score)

## Constructors

### constructor

• **new OrthogonalMatchingPursuit**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OrthogonalMatchingPursuitOptions`](../interfaces/OrthogonalMatchingPursuitOptions.md) |

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L208)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L343)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L235)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L316)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Number of active features across every target.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L262)

___

### n\_nonzero\_coefs\_

• `get` **n_nonzero_coefs_**(): `Promise`<`number`\>

The number of non-zero coefficients in the solution. If `n\_nonzero\_coefs` is `undefined` and `tol` is `undefined` this value is either set to 10% of `n\_features` or 1, whichever is greater.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L289)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitFitOptions`](../interfaces/OrthogonalMatchingPursuitFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L106)

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

[generated/linear_model/OrthogonalMatchingPursuit.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitPredictOptions`](../interfaces/OrthogonalMatchingPursuitPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L138)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitScoreOptions`](../interfaces/OrthogonalMatchingPursuitScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L172)
