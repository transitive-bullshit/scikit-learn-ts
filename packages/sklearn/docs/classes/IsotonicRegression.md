[sklearn](../readme.md) / [Exports](../modules.md) / IsotonicRegression

# Class: IsotonicRegression

Isotonic regression model.

Read more in the [User Guide](../isotonic.html#isotonic).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html

## Table of contents

### Constructors

- [constructor](IsotonicRegression.md#constructor)

### Properties

- [\_isDisposed](IsotonicRegression.md#_isdisposed)
- [\_isInitialized](IsotonicRegression.md#_isinitialized)
- [\_py](IsotonicRegression.md#_py)
- [id](IsotonicRegression.md#id)
- [opts](IsotonicRegression.md#opts)

### Accessors

- [X\_max\_](IsotonicRegression.md#x_max_)
- [X\_min\_](IsotonicRegression.md#x_min_)
- [X\_thresholds\_](IsotonicRegression.md#x_thresholds_)
- [f\_](IsotonicRegression.md#f_)
- [increasing\_](IsotonicRegression.md#increasing_)
- [py](IsotonicRegression.md#py)
- [y\_thresholds\_](IsotonicRegression.md#y_thresholds_)

### Methods

- [dispose](IsotonicRegression.md#dispose)
- [fit](IsotonicRegression.md#fit)
- [fit\_transform](IsotonicRegression.md#fit_transform)
- [get\_feature\_names\_out](IsotonicRegression.md#get_feature_names_out)
- [init](IsotonicRegression.md#init)
- [predict](IsotonicRegression.md#predict)
- [score](IsotonicRegression.md#score)
- [set\_output](IsotonicRegression.md#set_output)
- [transform](IsotonicRegression.md#transform)

## Constructors

### constructor

• **new IsotonicRegression**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IsotonicRegressionOptions`](../interfaces/IsotonicRegressionOptions.md) |

#### Defined in

[generated/isotonic/IsotonicRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L17)

## Accessors

### X\_max\_

• `get` **X_max_**(): `Promise`<`number`\>

Maximum value of input array `X\_` for right bound.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L368)

___

### X\_min\_

• `get` **X_min_**(): `Promise`<`number`\>

Minimum value of input array `X\_` for left bound.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L341)

___

### X\_thresholds\_

• `get` **X_thresholds_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Unique ascending `X` values used to interpolate the y = f(X) monotonic function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L395)

___

### f\_

• `get` **f_**(): `Promise`<`any`\>

The stepwise interpolating function that covers the input domain `X`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L449)

___

### increasing\_

• `get` **increasing_**(): `Promise`<`boolean`\>

Inferred value for `increasing`.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L474)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L32)

___

### y\_thresholds\_

• `get` **y_thresholds_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

De-duplicated `y` values suitable to interpolate the y = f(X) monotonic function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L422)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionFitOptions`](../interfaces/IsotonicRegressionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionFitTransformOptions`](../interfaces/IsotonicRegressionFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionGetFeatureNamesOutOptions`](../interfaces/IsotonicRegressionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L178)

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

[generated/isotonic/IsotonicRegression.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict new data by linear interpolation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionPredictOptions`](../interfaces/IsotonicRegressionPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L213)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionScoreOptions`](../interfaces/IsotonicRegressionScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L245)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionSetOutputOptions`](../interfaces/IsotonicRegressionSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L281)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform new data by linear interpolation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsotonicRegressionTransformOptions`](../interfaces/IsotonicRegressionTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L311)
